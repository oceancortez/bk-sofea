angular.module('oxi.common')

.factory('Notifications', Notifications);

Notifications.$inject = ['$rootScope'];


    function Notifications($rootScope){

        var notifications = {
            enviaMensagem : enviaMensagem
        };

        return notifications;


        function enviaMensagem(mensagem, type){
            if(mensagem == undefined || mensagem == '' ){
                return;
            }


        };


    };