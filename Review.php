<?php

class Review {
    private $dbGateway;

    function __construct() {
        $this->dbGateway = new DbGateway();
    }

    public function run($path) {
        switch ($path[0]) {
            case "getPostInfo":
                $postId = $path[1];
                return $this->dbGateway->getPostInfo($postId);
                break;
            case "displayPage":
                include 'PostPage.html';
                break;
            case "postReview":
                $info = json_decode(array_keys($_POST)[0]);
                $this->dbGateway->postReview($info->review_type, $info->music_id, $info->user_id , $info->created_at, $info->body_text);
                break;
            case "getLastFivePostIds":
                return $this->dbGateway->getLastFivePostIds();
                break;
            default:
                include 'MainPage.html';
                exit;
        }
    }
}