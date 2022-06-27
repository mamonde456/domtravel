import express from "express";
import { tour } from "../controllers/travelController";

const travelRouter = express.Router();

travelRouter.get("/tour", tour);

export default travelRouter;