const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

const port = 3000

app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION,{ useUnifiedTopology: true, useNewUrlParser: true}),() => {
    console.log('Connected to mongoDB')
};

// Import Routes
//const postRoute = require('./routes/post');
const cocktailFind = require('./routes/cocktail_db_get');

//app.use('/posts', postRoute)
app.use('/db', cocktailFind)


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Express APP running - http://localhost:${port}`))
