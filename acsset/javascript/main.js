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
 
// function love(){
// 	var like = document.querySelectorAll(".like")
// 	like.style.
// 	console.log(like)
// 	alert('Đã thêm vào yêu thích')
// }
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activity", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " activity"; 
  setTimeout(showSlides, 2000); 
}
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
