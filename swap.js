var a = 5;
var b = 7;
console.log ("before swap: a=", a," b =", b );
var temp = b;
a = temp;
b = a;
console.log( "after swap:a=" ,a , "b=", b )

var x =8;
var y =9;
x = x + y;
y = x - y;
x = x - y;
console.log( "after swap:x=" ,x , "y=", y )

var p =4;
var q = 5;
[p, q] = [q, p]
console.log( "after swap:p=" ,p , "q=", q )
