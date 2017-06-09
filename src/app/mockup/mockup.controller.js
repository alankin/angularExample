/**
 * Created by User on 06/06/2017.
 */
(function () {
    "use strict";
    var app = angular.module('theme');
    app.controller('mockupController', MockupController);

    MockupController.$inject = ['$rootScope'];

    function MockupController($rootScope) {
        var vm = this;

        $rootScope.$on('theme-colors', function (event, colors) {
            if (colors.primary && colors.accent) {
                document.documentElement.style.setProperty('--base-primary-color', colors.primary.base, '');
                document.documentElement.style.setProperty('--dark-primary-color', colors.primary.dark, '');
                document.documentElement.style.setProperty('--light-primary-color', colors.primary.light, '');
                document.documentElement.style.setProperty('--text-icon-color', colors.primary.texticon, '');

                document.documentElement.style.setProperty('--base-accent-color', colors.accent.base, '');
                document.documentElement.style.setProperty('--light-accent-color', colors.accent.light, '');
                document.documentElement.style.setProperty('--primary-text-color', colors.accent.pritext, '');
                document.documentElement.style.setProperty('--secondary-text-color', colors.accent.sectext, '');
                document.documentElement.style.setProperty('--line-color', colors.accent.line, '');
            }

        });
    }
})();
