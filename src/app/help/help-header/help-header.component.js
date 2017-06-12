/**
 * Created by nicaela on 10/6/2017.
 */
(function () {
    'use strict';
    var app = angular.module('chat');
    app.component('helpHeader', {
        controller: 'helpHeaderController',
        bindings: {

        },
        templateUrl: '/app/help/help-header/help-header.html'
    });
})();
