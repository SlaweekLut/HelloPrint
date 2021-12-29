const tabGroups = document.querySelectorAll('.info__buttons')
tabGroups.forEach(tabGroup => {
	const tabs = tabGroup.querySelectorAll('.info__button')
	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach(remove => {
				remove.classList.remove('active')
			})
			tab.classList.add('active')
			console.log('123')
		})
	})
})

const popups = () => {
	class popupCreate {
		constructor(popup, open, close) {
			this.popup = popup
			this.open = [...open]

			if(close === undefined) {
				this.open.forEach(element => {
					element.addEventListener('click', () => {
						this.popup.classList.toggle('active')
					})
				})
			} else {
				this.close = [...close]
				this.open.forEach(element => {
					element.addEventListener('click', () => {
						this.popup.classList.add('active')
					})
				});
	
				this.close.forEach(element => {
					element.addEventListener('click', () => {
						this.popup.classList.remove('active')
					})
				});
			}
		}
	}

	const popupRequest = document.querySelector('.request')
	const openRequest = document.querySelectorAll('.header__button--request')
	const closeRequest = document.querySelectorAll('.request-form__close')
	const request = new popupCreate(popupRequest, [...openRequest], [...closeRequest])
	
	const popupMenu = document.querySelector('.nav-mobile')
	const openMenu = document.querySelectorAll('.header__button--menu')
	const closeMenu = document.querySelectorAll('.header__close')
	const menuMobile = new popupCreate(popupMenu, [...openMenu], [...closeMenu, ...openRequest])

	const search = document.querySelector('.header__search')
	const searchOpen = document.querySelectorAll('.header__button--search')
	const searchPopup = new popupCreate(search, searchOpen)
}

popups()

const dropdown = () => {
	const dropdowns = document.querySelectorAll('.tariffs-swiper-slide__dropdown')
	dropdowns.forEach(dropdown => {
		const opener = dropdown.querySelector('.tariffs-swiper-slide__opener') 
		opener.addEventListener('click', () => {
			opener.classList.toggle('active')
		})
	})

	const modules = document.querySelectorAll('.tariffs-swiper-slide__text--module')
	modules.forEach(module => {
		module.addEventListener('click', () => {
			module.classList.toggle('active')
		})
	})
}

dropdown()

const swiper = () => {
	if(window.innerWidth > 568) {
		const tariffs = new Swiper('.tariffs-swiper', {
			slidesPerView: 3,
			breakpoints: {
				1023.98: {
					slidesPerView: 4
				}
			}
		})
	}
}

swiper()