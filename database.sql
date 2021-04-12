CREATE DATABASE housing_application;
CREATE TABLE users
(
    user_id serial primary key,
    user_name varchar(255) NOT NULL,
    user_surmane varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL UNIQUE,
    user_password varchar(255) NOT NULL,
    user_github_id varchar(255),
    user_city varchar(255),
    user_google_id INT,
    user_facebook_id INT,
    user_phone_number varchar(255)

);
CREATE TABLE houses(
    house_id serial primary key,
    house_type varchar(255) NOT NULL,
    house_description varchar(500) NOT NULL,
    house_sold  BOOLEAN,
    house_purpose varchar(255),
   street_name varchar(255) NOT NULL,
    house_number INT,
    house_postcode varchar(255) NOT NULL,
    house_price INT,
    house_city varchar(255),
    house_image varchar(500),
   living_room_image varchar(500),
   bed_room_image varchar(500),
   kitchen_image values(500)
);
CREATE TABLE biddings(
    id serial primary key,
    user_bidding_id INTEGER REFERENCES users(user_id),
    house_bid_id INTEGER REFERENCES houses(house_id),
    date_added  varchar(255),
    bid INT,
    reviewer_name varchar(255),
    review_description varchar(800),
    rating INT NOT null CHECK(rating>= 1 and rating<=5)
);
INSERT INTO users(user_id, user_name, user_surmane, user_email, user_password, user_github_id, user_city, user_google_id, user_facebook_id, user_phone_number ) values(1, 'Altom', 'Hussain', 'altom@gmail.com', '123456', 123, 'Manchester', 123, 123, 078456516)

INSERT INTO houses( house_id, house_type, house_description, house_sold, house_address, house_postcode, house_price, house_city, house_image) values(1, 'family house', 'my house is in grown floor', true,'13 Brinkclow colse', 'M11 1HN', 5000, 'Manchester', 'https://static8.depositphotos.com/1404193/893/i/600/depositphotos_8931575-stock-photo-nice-house-in-california.jpg' )


--to alter a column if needed:  alter table users alter column user_phone_number type varchar(255);





--Add pet allowed in table of houses
--add more images for bedroom, livingroon, kitchenimage