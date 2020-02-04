import {tns} from "../assets/js/tini";
import htmlString = JQuery.htmlString;

export class aboutSlider {
    private slider: any;

    constructor() {
        this.slaiderInit()
    }

    slaiderInit() {
        const prev = $('.prev')
        const next = $('.next')
        this.slider = tns({
            container: '.stafSlider',
            items: 3,
            // rewind: true,
            // swipeAngle: false,
            speed: 400,
            controls: false,
            loop: false,
        })
        const info = this.slider.getInfo()
        this.buttonState(info)
        this.subscribe(prev, next)


    }

    subscribe(prev: JQuery, next: JQuery) {
        prev.on('click', () => {
            this.slider.goTo('prev');
            const info = this.slider.getInfo()
            this.buttonState(info)
        })

        next.on('click', () => {
            this.slider.goTo('next');
            const info = this.slider.getInfo()
            this.buttonState(info)
        })
    }

    buttonState(info: any) {
        const buttonLeft = $('.prev');
        const buttonRight = $('.next');
        if(info.index === 0) {
            buttonLeft.removeClass('darck')
            buttonLeft.addClass('gray')
        } else {
            buttonLeft.removeClass('gray')
            buttonLeft.addClass('darck')
        }
        console.log(info)
        if (info.displayIndex === info.pages) {
            buttonRight.removeClass('darck')
            buttonRight.addClass('gray')
        } else {
            buttonRight.removeClass('gray')
            buttonRight.addClass('darck')
        }
    }

    next() {
        // this.prevEl.addClass('gray')
    }

    prev() {

    }


}
