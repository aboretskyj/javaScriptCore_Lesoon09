//The task:
//Get the last element of array

var products = ["prod1", "prod2", "prodN", "prodX", "prodTheLastX"]

show(getLast(products));



// functions

function show(data) {
    console.log(data);
};

function getLast(array){
    return (array[(array.length-1)]);
}