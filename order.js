const contactform = document.querySelector('.contact-form');
const container = document.querySelector('.container');

contactform.addEventListener('submit', (event) => {
	event.preventDefault();
	container.innerHTML = '<p>Thanks for your order. <br /> </p>';
});



