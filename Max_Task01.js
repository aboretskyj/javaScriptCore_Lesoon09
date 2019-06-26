//The task:
//Create function filterRange (array, a, b), which accepts array of numbers Array
//and returns new array, which contains only Array numbers from a to b. 

var Array = [3, 45, 15, 43, 33, 71, 2, 6, 21, 0, 13]

show(filterRange(Array, 43, 2));


// functions

function filterRange (array, a, b){
    var a = array.indexOf(a);
    var b = array.indexOf(b);
    var chosenArr = [];

    if (a < b) {
        for (i = a; i <= b; i++){
            chosenArr.push(array[i]);
        }
    } else {
        for (i = b; i <= a; i++){
            chosenArr.push(array[i]);
        }
    }

    return chosenArr;
}

function show(data) {
    console.log(data);
}
