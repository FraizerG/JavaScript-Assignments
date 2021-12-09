function months(chosenDate){
allMonths = [ "January",
 "February",
  "March",
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December" ];
  
  return allMonths[chosenDate.getMonth()];
};
console.log(months(new Date("10/11/2009")));
console.log(months(new Date("11/13/2014")));