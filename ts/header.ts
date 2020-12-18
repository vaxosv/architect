import {Logo, MenuColors, MenuConfig} from "./main.enums";
import {toggleBodyFIx} from "./helpers/helper";

export class Header {
    constructor(private menuConfig: MenuConfig) {
        this.filter()
        this.eventLIstners()
        this.setMenuColor(menuConfig.menuColors);
        this.corretLogo()
        this.correctBurger()
        this.click()
    }

    eventLIstners() {
        document.getElementById('menu').addEventListener('click', () => {
            if ($('.burger').hasClass('burgerActive')) {
                this.activteMenu();
                $('.description').css({zIndex: 0})
            } else {
                $('.description').css({zIndex: 2})
                this.deactivvateManu()
            }
        })
    };

    activteMenu() {
        if (!this.menuConfig.transparent) {
            $('#headerContainer').removeClass('white')
        }
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
        if (!this.menuConfig.transparent) {
            $('#headerContainer').addClass('white')
        }
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
        if (this.menuConfig.menuColors === MenuColors.darck) {
            $('#headerContainer').addClass('white')
        }
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

    filter() {
        if (this.menuConfig.shwFiltr) {
            return
        }

        $('.filter').hide()
    }

    click() {
        $('header ul a').on('click', (e) => {
            // @ts-ignore
            let elem = e.target.parentElement.href
            // this.redirect(elem)
            // window.location.href = elem
            window.location.assign(elem)
            // $(location).attr('href', elem);

        })

        $('.lang').on('click', (e) => {
            // @ts-ignore
            let link = e.target.childNodes[1].href
            window.location.assign(link)
            // this.redirect(link)
            // window.location.href = link
            // $(location).attr('href', link);
        })
    }

    redirect(input: string) {
        window.location.href = input
    }
}
