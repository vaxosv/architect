import {tns} from "../assets/js/tini";
import 'hammerjs';

enum Direction {
    Right = 2,
    Left = 4,
    Up = 8,
    Down = 16,

}

export class ProjectGallery {
    slider: any

    constructor() {
        this.init()
        this.subscribeToOpen()
        this.close()
    }

    init() {
        if (window.innerWidth >= 768) {
            this.slider = tns({
                container: '.gallery-image-container',
                items: 1,
                slideBy: 'page',
                // autoplay: true,
                // speed: 1000,
                // autoplayTimeout: 1500,
                controls: false,
                autoplayText: ['', ''],
                touch: true,
                mouseDrag: true,
                mode: 'gallery',
            })
            this.showSlider()
        } else {
            this.slider = tns({
                container: '.gallery-image-container',
                items: 1,
                slideBy: 'page',
                // autoplay: true,
                speed: 400,
                autoplayTimeout: 1500,
                controls: false,
                autoplayText: ['', ''],
                touch: false,
                mouseDrag: true,
                mode: 'carousel',
            })
            this.hummer()
        }


        $('.tns-outer').css('margin', 0)
        this.setActiveTab(0)

    }

    showSlider() {
        const rate = 800;
        let lastClick = Date.now() - rate;
        let up = false;
        let down = false;
        $('.detailed-gallery').on('mousewheel', (e) => {
            if (Date.now() - lastClick >= rate) {
                // @ts-ignore
                if (e.originalEvent.deltaY > 0) {
                    up = false;
                    down = true;
                } else {
                    up = true;
                    down = false;
                }


                if (up) {
                    this.slider.goTo('prev')
                }

                if (down) {
                    this.slider.goTo('next')
                }

                const info = this.slider.getInfo()
                const currentIndex = info.navCurrentIndex
                this.setActiveTab(currentIndex)

                lastClick = Date.now()
            }

            $('.project-detailed-gallery').show()
        })
    }

    setActiveTab(index: number) {
        const controls = $('.control')

        controls.removeClass('active-control')
        controls.eq(index).addClass('active-control')

    }

    hummer() {
        const hummer = new Hammer($('.detailed-gallery').get(0), {
            recognizers: [
                [Hammer.Swipe, {direction: Hammer.DIRECTION_ALL}],
            ]
        })
        hummer.on("swipe", (ev) => {
            const swipeDirection = ev.direction

            if (Direction.Right === swipeDirection) {
                this.slider.goTo('next')
            }
            if (Direction.Down === swipeDirection) {
                this.slider.goTo('next')
            }
            if (Direction.Left === swipeDirection) {
                this.slider.goTo('prev')
            }
            if (Direction.Up === swipeDirection) {
                this.slider.goTo('prev')
            }

            this.footer()

        });

        const goBack = $('.back');
        const goNext = $('.front');

        goBack.on('click', () => {
            this.slider.goTo('prev')
            this.footer()

        })

        goNext.on('click', () => {
            this.slider.goTo('next')
            this.footer()

        })

        this.footer()
    }

    footer() {
        const info = this.slider.getInfo();
        const activeIndex = info.navCurrentIndex + 1;
        const totalCount = info.slideCount

        const back = $('.slider-counter > .active-index');
        const next = $('.slider-counter > .total-count');

        back.text(activeIndex.toString())
        next.text(totalCount.toString())
    }

    close() {
        $('.close').on('click', () => {
            console.log(12)
            $('.project-detailed-gallery').hide('slow')
            $('body').css('position', 'initial')
        })
    }

    subscribeToOpen() {
        $('.image').on('click', () => {
            $('.project-detailed-gallery').show( "slow", function() {
                // Animation complete.
            });
        })
    }
}


