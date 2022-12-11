CREATE TABLE `user`
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    token text NOT NULL
);

CREATE TABLE `post` 
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    post text NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES `user`(id)
);