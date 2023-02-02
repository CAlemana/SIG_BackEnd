const express = require("express");
const cors = require('cors');

const clientRoute = require('./src/routes/client_route');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());    //acceso a todos los origenes, cualquier url

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD"
  );
  next();
});


app.use('/api/clients', clientRoute);

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (consulta, respuesta) => {
  respuesta.send('SIG API');
});