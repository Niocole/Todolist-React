const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'html');
app.engine('html', require('consolidate').swig);

const now = () => new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

app.listen(3000, () => {
  console.log('server started');
});

app.get('/', (req, res, next) => {
  res.render('todo');
  console.log(`/ has been ${req.method} ${now()}`);
});


app.get('/load', (req, res, next) => {
  console.log(`/load has been ${req.method} ${now()}`);
  res.render('index');
});

app.get('/404', ((req, res, next) => {
  res.status(404);
  res.send("404, Error");
  console.log(`/404 has been ${req.method} ${now()}`);
}));

app.all('*', (req, res, next) => {
  res.redirect('/404');
})
