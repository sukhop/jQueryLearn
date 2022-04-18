// adding css styling using jQuery
$("h1").css("color","gold");

// adding class using jQuery
$("h1").addClass("big-title title-bg");

// manipulating innerHTML using jQuery
$("h1").html("<em>Bye</em>");

// manipulating anchor tag attribute using jQuery
$("a").attr("href","https://yahoo.com");

// adding event listner using jQuery
$("h1").click(function() {
    $("h1").css("color", "white");
});

// adding event listner to all buttons without using any loop in jQuery
$("button").click(function() {
    $("h1").css("color","red");
});

// getting key strokes using jQuery
$("input").keydown(function(e) {
    console.log(e.key);
});

// challange if we press any key it should show in h1
$(document).keydown(function(event){
    $("h1").text(event.key);
});

// adding event listner in more flexible way using jQuery
$("h1").on("mouseover",function() {
    $("h1").css("color","black");
});

// adding button elements before and after h1 tag using jQuery
$("h1").before("<p>This is before text</p>");
$("h1").after("<p>This is after text</p>");

// prepend and append element using jQuery
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

// creating show and hide with toggle using jQuery
$("button").on("click", function() {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity:0.5});
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});