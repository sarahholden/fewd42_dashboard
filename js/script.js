$('.lesson h3').on('click', function () {
	$(this).closest('.lesson').toggleClass('active');
});