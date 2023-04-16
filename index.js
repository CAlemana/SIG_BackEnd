const express = require("express");
const cors = require('cors');

const clientRoute = require('./src/routes/client_route');
const imcRoute = require('./src/routes/imc_route');
const expenseRoute = require('./src/routes/expense_route');
const revenueRoute = require('./src/routes/revenue_route');
const userRoute = require('./src/routes/user_route');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());    

app.use('/api/clients', clientRoute);
app.use('/api/imc', imcRoute);
app.use('/api/expenses', expenseRoute);
app.use('/api/revenues', revenueRoute);
app.use('/api/users', userRoute);

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (consulta, respuesta) => {
  respuesta.send('SIG API');
});