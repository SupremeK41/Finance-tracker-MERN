//LLiPTFNdueFS6Sje
import { error } from "console";
import express, {Express} from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = 
"mongodb+srv://karamabbas:LLiPTFNdueFS6Sje@personalfinancetracker.sf3wseo.mongodb.net/"

mongoose.connect(mongoURI)
.then(()=> console.log("CONNECTED TO MONGODB!"))
.catch((err)=> console.error("failed to connect to MongoDB"))

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})

