/**
 * Created by User on 06/06/2017.
 */
(function () {
    'use strict';
    var app = angular.module('chat');
    app.component('card', {
        controller: 'cardController',
        bindings: {
            card: '<'
        },
        templateUrl: '/app/card/card.html'
    });
})();