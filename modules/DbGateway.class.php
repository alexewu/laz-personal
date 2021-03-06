<?php
    # NOTE: open and close the connection in each function
    class DbGateway {
        private $connection;

        public function __construct() {
            $this->connection = null;
        }

        private function open () {
            $serverName = getenv("DB_SERVER");
            $username = getenv("DB_USER");
            $password = getenv("DB_PASSWORD");
            $this->connection = new mysqli($serverName, $username, $password, "intern_database");


            // Check connection
            if ($this->connection->connect_error) {
                die("Connection failed: " . $this->connection->connect_error);
            }
        }

        private function close() {
            // Close connection
            if ($this->connection === null)
                return;
            $this->connection->close ();
        }

        public function getPostInfo($postId) {
            $this->open();
            $sql = "SELECT  name, 
                            body_text, 
                            music_id, 
                            created_at, 
                            review_type 
                            FROM post 
                            JOIN user ON post.user_id = user.user_id 
                            WHERE post_id = $postId";
            $result = $this->connection->query($sql);
            $info = $result->fetch_assoc();
            $this->close();
            return $info;
        }

        public function getLastFivePostIds() {
            $this->open();
            $sql = "SELECT  post_id, user_id
                    FROM post
                    ORDER BY post_id DESC
                    LIMIT 5";
            $result = $this->connection->query($sql);
            $postIds = array();
            while($id = $result->fetch_assoc()) {
                array_push($postIds, $id);
            }
            $this->close();
            return $postIds;
        }

        public function getUsers() {
            $this->open();
            $sql = "SELECT user_id, name
                    FROM user";
            $result = $this->connection->query($sql);
            $users = array();
            while($user = $result->fetch_assoc()) {
                array_push($users, $user);
            }
            $this->close();
            return $users;
        }

        public function postReview($review_type_in, $spotify_uri_in, $user_id_in, $created_at_in, $body_text_in) {
            $this->open();
            $sql = "INSERT INTO post(review_type, music_id, user_id, created_at, body_text)
                    VALUES ('$review_type_in', '$spotify_uri_in', $user_id_in, '$created_at_in', '$body_text_in')";
            $this->connection->query($sql);
            $this->close();
            return;
        }
    }
