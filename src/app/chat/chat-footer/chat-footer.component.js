/**
 * Created by nicaela on 10/6/2017.
 */
(function () {
    'use strict';
    var app = angular.module('chat');
    app.component('chatFooter', {
        controller: 'chatFooterController',
        bindings: {

        },
        templateUrl: '/app/chat/chat-footer/chat-footer.html'
    });
})();
