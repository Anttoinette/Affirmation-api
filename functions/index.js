import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { affirmation } from "./src/users.js";

const app = express()
app.use(cors())
app.use(express.json())

//get and post routes...
app.post("/affirmation", affirmation)


export const api = functions.https.onRequest(app)