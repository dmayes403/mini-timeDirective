angular.module('timeApp')
.directive('showTime', function(){
    return {
        restrict: 'E',
        template: '<div>The current time in {{ name }} is {{ time | date : "short" : timezone }}</div>',
        scope: {
            name: '@countryName',
            timezone: '@countryTz'
        },
        link: function(scope, element, attributes){
            scope.time = new Date();
          },
          // controller($scope){
          //   var currentTime = new Date();
          //   $scope.time = currentTime;
          // }

          // controller: function($timeout, $scope){
          //   $timeout(function(){
          //     // $scope.theName = 'Richard';
          //     $scope.theCallback();
          //   }, 4000)
          // }
        }
    })


    .directive('clicketyClick', function(){
      return {
        link: function(scope, element, attributes){
          console.log(element);
          angular.element(element).on('click',function(){
            console.log('you clicked it!')
          })
        }
      }
    })
