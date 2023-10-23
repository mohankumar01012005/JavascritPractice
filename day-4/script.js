//## LAST INDEX OF METHOD


    // let king=['panda', 'cheeta', 'lion', 'lepord','lion']
    //   console.log(king.lastIndexOf("lion",3));       //("lion",3)--> lion is the element we are searching for and three denotes we are searching in left direction


//##INCLUDES()    

      
    // let king=['panda', 'cheeta', 'lion', 'lepord','lion']
    //   console.log(king.lastIndexOf("lion")); 

      
    // let king=['panda', 'cheeta', 'lion', 'lepord','lion']
    //     console.log(king.includes("panda",3));                // false becauese its starting search from index 2             
      



//###  FIND ()  

    // var prices = [200,300,350,380,400,450,600];
    // ///aim is to find all the price<400
    // const findElem = prices.find((currval)=>{
    //    return currval<400;
    // });
    // console.log(findElem);          //will give you only one value that satisfies the return condition first

  //##SIMLPIFIED WAY

    // var prices = [200,300,350,380,400,450,600];
    //   console.log(prices.find((currval)=> currval<400) );


  //  ## FIND INDEX ()

  // var prices = [200,300,350,380,400,450,600];
  // console.log(prices.findIndex((currval)=> currval<400) );

  //### FILTER METHOD()

  // var prices = [200,300,350,380,400,450,600];
  // // condition prices<400
  //  const newPrice=prices.filter((Element, index)=>{
  //   return Element<400;
  //  })
  //     console.log(newPrice);