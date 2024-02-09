const express = require('express');
const express = require('express');
const db = require('../db');



const usersRouter = express.Router();

usersRouter
    .route('/')
    .get( getUser )
    .post( postUser )


async function postUser(req, res) 
{
    const { user_id, user_name, balance } = req.body;
    
    const query = `INSERT INTO users (user_id, user_name, balance) VALUES (${user_id}, '${user_name}', ${balance})`;
    const result = await db.query(query);
    console.log( user_id + " " + user_name + " " + balance + " " + "inserted into the database");    
    res.json({ user_id, user_name, balance });
}



module.exports = usersRouter;


