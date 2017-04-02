angular.module('oxi.contatos')
    .controller('ContatoController', ContatoController);

ContatoController.$inject = ['$scope', '$location', '$log', 'ContatoBusiness', 'ContatoFacade','i18nNotifications'];


function ContatoController($scope, $location, $log, ContatoBusiness, ContatoFacade, i18nNotifications) {
    var controller = this;

    controller.mockListJaFoiPopulada = mockListJaFoiPopulada;
    controller.mockList = mockList;
    controller.qtdeRegistros = 0;
    controller.listaDeContatos = [];
    controller.mockListPopulada = false;
    controller.urlFormatadaGET;
    controller.urlFormatadaPOST;
    controller.urlFormatadaIn;
    controller.contato;
    controller.error;


    function mockListJaFoiPopulada() {
        if (controller.listaDeContatos.length > controller.qtdeRegistros) {
            return controller.mockListPopulada = true;
        } else {
            return controller.mockListPopulada = false;
        }
        if(controller == controller){

        }
    }

    function mockList() {
        controller.listaDeContatos = [{
                "id": "1",
                "nome": "Ocean Cortez",
                "endereco": "rua joão batista mendo"

            },
            {
                "id": "2",
                "nome": "teste2",
                "endereco": "rua "
            }
        ];
        $log.info('Lista de cotatos populada =', controller.listaDeContatos);
    };

    controller.qtdeRegistros = controller.listaDeContatos.length;

    mockListJaFoiPopulada();

    if (controller.mockListPopulada) {
        return;
    } else {
        controller.mockList();
    }

    controller.formataUrl = function(textoUrl) {
        if (textoUrl.metodo == 'POST') {
            controller.urlFormatadaPOST = ContatoBusiness.preparaUrl(textoUrl);
            $log.info("controller.urlFormatadaPOST  = ", controller.urlFormatadaPOST);
        } else {
            controller.urlFormatadaGET = ContatoBusiness.preparaUrl(textoUrl);
            $log.info("controller.urlFormatadaGET  = ", controller.urlFormatadaGET);
        }
    };


    controller.procurarContato = function(contato) {
        controller.error = '';
        controller.contato = {};

        if (contato == undefined || contato.id == undefined || contato.id == '') {
            return controller.error = "Favor preencher o campo contato";
        }

        var promisse = ContatoFacade.buscarContato(contato);

        promisse.then(function(retorno) {
            controller.contato = retorno;

            if (controller.contato == undefined) {
                $log.warn('contato = ', controller.contato);
                controller.error = controller.contato;

            } else if (controller.contato.id == undefined || controller.contato.id == '') {
                $log.warn('contato = ', controller.contato);
                controller.error = controller.contato.statusText;
                $log.warn('error = ', controller.error);
            }
        });



        $log.info('contato = ', controller.contato);
        $log.info('error = ', controller.error);

    };

};