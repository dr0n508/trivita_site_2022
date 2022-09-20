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

$('.acc-title').click(function(e) {

    if ($(window).width() <= 991) {

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


