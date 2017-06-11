(function () {
  'use strict';

  angular
    .module('chat')
    .config(ChatRoute);

  ChatRoute.inject = ['$stateProvider', '$urlRouterProvider'];

  function ChatRoute($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state("/", {
        url: '/',
        template: '<h1>Replace with component</h1>'
      });
  }
})();