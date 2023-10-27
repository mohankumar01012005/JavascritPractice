  // function myFunction(){
  //   var d = new Date()
  //   d.setHours(6);
  //   document.getElementById("demo").innerHTML = d;
  // }

(function(){
  setInterval(()=>{
    var d  = new Date().toLocaleTimeString();
    document.getElementById("demo").innerHTML = d;

  },1000)
})();

var d  =  new Date().toLocaleTimeString(); 
document.getElementById("demo").innerHTML = d;


var t  = new Date().toLocaleDateString(); 
document.getElementById("time").innerHTML = t;

