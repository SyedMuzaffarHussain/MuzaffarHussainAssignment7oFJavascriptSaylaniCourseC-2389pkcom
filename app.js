function Clickbtn(num){
   // console.log(num);
   
    var reslt=document.getElementById("btxy");
     reslt.value+=num;
    
}

function ClearResult(){
    var reslt=document.getElementById("btxy");
     reslt.value="";
}

function back(){
    var reslt=document.getElementById("btxy");
    reslt.value=reslt.value.slice(0,-1)
}
function geTRESULT()
{
    var reslt=document.getElementById("btxy");
    reslt.value=eval(reslt.value);
}

function SE()
{
    var reslt=document.getElementById("btxy");
    reslt.value=eval( reslt.value* reslt.value)
} 
function SECube()
{
    var reslt=document.getElementById("btxy");
    reslt.value=eval( reslt.value*reslt.value*reslt.value)
} 
function SQuarOOT()
{
    var reslt=document.getElementById("btxy");
    reslt.value=Math.sqrt(reslt.value);
} 
function cOS()
{
    var reslt=document.getElementById("btxy");
    reslt.value=Math.cos((reslt.value*3.141592654)/180);
} 
function sIN()
{
    var reslt=document.getElementById("btxy");
    reslt.value=Math.sin((reslt.value*3.141592654)/180);
} 
function tAN()
{
    var reslt=document.getElementById("btxy");
    reslt.value=Math.tan((reslt.value*3.141592654)/180);
} 


// function factorial()
// {
//     var reslt=document.getElementById("btxy");
//     var reslt=1
//     for(i=reslt.value;i<=1;i--)
//     {
//         reslt.value=reslt.value*i;
//     }
    
// } 



// function fun(){
//     var reslt=document.getElementById("btxy");
//     reslt.value=num;
//  }
