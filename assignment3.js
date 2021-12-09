var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

let combArray = array1.concat(array2);

function sortArray(insertArray) {

    var filtedArray = insertArray.filter((value, pos) => {

    return insertArray.indexOf(value) === pos; } )
    console.log(filtedArray);

}

sortArray(combArray)