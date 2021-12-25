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

	const popupRequest = document.querySelector('.request')
	const openRequest = document.querySelectorAll('.header__button--request')
	const closeRequest = document.querySelectorAll('.request-form__close')
	const request = new popupCreate(popupRequest, [...openRequest], [...closeRequest])
	
	const popupMenu = document.querySelector('.nav-mobile')
	const openMenu = document.querySelectorAll('.header__button--menu')
	const closeMenu = document.querySelectorAll('.header__close')
	const menuMobile = new popupCreate(popupMenu, [...openMenu], [...closeMenu, ...openRequest])

}

popups()