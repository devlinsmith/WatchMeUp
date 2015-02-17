app.controller('watchesController', ['$scope', '$resource', function ($scope, $resource) {
  var Watch = $resource('/api/watches');

  Watch.query(function (results) {
    $scope.watches = results;
  });

  $scope.watches = []

  $scope.createWatch = function () {
    var watch = new Watch();
    watch.name = $scope.watchName;
    watch.colour = $scope.watchColour;
    watch.brand = $scope.watchBrand;
    watch.price = $scope.watchPrice;

    watch.$save(function (result) {
        //Push the new watch onto the scope for the sever and clear the input box
      $scope.watches.push(result);
      $scope.watchName = '';
    });
  }

    $scope.removeWatch = function () {
        // This should be done via an id - incomplete
        console.log("Attempting to delete: "+ $scope._id);
        $scope.watches.indexOf($scope._id)
    }
}]);