var people = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
console.log("Before filter: ", people)

var result = people.filter(name => name.length <= 3)

console.log("After filter: ", result)

var uppercase = people.map(name => name.toString().toUpperCase());
console.log("Uppercased: ", uppercase)

function myFunction(people) {
    return people.map(name => name), people.join("</li>"+"<li>")
        
    
}
console.log(myFunction(people))

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function myFunction1(cars) {
    return cars.filter(function(year) {
        return year.year >= "1999";
    })
}

function myFunction2(cars) {
    return cars.filter(function(make) {
      return make.make == 'Volvo';  
    })
}
function myFunction3(cars) {
    return cars.filter(function(price) {
      return price.price < "5000";  
    })
}
console.log(myFunction1(cars))
console.log(myFunction2(cars))
console.log(myFunction3(cars))