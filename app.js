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
app.post("/api/stations",async (req,res)=>{
  const {station_id,station_name,longtitude,latitude}=req.body;
  await db.query("Insert into station(station_id,station_name,longtitude,latitude) values (station_id,station_name,longtitude,latitude");
  res.status(200).json({
    station_id,
    station_name,
    longtitude,
    latitude
  });
})

app.get("/api/stations/:station_id/trains",async (req,res)=>{
  const result=await db.query("SELECT s.station_id, t.train_id,ts.arrival_time,ts.departure_time FROM station s JOIN train_stop ts ON s.station_id = ts.station_id JOIN train t ON ts.train_id = t.train_id WHER s.station_id = $1 ORDER BY  COALESCE(ts.departure_time, '23:59:59') NULLS FIRST,  COALESCE(ts.arrival_time, '23:59:59') NULLS FIRST,  t.train_id;",[req.params.id]).rows;
  res.status(200).json({
    station_id:req.params.id,
    trains:result

  })
})

// Router for API/Users
app.use('/api/users','./routes/usersRouter');


app.use('/api/stations','./routes/usersRouter');


/// 404 Page Ridercting 
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// });
    


// now we will 



// get station 

const getStationRouter = require('./routes/getStation');
app.use ('/api/stations',getStationRouter);


const getWalletRouter = require ('./routes/getWallet');
app.use ('/api/wallets/:id',getWalletRouter);

