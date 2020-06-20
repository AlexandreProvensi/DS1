(function(app) {
    'use strict';

    app.controller('ClienteController', function($scope, ClienteService) {
        //Controle para OrderBy e filter
        $scope.decrescente = false;
        $scope.selectedColumn = 'id';
        $scope.orderedBy = $scope.selectedColumn;


        //COntrole de exibição da tabela/formulário
        $scope.showTable = true;

        //Seta a coluna para ser filtrada/ordenada
        $scope.setColumn = function(columnName) {
            $scope.selectedColumn = columnName;

            //Determina a ordenação decrescente (false)
            $scope.decrescente = !$scope.decrescente;

        }

        //Retorna para o FILTER qual a coluna será utilizada na ordenação/filtro 
        $scope.filter = function() {
            var filtro = {};

            filtro[$scope.selectedColumn] = $scope.textFilter;

            return filtro;
        }

        //Prepara a tela para um novo cadastro
        $scope.novo = function() {
            //Representar o cliente atual
            $scope.cliente = {
                nome: '',
                email: '',
                cidade: '',
                estado: ''
            }

            $scope.showTable = false;
        }

        //Cancelar a inclusão/edição
        $scope.cancelar = function() {
            $scope.showTable = true;
        }

        //Salvar a inclusão/edição do cliente
        $scope.salvar = function() {
                ClienteService.salvar($scope.cliente).then(function(result) {
                    $scope.showTable = true;
                });

            }
            //Editar o cliente selecionado
        $scope.editar = function(cliente) {
            $scope.cliente = cliente;
            $scope.showTable = false;
        }

        //Excluir o cliente selecionado
        $scope.excluir = function() {
            ClienteService.remover($scope.cliente).then(function(result) {
                $scope.showTable = true;
            });
        }


        //Carrega uma lista de clientes
        ClienteService.listar().then(function(result) {
            $scope.clientes = result.data;
        });
    });

})(appJS);