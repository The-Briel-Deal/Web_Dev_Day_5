console.log($(".btn.green").css("opacity"))

colors_of_buttons = ["green", "red", "yellow", "blue"];

for (var index = 0; index < colors_of_buttons.length; index ++) {
    $(".btn." + colors_of_buttons[index]).hover(function () {
        $(this).animate({opacity: ".5"}, 150)
    },
    function () {
        $(this).animate({opacity: "1"}, 150)
    });
}