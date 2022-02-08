class MobileMenu {
  constructor() {
    this.mobileMenuButton = document.querySelector('.js-hamburger-menu');
    this.mainMenu = document.querySelector('.js-main-nav');
    this.hamburgerIcon = document.querySelector('.js-hamburger-menu__bars');
    this.menuItems = document.querySelectorAll('.js-main-nav__item');
    this.events();
  }


  events() {
    this.mobileMenuButton.addEventListener('click', () => this.toggleTheMenu());
    this.menuItems.forEach(el => el.addEventListener('click', () => this.hideTheMenu()))
  }

  toggleTheMenu() {
    this.mainMenu.classList.toggle('is-visible');
    this.hamburgerIcon.classList.toggle('is-open');
  }
  
  hideTheMenu() {
    this.mainMenu.classList.remove('is-visible');
    this.hamburgerIcon.classList.remove('is-open');
  }
}

export default MobileMenu