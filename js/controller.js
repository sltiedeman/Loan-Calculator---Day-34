var carApp = angular.module('carApp', ['ngRoute']);

//global msrp variable 
var msrp = 0;
var imagePath = "";

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
		redirectTo: 'enterdata.html'
	})
})

carApp.controller('carLoanController', function ($scope, $location){

	$scope.carList = carList;
	//An array of all the cars selected
	selectedCars = [];
	$scope.msrp = msrp;
	$scope.imagePath = imagePath;

	$scope.calculate = function(){
		selectedCars.push($scope.selectedItem);
		console.log(selectedCars);
		msrp = selectedCars[0].msrp;
		imagePath = selectedCars[0].imageUrl;
		$location.path('/enterdata');


	}
});