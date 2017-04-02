angular.module('oxi')
     .config(function($routeProvider) {
        $routeProvider.when('/home', {
                templateUrl: 'module/contatos/view/home.html',
                controller: 'homeController'
            })
            .when('/cadastrar-contato', {
                templateUrl: 'module/contatos/view/cadastrarContato.html',
                controller: 'ContatoController'
            })

        .when('/listar-contatos', {
                templateUrl: 'module/contatos/view/listarContatos.html',
                controller: 'ContatoController'
            })
            .when('/procurar-contato', {
                templateUrl: 'module/contatos/view/procurarContato.html',
                controller: 'ContatoController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });
