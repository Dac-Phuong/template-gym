const foodBtns = document.querySelectorAll('.heading-list button')
const foodList = document.querySelectorAll('.product-item')

foodBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const type = e.target.getAttribute('type-food')
		document
			.querySelector('.heading-list button.active')
			.classList.remove('active')
		e.target.classList.add('active')
		foodList.forEach((item) => {
			if (type == 'all' || item.getAttribute('type-food') == type)
				item.classList.remove('hide')
			else item.classList.add('hide')
		})
	})
})

const wrapper = document.querySelector('.section-logos')
let isMouseDown = false
let startX, scrollLeft

wrapper.addEventListener('mousedown', (e) => {
	isMouseDown = true
	startX = e.pageX - wrapper.offsetLeft
	scrollLeft = wrapper.scrollLeft
})
  
wrapper.addEventListener('mouseleave', () => {
	isMouseDown = false
})

wrapper.addEventListener('mouseup', () => {
	isMouseDown = false
})

wrapper.addEventListener('mousemove', (e) => {
	if (!isMouseDown) return

	const x = e.pageX - wrapper.offsetLeft
	// 3 là tốc độ scroll
	const walk = (x - startX) * 3
	wrapper.scrollLeft = scrollLeft - walk
})
function none (){
	close = document.querySelector(".menu-mobile")
	close.style.display = "none"
}
function block (){
	add = document.querySelector(".menu-mobile")
	add.style.display = "block"
}
function add (){
	block = document.querySelector(".search-input")
	block.style.display = "block"
}