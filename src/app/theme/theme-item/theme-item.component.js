/**
 * Created by User on 06/06/2017.
 */
(function () {
    'use strict';
    var app = angular.module('theme');
    app.component('themeItem', {
        controller: 'themeItemController',
        templateUrl: 'app/theme/theme-item/theme-item.html',
        bindings: {
            color: '<'
        },
        transclude: true
    });
})();
