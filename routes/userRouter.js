const express = require('express');
const express = require('express');



const usersRouter = express.Router();

usersRouter
    .route('/')
    .get( getUser )
    .post( postUser )


function postUser(req, res) {
    const { user_id, user_name, balance } = req.body;
    // Insert the data into the PostgreSQL database
    
    res.json ({ user_id, user_name, balance });
}

module.exports = usersRouter;


