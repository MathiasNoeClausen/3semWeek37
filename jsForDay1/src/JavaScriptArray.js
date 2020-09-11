var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
//Was already separated by commas by default
console.log(all.unshift("Hans", "Kurt"))
console.log(all.push("Lone", "Gitte"))
console.log(all.join("-")); 
all.shift();
all.pop();
console.log(all);
all.splice(3,2);
console.log(all);
all.reverse();
console.log(all);
all.sort();
console.log(all);
var uppercase = all.map(name => name.toString().toUpperCase());
console.log(uppercase);

function filterNames(all) {
  return all.filter(function(element) {
      return element.charAt(0) === 'L' || element.charAt(0) === 'I'
  })
}
console.log(filterNames(all))


