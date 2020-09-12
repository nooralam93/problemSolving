var speach = "I am a  good  person. I do not snore at night. ";
var count = 0;
console.log(speach.length);
//console.log(speach[7]);
var char = 0;
for(i = 0; i<speach.length; i++){
    var char = speach[i];
    //console.log(char);
    /*if( char == " "){
        count++;
    }*/
    if( char == " " && speach[i-1] !=" "){
        count++;
    }
}
console.log(count);