;(function () {
	'use strict'

	// Получаем DOM-элементы
	const markdownSourceElement = document.querySelector('#markdown-source')
	const markdownResultElement = document.querySelector('#markdown-result')
	console.log(123)

	// Отлавливаем событие по нажатию клавиши

		// Преобразовываем текст в HTML разметку
		const result = marked(markdownSourceElement.value)
		markdownResultElement.innerHTML = result

	console.log(markdownSourceElement, markdownResultElement)
})();