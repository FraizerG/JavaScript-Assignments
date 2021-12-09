    function newTime() {
    let date = new Date()


    let combinedDate = date.getHours( )+ ":" +  date.getMinutes() + ":" +  date.getSeconds();
    console.log(combinedDate);
    }
    setInterval(newTime,1000);
     
