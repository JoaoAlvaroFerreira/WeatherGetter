// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { getWeather, getLocation }  from './services/api'
import { parseData, convertDate }  from './services/utils'

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get("/", async (req: Request, res: Response) => {
  res.send('Wello Horld!')
  
});

app.post("/api/weather", async (req: Request, res: Response) => {

  const location = await getLocation(req.body['location']);
  const weatherMax = await getWeather(location[0].lat, location[0].lon, convertDate(req.body['start_date']), convertDate(req.body['end_date']), 'temperature_2m_max'); 
  const weatherMin = await getWeather(location[0].lat, location[0].lon, convertDate(req.body['start_date']), convertDate(req.body['end_date']), 'temperature_2m_min'); 
  const parsed = parseData(weatherMin, weatherMax);
  console.log(parsed);
  res.send(parsed);
  
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});