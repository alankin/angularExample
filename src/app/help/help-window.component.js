/**
 * Created by nicaela on 11/6/2017.
 */
/**
 * Created by User on 06/06/2017.
 */
(function () {
    'use strict';
    var app = angular.module('chat');
    app.component('helpWindow', {
        controller: 'helpWindowController',
        bindings: {
            card: '<'
        },
        templateUrl: '/app/help/help-window.html'
    });
})();