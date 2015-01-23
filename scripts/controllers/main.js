'use strict';

/**
 * @ngdoc function
 * @name vtoneWorldcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtoneWorldcomApp
 */

app.filter('MianMneuFilter', function() {
    return function(json) {
        for (var index in json) {
            if (json[index].role == 'active') {
                return json[index].items;
            }
        }
        return [];
    }
});

app.service("MetroService", ['$timeout', function($timeout) {
    this.render = function() {
        var c = $(".metro").html(),
            a;
        $timeout(function() {
            a = $(".metro").html();
            c !== a && (c = a, $.Metro.initAll())
        }, 1000);
    };
}]);

app
    .controller('MainCtrl', ['$scope', '$http', 'MetroService', function($scope, $http, MetroService) {
        function loadSiderMenuData() {
            $http.get('scripts/api/side-menu.json').
            success(function(data) {
                $scope.SiderMenuData = data;
                MetroService.render();
            }).
            error(function(status) {
                return status;
            });
        }
        $scope.sideBarSetting = false;
        $scope.changeSiderBarSetting = function() {
            $scope.sideBarSetting = !$scope.sideBarSetting;
            loadSiderMenuData();
        };
        loadSiderMenuData();
    }]);
/*jshint unused: false */

// Stuff


app.controller('TopMenuCtrl', ['$scope', '$http', '$timeout', 'MetroService', function($scope, $http, $timeout, MetroService) {
    $http.get('scripts/api/top-menu.json').
    success(function(data, status, headers, config) {
        $scope.TopMenuData = data;
        MetroService.render();
    }).
    error(function(data, status, headers, config) {
        return status;
    });
}]);


app.controller('LineCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function(points, evt) {
        console.log(points, evt);
    };
    $timeout(function() {
        $scope.labels = ['条码匹配', '退款', '省市区', '支付方式', '发货仓库', '快递方式', '黑会员'];
        $scope.data = [
            [10, 5, 4, 1, 0, 0, 0]
        ];
        $scope.series = ['异常订单'];
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
