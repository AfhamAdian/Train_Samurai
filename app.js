const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const db = require ('./db');

const app = express();
app.set("view engine","ejs");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

// creating Server
const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log('server started to listening at port 8000'));


// initializing the DataBase Pool


// Router for API/Users
app.use('/api/users','./routes/usersRouter');


/// 404 Page Ridercting 
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// });
    


// now we will 



// get station 


