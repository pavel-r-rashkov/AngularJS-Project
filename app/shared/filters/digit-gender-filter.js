angular.module('myApp').filter('digitToGender', function() {
    return function (digit) {
        var gender;
        switch(digit) {
            case 0:
                gender = 'assets/images/other.png'; break;
            case 1:
                gender = 'assets/images/male.png'; break;
            case 2:
                gender = 'assets/images/female.png'; break;
            default:
                gender = '';
        }

        return gender;
    }
});
