(function(app) {
    'use strict';

    app.controller('EstadoController', function($scope, EstadoService) {
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
            //Representar o estado atual
            $scope.estado = {
                nome: ''
            }

            $scope.showTable = false;
        }

        //Cancelar a inclusão/edição
        $scope.cancelar = function() {
            $scope.showTable = true;
        }

        //Salvar a inclusão/edição do estado
        $scope.salvar = function() {
                EstadoService.salvar($scope.estado).then(function(result) {
                    $scope.showTable = true;
                });

            }
            //Editar o estado selecionado
        $scope.editar = function(estado) {
            $scope.estado = estado;
            $scope.showTable = false;
        }

        //Excluir o estado selecionado
        $scope.excluir = function() {
            EstadoService.remover($scope.estado).then(function(result) {
                $scope.showTable = true;
            });
        }


        //Carrega uma lista de estados
        EstadoService.listar().then(function(result) {
            $scope.estados = result.data;
        });
    });

})(appJS);