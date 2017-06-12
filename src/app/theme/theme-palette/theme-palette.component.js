/**
 * Created by User on 06/06/2017.
 */
(function(){
    'use strict';
    var app = angular.module('theme');
    app.component('themePalette', {
        controller: 'themePaletteController',
        templateUrl: 'app/theme/theme-palette/theme-palette.html',
        bindings:{
        }
    });
})();