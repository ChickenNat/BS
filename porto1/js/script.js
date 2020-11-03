//event pada saat link di click
$('.page-scroll').on('click', function(){

    //ambil isi herf
    var tujuan = $(this).attr('href');
    //tangkap elemen
    var elementTujuan = $(tujuan);

    //pndah scroll
    $('body').animate({
        scrollTop: elementTujuan.offset().top -50
    }, 1250, 'swing');
    


    
});