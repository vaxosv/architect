import {Home} from "./home";
import {Header} from "./header";
import {about} from "./about";
import {News} from "./news";
import {Logo, MenuColors} from "./main.enums";
import {Projects} from "./projects";

const css = require('../scss/main.scss');

class App {
    constructor() {
        console.info('init')
        // @ts-ignore
        switch (page) {
            case 'home':
                new Home();
                new Header({menuColors: MenuColors.white, logo: Logo.white, shwFiltr: false});
                break;
            case 'about':
                new about();
                new Header({menuColors: MenuColors.darck, logo: Logo.darck, shwFiltr: false});
                break;
            case 'projects':
                new Projects()
                new Header({menuColors: MenuColors.darck, logo: Logo.darck, shwFiltr: true});
                break;
            case 'news':
                new News();
                new Header({menuColors: MenuColors.darck, logo: Logo.darck, shwFiltr: false});
                break;
            default:
        }
    }
}


window.onload = () => {
    new App()
}


