angular.module('appModule', ['ui.ace'])
  .controller("appController", ["$scope", function($scope) {
    $scope.code = "<h1>Hola Ace..!</h1>";

    $scope.iframe = document.createElement('iframe');
    document.body.appendChild($scope.iframe);;

    $scope.aceLoaded = function(_editor) {
      $scope.aceSession = _editor.getSession();
      $scope.aceRenderer = _editor.renderer;

      //$scope.aceRenderer.setShowPrintMargin(false);
      //$scope.aceRenderer.setShowGutter(false);
    };

    $scope.aceChanged = function(e) {
      $scope.iframe.contentWindow.document.open();
      $scope.iframe.contentWindow.document.write($scope.aceSession.getValue());
      $scope.iframe.contentWindow.document.close();
    };
  }]);