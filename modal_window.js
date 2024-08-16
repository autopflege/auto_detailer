$(document).ready(function () {
// Modal window - CleanCar
    $('.show-modal-cleancar').click(function () {
        $('.modal-overlay-cleancar').addClass('active').fadeIn(600, function () {
            $('.modal-body-cleancar').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
            var top = $(document).scrollTop();
            $('.modal-overlay-cleancar').css('top', top);
            $('body').addClass('no-scroll');
        });
    });
    $('.close-cleancar').click(function () {
        $('.modal-body-cleancar').animate({opacity: 0, top: '45%'}, 200,
            function () {
                $(this).css('display', 'none');
                $('.modal-overlay-cleancar').fadeOut(800);
                $('.modal-overlay-cleancar').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        );
    });

// Modal window - Wrapster
$('.show-modal-wrapster').click(function () {
    $('.modal-overlay-wrapster').addClass('active').fadeIn(600, function () {
        $('.modal-body-wrapster').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
        var top = $(document).scrollTop();
        $('.modal-overlay-wrapster').css('top', top);
        $('body').addClass('no-scroll');
    });
});
$('.close-wrapster').click(function () {
    $('.modal-body-wrapster').animate({opacity: 0, top: '45%'}, 200,
        function () {
            $(this).css('display', 'none');
            $('.modal-overlay-wrapster').fadeOut(800);
            $('.modal-overlay-wrapster').removeClass('active');
            $('body').removeClass('no-scroll');
        }
    );
});

 // Modal window - FrontEnd
    $('.show-modal-frontend').click(function () {
        $('.modal-overlay-frontend').addClass('active').fadeIn(600, function () {
            $('.modal-body-frontend').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
            var top = $(document).scrollTop();
            $('.modal-overlay-frontend').css('top', top);
            $('body').addClass('no-scroll');
        });
    });
    $('.close-frontend').click(function () {
        $('.modal-body-frontend').animate({opacity: 0, top: '45%'}, 200,
            function () {
                $(this).css('display', 'none');
                $('.modal-overlay-frontend').fadeOut(800);
                $('.modal-overlay-frontend').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        );
    });

    // Modal window - SniperSchool
    $('.show-modal-sniper').click(function () {
        $('.modal-overlay-sniper').addClass('active').fadeIn(600, function () {
            $('.modal-body-sniper').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
            var top = $(document).scrollTop();
            $('.modal-overlay-sniper').css('top', top);
            $('body').addClass('no-scroll');
        });
    });
    $('.close-sniper').click(function () {
        $('.modal-body-sniper').animate({opacity: 0, top: '45%'}, 200,
            function () {
                $(this).css('display', 'none');
                $('.modal-overlay-sniper').fadeOut(800);
                $('.modal-overlay-sniper').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        );
    });

    // // Modal window - TetraFitness
    // $('.show-modal-tetra').click(function () {
    //     $('.modal-overlay-tetra').addClass('active').fadeIn(600, function () {
    //         $('.modal-body-tetra').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
    //         var top = $(document).scrollTop();
    //         $('.modal-overlay-tetra').css('top', top);
    //         $('body').addClass('no-scroll');
    //     });
    // });
    // $('.close-tetra').click(function () {
    //     $('.modal-body-tetra').animate({opacity: 0, top: '45%'}, 200,
    //         function () {
    //             $(this).css('display', 'none');
    //             $('.modal-overlay-tetra').fadeOut(800);
    //             $('.modal-overlay-tetra').removeClass('active');
    //             $('body').removeClass('no-scroll');
    //         }
    //     );
    // });

    // Modal window - AUBA
    $('.show-modal-barman').click(function () {
        $('.modal-overlay-barman').addClass('active').fadeIn(600, function () {
            $('.modal-body-barman').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
            var top = $(document).scrollTop();
            $('.modal-overlay-barman').css('top', top);
            $('body').addClass('no-scroll');
        });
    });
    $('.close-barman').click(function () {
        $('.modal-body-barman').animate({opacity: 0, top: '45%'}, 200,
            function () {
                $(this).css('display', 'none');
                $('.modal-overlay-barman').fadeOut(800);
                $('.modal-overlay-barman').removeClass('active');
                $('body').removeClass('no-scroll');
            }
        );
    });

});
