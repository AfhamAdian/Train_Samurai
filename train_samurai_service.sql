CREATE DATABASE TRAIN_SAMURAI_SERVICE;



--- 1 user
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255),
    balance DECIMAL(10, 2)
);



--- 2 station 
CREATE TABLE station (
    station_id SERIAL PRIMARY KEY,
    station_name VARCHAR(255) NOT NULL,
    longitude FLOAT,
    latitude FLOAT
);




--3 train 
CREATE TABLE train (
    train_id SERIAL PRIMARY KEY,
    train_name VARCHAR(255) NOT NULL,
    capacity INTEGER
);


--4 train_stop
CREATE TABLE train_stop (
    stop_id INTEGER,
    train_id INTEGER REFERENCES train(train_id),
    station_id INTEGER REFERENCES station(station_id),
    arrival_time TIME,
    departure_time TIME,
    fare INTEGER,
    PRIMARY KEY (train_id, station_id)
);


