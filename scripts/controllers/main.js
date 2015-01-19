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

angular.module('vtoneWorldcomApp')
    .controller('MenuLeftCtrl', function($scope) {
        $scope.MenuLeftData = [{
                "descr": "首页",
                "href": "#",
                "class": "active"
            }, {
                "descr": "手工建单",
                "href": "#",
                "class": ""
            }, {
                "descr": "订单记录",
                "href": "#",
                "class": "dropdown",
                "submenu": [{
                    "descr": "Action"
                }, {
                    "descr": "Other Action"
                }]
            }, {
                "descr": "零售商品",
                "href": "#",
                "class": "dropdown",
                "submenu": [{
                    "descr": "Action"
                }, {
                    "descr": "Other Action"
                }]
            }, {
                "descr": "订单审核",
                "href": "#",
                "class": "dropdown",
                "submenu": [{
                    "descr": "Action"
                }, {
                    "descr": "Other Action"
                }]
            }

        ];
    });

function layout() {
    $("#main").css("width", $(window).width() - 200);
    $("#sidebar").css("height", $(window).height() - 45);
    $("#main").css("height", $(window).height() - 45);
}
jQuery(function($) {
    $(document).ready(function() {
        layout();
    });
});

$(window).resize(function() {
    layout();
});
