/**
 * Created by vonofre on 9/6/2017.
 */
(function () {
    'use strict';

    var app = angular.module('chat');
    app.controller('chatMessageController', ChatMessageController);

    ChatMessageController.inject = [];
    function ChatMessageController() {

        var vm = this;
        vm.srcAvatar = "https://www.pnliafi.com.ar/wp-content/uploads/2016/01/avatar-user.png";

       // vm.question = "What documents are required to be for the EIN/License Section?What documents are required to be for the EIN/License Section?";


        vm.$onInit = function () {

        };


    }
})();