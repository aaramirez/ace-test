angular.module('appModule', ['ui.ace'])
  .controller("appController", ["$scope", function($scope) {
    $scope.code = "<h1>Hola Ace..!</h1>";

    $scope.iframe = document.getElementById('frame');

    $scope.aceLoaded = function(_editor) {
      $scope.aceSession = _editor.getSession();
      $scope.aceRenderer = _editor.renderer;

    };

    $scope.aceChanged = function(e) {
      $scope.iframe.contentWindow.document.open();
      $scope.iframe.contentWindow.document.write($scope.aceSession.getValue());
      $scope.iframe.contentWindow.document.close();
    };
  }]);