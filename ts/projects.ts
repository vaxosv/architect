import {ProjectGallery} from "./project-gallery";

export class Projects {
    showState = true;

    constructor() {
        new ProjectGallery()
        this.getDevice()
        this.loading()
    }

    loading() {
        $('#header')
            .find('#headerContainer')
            .css('z-index', -1)
        $('.filters-container').css('z-index', 1)
        $('body').css('overflow', 'hidden')

        window['imagesLoaded'](document.querySelectorAll('project'), function () {
            $('#header')
                .find('#headerContainer')
                .css('z-index', 2)
            $('filters-container').css('z-index', 4)
            $('.loader').addClass('loader-done')

            $('body').css('overflow', 'visible')
        });
    }

    getDevice() {
        const windowWidth = window.innerWidth;
        console.log(windowWidth)
        if (windowWidth >= 1024) {
            $('#filters-mobile').hide();
            this.setPositions()
            this.events()
        } else {
            $('#filters-desktop').hide();
            $('.projects').css('padding-top', 0)
            this.mobile();
        }
    }

    mobile() {
        $('#headerContainer')
            .find('.filter')
            .on('click', (e) => {
                if (this.showState) {
                    this.mobileOn();
                    this.showState = false;
                } else {
                    this.mobileOff()
                    this.showState = true;
                }
            })
        this.filterHandler()
        this.mobileEventListeners()
    }

    filterHandler() {
        $('body').on('click', (e) => {
            e.preventDefault()
            const element = $(e.target)

            const hasClass = element.hasClass('filter-head') ||
                element.hasClass('some-container') ||
                element.hasClass('some') ||
                element.hasClass('filter') ||
                element.hasClass('filter-mobile-header') ||
                element.hasClass('header')

            if (!hasClass) {
                console.log('body')
                this.mobileOff()
                this.showState = true;
            }
        })
    }

    mobileEventListeners() {

        $(".filter-head").click(function () {
            $(".some-container").slideUp();
            $(".filter-mobile-header").removeClass('animation');

            if (!$(this).find('.some-container').is(':visible')){
                $(this).find('.some-container').slideDown();
                $(this).find('.filter-mobile-header').addClass('animation');
            }
        });
    }

    mobileOn() {
        $('#filters-mobile').show();
        const cover = $('body');

        cover.addClass('openFilter')

    }

    mobileOff() {
        const cover = $('body');
        cover.removeClass('openFilter')

        $('#filters-mobile').hide();

    }

    setPositions() {
        $('.filter-head').each(function (i, el) {
            const width = $(this).innerWidth();
            const leftSide = $(this).position().left;
            const rightSide = window.innerWidth - (leftSide + width);
            const minSide = Math.min(leftSide, rightSide);
            $(this).find('.list-container')
                .width(minSide + width)
                .css({
                    paddingLeft: leftSide - (840 / 2) + (width / 2)
                });
        })
    }

    events() {
        const filters = $('.filter-head');
        const cover = $('body');

        filters.hover(() => {
            cover.addClass('openFilter')
        })

        filters.mouseleave(() => {
            cover.removeClass('openFilter')
        })
    }

}
