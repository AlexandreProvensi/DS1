(function(app) {
    'use strict';

    app.service('ClienteService', function($http) {

        function loadJSON() {
            return $http.get('data/clientes.json');
        }
        return {
            listar: loadJSON
        }

    });

})(appJS);