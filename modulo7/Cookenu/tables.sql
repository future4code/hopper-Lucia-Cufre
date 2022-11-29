-- Active: 1663887826768@@35.226.146.116@3306@Hopper-4314048-lucia-aman
CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL,
    createdAt DATE NOT NULL,
    userId VARCHAR(64) NOT NULL,
    FOREIGN KEY (userId) REFERENCES Cookenu_users(id)
);

CREATE TABLE IF NOT EXISTS Cookenu_user_follow (
    id VARCHAR(64) PRIMARY KEY,
    userId VARCHAR(64) NOT NULL,
    userToFollowId VARCHAR(64) NOT NULL,
    FOREIGN KEY (userId) REFERENCES Cookenu_users(id),
    FOREIGN KEY (userToFollowId) REFERENCES Cookenu_users(id)
);

show create table Cookenu_user_follow;

ALTER TABLE Cookenu_recipes modify userId VARCHAR(64) NOT NULL PRIMARY KEY;


drop table Cookenu_recipes;
