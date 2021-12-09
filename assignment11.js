    function newTime() {
    let date = new Date()
    let finalDate=date.getMonth() + 1+ "/" + date.getDate() + "/" + date.getFullYear(); 

    finalDate = x1 + " - " +  date.getHours( )+ ":" +  date.getMinutes() + ":" +  date.getSeconds();
    console.log(x1);
    }
    setInterval(newTime,1000);
     
