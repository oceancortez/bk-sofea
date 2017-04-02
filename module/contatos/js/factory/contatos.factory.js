        angular.module('oxi.contatos')
        .factory('ContatoFactory', ContatoFactory);

        ContatoFactory.$inject = ['$q'];

        function ContatoFactory($q) {

            var factory = this;


            factory.buscarContatoOut = function(contato) {
                var out = {
                    'id': contato.id
                };

                return out;
            };


            factory.buscarContatoIn = function(response) {
                var retorno = {};
                if (response.data == undefined) {
                    return retorno;
                }

                if (response.data.id == undefined || response.data.id == '') {
                    return retorno.error = response.data;
                }

                retorno = {
                    'id': response.data.id,
                    'nome': response.data.nome,
                    'email': response.data.email,
                    'dtNascimento': response.data.dtNascimento,
                    'telefone': response.data.telefone,
                    'sexo': response.data.sexo

                };

                return retorno;
            }


            return factory;


        };