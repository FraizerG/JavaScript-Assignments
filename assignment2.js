  var numberArray  = [1,2,3,4,5]

  var sum = 0;
  var product = 1;
  function addArray(array) {

    for (let i = 0; i < array.length; i++)
    {
    sum = sum + array[i];   
}
    console.log(`The sum of the array is ${sum}`);
  }

  function MultiplyArray(array) {

    for (let i = 0; i < array.length; i++)
    {
    product = product * array[i];
    
}
    console.log(`The product of the array is ${product}`);
  }
MultiplyArray(numberArray)  
addArray(numberArray)
