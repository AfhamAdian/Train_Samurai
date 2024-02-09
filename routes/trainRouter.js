const express = require('express');
const db = require('../db');


const trainRouter = express.Router();

trainRouter
    .route('/')
    .get(getUser)
    .post(postUser);

async function postUser(req, res) {

    const { train_id, train_name, capacity, stops } = req.body;

    const query = `INSERT INTO train (train_id, train_name, capacity) VALUES (${train_id}, '${train_name}', ${capacity})`;
    await db.query(query);

    const i = 0;
    for (const stop of stops) {
        const { station_id, arrival_time, departure_time, fare } = stop;
        const query = `INSERT INTO stops ( stop_id, train_id, station_id, arrival_time, departure_time, fare) VALUES (${i}, ${train_id}, ${station_id}, '${arrival_time}', '${departure_time}', ${fare})`;
        await db.query(query);
        i++;
    }

    res.json({ train_id, train_name, capacity, stops });
}


module.exports = trainRouter;


