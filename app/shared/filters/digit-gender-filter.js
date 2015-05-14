angular.module('myApp').filter('digitToGender', function() {
    return function (digit) {
        var gender;
        switch(digit) {
            case 0:
                gender = 'Other'; break;
            case 1:
                gender = 'Male'; break;
            case 2:
                gender = 'Female'; break;
            default:
                gender = 'No gender info';
        }

        return gender;
    }
});
