
var sum = 0;
function getArraySum(numbers) {
    for(var i =0; i< numbers.length; i ++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 52, 63, 87, 56, 89, 45,32];
var result = getArraySum(numbers);
console.log( "total of the numbers:" , sum);

var numbers = [45, 52, 63, 87, 56, 89];
var total = getArraySum(numbers);
console.log("total number", total);