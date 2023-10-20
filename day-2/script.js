// x = 5 
// y = 5
// console.log("mohan"+x==y); //false becauese we concatinating x with string and we are comparing it

// console.log(`mohan:${x==y}`);

// ##POSTFIX DECREAMENT
// num = 15
// newNum = num--
// console.log(num);
// console.log(newNum);


// ##PREFIX DECREAMENT
// num = 15
// newNum = --num
// console.log(num);
// console.log(newNum);

 //##COMPARISON OPRATORS
// a=10 
// b=10
// console.log(a<b);
// console.log(a>b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a>=b);
// console.log(a<=b);


//##LOGICAL OPERATOR
// a=20
// b=-30
// console.log((a>b) && (b>0));
// console.log((a>b) || (b>0));
// console.log(!(a>b) || (b>0));
// console.log(true);
// console.log(false);

//## CONCATINATING TWO STRINGS


//###CHALLENGE 4
// console.log(3**3); //power(3*3*3)

// console.log(10**-1); // 10**-1==1/10

// console.log(5+"mohan"); //5mohan
// console.log(5-"mohan"); //NaN 

//swap
// var a = 5 
// var b = 10

// c = b
// b=a 
// a=c
// console.log(a);
// console.log(b);

// var a = 5 
// var b = 10

// a=a+b
// b=a-b
// a=a-b
// console.log(a);
// console.log(b);

//##Differense between == and ===
// a = 5
// b = "5"
// console.log(a==b); //true
// console.log(a===b); //false

//###CONTROL STATEMENTS AND LOOPS
  //##IF.. ELSE
// var names = "mohan";
// if (names=="mohan"){
//   console.log("correct name ");

// }else{
//   console.log("incorrect name");
//   }

//###CHALLENGE-5
  //LEAP YEAR
  //  var year = 2025;
  //  if(year%4===0){
  //   if(year%100===0){
  //     if(year%400===0){
  //       console.log("The year "+year+" is a leap year");

  //     }else{
  //       console.log("The year "+year+" is not a leap year");

  //     }

      
  //   }else{
  //     console.log("The year "+year+" is a leap year");

  //   }

  //  }else{
  //   console.log("The year "+year+" is not a leap year");
  //  }

  // truthy and falsy values in javascript(0, "", Undefined, null, NaN, false**,)
  // if (""){
  //   console.log("i am mohan");
  // }else{
  //   console.log("i am not mohan");
  // }


//##Conditional Ternary operator 
//==>variablename = (Condition)? value1:value2       {if and else's shorter version}

// age = 18;
// console.log((age>=18)? "you can vote":"you can't vote");


//##SWITCH STATEMENT
// var area = "circle"
// var PI=3.142, l=5, b=4, r=3;
// if (area=="circle"){
// c}else if(area=="rectangle"){
//   console.log("area of ractangle is " + l*b );
// }else if(area=="triangle"){
//   console.log("area of triangle is " + (l*b/2) );
// }else{
//   console.log("enter valid data");
// }


//## SWITCH STATEMENT with BREAK

// var area = "circle"
// var PI=3.142, l=5, b=4, r=3;
// switch(area){
//   case'circle':
//     console.log("area of circle is " + PI*r**2 );
//     break;
//   case'triangle':
//     console.log("area of triangle is " + (l*b/2) );
//     break;
//   case'rectangle':
//     console.log("area of ractangle is " + l*b );
//     break;
//   default:
//     console.log("enter valid data");}


//##WHIL LOOP

// var num = 0;
// //Block scope
// while(num<=10){
//   console.log(num);     // Infinite Loop
//   ++num
// }

//##DO- WHILE LOOP

// var num = 20;
// do{
//   console.log(num);     // Infinite Loop
//   ++num  
// }while(num<=10);


// ## FOR LOOP
// for ( var num=5;num<=10;num++){
//   console.log(num);
// }


//##CHALLENGE-6
//# PRINTING TABLES  

// for(var num = 1;num<=10;num++){
//   var tableof = 78;
//   console.log(tableof+"x"+num+"="+tableof*num);
// }


