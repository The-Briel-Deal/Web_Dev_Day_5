// Applying hover animation to all of the buttons
colors_of_buttons = ["green", "red", "yellow", "blue"];
var selections = 0;


for (var index = 0; index < colors_of_buttons.length; index++) {
    $(".btn." + colors_of_buttons[index]).hover(function () {
            $(this).animate({
                opacity: ".5"
            }, 150)
        },
        function () {
            $(this).animate({
                opacity: "1"
            }, 150)
        });
}

// Making main game logic
var correct_list = [];
var guessing_right = true;
var round_color;
var not_pushed = true;
async function nextRound() {
    var random_num = Math.random();
    if (random_num < .25) {
        round_color = "green";
    } else if (random_num < .5) {
        round_color = "red";
    } else if (random_num < .75) {
        round_color = "yellow";
    } else {
        round_color = "blue";
    }
        correct_list.push(round_color);

    num_of_loops = correct_list.length;
    for (var index = 0; index < num_of_loops; index++) {
        console.log("I looped!")
        await new Promise(r => setTimeout(r, 100));
        switch (correct_list[index]) {
            case "green":
                $("#green").css("background-color", "white");
                console.log("I'm still looping...")
                await new Promise(r => setTimeout(r, 500));
                new Audio('sounds/green.mp3').play();
                $("#green").css("background-color", "green");
                break;
            case "red":
                $("#red").css("background-color", "white");
                console.log("I'm still looping...")
                await new Promise(r => setTimeout(r, 500));
                new Audio('sounds/red.mp3').play();
                $("#red").css("background-color", "red");
                break;
            case "yellow":
                $("#yellow").css("background-color", "white");
                console.log("I'm still looping...");
                await new Promise(r => setTimeout(r, 500));
                new Audio('sounds/yellow.mp3').play();
                $("#yellow").css("background-color", "yellow");
                break;
            case "blue":
                $("#blue").css("background-color", "white");
                console.log("I'm still looping...");
                await new Promise(r => setTimeout(r, 500));
                new Audio('sounds/blue.mp3').play();
                $("#blue").css("background-color", "blue");
                break;
            default:
                break;

        }
    }
    selections = -1;
    selectNow();
    
}

async function selectNow(){
    selections += 1;
    await new Promise(r => setTimeout(r, 500));
    console.log(selections + "<" +correct_list)
    if(selections < correct_list.length){
        var event_listener = $("[type=button]").click(async function(){
            var currentButton = $(this).attr("id");
            if (currentButton == correct_list[selections]) {
                console.log("correct");
                console.log(selections);
                console.log(correct_list);
                $("body").css("background-color", "green")
                await new Promise(r => setTimeout(r, 100));
                $("body").css("background-color", "#011F3F")
                console.log("hit")
                $("[type=button]").off("click");
                selectNow();
            }
            else{
                console.log("wrong")
                $("body").css("background-color", "red");
                await new Promise(r => setTimeout(r, 100));
                $("body").css("background-color", "#011F3F");
                correct_list = [];
                window.location.reload();
                new Audio("sounds/wrong.mp3")
            }
            
        });
        
    }
    else{
        nextRound();
    }
}
    

// async function inputTime(){
//     $("[type=button]").click(function() {
//         for (var index=0; index < correct_list.length; index++){
//             if (console.log($(this).attr("id"))==correct_list[index]){
//                 new Audio(correct_list[index] + ".mp3").play();
//                 nextRound();
//             }
//             else {
//                 new Audio("sounds/wrong.mp3").play();
//                 $("body").css("background-color", "red");
//                 // await new Promise(r => setTimeout(r, 500));
//                 $("body").css("background-color", "#011F3F");
//                 correct_list = [];
//                 console.log("lost")
//                 nextRound();
//             }
//         }
        
//     });
// }
$("body").keypress(nextRound);



// I'm currently facing the problem of figuring out how to wait for a bit 
// while the user inputs with button presses.
// going to think for a bit then come back.