(function(){
    "use strict";
    var app = angular.module('theme');
    app.controller('colorPaletteController', ColorPaletteController);

    ColorPaletteController.$inject = ['colorService'];

    function ColorPaletteController(colorService){
        var vm = this;
        vm.selectColor = selectColor;

        init();

        function init() {
            vm.$onInit = function () {
                vm.colors = colorService.getAllColors();
            }
        }

        function selectColor(color, colors) {
            colorService.selectColor(color, colors);
        }

    }
})();