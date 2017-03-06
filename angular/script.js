var multiplicacion = angular.module("multiplicacion",[]);
multiplicacion.controller("tabla",function ($scope){
	$scope.numero = prompt ("ingrese un numero");
	for (var x=1;x<=10;x++) {
			console.log($scope.numero + "*" + x + "=" + $scope.numero * x)
	};

})
