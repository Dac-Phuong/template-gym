const foodBtns = document.querySelectorAll('.heading-list button')
const foodList = document.querySelectorAll('.product-item')

foodBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const type = e.target.getAttribute('type-food')

		// remove and set active fpr button
		document
			.querySelector('.heading-list button.active')
			.classList.remove('active')
		e.target.classList.add('active')

		// filter elements
		foodList.forEach((item) => {
			if (type == 'all' || item.getAttribute('type-food') == type)
				item.classList.remove('hide')
			else item.classList.add('hide')
		})
	})
})
 
function love(){
	alert('Đã thêm vào yêu thích')
}
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }