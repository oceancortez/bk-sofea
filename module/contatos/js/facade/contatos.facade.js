    angular.module('oxi.contatos')
    .service('ContatoFacade', ContatoFacade);

    ContatoFacade.$inject = ['$q', 'ContatoService', 'ContatoFactory', '$log'];

    function ContatoFacade($q, ContatoService, ContatoFactory, $log) {

        var facade = this;

        facade.buscarContato = function(contato) {
            return $q(function(resolve) {
                var out = ContatoFactory.buscarContatoOut(contato);
                ContatoService.buscarContatoPor(out.id).then(function(response) {
                    return resolve(ContatoFactory.buscarContatoIn(response));
                },function error(response){
                    if(response.status != 200 || response.status != 202){
                         $log.warn("Aconteceu um erro ao buscar contato /" 
                         +" response.status = " + response.status
                         + " / response.statusText = " + response.statusText);
                         return resolve(response);    
                    }
                   
                });
            });
        }


        return facade;

    };