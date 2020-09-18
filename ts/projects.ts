export class Projects {
    showState = true;

    constructor() {
        this.getDevice()
        this.loading()
        this.lick()

        console.log('test verssion: 0.0.3')
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
        let show = false

        if (show) {
            $('.filters-container').show()
        } else {
            $('.filters-container').hide()
        }

        if (windowWidth >= 1024) {
            $('#filters-mobile').hide();
            this.setPositions()
            this.events()
            $('#headerContainer')
                .find('.filter')
                .on('click', (e) => {
                    if (show) {
                        $('.filters-container').hide()
                        show = false
                    } else {
                        $('.filters-container').show()
                        show = true
                    }
                })
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
                this.mobileOff()
                this.showState = true;
            }
        })
    }

    mobileEventListeners() {

        $(".filter-head").click(function () {
            $(".some-container").slideUp();
            $(".filter-mobile-header").removeClass('animation');

            if (!$(this).find('.some-container').is(':visible')) {
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

        filters.hover((e) => {
            $(e.target).find('span').addClass('active-Filter-Header')
            cover.addClass('openFilter')
            this.setPositions()
        })

        filters.mouseleave(() => {
            $('.active-Filter-Header').removeClass('active-Filter-Header')
            cover.removeClass('openFilter')
        })
    }

    private lick() {
        $('.projects ul a').children().on('click', (e) => {
            console.log('click')
            console.log(e)
            console.log(e.target)
            alert()
            const elem = $(e.target)
            const  a = elem.parents('a')[0]
            const href = a.getAttribute("hraf")

            // window.location.replace(href)
        })
    }
}
