// import express from 'express';
// import dotenv from 'dotenv';

// dotenv.config(); 

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/api/jokes', (req, res) => {
//   const jokes = [
//     {
//       id: 1,
//       setup: "Why don't scientists trust atoms?",
//       punchline: "Because they make up everything!"
//     },
//     {
//       id: 2,
//       setup: "Why did the scarecrow win an award?",
//       punchline: "Because he was outstanding in his field!"
//     },
//     {
//       id: 3,
//       setup: "Why don't programmers like nature?",
//       punchline: "It has too many bugs."
//     },
//     {
//       id: 4,
//       setup: "Why did the bicycle fall over?",
//       punchline: "Because it was two-tired!"
//     },
//     {
//       id: 5,
//       setup: "How does a penguin build its house?",
//       punchline: "Igloos it together!"
//     }
//   ];
//   res.send(jokes);
// });

// app.get('/api/Account', (req, res) => {
//   const account = {
//     id: 1,
//     username: "Ajay Anand",
//     email: "ajay.anand@example.com"
//   };
//   res.send(account);
// });

// const port = process.env.PORT || 4000;

// app.listen(port, () => {
//   console.log(`Example app listening on http://localhost:${port}`);
// });

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
