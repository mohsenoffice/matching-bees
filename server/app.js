const express = require('express');
const routes = require('./routes/index');
const usersRoute = require('./routes/users');

let app = express();
const PORT = process.env.PORT || 5000;

app.use('/', routes);
app.use('/users', usersRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});