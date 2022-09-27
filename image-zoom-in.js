// Makes the clicked image full screen (uses a <div> with a background image)
$('.img-full-screen').click(function(){

  // Prevents scrolling
	$('body').addClass('scroll-disabled');

  // Optional: Enables pinch and zoom
	$('meta[name=viewport]').attr('content','width = device-width, initial-scale = 1.00, minimum-scale = 1.00, maximum-scale = 2.00, user-scalable=yes');

  // Get image path source
	var imagePath = $(this).attr('src');

  // Set image path source
	$('.img-placeholder').attr('style','background-image: url(' + imagePath + ')');

  // Show image
	$('.img-placeholder').fadeIn();

});

$('.img-placeholder').click(function(){

  // Enables scrolling again
  $('body').removeClass('scroll-disabled');

  // Optional: Disables pinch and zoom
  $('meta[name=viewport]').attr('content','width = device-width, initial-scale = 1.00, minimum-scale = 1.00, maximum-scale = 1.00');

  // Hide image
  $('.img-placeholder').fadeOut();
});
