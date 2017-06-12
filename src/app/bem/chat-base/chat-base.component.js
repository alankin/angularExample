/**
 * Created by Martin on 11/6/17.
 */
(function () {
    'use strict';
    angular.module('theme')
        .component('chatBase', {
            controller: 'chatBaseController',
            templateUrl: '/app/bem/chat-base/chat-base.html',
            transclude: true
        });
})();