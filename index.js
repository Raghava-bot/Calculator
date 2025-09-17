let input=document.getElementById("r");
let button=document.querySelectorAll("button");
let string="";
let arr=Array.from(button);
arr.forEach(button=>{
   button.addEventListener('click',(e)=>{
   //console.log(e.target.innerHTML);
    if(e.target.innerHTML=="="){
        string=eval(string);
        input.value=string;
    }
    else if(e.target.innerHTML=='AC'){
       string=0;
       string=" ";
        input.value=string;
       
    }
    else if(e.target.innerHTML=='DEL'){
       string=string.substring(0,string.length-1);
        input.value=string;
       
    }
    else{
    string+=e.target.innerHTML;
    input.value=string;
    }
   })
})