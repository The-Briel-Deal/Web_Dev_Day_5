document.querySelector("h1").innerText = "You manipulate me with vanilla javascript!!! 😧";
$("#heading1").addClass("big-title");
$("#heading2").removeClass("big-title")
$("#heading2").text("You manipulated me with JQuery Gabriel 😒")
$("button").html("<em>no I do not want to be clicked 😙</em>")
$("a").attr("href", "https://www.google.com")
$("#heading1").click(function() {
    $("h1").css("color", "orange")
})

$("#textbox").keypress(function(event) {
    var split_string = ($("#heading2").text().split(""));
    split_string.push(event.key)
    console.log(split_string);
    var str = split_string.join("");
    $("#heading2").text(str);
    // console.log(typeof (($("#heading2").text().split("") + event.key))
});
$("button").click(function() {
    $("h1").css("color", "purple");
});
$("h1").before("<button>New</button>")