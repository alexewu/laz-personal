(function() {

    var app = angular.module("soundBlog");

    app.component('newPost', {
        templateUrl: '/new-post.html',
        controller: 'newPostController'
    });

    app.controller('newPostController', newPostController);

    newPostController.$inject = ["musicService", "$filter"];

    function newPostController(musicService, $filter) {
        var ctrl = this;
        ctrl.reviewSubmit = reviewSubmit;

        function getDate() {
            ctrl.date = $filter('date')(new Date(), "yyyy-MM-dd HH:mm:ss");
        }

        function reviewSubmit() {
            getDate();
            console.log(ctrl.type, ctrl.uri, ctrl.user_id , ctrl.date, ctrl.body_text);
            musicService.createPost(ctrl.type, ctrl.uri, ctrl.user_id , ctrl.date, ctrl.body_text);
        }
    }

})();