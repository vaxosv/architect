import {tns} from "../assets/js/tini";

export class slider {
    private sliderItemDom: any;

    constructor() {
        this.initSlider()
        this.alignItemsCenter()
        // this.loop()
    }

    initSlider() {
        let slider = tns({
            container: '.my-slider',
            items: 1,
            slideBy: 'page',
            autoplay: true,
            speed: 500,
            autoplayTimeout: 1500,
            controls: false,
            autoplayText: ['', ''],
            touch: true
        })

        this.createButtons(slider.getInfo())
        this.getActiveButton(slider.getInfo())
        this.customizedFunction(slider.getInfo(), name)
        console.log(slider.getInfo().slideItems)
        slider.events.on('transitionStart', (e: any, name: any) => {
            this.customizedFunction(e, name)
            this.getActiveButton(e)

        });
    }

    createButtons(slider: any) {
        const slides = slider.slideCount
        for (let i = 0; i <= slides; i++) {
            const div = $('<div/>', {
                "class": 'smallControl',
            })
            $('.slideCOntrolers').append(div)
        }
    }

    customizedFunction(info: any, eventName: any) {
        const indexPrev = info.indexCached
        const indexCurrent = info.index;
        const header = info.slideItems[indexCurrent].children[0].textContent
        const description = info.slideItems[indexCurrent].children[1].textContent

        this.drawSlietext(header, description);
    }

    getActiveButton(info: any) {
        const index = info.displayIndex;
        const slides = document.getElementsByClassName('smallControl')


        for (let i = 0; i <= slides.length - 1; i++) {
            if (i === index) {
                slides[i].classList.add('control-active')
            } else {
                slides[i].classList.remove('control-active')
            }
        }
    }

    alignItemsCenter() {
        this.sliderItemDom = document.getElementById('sliderItemCOunt')
        const forDom = this.sliderItemDom.offsetWidth / 2
        this.sliderItemDom.style.cssText = `left: calc(50% - ${forDom}px);`
    }

    drawSlietext(header: string, description: string) {
        $('.textHeader').text(header)
        $('.textOharagraph').text(description)
    }

}
