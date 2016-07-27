
$('input').on('change', function () {
	var cssProperty = $(this).next('label').html();
	cssProperty = cssProperty.substring(0, cssProperty.length - 1);
	cssProperty = cssProperty.split(":");
	$('p').css(cssProperty[0], cssProperty[1]);
});
