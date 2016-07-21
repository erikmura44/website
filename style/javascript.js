
$("input[type=text], input[type=email], #msg").on("click", function (event) {
    var color = $(this).val();
    $("form").css("background-color", "#beddf3");
});
$("button[type=submit]").hover(function (event) {
    $("form").css("background-color", "white");
});
$("button[type=submit]").on("click", function (event) {
    $("form").css("background-color", "#83F52C");
});
