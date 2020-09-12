var marks = [40, 56, 65, 58, 85, 98, 96, 65, 55, 57];
var max = marks[0];
for(i = 0; i < marks.length; i++){
  var element = marks[i];
  if( element > max ){
      max = element;
  }
}
console.log("highest marks is : " , max);
var numbers = [40, 56, 65, 58, 85, 98, 96, 65, 55, 57];
var smallest = numbers[0];
for( i = 0; i < numbers.length; i++){
    var num = numbers[i]
    if(num<smallest){
        smallest = num;
    }
}
console.log("smallest num is:",smallest)