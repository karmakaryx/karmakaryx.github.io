'use strict'

const floating1El = document.querySelector('.floating1');
const floating2El = document.querySelector('.floating2');

gsap.to(floating1El, 5, {
	opacity: 1,
	display: 'block'
});
gsap.to(floating2El, 10, {
	opacity: 1,
	display: 'block',
	delay: 5
});
gsap.to(floating1El, 10, {
	opacity: 0,
	display: 'none',
	delay: 20
});
gsap.to(floating2El, 10, {
	opacity: 0,
	display: 'none',
	delay: 30
});
