// SECTION-EXPANDER
$('#youtube').click(function() {
    // $('.in-progress').addClass('show-warning');
    // console.log('youtube link')
    var win = window.open('https://www.youtube.com/watch?v=J5nxFD72LFg&list=OLAK5uy_kaqrwZlFdgSYbQEGg0lBBGrewumJkStxg', '_blank');
    win.focus();
});
$('#facebook').click(function() {
    // $('.in-progress').addClass('show-warning');
    // console.log('facebook link')
    var win = window.open('https://www.facebook.com/people/Holistic-Approach/61552684094690/', '_blank');
    win.focus();
});
$('#instagram').click(function() {
    // $('.in-progress').addClass('show-warning');
    // console.log('instagram link')
    var win = window.open('https://instagram.com/thehollisticapproach?igshid=OGQ5ZDc2ODk2ZA==', '_blank');
    win.focus();
});
$('#twit').click(function() {
    // $('.in-progress').addClass('show-warning');
    // console.log('twit link')
    var win = window.open('https://twitter.com/HolisticApp19', '_blank');
    win.focus();
});
$('#tiktok').click(function() {
    // $('.in-progress').addClass('show-warning');
    // console.log('tiktok link')
    var win = window.open('https://www.tiktok.com/@thehollisticapproach?_t=8h8Q6Tvwhmr&_r=1', '_blank');
    win.focus();
});
$('#spotify').click(function() {
    // $('.in-progress').addClass('show-warning');
    // console.log('spotify link')
    var win = window.open('https://open.spotify.com/artist/1jGhQTYLR0cmVcTOviscgg?si=6Gt8vehBSpm5lks4yegepA', '_blank');
    win.focus();
});
$('#apple-music').click(function() {
    // $('.in-progress').addClass('show-warning');
    // console.log('apple-music link')
    var win = window.open('https://music.apple.com/gb/album/october-31st/1712349635?i=1712349636 ', '_blank');
    win.focus();
});
$('#tickets').click(function() {
    $('.in-progress').addClass('show-warning');
    // console.log('tickets link')
    // var win = window.open('https://github.com/bishop-of-intensity/Holistic-Approach', '_blank');
    // win.focus();
});



$('#albums').click(function() {
    console.log('albums open')
    $('.band_container-2').addClass('visible-popup')
});

$('#close-popup').click(function() {
    $('.band_container-2').removeClass('visible-popup')
});




$('.close-warning').click(function() {
    $('.in-progress').removeClass('show-warning')
});






$('#album-1').click(function() {
    // $('.in-progress').addClass('show-warning');
    // console.log('albums-1 link')
    // $('.band_container-2').addClass('visible-popup')
    var win = window.open('https://open.spotify.com/track/3Vfm58lpWSM3LGKL86YXdF?si=d6ef85ebfb44424a', '_blank');
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