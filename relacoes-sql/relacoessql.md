## Exercício 1

* a
Uma chave estrangeira é o comando que se utiliza para fazer referencia ou chamar uma característica de outra tabela para a tabela em questão.  


CREATE TABLE Movie(
id VARCHAR(255) PRIMARY KEY UNIQUE,
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

0	11	21:14:49	delete from Movie 
 where id="1"	*Error Code: 1451. Cannot delete or update a parent row*: a foreign key constraint fails (`Hopper-4314048-lucia-aman`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

 *Nao é possível apagar o filme porque esta sendo chamado pela foreign key, nao é possível eliminar ou atualizar uma linha familiar*

 ## Execicio 2

 CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

Esta tabela chama o id do filme e do actor para assim poder associar os mesmos em um mesmo trabalho. x filme foi realizado com x actor.

*c
deu como erro que nao foi possivel conectar com a foreign key, nao foi possivel adicionar ou atualizar a tabela por este motivo, considerando que nao existia um ator com este id.
*d 
o ator foi deletado por nao estar associado a tabela. 

## Exercicio 3

*a
O operador ON serve para olhar onde é que se gera a união das tabelas. 
Join x ON tal característica em comum. 
Existe uma união entre a tabela chamada no select e a chamada no join, o on informa em qual valor esta gerada a mesma

 SELECT m.id as movie_id, r.comment as rating FROM Movie m
 JOIN Rating r ON m.id = r.movie_id;