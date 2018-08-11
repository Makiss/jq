/*
	При нажатии на кнопки слайдера реализовать смену слайдов.
	При этом, если мы находимся на первом слайде и нажимаем 
	кнопку Предыдущий, то должен показываться последний слайд,
	и наоборот.
*/
(function() {
	'use strict';

	$(document).ready(function() {
		var buttonDirectionObject = {
			next: 1,
			prev: -1
		};
		// 1. Найти контейнер слайдера, все слайды
		//  и кнопки переключения слайдера
		var sliderContainer = $('.ba-slider__container');
		var slides = $('.ba-slider__item');
		var sliderButtons = $('.ba-slider__button');
		// 2. Посчитать количество слайдов и инициализировать
		//  индекс текущего слайда, получить ширину одного слайда.
		var slidesCount = slides.length;
		var currentSlideIndex = 1;
		var slideWidth = parseInt(slides.css('width'), 10);
		// 3. Навесить обработчики кликов на кнопки переключения
		//  слайдов:
		//  - переключать слайды с помощью transform: translateX
		sliderButtons.on('click', function() {
			var buttonDirection = $(this).data('direction');
			var nextSliderIndex = currentSlideIndex + buttonDirectionObject[buttonDirection];

			if (nextSliderIndex === 0) {
				nextSliderIndex = slidesCount;
			}

			if (nextSliderIndex > slidesCount) {
				nextSliderIndex = 1;
			}

			var translateSize = (1 - nextSliderIndex) * slideWidth;
			sliderContainer.css(
				'transform', 
				'translateX(' + translateSize + 'px)'
			);
			currentSlideIndex = nextSliderIndex;
		});
	});
})();

/*
	Слайд 1 -- Слайд 2 смещение -1 * 1 * 1140пкс.
	Слайд 2 -- Слайд 3 смещение -1 * 2 * 1140пкс.

	Слайд 3 -- Слайд 2 смещение -1 * 1 * 1140пкс.
	Слайд 2 -- Слайд 1 смещение 0

*/