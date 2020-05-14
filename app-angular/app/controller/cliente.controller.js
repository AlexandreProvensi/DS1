(function(app) {
    'use strict';

    app.controller('ClienteController', function($scope, ClienteService) {

        //Carrega uma lista de clientes
        ClienteService.listar().then(function(result) {
            $scope.clientes = result.data;
        }).catch(function(error) {
            if (error.status == 404) {
                $scope.msgerro = 'O recurso não foi encontrado';
            } else {
                console.log(error);
            }

        });

    });

})(appJS);