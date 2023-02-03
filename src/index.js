
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

const yr = document.getElementById("yr");
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggler");
const toTop = document.querySelector(".toTop");
const homeSwiper = document.querySelector('.home-swiper');
const logo = document.querySelector('.logo');

yr.innerHTML = new Date().getFullYear();

toTop.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
});

navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute("data-visible");
	if (visibility === 'false') {
		primaryNav.setAttribute('data-visible', true);
		navToggle.setAttribute("aria-expanded", true);
	}
	else if (visibility === 'true') {
		primaryNav.setAttribute('data-visible', false);
		navToggle.setAttribute("aria-expanded", false);
	}
});

const homeSwiperOptions = {
	rootMargin: "-100px 0px 0px 0px"
}

const homeSwiperObserver = new IntersectionObserver((entries, homeSwiperObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			primaryNav.classList.add('nav-scrolled');
			logo.style.visibility = 'hidden';
			navToggle.classList.add('nav-scrolled');
		} else {
			primaryNav.classList.remove('nav-scrolled');
			logo.style.visibility = 'visible';
			navToggle.classList.remove('nav-scrolled');
		}
	});
}, homeSwiperOptions);

homeSwiperObserver.observe(homeSwiper);
