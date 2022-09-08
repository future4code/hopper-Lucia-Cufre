use `Hopper-4314048-lucia-aman`;

select  id as identifier, name, email from Funcionarios
 where email like "%l%" and not name like "%u%";