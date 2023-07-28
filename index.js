if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});



const burgerNode = document.querySelector('[data-burger]');
const navbarNode = document.querySelector('[data-navbar]');
const navItems = navbarNode.querySelectorAll('a');
const headerLogo = document.querySelector('.header__logo');

burgerNode.addEventListener('click', () => {
    document.body.classList.toggle('stop--scroll');
    burgerNode.classList.toggle('burger--active');
    navbarNode.classList.toggle('nav--visible');
})

headerLogo.addEventListener('click', () => {
    document.body.classList.remove('stop--scroll');
    burgerNode.classList.remove('burger--active');
    navbarNode.classList.remove('nav--visible');
})

navItems.forEach(el => {
    el.addEventListener('click', () => {
        document.body.classList.remove('stop--scroll');
        burgerNode.classList.remove('burger--active');
        navbarNode.classList.remove('nav--visible');
    })
})