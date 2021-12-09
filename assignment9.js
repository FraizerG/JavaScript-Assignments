function weekendChecker(date){
    let dateCreation = new Date(date);
     
    if( dateCreation.getDay() == 0 || dateCreation.getDay() == 6)
       {
         return "This is the weekend"
        } 
    
        
}

console.log(weekendChecker('Nov 15, 2014'));
console.log(weekendChecker('Nov 16, 2014'));
console.log(weekendChecker('Nov 17, 2014'));