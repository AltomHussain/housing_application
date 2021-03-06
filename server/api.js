import { Router } from "express";
require("dotenv").config();
import authorization from "./middleware/authorization";
import validInfo from "./middleware/validInfo";
import { Connection } from "./db";
import bcrypt from "bcrypt";
import exchangeGithubCode from "./utils/exchangeGithubCode";
import { JavascriptModulesPlugin } from "webpack";
const router = new Router();
router.get("/", (_, res, next) => {
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Hello, world!" });
  });
});
//Register enpoint

router.post("/register", validInfo, async (req, res) => {
  try {
    const {
      userName,
      userSurname,
      userEmail,
      userPassword,
      userGithubId,
      userCity,
      userGoogleId,
      userFacebookId,
      userPhone,
    } = req.body;
  
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(userPassword.toString(), salt);
    let selectEmeilQuery = `select * from users where user_email= $1`;
    const user = await Connection.query(selectEmeilQuery, [userEmail]);
    if (user.rows.length > 0) {
 req.session.user = {
   id: user.rows[0].user_id,
 };
      return res.status(401).json("User email already exist try another email");
    }

    let insertQuery = `INSERT INTO users(user_name, user_surmane, user_email, user_password, user_github_id, user_city, user_google_id, user_facebook_id, user_phone_number ) values($1, $2, $3,$4, $5, $6, $7,$8, $9) RETURNING *`;
    const reslust = await Connection.query(insertQuery, [
      userName,
      userSurname,
      userEmail,
      bcryptPassword,
      req.session.githubId,
      userCity,
      req.session.googleId,
      userFacebookId,
      userPhone,
    ]);

    req.session.user = {
      id: reslust.rows[0].user_id,
    };
    console.log(req.session.user);
    if (reslust) {
      res.status(200).json({
        success: "Success",
        reslust: reslust.rows,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

//Login endpoint
router.post("/login", validInfo, async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    console.log(userEmail, userPassword);
    let user = await Connection.query(
      `select * from users where user_email = $1`,
      [userEmail]
    );
    if (user.rows.length === 0) {
      res.status(401).json({ error: "Email is not registered :(" });
    }
    const validPassword = await bcrypt.compare(
      userPassword.toString(),
      user.rows[0].user_password
    );

    if (!validPassword) {
      res.status(401).json({ error: "Password does not match sorry???? :(" });
    }
    req.session.user = {
      id: user.rows[0].user_id,
    };
    console.log(req.session.user);
    res.status(200).json({
      success: "Success",
      id: user.rows[0].user_id,
      name: user.rows[0].user_name,
    });
  } catch (error) {
    console.log(error.message);
  }
});
//Login with google
router.get("/google-login/:id", async (req, res) => {
  try {
    const { id } = req.params;
    req.session.googleId = id
res.status(200).json("Got google id successfully")
  } catch (error) {
    console.log(error.message);
  }
});
//Facebook login
router.post("/facebook-login", async(req, res)=>{
  try {
    const {id, name, email} = req.body;
    console.log(id, name, email);
    req.session.user = {id, name, email
    }
    console.log("facd", req.session.user);
  } catch (error) {
    console.log(error.message);
  }
})
//Github login
router.get("/githubAuth", async (req, res) => {
  const { id: githubId, login: githubUserName } = await exchangeGithubCode(
    req.query.code
  );
  try {
    const user = await Connection.query(
      "select * from users where  user_github_id=$1",
      [githubId]
    );
    if (user.rows.length === 0) {
      req.session.githubId = githubId;
    
      const params = new URLSearchParams({
        githubUserName,
        githubId,
      }).toString();
      if (process.env.environment === "local") {
        await res.redirect(
          `http://localhost:${process.env.localFrontEndPort}/signup?${params}`
        );
      } else {
        res.redirect(`/signup?${params}`);
      }
    }
    
    // res.redirect("/home")
    if (process.env.environment === "local") {
      
      await res.redirect(
        `http://localhost:${process.env.localFrontEndPort}/home`
        );
         req.session.user = {
           id: user.rows[0].user_id,
           name: user.rows[0].user_name,
         };
      
      } else {
        await res.redirect(`/home`);
        return;
      }
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server error auth");
  }
});
router.get("/github-client-id", (req, res) => {
  console.log(process.env.GITHUB_CLIENT_ID);
  res.json({
    github_client_id: process.env.GITHUB_CLIENT_ID,
  });
});

//facebook login 
router.get("/facebook-login", async(req, res)=>{
  try {
    console.log("hello facebook");
    req.redirect("/home")
  } catch (error) {
    console.log(error.message);
  }
})
//Get all houes  authorization
router.get("/houses", async (req, res) => {
  const query = ` select * from houses left join (select house_bid_id, count(*), trunc(AVG(rating), 1) as average_rating from biddings group by house_bid_id) biddings on houses.house_id=biddings.house_bid_id order by house_id;`;
  const results = await Connection.query(query);
  res.json(results.rows);
});
console.log(process.env.GITHUB_CLIENT_ID);
//Get one by id authorization
router.get("/house/:id", async (req, res) => {
  try {
    const houseId = Number(req.params.id);
    const selectQuery = `select * from houses left join (select house_bid_id, count(*), trunc(AVG(rating), 1) as average_rating 
    from biddings group by house_bid_id) biddings on houses.house_id=biddings.house_bid_id where house_id =$1`;

    const result = await Connection.query(selectQuery, [houseId]);
    const reviews = await Connection.query(
      `select * from biddings where house_bid_id = $1`,
      [houseId]
    );
    if (result.rows.length !== 0) {
      res.status(200).json({
        success: "Sucess",
        data: {
          result: result.rows,
          reviews: reviews.rows,
        },
      });
    } else {
      res
        .status(404)
        .json(`Sorry, the house with id: ${houseId} does not exist :(`);
    }
  } catch (error) {}
});
//Post a new house authorization
router.post("/house", async (req, res) => {
  const {
    houseType,
    houseDescription,
    houseSold,
    streetName,
    housePostcode,
    housePrice,
    houseCity,
    houseImage,
    houseNumber,
    livingRoomImage,
    bedRoomImage,
    kitchenImage,
    housePurpose,
  } = req.body;
  
  try {
    const insertQuery = `INSERT INTO houses(house_type, house_description, house_sold, street_name, house_postcode, house_price, house_city, house_image, house_number,  living_room_image,bed_room_image, kitchen_image,  house_purpose, min_price, max_price) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`;
    const results = await Connection.query(insertQuery, [
      houseType,
      houseDescription,
      houseSold,
      streetName,
      housePostcode,
      housePrice,
      houseCity,
      houseImage,
      houseNumber,
      livingRoomImage,
      bedRoomImage,
      kitchenImage,
      housePurpose,
      0,
      8000
    ]);
    res.json({
      sucess: "Success",
      results: results.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});

//Upate existing house authorization
router.put("/house/:id", async (req, res) => {
  try {
    const houseId = Number(req.params.id);
    const {
      houseType,
      houseDescription,
      houseSold,
      streetName,
      housePostcode,
      housePrice,
      houseCity,
      houseImage,
      houseNumber,
    } = req.body;
    console.log(
      houseType,
      houseDescription,
      houseSold,
      streetName,
      housePostcode,
      housePrice,
      houseCity,
      houseImage,
      houseNumber
    );
    let updateQuery = `update houses set house_type=$1, house_description=$2, house_sold=$3, street_name=$4, house_postcode=$5, house_price=$6, house_city=$7, house_image=$8 , house_number=$9 where house_id=$10 `;
    await Connection.query(updateQuery, [
      houseType,
      houseDescription,
      houseSold,
      streetName,
      housePostcode,
      housePrice,
      houseCity,
      houseImage,
      houseNumber,
      houseId,
    ]);
    res.json({
      success: "Updated successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
});

//Delete a house
router.delete("/house/:id", authorization, async (req, res) => {
  try {
    const houseId = Number(req.params.id);
    console.log("traaaaaaaaaaaaaa");
    const selectQuery = `select * from houses where house_id= $1`;
    const deleteQuery = `delete from houses where house_id=$1`;

    const checkHouseExist = await Connection.query(selectQuery, [houseId]);
    await Connection.query(deleteQuery, [houseId]);

    if (checkHouseExist.rows.length !== 0) {
      res.json("deleted successfully");
    } else {
      res.json(`House with the id: ${houseId} does not exist sorry`);
    }
  } catch (error) {
    console.log(error.message);
  }
});
//Add review
router.post("/house/:id/add-review", async (req, res) => {
  try {
    const { reviewerName, ReviewDescription, rating, dataAdded } = req.body;
    const { id } = req.params;
    console.log(reviewerName, ReviewDescription, rating, dataAdded, id);

    const postQuery = `insert into biddings(reviewer_name, review_description, 
      rating, date_added,  house_bid_id ) values($1, $2, $3, $4, $5)RETURNING * `;
    const ressult = await Connection.query(postQuery, [
      reviewerName,
      ReviewDescription,
      rating,
      dataAdded,
      id,
    ]);
    res.status(200).json({
      success: "Success",
      data: ressult.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});
router.get("/bidding/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const result = await Connection.query(
      `select * from bidding_house where user_id= $1 and house_id=$2`,
      [req.session.user.id, id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error.message);
  }
});
//Inset bidding
router.post("/bidding/:id", async (req, res) => {
  try {
    console.log("test biddding");
    const { id } = req.params;
    const { bid } = req.body;
    const checkHouse = await Connection.query(
      `select * from bidding_house where user_id= $1 and house_id=$2`,
      [req.session.user.id, id]
    );
    console.log(checkHouse.rows);
    if (checkHouse.rows.length === 0) {
      const insertQuery = ` insert into bidding_house(bid, user_id, house_id) values($1, $2, $3);`;
      const result = await Connection.query(insertQuery, [
        bid,
        req.session.user.id,
        id,
      ]);
      console.log("NO bid");
      res.status(200).json("inserted");
    }
    let updateQuery = await Connection.query(
      `update bidding_house set bid =$1 where user_id=$2 and house_id=$3 RETURNING *`,
      [bid, req.session.user.id, id]
    );
    console.log("yes bid");
    res.status(200).json({
      success: " updated successfully",
      result: updateQuery.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});
router.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

export default router;
