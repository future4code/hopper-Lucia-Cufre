
CREATE TABLE Movie(
id VARCHAR(255) PRIMARY KEY unique,
name VARCHAR(255) NOT NULL
);

INSERT INTO Movie (id, name)
VALUES("1", "El cisne negro"),
("2", "La casa del terror"),
("3", "El secreto de sus ojos");

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

insert into Rating (id, comment, rate, movie_id)
values("22", "Increible", 9, "1"),
("23", "Muy malo", 3, "2"),
("24", "Espectacular", 10, "3");

insert into Rating(id, comment, rate, movie_id)
values("25", "Mas o menos", 5, "5");

select * from Movie join Rating on Rating.movie_id = Movie.id;

ALTER TABLE Rating DROP COLUMN rate;

delete from Movie 
where id="1";

CREATE TABLE Actor (
id VARCHAR(255) UNIQUE PRIMARY KEY,
name VARCHAR(255)
);

INSERT INTO Actor(id, name)
values("4", "Juan"),
("5", "Pedro"),
("6", "Juliana"),
("7", "Alberto"),
("8", "Susana"),
("9", "Gabriela");

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

insert into MovieCast (movie_id, actor_id)
values("1", "4"),
("1", "8"),
("2", "9"),
("2", "4"),
("3", "8"),
("3", "6");

insert into MovieCast (movie_id, actor_id)
values("1", "2");

delete from Actor where id = "5";

SELECT * FROM Movie 
 JOIN Rating ON Movie.id = Rating.movie_id;
 
 SELECT m.id as movie_id, r.comment as rating FROM Movie m
 JOIN Rating r ON m.id = r.movie_id;