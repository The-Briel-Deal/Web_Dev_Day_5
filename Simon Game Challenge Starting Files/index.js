
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
                    $("#red").css("background-color", "white");
                    console.log("I'm still looping...")
                    await new Promise(r => setTimeout(r, 500));
                    new Audio('sounds/red.mp3').play();
                    $("#red").css("background-color", "red");
                    break;
                case "y":
                    $("#yellow").css("background-color", "white");
                    console.log("I'm still looping...")
                    await new Promise(r => setTimeout(r, 500));
                    new Audio('sounds/yellow.mp3').play();
                    $("#yellow").css("background-color", "yellow");
                    break;
                case "b":
                    $("#blue").css("background-color", "white");
                    console.log("I'm still looping...")
                    await new Promise(r => setTimeout(r, 500));
                    new Audio('sounds/blue.mp3').play();
                    $("#blue").css("background-color", "blue");
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

// I'm currently facing the problem of figuring out how to wait for a bit 
// while the user inputs with button presses.
// going to think for a bit then come back.