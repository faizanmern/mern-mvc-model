const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
    

// require mongodb 
const connectDB = require('./server/database/connection');

const app = express();

const PORT = process.env.PORT || 3000
dotenv.config({path:'config.env'});



//log requests 
app.use(morgan('tiny'));

// connection mongdb
connectDB();


//parse requests to bosy-parser
app.use(bodyparser.urlencoded({extended:true}));
// app.set('views',path.resolve(__dirname,'views/ejs')); // it is jst for refrance if you add new fplder for ejs files then use this

// load assets
app.use('/css',express.static(path.join(__dirname,'assets/css')));
app.use('/js',express.static(path.join(__dirname,'assets/js')));
app.use('/img',express.static(path.join(__dirname,'assets/img')));
// if you want to use StyleSheet.css then simply use /css/StyleSheet.css

//set view engine
app.set('view engine','ejs');

// load routers

app.use('/',require('./server/routes/router'));

app.listen(PORT, () => {console.log('hellow server is running on http://localhost:' + PORT)});