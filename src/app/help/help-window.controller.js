/**
 * Created by nicaela on 11/6/2017.
 */
(function () {
    'use strict';

    var app = angular.module('chat');
    app.controller('helpWindowController', HelpWindowController);

    HelpWindowController.inject = [];
    function HelpWindowController() {

        var vm = this;

        vm.$onInit = function () {
            vm.loadTestValues();
        };
        vm.loadTestValues = function () {

        };

    }
})();