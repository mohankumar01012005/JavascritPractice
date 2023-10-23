// FUNCTIONS
// var a = 10
// var b =20
// var c = a+b
// console.log(c);

// function total(a,b ){
//   var a = 10  
//   var b =20
//   var c = a+b
//   console.log(c);
// }                     // defining a function 


// total();               //calling that function

//## FUNCTION PARAMETERS AND ARGUMENT

// function total(a,b ){     // a, b are function parameters 
//   var c = a+b
//   console.log(c);
// }                    
// total();                  
// total(50,40);            // 50,40 are function arguments
// total(20,30);              

//## FUNCTION EXPRESSION

// function total(a,b ){     
//   var c = a+b
//    console.log(c);
//  }                    
 
 
//  var funExpr = total(10,20); 
//  funExpr;                    //FUNCTION EXPRESSION


//## RETURN KEYWORD


// function total(a,b ){     
//    return c = a+b;        //using return key word
//    }                    
   
   
//    var funExpr = total(1,20); 
//    console.log('The sum of two numbers is:'+ funExpr); 


//##ANONYMOUS FUNCTION

// var funExpr = function (a,b ){     
//    return c = a+b;        
//    } 
//   console.log(funExpr(20 ,4));                   
// console.log('The sum of two numbers is:'+ funExpr); 


// var funExpr = function (a,b ){     
//    return c = a+b;        
//    } 
//   sum=funExpr(20 ,40 );                    
// console.log('The sum of two numbers is:'+ sum); 


// var funcexp = function (a,b){
//   return d=a**b;
// }

//  total=funcexp(10,3);
//  console.log(total);


//## TEMPLATE LITERALS

// for (let num = 1; num<=10;num++){
//   let tableOf = 2;
//   console.log(`${tableOf}*${num}=${tableOf*num}`);
// };

//## DEFAULT PARAMETER
// function mun(a,b=5){
//   return a*b;
// }
// console.log(mun(3,));


//###FAT ARROW FUNCTION
// const sum = () => {
//   let a = 10; b=20; 
//   let sum = a+b;
// return `the sum of two numbers is  ${sum}`;
// }

// console.log(sum());

// ##SIMPLIFIED VERSION 

// const sum = () => {
//   let a = 10; b=20; 
//  return `the sum of two numbers is  ${a+b}`;
// }
// console.log(sum());

// ##SIMPLIFIED VERSION 

// const sum = () => {
//   let a = 10; b=20; 
  
//  return `the sum of two numbers is  ${(a=3)+(b=5)}`;
// }
// console.log(sum());

//##SIMPLEST VERSION

// const sum = () => `the sum of two numbers is  ${(a=3)+(b=5)}`;
// console.log(sum());


//####ARRAYS IN JAVASCRIPT

// let king=['lion', 'cheeta', 'panda', 'lepord', 3, true]
// console.log(typeof king);

// ## TRAVERSAL IN AN  ARRAY

// let king=['lion', 'cheeta', 'panda', 'lepord']
// console.log(king[2]);

//## LENGTH OF ARRAY

// let king=['lion', 'cheeta', 'panda', 'lepord']
// console.log(king.length);

//### FOR LOOP 

  // let king=['lion', 'cheeta', 'panda', 'lepord']
  // for (var i=0; i<king.length;i++){
  //   console.log(king[i]);
  // }


//##FOR IN LOOP 

    // let king=['lion', 'cheeta', 'panda', 'lepord']

    // for (Elements in king){
    //   console.log(Elements);
    // }

//##FOR OF LOOP

    // let king=['lion', 'cheeta', 'panda', 'lepord']
    // for (Elements of king ){
    //   console.log(Elements);
    // }

//##FOR EACH LOOP

    // let king=['lion', 'cheeta', 'panda', 'lepord']
    // king.forEach(function(Element,index,array){
    //   console.log(Element+" index:"+index);
    // });

    //## FOR EACH LOOP USING FAT ARROW METHOD 
    // let king=['lion', 'cheeta', 'panda', 'lepord']
    // king.forEach((Element,index,array)=>{
    //   console.log(Element+" index:"+index+""+array)
    // });


//### SEARCHING AND FILTER IN ARRAY
      //## indexOf method 
    
      // let king=['lion', 'cheeta', 'panda', 'lepord']
      // console.log(king.indexOf("cheeta"));
      
      
      // let king=['panda', 'cheeta', 'lion', 'lepord','lion']
      //  console.log(king.indexOf("lion",3));     //("lion",3)--> lion is the element we are searching for and three denotes we are searching in right direction


      



















