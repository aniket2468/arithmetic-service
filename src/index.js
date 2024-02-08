const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

app.get('/',(req,res) => {
    res.send('Hello! This is the Arithmetic Service')
})

// app.get('/summation', (req, res) => {
//     const num1 = Number(req.query.number1);
//     const num2 = Number(req.query.number2);
//     const summation = num1 + num2;
//     res.send(`${summation}`);
// });
app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m))
})

app.listen(port, () => {
     console.log('Server is running on port 3000');
});
