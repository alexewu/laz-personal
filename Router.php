<?php
include 'Users.php';
include 'Review.php';

class Router {
    private $review;
    private $users;

    function __construct() {
        $this->review = new Review();
        $this->users = new Users();
    }

    function route ($path) {
        switch ($path[0]) {
            case "review":
                array_splice($path, 0, 1);
                return $this->review->run($path);
                break;
            case "users":
                array_splice($path, 0, 1);
                return $this->users->run($path);
                break;
            default:
                include 'MainPage.html';
                exit;
        }
    }
}