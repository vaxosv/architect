import * as $ from "jquery";

export class Contact {
    constructor() {
        $('#header')
            .find('#headerContainer')
            .css('z-index', -1)
        $('.filters-container').css('z-index', 1)
        $('body').css('overflow', 'hidden')
        $('html').css('overflow', 'hidden')
        $('html').scrollTop( 0 )

        window['imagesLoaded'](document.querySelectorAll('a'), function () {
            $('#header')
                .find('#headerContainer')
                .css('z-index', 2)
            $('filters-container').css('z-index', 4)
            $('.loader').addClass('loader-done')

            $('body').css('overflow', 'visible')
            $('html').css('overflow', 'visible')

        });
        this.modifySCC()
    }

    modifySCC () {
        $('body').css('height', '100vh')
    }
}
