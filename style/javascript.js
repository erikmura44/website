
$("input").blur(function (event) {
    if($(this).val() === ""){
        $(this).css('border','1px solid red');
        $("#output").text('Forgot to add text?');
    }
}); /*if no text is added, border red*/

// 
// $(document).ready(function(){
//     $('.name').focus();
// }); /*auto focus on name input*/

$(document).ready(function () {
    $('.email, .message').hide();
    $('.name').click(function () {
        $('.email').fadeIn(500);
        $('.message').fadeIn(500);
    });
});
