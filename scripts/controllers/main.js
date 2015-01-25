'use strict';

/**
 * @ngdoc function
 * @name vtoneWorldcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vtoneWorldcomApp
 */


app.service("MetroService", ['$timeout', function($timeout) {
    this.render = function() {
        var c = $(".metro").html(),
            a;
        $timeout(function() {
            a = $(".metro").html();
            c !== a && (c = a, $.Metro.initAll())
        }, 500);
    };
}]);

app.service("MainService", function() {
    this.getActiveMainData = function(json) {
        for (var index in json) {
            if (json[index].role == 'active') {
                return json[index].items;
            }
        }
        return [];
    };
    this.getMainData = function(json, name) {
        for (var index in json) {
            if (json[index].name_en == name) {
                return json[index].items;
            }
        }
        return [];
    };
});


app.filter('MianMneuFilter', ['MainService', function(MainService) {
    return function(json) {
        return MainService.getActiveMainData(json);
    }
}]);
// JSON.stringify($scope.MainMenuData[index])
app
    .controller('MainCtrl', ['$scope', '$http', 'MetroService', 'MainService', 'DTOptionsBuilder', 'DTColumnBuilder', function($scope, $http, MetroService, MainService, DTOptionsBuilder, DTColumnBuilder) {
        function loadMainChart() {
            $scope.MainMenuData.chart = {};

            for (var index in $scope.MainMenuData) {
                $http.get('scripts/api/task_result_detail.json').
                success(function(data) {
                    for (var index in $scope.MainMenuData) {
                        var name = $scope.MainMenuData[index].name;
                        if (data.name == name) {
                            $scope.MainMenuData[index].data = data.data;
                            $scope.MainMenuData[index].labels = data.labels;
                        }
                    }
                }).
                error(function(status) {
                    return status;
                });
            }
        }

        function loadSiderMenuData() {
            $http.get('scripts/api/side-menu.json').
            success(function(data) {
                $scope.SiderMenuData = data;

                $scope.MainMenuData = MainService.getActiveMainData(data);

                loadMainChart();

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


        $scope.TaskGroupData = {};
        $scope.TaskGroupClick = function(name) {
            if (angular.isUndefined($scope.TaskGroupData[name]))
                $scope.TaskGroupData[name] = {};
            $scope.TaskGroupData[name].icon = "fa fa-spinner fa-spin";

            $http.get('scripts/api/task_result.json').
            success(function(data) {
                $scope.TaskGroupData[name] = data;

                //loadMainChart();


                $scope.TaskGroupData[name].icon = "";
            }).
            error(function(status) {
                $scope.TaskGroupData[name].icon = "";
                return status;
            });

            $scope.MainMenuData = MainService.getMainData($scope.SiderMenuData, name);
            MetroService.render();
        };
        $scope.LoadIndexPage = function(name) {

        };
        loadSiderMenuData();

        function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            console.log(aData);
            return nRow;
        }
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('fnRowCallback', rowCallback);



        $scope.dtColumns = [
            DTColumnBuilder.newColumn('foo').withOption('sContentPadding', 'mmm')
        ];
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

function layout() {
        $('#main').css('width', $(window).width() - 240);
        $('#main').css('height', $(window).height() - 82);
        $('#sidebar').css('height', $(window).height() - 60);
        //$('#main_carouse').css('height', $(window).height() - 92);
    }
    /*jshint unused: false */
function moveMainCarouse(index) {
        //$('#main_carouse').find('.markers').find('a').eq(index).trigger('click');
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
