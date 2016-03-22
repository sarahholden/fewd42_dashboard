$('.expandable h3').on('click', function () {
	$(this).closest('.expandable-item').toggleClass('active');
});