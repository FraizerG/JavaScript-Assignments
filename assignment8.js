function monthChecker(date){
monthsInYear = [ "January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  
  return monthsInYear[date.getMonth()];
};
console.log(monthChecker(new Date("10/11/2009")));
console.log(monthChecker(new Date("11/13/2014")));