
// Applying hover animation to all of the buttons
colors_of_buttons = ["green", "red", "yellow", "blue"];

for (var index = 0; index < colors_of_buttons.length; index ++) {
    $(".btn." + colors_of_buttons[index]).hover(function () {
        $(this).animate({opacity: ".5"}, 150)
    },
    function () {
        $(this).animate({opacity: "1"}, 150)
    });
}

// Making main game logic
var correct_list = [];
var guessing_right = true;
var round_color;
async function main() {
    while (guessing_right) {
        var random_num = Math.random();
        if (random_num < .25) {
            round_color = "g";
        }
        else if (random_num < .5) {
            round_color = "r";
        }
        else if (random_num < .75) {
            round_color = "y";
        }
        else {
            round_color = "b";
        }
        correct_list.push(round_color);

        for (var index = 0; index < correct_list.length; index++) {
            await new Promise(r => setTimeout(r, 100));
            switch (correct_list[index]) {
                case "g":
                    $("#green").css("background-color", "white");
                    console.log("I'm still looping...")
                    await new Promise(r => setTimeout(r, 500));
                    new Audio('sounds/green.mp3').play();
                    $("#green").css("background-color", "green");
                    break;
                case "r":
                    $("#red").animate({color: "white"}, 500)
                    console.log("I'm still looping...")
                    await new Promise(r => setTimeout(r, 100));
                    // $("#red").animate({color: "red"}, 500)
                    break;
                case "y":
                    $("#yellow").animate({color: "white"}, 500)
                    console.log("I'm still looping...")
                    await new Promise(r => setTimeout(r, 100));
                    // $("#yellow").animate({color: "yellow"}, 500)
                    break;
                case "b":
                    $("#blue").animate({color: "white"}, 500)
                    console.log("I'm still looping...")
                    await new Promise(r => setTimeout(r, 100));
                    // $("#blue").animate({color: "blue"}, 500)
                    break;
                default:
                    break;
            }
        // for (var index = 0; index < correct_list.length; index++) {
            
        //     switch (correct_list[index]) {
        //         case "g":
                    
        //             break;
        //         case "r":
                    
        //             break;
        //         case "y":
                    
        //             break;
        //         case "b":
                    
        //             break;
        //         default:
        //             break;
        //     }
        }
    }
}
main();