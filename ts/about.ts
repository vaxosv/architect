import {aboutSlider} from "./aoutSlider";
import * as $ from "jquery";


export class about {
    constructor() {
        this.setMargin()
        this.loading()
    }

    loading() {
        $('.loader').addClass('loader-done')
    }

    setMargin() {
        if (window.innerWidth <= 1024) {
            const left = $('.sliderContainer').first().children().first().children().position().left
            $('.stafHeader > h2').css({
                marginLeft: left
            })
        }
    }

}
