import {aboutSlider} from "./aoutSlider";
import * as $ from "jquery";


export class about {
    constructor() {
        this.setMargin()
        this.loading()
    }

    loading() {
        $('#header')
            .find('#headerContainer')
            .css('z-index', -1)
        $('.filters-container').css('z-index', 1)
        $('body').css('overflow', 'hidden')
        $('html').css('overflow', 'hidden')
        $('html').scrollTop( 0 )

        window['imagesLoaded'](document.querySelectorAll('image'), function () {
            $('#header')
                .find('#headerContainer')
                .css('z-index', 2)
            $('filters-container').css('z-index', 4)
            $('.loader').addClass('loader-done')

            $('body').css('overflow', 'visible')
            $('html').css('overflow', 'visible')
        });
    }

    setMargin() {
        if (window.innerWidth <= 1024) {
            const left = $('.sliderContainer').first().children().first().children().position().left
            $('.stafHeader > h2').css({
                marginLeft: left
            })

            $('.aboutContainer > h2').css({
                marginLeft: left - 15
            })
        }
    }

}
