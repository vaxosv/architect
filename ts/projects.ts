import {ellipsizeTextBox} from "./helpers/helper";

export class Projects {
    showState = true;

    constructor() {
        this.getDevice()
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

        $('.filter-head').each((i, el) => {
            const element = $(el)
            const child = element.find('.some-container');
            const childCount = () => child.children().length

            element.on('click', (e) => {
                const clickedEl = $(e.target);


                $('.some-container').each((i, el) => {
                    const element = $(el)
                    element.animate({
                        height: 0
                    }, 1, () => {
                    })
                })

                $('.filter-mobile-header').each((i, el) => {
                    $(el).removeClass('animation')
                })


                clickedEl.addClass('animation')
                child.animate({
                    height: childCount() * 49,
                    paddingTop: 15
                }, {
                    duration: 1
                })
            })
        })
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
