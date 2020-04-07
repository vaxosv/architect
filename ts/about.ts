import {aboutSlider} from "./aoutSlider";


export class about {
    constructor() {
        this.setMargin()
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
