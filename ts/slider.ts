// @ts-ignore
import Siema from 'siema';

export class slider {
    private sliderStep: number = 0
    private slider: any;
    private sliderItemDom: any;

    constructor() {
        this.initSlider()
        this.centerItems()
        this.loop()
    }

    initSlider() {
        this.slider = new Siema({
            selector: '.siema',
            duration: 1000,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: false,
            multipleDrag: false,
            threshold: 20,
            loop: true,
            rtl: false,
            onInit: () => {
            },
            onChange: () => {
            },
        });

    }

    loop() {
        setInterval(() => {
            this.slider.next(1, () => {
                this.sliderStep++
            })
        }, 4000)
    }

    centerItems() {
        this.sliderItemDom = document.getElementById('sliderItemCOunt')
        const forDom = this.sliderItemDom.offsetWidth / 2
        this.sliderItemDom.style.cssText = `left: calc(50% - ${forDom}px);`

    }
}
