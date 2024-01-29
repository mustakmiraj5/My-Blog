import express from "express";
import { test_func } from "../controllers/user.controller.js";

const router_way1 = express.Router()

router_way1.get('/test', (req, res) => {
    res.json({msg:'test api is working. this is by express router'})
})

router_way1.get('/test2', test_func)

export default router_way1