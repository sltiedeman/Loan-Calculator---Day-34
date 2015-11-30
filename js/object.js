function Car(make, model, year, msrp, imageUrl){
	this.make = make;
	this.model = model;
	this.year = year;
	this.msrp = msrp;
	this.imageUrl = imageUrl;
}

var carList = [];
carList.push(new Car("BMW", "3 Series", "2015", "33,150", "images/3series.png"));
carList.push(new Car("Audi", "A4", "2015", "35,900", "images/a4.png"));
carList.push(new Car("Honda", "Accord", "2015", "35,900", "images/accord.png"));
carList.push(new Car("Nissan", "Altima", "2015", "22,105", "images/altima.png"));
carList.push(new Car("Mercedes", "C300", "2015", "38,950", "images/c300.png"));
carList.push(new Car("Toyota", "Camry", "2015", "23,070", "images/camry.png"));
carList.push(new Car("Honda", "Civic", "2015", "18,640", "images/civic.png"));
carList.push(new Car("Ford", "Fusion", "2015", "22,110", "images/fusion.png"));
carList.push(new Car("Chevrolet", "Malibu", "2015", "21,625", "images/malibu.png"));
carList.push(new Car("Toyota", "Prius", "2015", "24,500", "images/prius.png"));
carList.push(new Car("Acura", "TLX", "2015", "31,695", "images/tlx.png"));

