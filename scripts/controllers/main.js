'use strict';

/**
 * @ngdoc function
 * @name vtoneWorldcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtoneWorldcomApp
 */
app
    .controller('MainCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        $scope.sideBarSetting = false;
        $scope.changeSiderBarSetting = function() {
            $scope.sideBarSetting = !$scope.sideBarSetting;
            loadSiderMenuData();
        }
        loadSiderMenuData();

        function loadSiderMenuData() {
            $http.get('scripts/api/side-menu.json').
            success(function(data, status, headers, config) {
                $scope.SiderMenuData = data;
            }).
            error(function(data, status, headers, config) {
                return status;
            });
        }
    }]);
/*jshint unused: false */

// Stuff


app.controller('TopMenuCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    $http.get('scripts/api/top-menu.json').
    success(function(data, status, headers, config) {
        $scope.TopMenuData = data;
        $scope.$watch('TopMenuData', function() {
            $timeout(function() {
                $('.TopMenu').dropdown();
            }, 1000);
        });
    }).
    error(function(data, status, headers, config) {
        return status;
    });
}]);


app.controller("LineCtrl", ['$scope', '$timeout', function($scope, $timeout) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function(points, evt) {
        console.log(points, evt);
    };
    $timeout(function() {
        $scope.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        $scope.data = [
            [28, 48, 40, 19, 86, 27, 90],
            [65, 59, 80, 81, 56, 55, 40]
        ];
        $scope.series = ['Series C', 'Series D'];
    }, 3000);
}]);

function layout() {
        $('#main').css('width', $(window).width() - 240);
        $('#main').css('height', $(window).height() - 82);
        $('#sidebar').css('height', $(window).height() - 60);
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
