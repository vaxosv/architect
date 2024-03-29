import {Home} from "./home";
import {Header} from "./header";
import {about} from "./about";
import {News} from "./news";
import {Logo, MenuColors} from "./main.enums";
import {Projects} from "./projects";
import {projectItem} from "./projectItem"
import {Contact} from "./contact";

const css = require('../scss/main.scss');

class App {
    constructor() {
        // @ts-ignore
        switch (page) {
            case 'home':
                new Home();
                new Header({menuColors: MenuColors.white, logo: Logo.white, shwFiltr: false, transparent: true});
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
            case 'projectItem':
                new projectItem();
                new Header({menuColors: MenuColors.darck, logo: Logo.darck, shwFiltr: false});
                break;
            case 'contact':
                new Contact();
                new Header({menuColors: MenuColors.darck, logo: Logo.darck, shwFiltr: false});
                break;
            default:
        }

        this.initLoading();
        const size = $('.main-font-size').data('textsize')
    }

    initLoading() {
    }
}


window.onload = () => {
    new App()
}
