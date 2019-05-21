<?php

class Users {
    private $dbGateway;

    function __construct() {
        $this->dbGateway = new DbGateway();
    }

    public function run($path) {
        switch ($path[0]) {
            case "getUsers":
               return $this->dbGateway->getUsers();
            default:
                include 'MainPage.html';
                exit;
        }
    }
}