// SECTION-EXPANDER
$('#youtube').click(function() {
    console.log('youtube link')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});
$('#facebook').click(function() {
    console.log('facebook link')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});
$('#instagram').click(function() {
    console.log('instagram link')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});
$('#twit').click(function() {
    console.log('twit link')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});
$('#tiktok').click(function() {
    console.log('tiktok link')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});
$('#spotify').click(function() {
    console.log('spotify link')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});
$('#apple-music').click(function() {
    console.log('apple-music link')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});
$('#tickets').click(function() {
    console.log('tickets link')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});



$('#albums').click(function() {
    console.log('albums open')
    $('.band_container-2').addClass('visible-popup')
});

$('#close-popup').click(function() {
    $('.band_container-2').removeClass('visible-popup')
});









$('#album-1').click(function() {
    console.log('albums-1 link')
    $('.band_container-2').addClass('visible-popup')
    var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    win.focus();
});







$('#close-popup-3').click(function() {
    $('.band_container-3').removeClass('visible-popup');
    $('#dude_1_txt').removeClass('visible-popup');
    $('#dude_2_txt').removeClass('visible-popup');
    $('#dude_3_txt').removeClass('visible-popup');
    $('#dude_4_txt').removeClass('visible-popup');
    $('#dude_5_txt').removeClass('visible-popup');
    $('#dude_ALL_txt').removeClass('visible-popup');

    $("#popup-member-img-overlay").removeClass();
    $('#popup-member-img-overlay').addClass('popup-member-img-overlay');

    $("#popup-member-img-portrait").removeClass();
    $('#popup-member-img-portrait').addClass('popup-member-img-portrait');
});


$('#dude_1').click(function() {
    $('.band_container-3').addClass('visible-popup');
    $('#dude_1_txt').addClass('visible-popup');
    $('#popup-member-img-overlay').addClass('popup-member-img-overlay-1');
    $('#popup-member-img-portrait').addClass('popup-member-img-portrait-1');
});
$('#dude_2').click(function() {
    $('.band_container-3').addClass('visible-popup');
    $('#dude_2_txt').addClass('visible-popup');
    $('#popup-member-img-overlay').addClass('popup-member-img-overlay-2');
    $('#popup-member-img-portrait').addClass('popup-member-img-portrait-2');
});
$('#dude_3').click(function() {
    $('.band_container-3').addClass('visible-popup');
    $('#dude_3_txt').addClass('visible-popup');
    $('#popup-member-img-overlay').addClass('popup-member-img-overlay-3');
    $('#popup-member-img-portrait').addClass('popup-member-img-portrait-3');
});
$('#dude_4').click(function() {
    $('.band_container-3').addClass('visible-popup');
    $('#dude_4_txt').addClass('visible-popup');
    $('#popup-member-img-overlay').addClass('popup-member-img-overlay-4');
    $('#popup-member-img-portrait').addClass('popup-member-img-portrait-4');
});
$('#dude_5').click(function() {
    $('.band_container-3').addClass('visible-popup');
    $('#dude_5_txt').addClass('visible-popup');
    $('#popup-member-img-overlay').addClass('popup-member-img-overlay-5');
    $('#popup-member-img-portrait').addClass('popup-member-img-portrait-5');
});
$('#dude_ALL').click(function() {
    $('.band_container-3').addClass('visible-popup');
    $('#dude_ALL_txt').addClass('visible-popup');
    $('#popup-member-img-overlay').addClass('popup-member-img-overlay-ALL');
    $('#popup-member-img-portrait').addClass('popup-member-img-portrait-ALL');
});