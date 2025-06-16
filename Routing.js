const express = require('express');
const app = express();
const PORT = 3000;

const Base = new (require('./System/BaseController'));
const Auth = new (require('./Controllers/AuthController'));


app.get('/', (req, res) => {
  Base.welcome(req, res);
});
app.post('/login', (req, res) => {
  Auth.customerLogin(req, res); 
});

app.listen(PORT, () => {
  console.log(`Server running on` + process.env.BASE_URL);
});
