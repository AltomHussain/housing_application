CREATE DATABASE housing_application;
CREATE TABLE users
(
    user_id serial primary key,
    user_name varchar(255) NOT NULL,
    user_surmane varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL UNIQUE,
    user_password varchar(255) NOT NULL,
    user_github_id INT,
    user_city varchar(255),
    user_google_id INT,
    user_facebook_id INT,
    user_phone_number INT
)
CREATE TABLE houses(
    house_id serial primary key,
    house_type varchar(255) NOT NULL,
    house_description varchar(500) NOT NULL,
    house_sold  BOOLEAN,
    house_address varchar(255) NOT NULL,
    house_number INT,
    house_postcode varchar(255) NOT NULL,
    house_price INT,
    house_city varchar(255),
    house_image varchar(500)
)
CREATE TABLE biddings(
    id serial primary key,
    user_bidding_id INTEGER REFERENCES users(user_id),
    house_bid_id INTEGER REFERENCES houses(house_id),
    date_added  DATE NOT NULL,
    bid INT
)