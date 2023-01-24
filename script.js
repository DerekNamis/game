
let blueblock = document.getElementById("block");
let lose = document.getElementById("lose");
let redblock = document.getElementById("character");
let button=document.getElementById("button");
let block2=document.getElementById("block2")
let hi=document.getElementById("hi")
let ab=document.getElementById("ab");


function jump (){
    
    if (redblock.classList != "animation"){
        redblock.classList.add ("animation")
    }

    if (hi.classList != "pp"){
        hi.classList.add("pp")
    }

    setTimeout (function () {
        redblock.classList.remove ("animation");
        hi.classList.remove("pp")
    },500);
}

let check = setInterval (
   
    function(){
        let redtop = parseInt (window.getComputedStyle(redblock).getPropertyValue("top"));
        let blueleft = parseInt (window.getComputedStyle(blueblock).getPropertyValue("left"));
        if (blueleft <= 100 && blueleft > 0 && redtop >= 280 ){
            blueblock.style.animation = "none";
            lose.style.display = "block";
            block2.style.animation="none"
            block2.style.display="none"
            blueblock.style.display="none"
            ab.style.display="block"
            redblock.classList.add("animate")
        }
       
    }
   ,10); 
   
 
   check = setInterval(
    function(){
        let redtop = parseInt (window.getComputedStyle(redblock).getPropertyValue("top"));
        let block2left = parseInt (window.getComputedStyle(block2).getPropertyValue("left"));
        if (block2left <= 100 && block2left > 0 && redtop >= 250 ){
            blueblock.style.animation = "none";
            lose.style.display = "block";
            block2.style.animation="none"
            block2.style.display="none"
            blueblock.style.display="none"
            ab.style.display="block"
            redblock.classList.add("animate")
        }}
    ,10)

  button.addEventListener("click",()=>{
    let input=document.getElementById("input");
    let vv=input.value
    hi.innerHTML=vv;
    if(vv=="exo" || vv=="EXO" || vv=="Exo" || vv=="eXo" || vv=="exO" || vv=="EXo" || vv=="ExO" || vv=="EXo"){
        hi.innerHTML="your are banned by game creater"
     }
  })

   function restart(){
     blueblock.style.animation = "block 2s infinite linear 1.5s";
    lose.style.display = "none";
     block2.style.animation="block2 2s infinite linear 5s"
     block2.style.display="block"
    blueblock.style.display="block"
     ab.style.display="none"
     redblock.classList.add("animate");
  }


  
  
    
  

   
