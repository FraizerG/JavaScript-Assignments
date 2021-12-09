
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
    readingStatus: true,
  },
  {
    title: "Walter Issacson",
    author: "Steve Jobs",
    libraryID: 4264,
    readingStatus: true,
  },
  {
    title: "Mockingjay: the final book of the hunger games",
    author: "Suzanne Collins",
    libraryID: 3245,
    readingStatus: false,
  },
];



for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    
    if (library[i].readingStatus === true) 
    {
      console.log("Already read " + book);
    } 
    else if (library[i].readingStatus === false)
    {
     console.log("The remaining book to read is  " + book);
    }
   }


