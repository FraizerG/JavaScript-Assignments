var library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      libraryID: 1254,
    },
    {
      title: "Walter Issacson",
      author: "Steve Jobs",
      libraryID: 4264,
    },
    {
      title: "Mockingjay: the final book of the hunger games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  

 

  function arrangeTitles(a,b) {
      if (a.title < b.title){
            return false;
      }
      if (a.title > b.title) {
          return true;
      }
      return 0;

  }

  library.sort(arrangeTitles)

  library.forEach((i) => {
    console.log(`${i.title} ${i.author} ${i.libraryID}`);
});
  