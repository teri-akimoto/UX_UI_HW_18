$(".down-hotspot").click(function() {
    var offset = 160;
    var target = $("#case-study1");
    $('html, body').animate({
        scrollTop: target.offset().top + offset
    }, 1000);
});

$(".russian").click(function() {
    $(".greeting").text('Здравстуйте, я Лана.');
    $(".russian").cssChange("border", "2px solid black")
    document.getElementsByClassName('english').style.backgroundImage="url(../icons/emojione_flag-for-united-kingdom-disabled.svg)";
});