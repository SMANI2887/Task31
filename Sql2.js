/*
Create Database :- create database Movie_Details;

select Database :-  use movie_details

Movie Create Table :-  create table movie(id int primary key,
                        name char(20) not null,
                        media char(15),
                        year int);

                        desc movie;
                    +-------+----------+------+-----+---------+-------+
                    | Field | Type     | Null | Key | Default | Extra |
                    +-------+----------+------+-----+---------+-------+
                    | id    | int(11)  | NO   | PRI | NULL    |       |
                    | name  | char(20) | NO   |     | NULL    |       |
                    | media | char(15) | YES  |     | NULL    |       |
                    | year  | int(11)  | YES  |     | NULL    |       |
                    +-------+----------+------+-----+---------+-------+
                            
Insert Date :-  create table movie
                (1,"Japan","Video",2023),
                (2,"kaithi","Video",2013),
                (3,"Jailar","Video",2023),
                (4,"Leo","video",2023);

                +----+--------+-------+------+
                | id | name   | media | year |
                +----+--------+-------+------+
                |  1 | Japan  | Video | 2023 |
                |  2 | kaithi | video | 2013 |
                |  3 | Jailar | Video | 2023 |
                |  4 | Leo    | Video | 2023 |
                +----+--------+-------+------+
               
Genres Create Table :-  create table Genres(Gen_ID int primary key,
                        movie_id int,
                        Gen_Name char(20));

                        desc genres;
                        +----------+----------+------+-----+---------+-------+
                        | Field    | Type     | Null | Key | Default | Extra |
                        +----------+----------+------+-----+---------+-------+
                        | Gen_ID   | int(11)  | NO   | PRI | NULL    |       |
                        | movie_id | int(11)  | YES  |     | NULL    |       |
                        | Gen_Name | char(20) | YES  |     | NULL    |       |
                        +----------+----------+------+-----+---------+-------+



Insert Date :-  insert into genres values(1,1,"Drama movie"),
                (2,2,"Action movie"),
                (3,3,"Family movie"),
                (4,4,"Action movie");

                        +--------+----------+--------------+
                        | Gen_ID | movie_id | Gen_Name     |
                        +--------+----------+--------------+
                        |      1 |        1 | Drama movie  |
                        |      2 |        2 | Action movie |
                        |      3 |        3 | Family movie |
                        |      4 |        4 | Action movie |
                        +--------+----------+--------------+


Artist Create Table :- create table Artist(Art_ID int primary key,
                       movie_id int not null,
                       Art_Name char(20),
                       Role char(10));

                     desc artist;
                        +----------+----------+------+-----+---------+-------+
                        | Field    | Type     | Null | Key | Default | Extra |
                        +----------+----------+------+-----+---------+-------+
                        | Art_ID   | int(11)  | NO   | PRI | NULL    |       |
                        | movie_ID | int(11)  | YES  |     | NULL    |       |
                        | Art_Name | char(20) | YES  |     | NULL    |       |
                        | Role     | char(10) | YES  |     | NULL    |       |
                        +----------+----------+------+-----+---------+-------+


Insert Date :-        insert into Artist values(1,1,"Karthik","Hero"),
                      (2,2,"Karthik","Hero"),
                      (3,3,"Rajini","Hero"),
                      (4,4,"Vijay","Hero");
                       
                     
                      select * from Artist;
                    +--------+----------+----------+------+
                    | Art_ID | movie_ID | Art_Name | Role |
                    +--------+----------+----------+------+
                    |      1 | 1        | Karthik  | Hero |
                    |      2 | 2        | Karthik  | Hero |
                    |      3 | 3        | Rajini   | Hero |
                    |      4 | 4        | Vijay    | Hero |
                    +--------+----------+----------+------+


 view table :-      desc users;

 Users Create Table  :- create table Users(ID int primary key,
                        movie_id varchar(20),
                        name char(20),
                        Review char(100));
 
 
                    +----------+-------------+------+-----+---------+-------+
                    | Field    | Type        | Null | Key | Default | Extra |
                    +----------+-------------+------+-----+---------+-------+
                    | ID       | int(11)     | NO   | PRI | NULL    |       |
                    | movie_id | varchar(20) | YES  |     | NULL    |       |
                    | name     | char(20)    | YES  |     | NULL    |       |
                    | Review   | char(100)   | YES  |     | NULL    |       |
                    +----------+-------------+------+-----+---------+-------+

Insert Date :-      insert into users values(1,1,"mani","good"),
                     (2,2,"vino","not bad"),
                     (3,3,"mathan","like"),
                     (4,4,"sathana","not like");

                     select * from users;
                    +----+----------+---------+----------+
                    | ID | movie_id | name    | Review   |
                    +----+----------+---------+----------+
                    |  1 | 1        | mani    | good     |
                    |  2 | 2        | vino    | not bad  |
                    |  3 | 3        | mathan  | like     |
                    |  4 | 4        | sathana | not like |
                    +----+----------+---------+----------+

                    */