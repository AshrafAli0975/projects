var ac=document.querySelector("#ac");
var back=document.querySelector("#back");
var per=document.querySelector("#per");
var divide=document.querySelector("#divide");
var seven=document.querySelector("#seven");
var eight=document.querySelector("#eight");
var nine=document.querySelector("#nine");
var multiply=document.querySelector("#multiply");
var four=document.querySelector("#four");
var five=document.querySelector("#five");
var six=document.querySelector("#six");
var minus=document.querySelector("#minus");
var one=document.querySelector("#one");
var two=document.querySelector("#two");
var three=document.querySelector("#three");
var equal=document.querySelector("#equal");
var plus=document.querySelector("#plus");
var evalu=document.querySelector("#evalu");

var count="";
ac.addEventListener("click",function(){
    count="";
    evalu.innerHTML=count;
})
per.addEventListener("click",function(){
    count=count+"%";
    evalu.innerHTML=count;
})
divide.addEventListener("click",function(){
    count=count+"/";
    evalu.innerHTML=count;
})
seven.addEventListener("click",function(){
    count=count+"7";
    evalu.innerHTML=count;
})
eight.addEventListener("click",function(){
    count=count+"8";
    evalu.innerHTML=count;
})
nine.addEventListener("click",function(){
    count=count+"9";
    evalu.innerHTML=count;
})
multiply.addEventListener("click",function(){
    count=count+"*";
    evalu.innerHTML=count;
})
four.addEventListener("click",function(){
    count=count+"4";
    evalu.innerHTML=count;
})
five.addEventListener("click",function(){
    count=count+"5";
    evalu.innerHTML=count;
})

six.addEventListener("click",function(){
    count=count+"6";
    evalu.innerHTML=count;
})


back.addEventListener("click",function(){
    count=count+" ";
    evalu.innerHTML=count;
})

minus.addEventListener("click",function(){
    count=count+"-";
    evalu.innerHTML=count;
})
one.addEventListener("click",function(){
    count=count+"1";
    evalu.innerHTML=count;
})
two.addEventListener("click",function(){
    count=count+"2";
    evalu.innerHTML=count;
})
three.addEventListener("click",function(){
    count=count+"3";
    evalu.innerHTML=count;
})
plus.addEventListener("click",function(){
    count=count+"+";
    evalu.innerHTML=count;
})
equal.addEventListener("click",function(){
    evalu.innerHTML=eval(count);
})

