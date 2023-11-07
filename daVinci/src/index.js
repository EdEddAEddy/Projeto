import express from "express";
import routes from "../src/routes/routes";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors({origin:"*"}))
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
