/* 
 \d - match any digit (equal to [0-9])
 \w - match any word  character (a-z,A-Z,0-9, &_)
 \s - match whitespace character (eg - spaces & tabs)
 \t - match a tab only 
 */
var btn = document.getElementById('btn');
var form = document.getElementById('form');

function valid(x){
    document.getElementById(x).innerHTML="Valid";
    document.getElementById(x).style.color = "white";
}

function invalid(x){
    document.getElementById(x).innerHTML="InValid";
    document.getElementById(x).style.color = "orange";
}
 

function validateEml(){
    var txt = document.getElementById("eml").value;
    var valTxt = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;

   /*
    '+' means there is no fix range, it keeps on accepting a character/digit unlil it satisfies the condition 
    {2,20} min: 2 , max: 20 character
    */

   if(valTxt.test(txt))
   {
       valid('emlVal');
       return true;
   }

   else{
        invalid('emlVal');
        return false;
   }
  
};

function validate(){
    if(validateEml()){return true;}
        
    else {
        alert("Wrong Email input!");
        return false;
    }
};


    btn.addEventListener('click',validatePhn);
    btn.addEventListener('click',validateEml);
    btn.addEventListener('click',function(){
        
    })


