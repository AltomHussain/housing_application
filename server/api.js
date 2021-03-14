import { Router } from "express";

import { Connection } from "./db";
import bcrypt from "bcrypt"
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

router.post("/register", async (req, res) => {
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
      return res.json("User email already exist try another email");
    }

    let insertQuery = `INSERT INTO users(user_name, user_surmane, user_email, user_password, user_github_id, user_city, user_google_id, user_facebook_id, user_phone_number ) values($1, $2, $3,$4, $5, $6, $7,$8, $9) RETURNING *`;
    const reslust = await Connection.query(insertQuery, [
      userName,
      userSurname,
      userEmail,
      bcryptPassword,
      userGithubId,
      userCity,
      userGoogleId,
      userFacebookId,
      userPhone,
    ]);

    req.session.user = {
      id: reslust.rows[0].user_id
    };

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
router.post("/login", async(req, res)=>{
  try {
    const {userEmail, userPassword} = req.body;
    let user =  await Connection.query(`select * from users where user_email = $1`, [userEmail])
    if(user.rows.length===0){
      res.status(401).json({error: "Email is not registered :("})
    }
    const validPassword = await bcrypt.compare(userPassword.toString(), user.rows[0].user_password)
    console.log(validPassword);
    if(!validPassword){
      res.status(401).json({error: "Password or email is not valid"})
    }
  
res.status(200).json({
  success: "Success",
  id: user.rows[0].user_id,
  name: user.rows[0].user_name
})

  } catch (error) {
    console.log(error.message);
  }
})
//Get all houes
router.get("/houses", async (req, res) => {
  const query = ` select * from houses;`;
  const results = await Connection.query(query);
  res.json(results.rows);
});
//Get one by id
router.get("/house/:id", async (req, res) => {
  try {
    const houseId = Number(req.params.id);
    const selectQuery = `select * from houses where house_id = $1`;
    const result = await Connection.query(selectQuery, [houseId]);
    if (result.rows.length !== 0) {
      res.status(200).json(result.rows);
    } else {
      res
        .status(404)
        .json(`Sorry, the house with id: ${houseId} does not exist :(`);
    }
  } catch (error) {}
});
//Post a new house
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
  } = req.body;

  try {
    const insertQuery = `INSERT INTO houses(house_type, house_description, house_sold, street_name, house_postcode, house_price, house_city, house_image, house_number) values($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
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
    ]);
    res.json({
      sucess: "Success",
      results: results.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});

//Upate existing house
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
router.delete("/house/:id", async (req, res) => {
  try {
    const houseId = Number(req.params.id);

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
export default router;
