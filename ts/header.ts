import {MenuColors, MenuConfig} from "./main.enums";
import {toggleBodyFIx} from "./helpers/helper";

export class Header {
    constructor(private menuConfig: MenuConfig) {
        this.eventLIstners()
        this.setMenuColor(menuConfig.menuColors);
    }

    eventLIstners() {
        // todo: need to handle click on x witch is not inserted in design
        document.getElementById('menu').addEventListener('click', () => {
            this.toggleMenu()
        })
    };

    toggleMenu() {
        $('#header').toggleClass('mobile_active')
        $('.filter').toggleClass('hide')
        // $('#headerContainer').toggleClass()
        toggleBodyFIx()
    }

    setMenuColor(menuClors: MenuColors) {
        $('#headerContainer').addClass(menuClors);
    }
}
