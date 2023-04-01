import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const PORT = 3000;
const app = express();

//------1------
// app.get('/', (req, res) => {
//   res.send('<h1>Welcome to our shop</h1>');
// });

app.get('/product', (req, res) => {
  let title = req.query?.title || 'Title';
  const price = req.query?.price || 'Price';
  res.send(`<h1>${title}</h1> For just <h2>${price}</h2>`);
});

//------2------
app.get('/', (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => console.log('Server is running...'));
