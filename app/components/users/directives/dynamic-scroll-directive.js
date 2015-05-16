angular.module('usersModule')
    .directive("scroll", function ($window) {
        return {
            link: function (scope, element, attrs) {
                function handler() {
                    var elementPositionTop = this.pageYOffset + this.innerHeight - element[0].offsetTop;

                    if (elementPositionTop > parseInt(attrs['botOffset'])) {
                        scope[attrs['callback']]();
                    }
                }

                angular.element($window).bind("scroll", handler);

                scope.$on('$destroy', function() {
                    angular.element($window).unbind("scroll", handler);
                });
            }
        }
});
