angular.module('oxi.common')

.factory('i18nNotifications', i18nNotifications);

i18nNotifications.$inject = ['Notifications', '$timeout'];

function i18nNotifications(Notifications, $timeout){

    var i18Factory = this;

    i18Factory.prepareNotification = function (msgKey, type, interpolateParams){
            angular.extend({
                message: msgKey,
                type: type
            });
    },

   i18Factory.I18nNotifications = {
        enviaMensagem: function(msgKey, type){
            return notifications.enviaMensagem(msgKey, type);
        }
    };


    return i18Factory;

};
