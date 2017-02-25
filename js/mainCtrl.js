angular.module('timeApp')
.controller('mainCtrl', function($scope){
    $scope.name = 'Delilah';
    $scope.countries = [
        {
            name: 'USA',
            tz: '-0700',
        },
        {
            name: 'Japan',
            tz: '+0900',
        },
        {
            name: 'Argentina',
            tz: '-0400',
        },
        {
            name: 'Australia',
            tz: '+0800',
        },
        {
            name: 'Greenland',
            tz: '-0300',
        }
    ];
});
