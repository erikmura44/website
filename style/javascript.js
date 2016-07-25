
$("input").blur(function (event) {
    if($(this).val() === ""){
        $(this).css('border','1px solid red');
        $("#output").text('Forgot to add text?');
    }
}); /*if no text is added, border red*/

$(document).ready(function () {
    $('.email').hide();
    $('.name').click(function () {
        $('.email').fadeIn(500);
    });
}); /*hides email field on contact */

$(document).ready(function () {
    $('.message').hide();
    $('.email').click(function () {
        $('.message').fadeIn(500);
    });
});/*hides message field on contact */
