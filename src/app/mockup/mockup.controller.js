/**
 * Created by User on 06/06/2017.
 */
(function(){
    "use strict";
    var app = angular.module('theme');
    app.controller('mockupController', MockupController);

    MockupController.$inject = ['$rootScope'];

    function MockupController($rootScope){
        var vm = this;
        $rootScope.$on('theme-colors', function (event, colors) {
            //console.log(stylus);
            vm.primaryColor = colors.primary;
            vm.accentColor = colors.accent;
            vm.textSecondary = "#757575";


            document.documentElement.style.setProperty('--primary-color', colors.primary.dark, '');
            document.documentElement.style.setProperty('--accent-color', colors.accent.accent, '');

        });
    }
})();