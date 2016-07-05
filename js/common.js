$(document).ready(function() {

$('.actors_blocks_hid').hide();

	$('.expand').on('click', function() {
	     $('.actors_blocks_hid').show();
	      $('.expand, .exp').hide();
	      $('.items_container').each(function() {
				$(this).children('.item').matchHeight();
			});
		});
	// tabs
	(function($) {
	$(function() {

		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	      
		});


	});
	})(jQuery);


//---customize input type number---
$(function() {
  
  $("#spin .button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        } else {
        newVal = 0;
        }
      }
    $button.parent().find("input").val(newVal);
  });
});



});