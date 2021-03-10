//$(function () {
//console.log($(`.top-header-two`));
//console.log($(`.top-header-three`));
//});

//function one
$(function oneclick() {
    $(`.top-header-one`).on(`click`, function () {
        $(`.top-footer`).slideToggle();
    });
});
//function two
$(document).ready(function () {
    $('.top-header-two').click(function () {
        $('.bloktwo').slideToggle(300);
        $(`.top-footer`).slideToggle();
        return false;
    });
});
//function three
$(document).ready(function () {
    $('.top-header-three').click(function () {
        $('.blokthree').slideToggle(300);
        $(`.top-footer`).slideToggle();
        return false;
    });
});