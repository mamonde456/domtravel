import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import travelRouter from "./routers/travelRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/travels", travelRouter);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);