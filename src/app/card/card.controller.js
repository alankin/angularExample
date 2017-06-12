/**
 * Created by User on 06/06/2017.
 */
(function () {
    'use strict';

    var app = angular.module('chat');
    app.controller('cardController', CardController);

    CardController.inject = [];
    function CardController() {

        var vm = this;

        vm.question = "What documents are required to be for the EIN/License Section?What documents are required to be for the EIN/License Section?";
        vm.answer = "To fill the EIN/Licenses section enter the information section ...To fill the EIN/Licenses section enter the information section ...";
        //$scope.avatarSrc = "http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46ad551392.png";
        vm.avatarSrc = "http://www.coffeecup.com/images/screenshots/web-form-builder/fb_win_properties_editaddress.png";

        vm.$onInit = function () {
          // vm.loadTestValues();
        };

        vm.loadTestValues = function () {
            if (undefined === vm.card) {
                vm.card = cardTest;
            }
        };
    }
})();