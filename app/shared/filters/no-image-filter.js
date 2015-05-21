angular.module('myApp').filter('noImage', function() {
    return function (image) {
        if(image === null) {
            return 'assets/images/no-image.jpg';
        }
        return image;
    }
});
