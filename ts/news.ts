import {ellipsizeTextBox} from "./helpers/helper";
import * as $ from "jquery";

export class News {
    constructor() {
        this.threeDots();
        this.eventListeners()
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


        window['imagesLoaded'](document.querySelectorAll('img'), function () {
            $('#header')
                .find('#headerContainer')
                .css('z-index', 2)
            $('filters-container').css('z-index', 4)
            $('.loader').addClass('loader-done')

            $('body').css('overflow', 'visible')
            $('html').css('overflow', 'visible')
        });
    }

    threeDots() {
        $('.newsDescription').each((i, el) => {
            const element = $(el)
            const elementText = element.data('text');
            const elementRead = element.data('read');
            const elementLink = element.data('link');
            const elementLinkName = element.data('lnmae');

            ellipsizeTextBox(elementLinkName,elementLink ,element, elementText, elementRead,255, false);
        })
    }

    private eventListeners() {
        $('.readMore').on('click', function (event) {
            const element = $(event.target).parent()
            const elementText = element.data('text');
            element.html(elementText)
        })
    }
}


