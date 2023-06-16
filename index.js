const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname);

app.get('/nav-bar.html', (req, res) => {
  res.sendFile(path.join(publicPath, 'nav-bar.html'));
});

app.get('/nav-bar.css', (req, res) => {
  res.sendFile(path.join(publicPath, 'nav-bar.css'));
});

app.get('/carrossel-index.css', (req, res) => {
  res.sendFile(path.join(publicPath, 'carrossel-index.css'));
});

app.get('/nav-bar.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'nav-bar.js'));
});

app.get('/carrossel-index.js', (req, res) => {
  res.sendFile(path.join(publicPath, 'carrossel-index.js'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
