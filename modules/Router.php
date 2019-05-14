<?php
class Router {
    private $dbGateway;

    function __construct($dbGateway) {
        $this->dbGateway = $dbGateway;
    }

    function route ($data) {
        switch ($data["function_name"]) {

            case "getPostInfo":
                if (isset($_GET['postID'])) {
                    echo json_encode($this->dbGateway->getPostInfo($_GET['postID']));
                }
                break;
            case "getAlbumInfo":
                return $this->dbGateway->getAlbumInfo();
                break;
        }
        return null;
    }
}
$dbGateway = new DbGateway();
$router = new Router($dbGateway);
$output = $router->route($_REQUEST);
echo json_encode($output);