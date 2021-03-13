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
router.post("/house", async (req, res) => {
  const {
    houseType,
    houseDescription,
    houseSold,
    houseAddress,
    housePostcode,
    housePrice,
    houseCity,
    houseImage,
  } = req.body;

  try {
    const insertQuery = `INSERT INTO houses(house_type, house_description, house_sold, house_address, house_postcode, house_price, house_city, house_image) values($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    const results = await Connection.query(insertQuery, [
      houseType,
      houseDescription,
      houseSold,
      houseAddress,
      housePostcode,
      housePrice,
      houseCity,
      houseImage,
    ]);
    res.json({
      sucess: "Success",
      results: results.rows,
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
