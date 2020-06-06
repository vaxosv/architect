import {tns} from "../assets/js/tini";
import * as $ from "jquery";

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
            speed: 1000,
            autoplayTimeout: 4000,
            controls: false,
            autoplayText: ['', ''],
            touch: true,
            // mouseDrag: true,
        })

        this.createButtons(slider.getInfo())
        this.getActiveButton(slider.getInfo())
        this.customizedFunction(slider.getInfo(), name)
        slider.events.on('transitionStart', (e: any, name: any) => {
            this.customizedFunction(e, name)
            this.getActiveButton(e)
            if (window.innerWidth >= 1024) {
                this.animation(e)
            }
        })

        slider.events.on('transitionEnd', (e: any, name: any) => {

        });
        this.loading()
    }

    loading() {
        $('#header')
            .find('#headerContainer')
            .css('z-index', -1)
        $('body').css('overflow', 'hidden')

        window['imagesLoaded'](document.querySelectorAll('item'), function () {
            $('#header')
                .find('#headerContainer')
                .css('z-index', 2)
            $('filters-container').css('z-index', 4)
            $('.loader').addClass('loader-done')
            $('body').css('overflow', 'visible')
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

    animation(info: any) {
        const div = $('.home-slider-description')
        div.animate({
            left: "-=250",
            opacity: 0
        }, () => {
            div.animate({
                opacity: 1
            })
            div.css({
                left: "150px",
            })
        })

    }
}
