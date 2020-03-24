import {Logo, MenuColors, MenuConfig} from "./main.enums";
import {toggleBodyFIx} from "./helpers/helper";

export class Header {
    constructor(private menuConfig: MenuConfig) {
        this.eventLIstners()
        this.setMenuColor(menuConfig.menuColors);
        this.corretLogo()
        this.correctBurger()
    }

    eventLIstners() {
        document.getElementById('menu').addEventListener('click', () => {
            if ($('.burger').hasClass('burgerActive')) {
                this.activteMenu();
            } else {
                this.deactivvateManu()
            }
        })
    };

    activteMenu() {
        $('#header').addClass('mobile_active')
        $('.filter').addClass('hide')
        $('.logoContainer').addClass('menu-open')

        const menu = $('.burger');
        menu.removeClass('burgerActive')
        menu.addClass('closeActive')

        if (this.menuConfig.logo === Logo.darck) {
            menu.removeClass('burgerActive-darck')
            menu.addClass('burgerActive-white')
        }

        toggleBodyFIx()
    }

    deactivvateManu() {
        $('#header').removeClass('mobile_active')
        $('.filter').removeClass('hide')
        $('.logoContainer').removeClass('menu-open')
        const menu = $('.burger');

        if (this.menuConfig.logo === Logo.darck) {
            menu.addClass('burgerActive-darck')
            menu.removeClass('burgerActive-white')
        }

        menu.addClass('burgerActive')
        menu.removeClass('closeActive')
        this.corretLogo()
        toggleBodyFIx()
    }

    setMenuColor(menuClors: MenuColors) {
        $('#headerContainer').addClass(menuClors);
    }

    corretLogo() {
        if (this.menuConfig.logo === Logo.darck) {
            $('.logoContainer').addClass('logo-darck')
        } else {
            $('.logoContainer').addClass('logo-white')
        }
    }

    correctBurger() {
        if (this.menuConfig.logo === Logo.darck) {
            $('.burger ').addClass('burgerActive-darck')
        } else {
            $('.burger ').addClass('burgerActive-white')
        }
    }
}