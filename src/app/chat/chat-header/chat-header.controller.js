/**
 * Created by nicaela on 10/6/2017.
 */
(function () {
    'use strict';

    var app = angular.module('chat');
    app.controller('chatHeaderController', ChatHeaderController);

    ChatHeaderController.inject = [];

    function ChatHeaderController() {
        var vm = this;
        vm.title = "Social chat on business license number";

    }
})();