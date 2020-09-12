function reverseString(str){
    var reverse = "";
    for(i =0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statment = "Hello Alien how are bhai brother";

var forAlien = reverseString(statment);
console.log(forAlien);

var speach = "Now i will go to dhaka tomorrow";
var reverse = reverseString(speach);
console.log(reverse);