$(document).ready(function(){
    let topFactive = false;
    let topSactive = false;

    $(window).scroll(function(){
            let pixel = $(window).scrollTop()
        if(pixel > 1){
            $('.header').addClass('active')
        } else {
            $('.header').removeClass('active')
        }

        if(pixel > 350){
            $('.nav__li--button').addClass('active')
            $('.nav__li--login').addClass('active')
        } else {
            $('.nav__li--button').removeClass('active')
            $('.nav__li--login').removeClass('active')
        }

        let topF = $('.first').offset().top
        let topS = $('.second').offset().top
        let altoV = $(window).height()
        if(pixel >= topF - altoV / 1.5 && topFactive == false){
            $('.first').addClass('active')
            $('.animation__input').prop('checked', true)
            topFactive = true;
        }

        if(pixel >= topS - altoV / 1.5 && topSactive == false){
            $('.second').addClass('active')
            topSactive = true;
        }
    })

    $('.nav__burger').click(() => {
        $('.nav').addClass('active')
    })

    $('.nav__close').click(() => {
        $('.nav').removeClass('active')
    })

    $('.animation__label').click(() => {
        if($('.animation__input').is(':checked') == true){
            $('.first').addClass('active')
        } else {
            $('.first').removeClass('active')
        }
    })

    $('.animation__button').click(() => {
        $('.second').toggleClass('active')
    })
})