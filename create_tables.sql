USE intern_database;

#tables
DROP TABLE IF EXISTS post;
CREATE TABLE post(
    post_id     INT UNSIGNED AUTO_INCREMENT,
    review_type ENUM('song', 'album'),
    music_id    VARCHAR(22),
    user_id     INT UNSIGNED,
    created_at  DATETIME,
    body_text   VARCHAR(1000),
    PRIMARY KEY (post_id)
);

CREATE TABLE user (
    user_id   INT UNSIGNED AUTO_INCREMENT,
    name      VARCHAR(100),
    PRIMARY KEY (user_id)
);

INSERT INTO user (name) VALUES ("Ms. Positive");
INSERT INTO user (name) VALUES ("Mr. Negative");
INSERT INTO post (review_type, music_id, user_id, created_at, body_text) VALUES ("album", "0S0KGZnfBGSIssfF54WSJh", 1, "2018-12-01 11:03:15", "This album gives me the chills!");
INSERT INTO post (review_type, music_id, user_id, created_at, body_text) VALUES ("song", "4HlFJV71xXKIGcU3kRyttv", 1, "2019-01-01 11:03:15", "This song is a throwback!");
INSERT INTO post (review_type, music_id, user_id, created_at, body_text) VALUES ("album", "0S0KGZnfBGSIssfF54WSJh", 2, "2018-12-01 11:03:15", "i dont like this album");
INSERT INTO post (review_type, music_id, user_id, created_at, body_text) VALUES ("song", "4HlFJV71xXKIGcU3kRyttv", 2, "2019-01-01 11:03:15", "this song reminds me of bad times");