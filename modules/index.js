import {sum, square, variable, MyClass} from './import';


function getCoords () {
  return {
    x: 10,
    y: 22
  }
}
var {x, y} = getCoords()
console.log(x)
// <- 10
console.log(y)
// <- 22

// 25
console.log(square(5));

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}

var foo = {
  [Symbol.iterator]: () => {
    var i = 0,
    	_counter = 0;

    return { next: () => ({
    	
    	return { done: _counter == 20, value: ++i }
	})
  }
}

for (let pony of foo) {

  console.log(pony)
}


var x = new MyClass(cred);

//Ritesh Kumar
console.log(x.getName());
