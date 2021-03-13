import { Router } from "express";

import { Connection } from "./db";

const router = new Router();
router.get("/", (_, res, next) => {
  Connection.connect((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Hello, world!" });
  });
});
router.get("/houses", async (req, res) => {
  const query = ` select * from houses;`;
  const results = await Connection.query(query);
  res.json(results.rows);
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
