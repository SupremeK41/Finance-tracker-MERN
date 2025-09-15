//LLiPTFNdueFS6Sje
import express, {Express} from "express";
import mongoose from "mongoose";
import finacialRecordRouter from './routes/financial-records';
import cors from "cors";
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


const mongoURI: string = 
"mongodb+srv://karamabbas:LLiPTFNdueFS6Sje@personalfinancetracker.sf3wseo.mongodb.net/"

mongoose.connect(mongoURI)
.then(()=> console.log("CONNECTED TO MONGODB!"))
.catch((err)=> console.error("failed to connect to MongoDB"))

app.use("/financial-records", finacialRecordRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})

