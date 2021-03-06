import express from 'express';
import { mongoDb } from "./mongodb";

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

mongoDb().catch(console.dir);