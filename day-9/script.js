//### Date and Time Methods
//## there are 4 ways to crate a date object:

  // 1.new date()

        // let currDate = new Date(); 
        // console.log(currDate);

          // toLocalstring()

            // let currDate = new Date(); 
            // console.log(currDate.toLocaleString());   // exact tim and date 
          
          /// toString
            
            // let currDate = new Date(); 
            // console.log(currDate.toString());   // exact tim and date  with day and indian standard time


    // 2. Date now() method

        // console.log(Date.now());        // will return the total milliseconds after 1 january 1970 

    // 3. New Date (year, month,.....)

          // var s = new Date(2023, 10, 27, 12, 31, 1, 3 )
          // console.log(s.toLocaleString());    // minimum there should be two arguments no matter which argument is missing but the month argument is mandatory

//4. new Date and (Date string)

      // var s = new Date("October 13, 2021 11:30:00" )
      // console.log(s);

  //## new date (milliseconds)

    // var d = new Date(0)
    // console.log(d);
    // var d = new Date(1609574531435)
    // console.log(d);

    // var d = new Date(86400000*2);
    //   console.log(d);



// ### date methods 

  //   => getting the individual date 
  //     const currDate = new Date();

    //     console.log(currDate.toLocaleString());
    //     console.log(currDate.getFullYear());
    //     console.log(currDate.getMonth());
    //     console.log(currDate.getDate());
    //     console.log(currDate.getDay());

  //    =>setting individual date
  //     const currDate = new Date();
  //       console.log(currDate.setFullYear(2023));
  //       console.log(currDate.setFullYear(2023,10,27));
  //       console.log(currDate.setMonth(9));
  //       console.log(currDate.setDate(27));
  //       console.log(currDate.toLocaleString());

// ### Time methods

    //==> getting the idivisusal time

        // const currTime = new Date();
        // console.log(currTime.getTime());        // returns the number of milliseconds since 1 january 1970 
        // console.log(currTime.getHours());       /// get hours() method returns the hours of a date as number (0-23)
        // console.log(currTime.getMinutes());
        // console.log(currTime.getSeconds());
        // console.log(currTime.getMilliseconds());

    //==> getting the idivisusal time

  //  const currTime = new Date();
  //   // console.log(currTime.setTime());
  //   console.log(currTime.setHours(5));
  //   console.log(currTime.setMinutes(5));
  //   console.log(currTime.setSeconds(5));
  //   console.log(currTime.setMilliseconds(5));


  // ### PRACTICE TIME 

    // new Date().toLocaleTimeString();      // if you want only time 
    // new Date().toLocaleDateString();      // if you want only Date
    // new Date().toLocaleString();          // if you want both time and date


// #####\\\ MATH OBJECT IN JAVASCRIPT////#####

    //1.  console.log(Math.PI);

    //2. Math.round()

          // var num = 10.6446
          // console.log(Math.round(num));

    //3. Math.pow()

      // console.log(Math.pow(2,3));
     
    // 4. Math.sqrt()

          // console.log(Math.sqrt(26));
          // console.log(Math.abs(-26));       // by using abs we will always get positive values 

    //5. Math.ceil()

        // console.log(Math.ceil(55.02));  // no matter what is the number after dot it will always give you the preceeding value

    //6.Math.floor()

        // console.log(Math.floor(91.99));  // just opposite to ceil it gives you the lower value if you have a decimal value

    //7.Math.min()

        // console.log(Math.min(23,23,34,1,3,-10));
    
    //8. Math.max()

      // console.log(Math.max(3,99, 234, 134,345));


  