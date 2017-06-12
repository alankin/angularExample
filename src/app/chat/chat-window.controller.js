/**
 * Created by vonofre on 9/6/2017.
 */
(function () {
    'use strict';

    var app = angular.module('chat');
    app.controller('chatWindowController', ChatWindowController);

    ChatWindowController.inject = ['messagesTest'];
    function ChatWindowController(messagesTest) {

        var vm = this;

        vm.$onInit = function () {
            vm.loadTestValues();
        };
        vm.loadTestValues = function () {
            if (undefined === vm.messages) {
                vm.messages = messagesTest;
            }
        };

    }
})();