angular.module('app', ['ngSanitize']);
angular.module('app').config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);