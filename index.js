require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose');
// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));
// Controller & Routes
app.use('/places', require('./controllers/places'));
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

app.get('/', (req, res) => {

  res.render('home');
});

app.get('*', (req, res) => {
  res.render('error404')
});
//listen for Connections
app.listen(process.env.PORT);

