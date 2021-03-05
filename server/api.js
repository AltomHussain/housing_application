
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
router.get("/testme", (req, res)=>{
res.json("testing to see")
})
export default router;
