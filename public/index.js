$(document).ready(function() {
    $(".home-img").animate({
        left: "20px"
    }, "slow");

    $(".home-name").animate({
        height: "show"
    }, "slow");

    $(".home-intro").animate({
        height: "show"
    }, "slow");

    $(".project-display").animate({
        height: "show"
    }, "slow");

    // $(".framework").fadeIn(2500);
    $(".project-display").hover(function() {
        $(".framework").animate({
            height: "show"
        }, "slow")
    }, function() {
        $(".framework").css("display", "none");
    });

    $(".about-first-content h2").animate({
        height: "show"
    }, 800);

    $(".about-educations").animate({
        height: "show"
    }, 800).css("display", "inline-block");

    $(".about-img-bg").animate({
        right: "150px"
    }, 800);
});

$(".project-display").hover(function() {
    $(this).css("box-shadow", "2px 4px 8px #6D9886");
}, function() {
    $(this).css("box-shadow", "none");
});

$(".about-second-content h2").hover(function() {
    $(this).css("opacity", 1);
}, function() {
    $(this).css("opacity", 0.5);
})

$(".mid h3").hover(function() {
    $(this).css("text-shadow", "0.5px 0.5px 3px #F6F6F6");
}, function() {
    $(this).css("text-shadow", "none");
});

$(".name").hover(function() {
    $(this).css("text-shadow", "0.5px 0.5px 3px #F6F6F6");
}, function() {
    $(this).css("text-shadow", "none");
});