let a = "Mark";
// a = 39; => Type 'number' is not assignable to type 'string'

let b: string;
b = "Alien";

let c: number;
c = 24;

function hello(b: number) {

}

hello(24);
// hello("Banana"); => Type 'string' is not assignable to type 'number'