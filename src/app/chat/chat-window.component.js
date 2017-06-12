/**
 * Created by vonofre on 9/6/2017.
 */
(function () {
    'use strict';
    var app = angular.module('chat');
    app.component('chatWindow', {
        controller: 'chatWindowController',
        bindings: {
            messages: '<'
        },
        templateUrl: '/app/chat/chat-window.html'
    });
})();