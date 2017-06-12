/**
 * Created by nicaela on 10/6/2017.
 */
(function () {
    'use strict';
    var app = angular.module('chat');
    app.component('chatHeader', {
        controller: 'chatHeaderController',
        bindings: {

        },
        templateUrl: '/app/chat/chat-header/chat-header.html'
    });
})();
