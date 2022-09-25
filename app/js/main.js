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




//accordion

$('.acc-title').click(function() {

    if ($(window).width() <= 1200) {

        var dropDown = $(this).closest('.acc-card').find('.acc-panel');
        $(this).closest('.acc').find('.acc-panel').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc-title.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();


    }


});



//slider

// $('.js-slider-1-2-columns').slick({
//     autoplay: false,
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
// });


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
                // centerMode: true,
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
            breakpoint: 600,
            settings: {
                arrows: false,
                dots: true,
            }
        },


    ]



});

//custom quantity input

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


//select



$(".dropdown dt a").on('click', function() {
    if ($(window).width() <= 991) {
        $(".dropdown dd ul").slideToggle('fast');
    }

});

$(".dropdown dd ul li a").on('click', function() {
    if ($(window).width() <= 991) {
        $(".dropdown dd ul").hide();
    }
});

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);


    if ($(window).width() <= 991) {
        if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
    }




});

$('.mutliSelect input[type="checkbox"]').on('click', function() {

    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ",";

    if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.multiSel').append(html);
        $(".hida").hide();
    } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.dropdown dt a').append(ret);

    }
});

///end select



//search mobile


$('.submit-search').on('click', function(){
    if ($(window).width() <= 991) {

        $('.wrap-search-input').toggleClass('active');
        $('.wrap-search-input input').focus();





    }
});







// Custom select
$('.current_option').on('click', function(){
	if (!$(this).closest('.select').hasClass('active')) {
		$('.select').removeClass('active');
		$('.options').slideUp(200);
		$(this).closest('.select').addClass('active');
		$(this).closest('.select').find('.options').slideDown(200);
	} else {
		$(this).closest('.select').removeClass('active');
		$(this).closest('.select').find('.options').slideUp(200);
	}
});
$('.option').on('click', function(){
	$(this).closest('.select').find('.current_option').text($(this).text());
	$(this).closest('.select').find('.select_input').val($(this).text());
	$(this).closest('.select').removeClass('active');
	$('.options').slideUp(200);
});
$(document).on('click', function(e) {
	if (!$(e.target).closest('.select').length) {
		$('.select').removeClass('active');
		$('.options').slideUp(200);
	}
	e.stopPropagation();
});

// Tabs TC
$('.tab').on('click', function(){
    $('.tab').removeClass('active');
    $(this).addClass('active');
    $('.tc_content').css('display', 'none');
    $('.tc_content[data-index="'+$(this).data('index')+'"]').fadeIn(300);

});






$(".fa-search").click(function() {
    $(".togglesearch").toggle();
    $("input[type='text']").focus();
});


