var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
$(document).ready(function () {
	var btn = $('.js-top');
	$(window).scroll(function () { // При прокрутке попадаем в эту функцию
		/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
		if ($(this).scrollTop() > top_show) btn.fadeIn();
		else btn.fadeOut();
	});
	btn.click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
		/* Плавная прокрутка наверх */
		$('body, html').animate({
			scrollTop: 0
		});
	});
});
