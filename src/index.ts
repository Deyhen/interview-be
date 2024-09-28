import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import CountriesRouter from './routes/countries.route';
import cors from "cors"

dotenv.config();

const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/countries',cors(corsOptions), CountriesRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
