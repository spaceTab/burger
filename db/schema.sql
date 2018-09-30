DROP DATABASE if EXISTS burger_db;
CREATE DATABASE         burger_db;

use burger;

CREATE TABLE burgers (
    burger_id   INTEGER(50) NOT NULL  AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    is_devoured BOOLEAN DEFAULT false NOT NULL, 
    is_deleted  BOOLEAN DEFAULT false NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP --updates timestamp on each 'devouring'
    
    PRIMARY KEY ( burger_id )
)