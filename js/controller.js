var carApp = angular.module('carApp', ['ngRoute']);

carApp.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'selectcar.html',
		controller: 'carLoanController'
	}).
	when('/enterdata',{
		templateUrl: 'enterdata.html',
		controller: 'carLoanController'
	}).
	otherwise({
		redirectTo: 'selectcar.html'
	})
})

carApp.controller('carLoanController', function ($scope, $location){

	$scope.carList = carList;
	//An array of all the cars selected
	selectedCars = [];


	$scope.calculate = function(){
		console.log($scope.selectedItem);
		selectedCars.push($scope.selectedItem);
		console.log(selectedCars);
		$location.path('/enterdata.html');

	}
});