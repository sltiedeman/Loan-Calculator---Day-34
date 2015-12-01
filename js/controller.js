var carApp = angular.module('carApp', ['ngRoute']);

//global msrp variable 
var msrp = 0;
var make = "";
var model = "";
var imagePath = "";
var counter = 0;
var selectedCars = [];

carApp.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'selectcar.html',
		controller: 'carLoanController'
	}).
	when('/enterdata',{
		templateUrl: 'enterdata.html',
		controller: 'carLoanController'
	}).
	when('/compare',{
		templateUrl: 'compare.html',
		controller: 'carLoanController'
	}).
	otherwise({
		redirectTo: 'enterdata.html'
	})
})

carApp.controller('carLoanController', function ($scope, $location){

	//carList is list of cars located in object.js
	$scope.carList = carList;
	$scope.msrp = msrp;
	$scope.make = make;
	$scope.model = model;
	$scope.imagePath = imagePath;
	$scope.selectedCars = selectedCars;


	$scope.chooseCar = function(){
		//problem starts here!!!!!!!!!!!!!!!!!!!!!!
		console.log($scope.selectedItem);
		console.log(carList);
		selectedCars.push($scope.selectedItem);
		console.log(selectedCars);
		msrp = selectedCars[counter].msrp;
		make = selectedCars[counter].make;
		model = selectedCars[counter].model;
		imagePath = selectedCars[counter].imageUrl;
		$location.path('/enterdata');
	}

	$scope.calculate = function(){
		selectedCars[counter].rate = $scope.rate;
		selectedCars[counter].amountFinanced = $scope.price - $scope.downpmt;
		//variables declared for future brevity in math formula
		var loanAmt = selectedCars[counter].amountFinanced;
		var rate = $scope.rate;
		var months = $scope.numPayments;
		selectedCars[counter].numPayments = $scope.numPayments;
		selectedCars[counter].downpmt = $scope.downpmt;
		selectedCars[counter].payment = parseInt((loanAmt*(rate / 12))/(1-Math.pow((1+rate/12),-months)));
		counter++;;
		$scope.compare();
	}

	$scope.compare = function(){
		$location.path('/compare');
	}

	$scope.changePath = function(){
		$location.path("/");
	}

});