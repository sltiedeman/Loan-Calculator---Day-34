function Car(id, make, model, year, msrp, imageUrl){
	this.id = id;
	this.make = make;
	this.model = model;
	this.year = year;
	this.msrp = msrp;
	this.imageUrl = imageUrl;
}

var carList = [];
carList.push(new Car(0, "BMW", "3 Series", "2015", "33,150", "images/3series.png"));
carList.push(new Car(1, "Audi", "A4", "2015", "35,900", "images/a4.png"));
carList.push(new Car(2, "Honda", "Accord", "2015", "35,900", "images/accord.png"));
carList.push(new Car(3, "Nissan", "Altima", "2015", "22,105", "images/altima.png"));
carList.push(new Car(4, "Mercedes", "C300", "2015", "38,950", "images/c300.png"));
carList.push(new Car(5, "Toyota", "Camry", "2015", "23,070", "images/camry.png"));
carList.push(new Car(6, "Honda", "Civic", "2015", "18,640", "images/civic.png"));
carList.push(new Car(7, "Ford", "Fusion", "2015", "22,110", "images/fusion.png"));
carList.push(new Car(8, "Chevrolet", "Malibu", "2015", "21,625", "images/malibu.png"));
carList.push(new Car(9, "Toyota", "Prius", "2015", "24,500", "images/prius.png"));
carList.push(new Car(10, "Acura", "TLX", "2015", "31,695", "images/tlx.png"));



