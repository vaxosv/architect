import {ProjectGallery} from "./project-gallery";
import * as $ from "jquery";

export class projectItem {
    constructor() {
        this.loader()
        new ProjectGallery()
    }

    private loader() {
        $('#header')
            .find('#headerContainer')
            .css('z-index', -1)
        $('.filters-container').css('z-index', 1)
        $('html').scrollTop( 0 )
        $('body').css('overflow', 'hidden')
        $('html').css('overflow', 'hidden')

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
}
