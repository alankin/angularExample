/**
 * Created by vonofre on 9/6/2017.
 */
(function () {
    'use strict';
    var app = angular.module('chat');
    app.component('chatMessage', {
        controller: 'chatMessageController',
        bindings: {

        },
        templateUrl: '/app/chat/chat-message/chat-message.html'
    });
})();