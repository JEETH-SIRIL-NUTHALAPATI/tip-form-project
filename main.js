
let btn = document.getElementById("button");

btn.addEventListener("click",function(){
   let bill = document.getElementById("bill").value;
   
   let ppl = document.getElementById("ppl").value;
     
   let cho = document.getElementById("op").value; 
   if(cho == 20)tip = 20;
   if(cho == 10)tip = 10;
   if(cho == 2)tip = 2;

  
  
   let tipA = bill*tip/100;
   let totA = bill - (-tipA);
   let shaA =  totA/ppl;

   document.getElementById("p1").innerHTML = "Tip Amount  $ " + tipA;
   document.getElementById("p2").innerHTML = "Total Amount $ " + totA;
   document.getElementById("p3").innerHTML = "Each Person owes $ " + shaA;

})