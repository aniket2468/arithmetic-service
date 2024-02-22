const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const port = 3000;
const publicDirectoryPath = path.join(__dirname, '../');

app.use(cors());

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.get('/add/:n/:m', (req, res) => {
  const result = Number(req.params.n) + Number(req.params.m);
  res.json({ sum: result });
});

// Prime number check endpoint
app.get('/isPrime/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);
  const isPrimeResult = isPrime(number);
  res.json({ 
    number: number,
    isPrime: isPrimeResult,
    message: isPrimeResult ? `${number} is a prime number.` : `${number} is not a prime number.`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
