// level 2
arr = [0,1,2,3,4,5,6]
function removeeven(arr) {
    const evenarray = [];
    for (let i=0; i< arr.length; i++) {
        if (arr[i] %2 !== 0) {
            evenarray.push(arr[i]);
        }
    }
    console.log(evenarray)
}
removeeven(arr);

function vowelChange(str) {
    var newstring = ''; 
    for (let i=0; i< str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ) {
            newstring =  newstring.concat(str[i].toUpperCase());
        } else {
            newstring =  newstring.concat(str[i]);
        }
    }
    return newstring;
} 

function maximumfromarray(arr) {
    var max = arr.reduce((a,b) => {
        return Math.max(a,b);
    });
    return max;
}