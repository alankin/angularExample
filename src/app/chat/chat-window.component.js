/**
 * Created by vonofre on 9/6/2017.
 */
(function () {
    'use strict';
    var app = angular.module('theme');
    app.component('chatWindow', {
        controller: 'chatWindowController',
        bindings: {

        },
        templateUrl: '/app/chat/chat-window.html'
    });
})();