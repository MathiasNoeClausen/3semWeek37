function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1, n2){
  return n1 - n2
} 

var mul = function(n1, n2) {
    return n1 * n2
}
var div = function(n1, n2) {
    return n1 / n2
}

var cb = function(n1, n2, callback){
    try {
        if (typeof callback === 'function ') {
         throw "Ikke en funktion"
     } else if (n1 === "number") {
         throw "Ikke et tal"
     }  else if (n2 === "number") {     
         throw "Ikke et tal"
         }
         
  
    } catch (e) {
        console.error(e + ': ' + "Lav det om") 

 }    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    }
    

console.log( add(1,2) );     
console.log( add );          
console.log( add(1,2,3) ) ; 
console.log( add(1) );	  	
console.log( cb(3,3,add) ); 
console.log( cb(4,3,sub) ); 
 //console.log(cb(3,3,add())); 
console.log(cb(3,"hh",add));
console.log(cb(5,5,mul));
console.log(cb(10,2,div));
