var name = [ 3, 5, 6, 7, 15, 7 , 23, 12, 6, 5, 8];
//var name = [Rahim, Karim , Jamal, Kamal, Jamal, Karim, Limon, Noor];
var uniqueName = [];
for(i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
        //
    }
}
console.log(uniqueName);