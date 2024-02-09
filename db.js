const Pool = require ("pg").Pool;

const pool = new Pool ({
    user : "postgres" ,
    password : "Postgre143#",
    host : "localhost" ,
    port : 5432 , 
    database : "train_samurai_service"

});

module.exports = pool ;