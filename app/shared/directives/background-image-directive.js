angular.module('myApp')
    .directive('backImg', function(){
        return function(scope, element, attrs){
            attrs.$observe('backImg', function(value) {
                if(value) {
                    element.css({
                        'background-image': 'url(' + value +')',
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat'
                    });
                } else {
                    element.css({
                        'background-image': 'url(assets/images/default-cover.jpg)',
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat'
                    });
                }
            });
        };
    });
