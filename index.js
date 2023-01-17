import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const home = (req, res) => {
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
