/**
 * Created by Martin on 12/6/17.
 */
(function () {
    'use strict';
    angular.module('theme')
        .component('messageList', {
           controller: 'messageListController',
            templateUrl: '/app/bem/message-list/message-list.html',
            bindings:{}
        });
})();