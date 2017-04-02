angular.module('oxi.contatos')
    .service('ContatoBusiness', ContatoBusiness);

ContatoBusiness.$inject = ["$q", "$log"];

function ContatoBusiness($q, $log) {

    var business = this;

    business.preparaUrl = function(textoUrl) {

        var parametrosPopulados = business.preparaParametros();
        var urlRetorno = textoUrl.url,
            params = parametrosPopulados,
            i;

        $log.info("entrou no método preparaUrl() / urlRetorno = ", urlRetorno, "/ params = ", params);

        if (urlRetorno.trim()) {
            for (i in params) {
                if (params.hasOwnProperty(i)) {
                    if (params[i]) {
                        urlRetorno = urlRetorno.replace(new RegExp(i, 'g'), params[i]);
                    } else {
                        urlRetorno = urlRetorno.replace(new RegExp(i, 'g'), '');
                    }
                }
            }
        }

        if (textoUrl.metodo == 'GET') {
            return urlRetorno;
        }
        urlRetorno = business.preparaUrlPOST(urlRetorno, textoUrl.metodo);
        $log.info("entrou no método preparaUrl() / urlRetorno = ", urlRetorno);

        return urlRetorno;

    }

    business.preparaParametros = function() {

        $log.info("entrou no método preparaParametros()");
        var retorno = {};

        retorno['<usuario>'] = 'ocortez';
        retorno['<nome>'] = 'oceancortez';
        retorno['<sexo>'] = 'masculino';

        $log.info("saiu no método preparaParametros()", retorno);

        return retorno;
    };

    business.preparaUrlPOST = function(urlPost, metodo) {
        var retorno = {};
        var path = '',
            params = {},
            tempParams = [],
            chaveValor = [],
            i;

        urlPost = decodeURIComponent(urlPost);

        if (urlPost && urlPost.indexOf('?') > 0) {
            path = urlPost.substring(0, urlPost.indexOf('?'));
            tempParams = urlPost.substring(urlPost.indexOf('?') + 1, urlPost.length).split('&');
            for (i in tempParams) {
                if (tempParams.hasOwnProperty(i) && tempParams[i].indexOf('=') >= 0) {
                    chaveValor = tempParams[i].split('=');
                    params[chaveValor[0]] = chaveValor[1];
                }
            }

            retorno = {
                'url': path,
                'body': JSON.stringify(params)
            };
        }
        return retorno;
    };


    return business;

};