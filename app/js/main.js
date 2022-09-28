// Mobile menu
	$('.burger').click(function(){

		$(this).toggleClass('active');
		$('body').toggleClass('no_scroll');
		$('.menu_content').toggleClass('active');
		$('.sub_menu').slideUp(300);

	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.menu_wrap').length) {

			$('.burger').removeClass('active');
            $('.wrap-search-input').removeClass('active');
			$('.menu_content').removeClass('active');
			$('body').removeClass('no_scroll');

			if ($(window).width() <= 991) {
				$('.sub_menu').slideUp(300);
			}

		}
		e.stopPropagation();
	});


// Mobile submenu
	$('.nav_item.has_child').on('click', function(){

		if ($(window).width() <= 991) {

			if ($(this).find('.sub_menu').css('display') == 'block') {

				$('.sub_menu').slideUp(300);

			} else {

				$('.sub_menu').slideUp(300);
				$(this).find('.sub_menu').slideDown(300);

			}
		}
	});


//Search mobile
$('.submit-search').on('click', function(){

    if ($(window).width() <= 991) {

        $('body').toggleClass('no_scroll');
        $('.wrap-search-input').toggleClass('active');
        $('.wrap-search-input input').focus();

    }

});

//  SameHeight article-blog title
if ($(window).width() >= 640) {

    $.fn.equalHeights = function(){

        let maxHeight = 0;

        $(this).each(function(){

            maxHeight = Math.max($(this).height(), maxHeight);

        });

        $(this).each(function(){

            $(this).height(maxHeight + 20);

        });

    };

    $('.list-articles').each(function() {

        $(this).find('[data-same-height="title-article"]').equalHeights();

    });
}

//Accordion
$('.acc-title').click(function(e) {

    if ($(this).hasClass('acc-faq') || $(window).width() <= 1200) {

        var dropDown = $(this).closest('.acc-card').find('.acc-panel');
        $(this).closest('.acc').find('.acc-panel').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc-title.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();
        e.preventDefault();

    }

});

/////Sliders//////
$('.top-product-slider').slick({
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerPadding: '60px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

    ]

});

$('.slider-stories').slick({
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slider-stories-navigation .slick-prev'),
    nextArrow: $('.slider-stories-navigation .slick-next')
});

$('.home-slider-blog').slick({
    autoplay: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.home-slider-blog-navigation .slick-prev'),
    nextArrow: $('.home-slider-blog-navigation .slick-next'),

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: true,
            }
        },

    ]

});

//Custom quantity input
(function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
        event.preventDefault();
        if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
        }
    }

    function quantityPlus() {
        event.preventDefault();
        $quantityNum.val(+$quantityNum.val() + 1);
    }
})();


///Select categories
$(".dropdown-select .wrapper-select-dropdown a").on('click', function() {
    if ($(window).width() <= 991) {
        $(".dropdown-select .wrapper-checkbox-select ul").slideToggle('fast');
    }

});

$(".dropdown-select .wrapper-select-dropdown ul li a").on('click', function() {
    if ($(window).width() <= 991) {
        $(".dropdown-select .wrapper-checkbox-select ul").hide();
    }
});

$(document).bind('click', function(e) {
    var $clicked = $(e.target);

    if ($(window).width() <= 991) {
        if (!$clicked.parents().hasClass("dropdown-select")) $(".dropdown-select .wrapper-checkbox-select ul").hide();
    }

});

$('.mutliSelect input[type="checkbox"]').on('click', function() {

    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ", ";

    if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.multiSel').append(html);
        $(".hida").hide();
    } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.dropdown-select .wrapper-select-dropdown a').append(ret);

    }
});

/// Tabs TC
$('.tab').on('click', function(){
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.tc_content').css('display', 'none');
    $('.tc_content[data-index="'+$(this).data('index')+'"]').fadeIn(300);

});

///Podcast player
const playerTriggers = document.querySelectorAll('.player-play');

playerTriggers.forEach(trigger => {

    trigger.addEventListener('click', () => {

        const { playerTrigger } = trigger.dataset;

        console.log(playerTrigger)

        const player = document.querySelector(`[data-player="${playerTrigger}"]`);
        const playerPlay = document.querySelector(`.player-play[data-player-trigger="${playerTrigger}"]`);
        const playerPause = document.querySelector(`.player-pause[data-player-trigger="${playerTrigger}"]`);

        player.play();
        playerPlay.style.display = "none";
        playerPause.style.display = "inline-block";


        playerPause.addEventListener('click', () => {
            player.pause();
            playerPause.style.display = "none";
            playerPlay.style.display = "inline-block";
        });

    })
});