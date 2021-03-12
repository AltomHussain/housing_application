
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
router.get("/houses", async(req, res) => {
	const query = ` select * from houses;`;
 const results=  await Connection.query(query)
res.json(results.rows)
});

export default router;
