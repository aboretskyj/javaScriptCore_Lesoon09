// The task:
//Create array "styles"

var styles = ["jazz", "blues"];
show(styles);

//Add "rock'n'roll" to the end of "styles"
styles.push("rock'n'roll");
show(styles);

//Change the last but one element to "classic"
styles[styles.length-2] = "classic";
show(styles);

//Delete the first element and display it to console
show(styles.shift());

//Add "rap" and "reggae" to the begining of "styles"
styles.unshift("rap", "reggae");
show(styles);


// functions

function show(data) {
    console.log(data);
};