    angular.module('oxi.contatos')
    .service('ContatoService', ContatoService);

    ContatoService.$inject = ['$http', '$log'];

    function ContatoService($http, $log) {

        var service = {
            buscarContatoPor: buscarContatoPor
        };

        return service;


        function buscarContatoPor(id) {
            $log.info('Entrou no metodo ContatoService.buscarContatoPor(id = ', id, ')');
            return $http.get('http://localhost/express-api/contato/' + id);
        };


    };