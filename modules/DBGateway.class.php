<?php
    class DBGateway {
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
    }

    $db_gateway = new DBGateway();
    if (isset($_GET['postID'])) {
        echo json_encode($db_gateway->getPostInfo($_GET['postID']));
    }