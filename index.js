import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to our shop</h1>');
});

app.get('/product', (req, res) => {
  let title = req.query?.title || 'Title';
  const price = req.query?.price || 'Price';
  res.send(`<h1>${title}</h1> For just <h2>${price}</h2>`);
});

app.listen(PORT, ()=>console.log('Server is running...'))