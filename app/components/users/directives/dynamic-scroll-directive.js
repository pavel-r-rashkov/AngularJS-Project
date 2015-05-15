angular.module('usersModule')
    .directive("scroll", function ($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                var elementPositionTop = this.pageYOffset + this.innerHeight - element[0].offsetTop;

                if(elementPositionTop > 10 && !scope.loadingPosts) {
                    scope.showPosts(scope.lastPostId);
                }
            });
    };
});
