(function () {
    'use strict';

    angular.module('chat', ['ui.router'])
        .controller('chatController', ChatController);

    function ChatController() {
        var vm = this;
        vm.css_theme = 'default';

        vm.themes = [
            {name: 'Default', url: 'default'},
            {name: 'Dark', url: 'dark'}
        ];
    }
})();