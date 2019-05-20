(function() {

    var app = angular.module("soundBlog");

    app.component('filter', {
        templateUrl: '/filter.html',
        controller: 'filterController'
    });

    app.controller('filterController', filterController);

    function filterController(musicService) {
        var ctrl = this;

        musicService.getUsers()
            .then(function (data) {
                ctrl.users = data["data"];
            });
    }
})();