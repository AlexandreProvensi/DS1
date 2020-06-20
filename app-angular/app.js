const appJS = angular.module('appJS', ['ngStorage', 'ngRoute']);

//Configuração das rotas
appJS.config(function($routeProvider) {

    $routeProvider
        .when('/clientes', {
            templateUrl: 'app/view/cliente.view.html',
            controller: 'ClienteController'
        })
        .when('/estados', {
            templateUrl: 'app/view/estado.view.html',
            controller: 'EstadoController'
        })
        .otherwise({ redirectTo: '/clientes' });
});