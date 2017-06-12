/**
 * Created by User on 06/06/2017.
 */
(function(){
    'use strict';
    var app = angular.module('theme');
    app.component('mockup', {
        controller: 'mockupController',
        templateUrl: 'app/theme/mockup/mockup.html',
        bindings:{
        }
    });
})();