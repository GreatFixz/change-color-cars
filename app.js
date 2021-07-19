$(document).ready(function () {
    $('.colorSelector .colorItem').on('click', function () {
        var srcClick = $(this).attr('data-img-path')
        $('.redPrioras img').fadeOut(1000, function () {
            $('.redPrioras img').attr('src', srcClick).fadeIn(1000)
        })
    })
})

    

