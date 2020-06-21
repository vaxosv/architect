import * as $ from 'jquery';
import {slider} from "./slider";


export class Home {

    constructor() {
        new slider();
        $('.item').height(window.innerHeight)
    }
}


