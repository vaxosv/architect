import {Home} from "./home";
import {Header} from "./header";
import {about} from "./about";
import {News} from "./news";
import {Logo, MenuColors} from "./main.enums";

const css = require('../scss/main.scss');

class App {
    constructor() {
        console.info('init')
        // @ts-ignore
        switch (page) {
            case 'home':
                new Home()
                new Header({menuColors: MenuColors.white, logo: Logo.white, shwFiltr: false})
                break;
            case 'about':
                new about()
                new Header({menuColors: MenuColors.darck, logo: Logo.darck, shwFiltr: false})
                break;
            case 'projects':
                break;
            case 'news':
                new News()
                break;
            default:
        }
    }
}


window.onload = () => {
    new App()
}


