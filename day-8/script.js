
// ##Extracting string parts  {there are 3 methods or ways }

// ## SLICE() method

    // var string = "apple, banana, orange, gua, kiwi";
    // var result = string.slice(0,4)      // end argument (4) is not included
    // console.log(result);


//# CHALLENGE - 10

  // DISPLAY ONLY 280 OF A STRING JUST LIKE TWITTER

    // var largeOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit, sed ducimus in fuga distinctio nisi doloremque neque facilis voluptatem dolor omnis saepe, nesciunt numquam ut dicta, quibusdam dolorem minima? Quaerat iure, illum nobis quo, fugit illo omnis ut ratione dolores et consectetur beatae. Consequuntur quas, inventore excepturi velit quia quam soluta asperiores suscipit, nam dolor qui! Molestias, ipsam eum modi minus dolores laborum amet assumenda eius consequatur sint fuga. Magnam nostrum et libero vero, quas esse eaque quibusdam! Officia dolores nesciunt vel labore in expedita eaque illo tenetur maiores, rem aliquam accusantium."
    // var corrected = largeOne.slice(0,280)
    // console.log(largeOne.length);
    // console.log(corrected);

          
  //## substr() method

      //  var fruits = "apple, banana, orange, gua, kiwi";
      //  var updated = fruits.substr(-10)

      
 // ## Replacing String content

     // ##replace()

          // var bioData = 'i am mohan kumar'
          // var replecaData = bioData.replace('mohan','king')
          // console.log(replecaData);
          // console.log(bioData);


// ### Extracting string characters {there are 3 methods for  Extracting string character }

  // ## The charAt() Method 

        // var myData = "mohankumar the kalvian"
        // console.log(myData.charAt(5));



    //## The charCodeAt() Method 

    // var myData = "mohankumar the kalvian"
    // console.log(myData.charCodeAt(5))

// ## Challenge  {return the unicode of the last character of the string}

    // let str = "HELLO WORLD"
    // let lasChar = str.length;
    // console.log(lasChar);
    // console.log(str.charCodeAt(lasChar-1));


  // ## property access

    // let str = "HELLO WORLD"
    // console.log( str[2]);


//### to upper case and to lower case  method 
   
    //  let names = "Mohan The King"
    //   console.log(names.toLocaleLowerCase());
    //   console.log(names.toLocaleUpperCase());

//### Concat() method 

    // var firstName = "mohan"
    // var lastName = "kumar"
    // console.log(firstName.concat(lastName));
    // console.log(firstName.concat(" ",lastName));
    // console.log(firstName+ " "+lastName);
    // console.log(`${firstName} ${lastName}`);


//## string.trim() method

      // var names = "         mohan "
      // console.log(names.trim());
 
  
// ## Converting a string to an array

// ## Spli() method 

    // var txt = "a,d,e,h,v,f,"          //string
    // console.log(txt.split(","));      //split on comas
    //   console.log(txt.split(""));       // split on spaces
    //   console.log(txt.split("|"));      // spli on pipe

    
