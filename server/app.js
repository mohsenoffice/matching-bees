const express = require('express');
const routes = require('./routes/index');
const usersRoute = require('./routes/users');
const cors = require('cors');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');


let app = express();
const PORT = process.env.PORT || 5000;

const dbURL = 'mongodb+srv://mohsen123:Mohsen123@cluster0-dnruc.mongodb.net/bees?retryWrites=true&w=majority'

mongoose.connect(dbURL, function(err){
  if(err){
    console.log('Error connecting to: '+ dbURL)
  }
  else{
    console.log('Connected to: '+ dbURL)
  }
})


app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/users', usersRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});