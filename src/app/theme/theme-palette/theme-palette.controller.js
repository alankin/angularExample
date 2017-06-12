/**
 * Created by User on 06/06/2017.
 */
(function () {
    "use strict";
    //var stylus = require('stylus');
    var app = angular.module('theme');
    app.controller('themePaletteController', ThemePaletteController);

    ThemePaletteController.$inject = ['$rootScope'];

    function ThemePaletteController($rootScope) {
        var vm = this;

        $rootScope.$on('theme-colors', function (event, colors) {
            vm.primaryColor = colors.primary;
            vm.accentColor = colors.accent;
        });
    }
})();