import {ProjectGallery} from "./project-gallery";

export class projectItem {
    constructor() {
        this.loader()
        new ProjectGallery()
    }

    private loader() {
        // $('#header')
        //     .find('#headerContainer')
        //     .css('z-index', -1)
        // $('.filters-container').css('z-index', 1)
        // $('body').css('overflow', 'hidden')
        //
        // window['imagesLoaded'](document.querySelectorAll('project'), function () {
        //     $('#header')
        //         .find('#headerContainer')
        //         .css('z-index', 2)
        //     $('filters-container').css('z-index', 4)
        //
        //     $('body').css('overflow', 'visible')
        // });
            $('.loader').addClass('loader-done')
    }
}
