
var carApp = angular.module('carApp', ['ngRoute', 'ngMessages']);


//global msrp variable 
var msrp = 0;
var make = "";
var model = "";
var imagePath = "";
var counter = 0;
var selectedCars = [];
var globalIndex;

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
	when('/edit',{
		templateUrl: 'edit.html',
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
	$scope.view = "false";
	//This is to determine if the compare button should be displayed
	//on the 
	$scope.numCarsToCompare = selectedCars.length;
	if($scope.numCarsToCompare > 0){
		$scope.view="true";
	}

	$scope.chooseCar = function(){
		selectedCars.push($scope.selectedItem);
		var carId = selectedCars[counter].id;
		for(i=0; i<carList.length; i++){
			if(carList[i].id == carId){
				carId = i;
			}
		}
		carList.splice(carId, 1);
		msrp = selectedCars[counter].msrp;
		make = selectedCars[counter].make;
		model = selectedCars[counter].model;
		imagePath = selectedCars[counter].imageUrl;
		$location.path('/enterdata');
	}

	$scope.calculate = function(isValid){
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

	$scope.goBack = function(){
		var carId = selectedCars[counter].id;
		carList.push(resetList[carId]);
		selectedCars.pop();
		$location.path("/");
	}

	$scope.delete = function(index){
		// carList.push(selectedCars[index]);
		selectedCars.splice(index,1);
		counter--;
	}

	$scope.edit = function($index){
		$location.path("/edit");
		globalIndex = $index;
	}

	$scope.editData = function(){
		console.log(globalIndex);
		selectedCars[globalIndex].rate = $scope.rate;
		selectedCars[globalIndex].numPayments = $scope.numPayments;
		selectedCars[globalIndex].downpmt = $scope.downpmt;
		selectedCars[globalIndex].amountFinanced = $scope.price - $scope.downpmt;
		var loanAmt = selectedCars[globalIndex].amountFinanced;
		var rate = $scope.rate;
		var months = $scope.numPayments;
		selectedCars[globalIndex].payment = parseInt((loanAmt*(rate / 12))/(1-Math.pow((1+rate/12),-months)));
		console.log(selectedCars[globalIndex]);
		$location.path("/compare");
	}

	$scope.reset = function(){
		carList = resetList;
		selectedCars = [];
		counter = 0;
		$location.path('/');
		console.log(carList);
	}

});