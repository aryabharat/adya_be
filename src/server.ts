import dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
// const helmet  = require('helmet')
import mongoose from "mongoose";
import morgan from "morgan";
const PORT = process.env.PORT || 3003;
app.use(express.json());
app.use(cors());
// app.use(helmet());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// import etfs from './routes/etfs' ̰
import {user}  from'./routes/users/users.route'
import {leaderboard}  from'./routes/leaderboard/leaderboard.routes'
// import login   from'./routes/login'

mongoose.connect(process.env.MONGO_URI!)
  .then(async (result) => {
    console.log("CONNECTED TO MONGODB")
    app.listen(PORT, () => { console.log(`listing to port ${PORT}`) })
  })
  .catch(err => console.log(err))

// app.use('/api/etfs', etfs);
app.use('/api/user', user);
app.use('/api/leaderboard', leaderboard);
