//#### SPLICE METHOD

//## CHALLENGE - 10

    // const months=['Jan', 'march', 'April', 'June', 'July'];

    // const newMonth = months.splice(4,0,'Dec');
    //  console.log(months);
    
///## the return value of splice method 

    // console.log(newMonth);   // splice method is mostly used for deleting the eelments in  return value it will give the deleted values

// ## UPDATING
    // const months=['Jan', 'march', 'April', 'June', 'July'];
    // const newMonth = months.splice(1,1,'March')
    // console.log(months);

//### ORIGINAL METHOD FOR UPDATING AN ARRAY 

    // const months=['Jan', 'march', 'April', 'June', 'July'];
    // const indexOfMonth = months.indexOf('June');   /// finding index of elements in array using filter (indexof) method
    // if (indexOfMonth!=-1){
    //   const updateMonths = months.splice(indexOfMonth,1,'june')
    //   console.log(months);
    // }else{
    //   console.log('no data found');
    // }


//## deleting an unknown index number element from array


    // const months=['Jan', 'march', 'April', 'June', 'July'];
    // const indexOfMonth = months.indexOf('June');   /// finding index of elements in array using filter (indexof) method
    // if (indexOfMonth!=-1){
    //   const updateMonths = months.splice(indexOfMonth,1)    /// same as updating but removed the element adding part
    //   console.log(months);
    //   console.log(updateMonths);            // returns the deleted elements from an array
    // }else{
    //   console.log('no data found');
    // }


///#### MAP AND REDUCE METHOD

//##array.prototype.map()

// const array1 = [1,3,4,5,6,];
// let newArr = array1.map((currElement,index,arr)=>{
//   return currElement>4   //in this case it will only give you true or false (is the element satisfies the condition or not)
// })
// console.log(array1);
// console.log(newArr);


// const array1 = [1,3,4,5,6,];
// let newArr = array1.map((currElement,index,arr)=>{
//   return `index no = ${index} and the element value is ${currElement} of the array ${arr}`
// })
//  console.log(array1);
//   console.log(newArr);


//## CHALLENGE - 11

  //## finding sqare root of every element in array
    // let arr = [ 25, 36, 49, 64, 81];
    // let arrSqr = arr.map((currElement)=>{
    //   return Math.sqrt(currElement)
    // })
    // console.log(arrSqr);

  //## multiply each element with 2 and return the elemrnts which are greater than 10

    // let arr = [5,6,7,8,9];
    // let arr2 = arr.map((currElement)=>{
    //   return currElement*2;
    // }).filter((customElements)=>{         //using chaining (a method inside a method(filter))
    //   return customElements>10;
    // })
    // console.log(arr2);

//### REDUCE METHOD

  //## finding sum

    // let arr = [2,4,6]
    // let sum = arr.reduce((accumulator,currElement,index,arr)=>{
    //   return accumulator += currElement
    // },7)                          // we can include or initialise a value to the array like this in reduce function
    // console.log(sum);

  //## finding product

    // let arr = [2,4,6]
    // let sum = arr.reduce((accumulator,currElement,index,arr)=>{
    //   return accumulator *= currElement
    // })
    // console.log(sum);


//### USING MAP, FILTER AND REDUCE FUNCTIONS SAME TIME ***************** IMPORTANT ***************

    // let arr =  [2, 4, 5, 3, 9, 8 ]
    // let arr2 = arr.map((customElements)=>customElements*2).filter((currElement)=>currElement>4).reduce((accumulator,currElement)=>{
    //   return accumulator += currElement
    // })
    // console.log(arr2);


//## How to flatten an array

    // let arr = [
    //   ['zone1','zone2'],
    //   ['zone3','zone4'],
    //   ['zone5','zone6'],
    //   ['zone7','zone8']
    // ]
    // let fltArr = arr.reduce((accumulator,currentElements)=>{
    //   return accumulator.concat(currentElements);

    // })
    //     console.log(fltArr);


//##### STRINGS IN JAVASCRIPT

  // ## length of string

    // let myname = "mohan kumar"
    // console.log(myname.length);


  // ##Escape charecter

  let myname = "mohan kumjcvhfeiuvhwofhwdfoimf\"hcbuhwgfuwegfdwe\"ar"     // use alternate quotes or back slash \ \
  console.log(myname);
  