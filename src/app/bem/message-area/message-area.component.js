/**
 * Created by Martin on 12/6/17.
 */
(function () {
    'use strict';

    angular.module('theme')
        .component('messageArea', {
           controller: 'messageAreaController',
            templateUrl: '/app/bem/message-area/message-area.html'
        });
})();