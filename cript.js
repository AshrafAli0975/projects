// var value=document.querySelector("#val");
// var calc=document.querySelector("#calc");
// value.addEventListener("click",function(){
// vaue.style.backgroundColor="green";
// })
$('#val').click(()=>{
    $('#val').css('background-color','green');
})
var clutter="";
$('#sev').click(()=>{
    clutter+=7;
    $('#val').html(clutter);

})
$('#eigh').click(()=>{
    clutter+=8;
    $('#val').html(clutter);

})
$('#nine').click(()=>{
    clutter+=9;
    $('#val').html(clutter);

})

$('#mult').click(()=>{
    clutter+= "*";
    $('#val').html(clutter);

})

$('#for').click(()=>{
    clutter+=4;
    $('#val').html(clutter);

})
$('#fiv').click(()=>{
    clutter+= 5;
    $('#val').html(clutter);

})
$('#six').click(()=>{
    clutter+=6;
    $('#val').html(clutter);

})

$('#minu').click(()=>{
    clutter+= "-";
    $('#val').html(clutter);

})
$('#onen').click(()=>{
    clutter+=1;
    $('#val').html(clutter);

})
$('#two').click(()=>{
    clutter+=2;
    $('#val').html(clutter);

})
$('#thr').click(()=>{
    clutter+=3;
    $('#val').html(clutter);

})
$('#plus').click(()=>{
    clutter+= "+";
    $('#val').html(clutter);

})
$('#clr').click(()=>{
    clutter="";
    $('#val').html(clutter);

})
$('#mod').click(()=>{
    clutter+="%";
    $('#val').html((clutter));

})
$('#div').click(()=>{
    clutter+="/";
    $('#val').html((clutter));

})
$('#zer').click(()=>{
    clutter+=0;
    $('#val').html(clutter);

})
$('#fot').click(()=>{
    clutter+=".";
    $('#val').html(clutter);

})
$('#equal').click(()=>{
    
   var ans=(eval(clutter));
   $('#val').html(ans);

})



