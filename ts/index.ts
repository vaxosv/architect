import {Home} from "./home";
import * as $ from 'jquery';
import {Header} from "./header";
import {about} from "./about";

const css = require('../scss/main.scss');

class App {
    constructor(){
        console.info('init')
        // @ts-ignore
        switch (page) {
            case 'home':
                new Home()
                new Header()
                break;
            case 'about':
                new Header()
                new about()
                console.log('we are in home')
                break;
            case 'projects':
                console.log('we are in home')
                break;
            default:
                console.log('mainc')
        }
    }
}



window.onload = () => {
    new App()
}


