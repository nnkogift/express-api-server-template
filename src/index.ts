import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import hello from "./routes/hello";


dotenv.config();
const app = express()
app.use(bodyParser.json());
const port = process.env.PORT || 3000

app.use(`/`, hello);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
