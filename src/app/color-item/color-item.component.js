/**
 * Created by User on 06/06/2017.
 */
(function(){
    'use strict';
    var app = angular.module('theme');
    app.component('colorItem', {
        controller: 'colorItemController',
        templateUrl: 'app/color-item/color-item.html',
        bindings:{
            color: '<'
        }
    });
})();
