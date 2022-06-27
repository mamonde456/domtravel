import express from "express";
import { home } from "../controllers/travelController";
import { join } from "../controllers/userController";
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/join", join);

export default rootRouter;