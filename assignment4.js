function emailValidator(emailAddress) {
    {
      var regexChecker = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if (regexChecker.test(emailAddress))
       {
          console.log("Your email address is valid");
        return true;
      }
      else{
      console.log("Your email address is not valid");
      return false;
      }
    }
  }

  emailValidator("fraizg1@gmail.com");
  emailValidator("41242142fwafsafsa");
  