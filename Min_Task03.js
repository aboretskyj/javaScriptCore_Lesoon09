//The task:
//Create function find(arr, value), which finds value in array and returns its index if it is found or -1 if it is not founded.

myArray = [1, 15, 41, 225];
show(find(myArray,41));

// functions

function find(array,value){
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        };
    };
    return -1;
}

function show(data) {
    console.log(data);
};
