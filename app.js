const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

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
// app.post("/api/stations",async (req,res)=>{
  
//   res.status(200).json(req.body);
// })



// // Router and Page
// const mainHomeRouter = require('./routes/mainHomeRouter.js');
// app.use('/', mainHomeRouter );

// const homeRouter = require('./routes/homeRouter.js');
// app.use('/test',homeRouter);

// const departmentRouter = require('./routes/deptRouter.js');
// app.use('/dept',departmentRouter);

// const employeeRouter = require('./routes/empRouter.js');
// app.use('/emp',employeeRouter);

// app.use('/login', require('./routes/logInRouter.js'));
// // app.use('/signup', require('./routes/signUpRouter.js'));
// app.use('/logout', require('./routes/logOutRouter.js'));



/// 404 Page Ridercting 
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// });
    


// now we will 
