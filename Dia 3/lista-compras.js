(function (angular) {
    "use strict";

    // MODULO
    angular.module('listaTarefasApp', []);


    // CONTROLLER
    angular.module('listaTarefasApp')
        .controller('ListaTarefasController', listaTarefasController);

    listaTarefasController.$inject = ['$rootScope'];

    function listaTarefasController($rootScope) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        vm.logado = false;
        vm.validar = false;
        vm.register = false;

        $rootScope.listaMensagens = [
            { text: 'Mensagem aqui', tipo: 'danger' },
            { text: 'Mensagem aqui', tipo: 'info' },
            { text: 'Mensagem aqui', tipo: 'success' },
            { text: 'Mensagem aqui', tipo: 'warning' }
        ];
        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */


        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})(angular);