

//checking jquery ready or not 
$(document).ready(function(){
   $("h1").css("color","blue");
});

$("h1").addClass("big-title");


//adding html
$("button").html("<em>HEY</em>");

//manipulating attributes
$("a").attr("href","https://www.yahoo.com");

//event listeners
$("h1").click(function(){
    $("h1").css("colour","purple");
});

//comparison
for(var i=0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.colour="purple";
    });
}

$("button").click(function(){
    $("h1").css("colour","purple");
});