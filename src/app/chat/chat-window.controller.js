/**
 * Created by vonofre on 9/6/2017.
 */
(function () {
    'use strict';

    var app = angular.module('theme');
    app.controller('chatWindowController', ChatWindowController);

    ChatWindowController.inject = [];
    function ChatWindowController() {

        var vm = this;

       // vm.question = "What documents are required to be for the EIN/License Section?What documents are required to be for the EIN/License Section?";


        vm.$onInit = function () {

        };


    }
})();