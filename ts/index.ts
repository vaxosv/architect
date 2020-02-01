import {Home} from "./home";
import {Header} from "./header";

import 'owl.carousel';

const css = require('../scss/main.scss');


class App {
    constructor(){
        console.info('init')
        // @ts-ignore
        switch (page) {
            case 'home':
                new Home()
                break;
            case 'about':
                console.log('we are in home')
                break;
            default:
                console.log('mainc')
        }
    }
}

window.onload = () => {
    new App()
    new Header()
}


