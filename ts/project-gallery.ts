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
    slider2: any;

    hummerJs: any

    constructor() {
        this.init()
        this.subscribeToOpen()
        this.close()

        var supportsOrientationChange = "onorientationchange" in window,
            orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

        window.addEventListener(orientationEvent, () =>{
            this.init()
        }, false);

        $(document).on(
        'keydown', function(event) {
            if (event.key == "Escape") {
                $('.project-detailed-gallery').hide('slow')
                $('body').css('position', 'initial')
            }
        });

        $('.detailed-gallery .controls .control').on('click', (e) => {
            const clicked = $(e.target)
            const index = clicked.data('index')
            this.setActiveTab(index)
            this.slider.goTo(index)
            this.slider2.goTo(index)
        })
    }

    init() {
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
            this.slider2 = tns({
                container: '.gallery-image-container-mobile',
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

        $('.tns-outer').css('margin', 0)
        this.setActiveTab(0)

    }

    showSlider() {
        const rate = 800;
        let lastClick = Date.now() - rate;
        let up = false;
        let down = false;
        $('.detailed-gallery .scroll').on('mousewheel', (e) => {
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
                    this.slider2.goTo('prev')
                }

                if (down) {
                    this.slider.goTo('next')
                    this.slider2.goTo('next')
                }

                const info = this.slider.getInfo()
                const info2 = this.slider2.getInfo()
                const currentIndex = info.navCurrentIndex
                const currentIndex2 = info2.navCurrentIndex
                this.setActiveTab(currentIndex || currentIndex2)

                lastClick = Date.now()
            }

            $('.project-detailed-gallery').show()
        })
    }

    setActiveTab(index: number) {
        // const controls = $('.control')
        // controls.removeClass('active-control')
        // controls.eq(index).addClass('active-control')
        this.slider.goTo(index)
        this.slider2.goTo(index)
    }

    hummer() {
        if (this.hummerJs) {
            this.hummerJs.off('swipe')
        }
        const elem = $('.detailed-gallery').get(0)

        const options: any =  {
            recognizers: [
                [Hammer.Swipe, {direction: Hammer.DIRECTION_ALL}],
            ]
        }

        this.hummerJs = new Hammer(elem, options)


        this.hummerJs.on("swipe", (ev:any) => {
            const swipeDirection = ev.direction

            if (Direction.Right === swipeDirection) {
                this.slider.goTo('next')
                this.slider2.goTo('next')
            }
            if (Direction.Down === swipeDirection) {
                this.slider.goTo('next')
                this.slider2.goTo('next')
            }
            if (Direction.Left === swipeDirection) {
                this.slider.goTo('prev')
                this.slider2.goTo('prev')
            }
            if (Direction.Up === swipeDirection) {
                this.slider.goTo('prev')
                this.slider2.goTo('prev')
            }

            this.footer()

        });

        const goBack = $('.back');
        const goNext = $('.front');

        goBack.on('click', () => {
            this.slider.goTo('prev')
            this.slider2.goTo('prev')
            this.footer()

        })

        goNext.on('click', () => {
            this.slider.goTo('next')
            this.slider2.goTo('next')
            this.footer()

        })

        this.footer()
    }

    footer() {
        const info = this.slider.getInfo();
        const info2 = this.slider2.getInfo();
        const activeIndex = info.navCurrentIndex + 1;
        const activeIndex2 = info2.navCurrentIndex + 1;
        const totalCount = info.slideCount
        const totalCount2 = info2.slideCount

        const back = $('.slider-counter > .active-index');
        const next = $('.slider-counter > .total-count');

        back.text(activeIndex.toString())
        next.text(totalCount.toString())
        back.text(activeIndex2.toString())
        next.text(totalCount2.toString())
    }

    close() {
        $('.close').on('click', () => {
            $('.project-detailed-gallery').hide('slow')
            $('body').css('position', 'initial')
        })
    }

    subscribeToOpen() {
        $('.image').on('click', (e) => {
            const clicked = $(e.target)
            const index = clicked.data('index')
            this.setActiveTab(index)
            $('.project-detailed-gallery').show( "slow", function() {});

            this.showSlider()
        })
    }
}


