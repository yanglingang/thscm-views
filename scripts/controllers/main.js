'use strict';

/**
 * @ngdoc function
 * @name vtoneWorldcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtoneWorldcomApp
 */
angular.module('vtoneWorldcomApp')
    .controller('MainCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
/*jshint unused: false */
angular.module('vtoneWorldcomApp').controller('TopMenuCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('scripts/menu.json').
    success(function(data, status, headers, config) {
        $scope.TopMenuData = data;
        $scope.$watch('TopMenuData', function() {
            setTimeout(function() {
                $('.TopMenu').dropdown();
            }, 1000);
        });
    }).
    error(function(data, status, headers, config) {
        return status;
    });
}]);
// Stuff

function layout() {
        $('#main').css('width', $(window).width() - 240);
        $('#main').css('height', $(window).height() - 82);
        $('#main_carouse').css('height', $(window).height() - 92);
    }
    /*jshint unused: false */
function moveMainCarouse(index) {
        $('#main_carouse').find('.markers').find('a').eq(index).trigger('click');
    }
    // Stuff
$(function($) {
    $(document).ready(function() {
        layout();
        //$('#main_carouse').find('.markers').css('display', 'none');
    });
});

$(window).resize(function() {
    layout();
});
