-- db scripts in here
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    car_brand TEXT NOT NULL,
    color TEXT NOT NULL
);