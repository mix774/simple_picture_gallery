function slidesPlugin(activeSlide = 0) {
	const slides = document.querySelectorAll('.slide') //получение массива элементов с классом slide

	slides[activeSlide].classList.add('active')

	//итерация по массиву с полученными элементами, по щелчку мыши вызов функции, 
	//которая удаляет стили с текущего элемента, и добавляет стили на тот элемент, по которому кликнули
	for (const slide of slides) {
		slide.addEventListener('click', () => {
			clearActiveClasses()
			slide.classList.add('active')
		})
	}


	//функция, которая итерируется по массиву с элементами и удаляет стиль для выделения картинки
	function clearActiveClasses() {
		slides.forEach((slide) => {
			slide.classList.remove('active')
		})
	}
}

slidesPlugin()