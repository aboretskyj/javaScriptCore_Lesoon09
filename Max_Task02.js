//The task:
//Create function camelize (str), which turn strings like «my-short-string» to «myShortString».
//So that hyphens shell be deleted and words after them shell start with capital letter.


show(camelize("my-short-string"));


// functions

function camelize(str) {
    var str = str;
    var Str = str.split('-');
    var camStr = Str[0];

    for (var i = 1; i < Str.length; i++) {
        camStrNext = Str[i][0].toUpperCase();

        for (var j = 1; j < Str[i].length; j++) {
            camStrNext += Str[i][j];
        }
        
        camStr += camStrNext;
    }

    return(camStr);
}


function show(data) {
    console.log(data);
}