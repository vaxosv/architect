export class slider {
    private slider: any;
    private carucellLength: number;

    constructor() {
        this.initSlider()
    }

    initSlider() {
        this.slider = $('.owl-carousel');
        this.slider.on('initialized.owl.carousel', (e: any) => {
            this.generateControls(e.item.count)
            this.controlerButtons();
        })
        this.slider.on('changed.owl.carousel', (e: any) => {
            this.carucellLength = e.item.count;
            this.sliderDotsContainer(e);
        })
        this.slider.owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            // center: true,
            // mouseDrag: true,
            // touchDrag: true,
            // pullDrag: true,
            // freeDrag: true,
            // margin: true,
            // stagePadding: true,
            // merge: true,
            // mergeFit: true,
            // autoWidth: true,
            // autoHeight: true,
            // nav: true,
            // navRewind: true,
            // slideBy: true,
            // dotsEach: true,
            // smartSpeed: true,
            // fluidSpeed: true,
            // autoplaySpeed: true,
            // navSpeed: true,
            // dotsSpeed: true,
            // dragEndSpeed: true,
            // responsiveRefreshRate: true,
            // animateOut: true,
            // animateIn: true,
            // fallbackEasing: true,
            // callbacks: true,
            // info: true,
        });
    }

    generateControls(itemLength: number) {
        for (let i = 0; i < itemLength; i++) {
            const div = $('<div/>', {
                "class": 'smallControl',
            })
            $('.slideCOntrolers').append(div)
        }
    }

    controlerButtons() {
        const slider = $('.slideCOntrolers')
        const sliderwidth = slider.width() / 2;
        slider.css('left', 'calc(50% - ' + sliderwidth + 'px');
    }

    sliderDotsContainer(e: any) {
        const index = this.getIndex(e);
        this.sliderDots(index)
        this.serdescriptions(e);
    }

    getIndex(e: any) {
        if (e.item) {
            let index = e.item.index - 1;
            const count = e.item.count;
            if (index > count) {
                index -= count;
            }
            if (index <= 0) {
                index += count;
            }
            return index;
        }
    }

    sliderDots(active: number) {
        active =  active - 1;
        const slides = document.getElementsByClassName('smallControl')
        if(!slides[0]) return

        for (let i = 0; i<= slides.length - 1; i++) {
            if (i === active) {
                slides[i].classList.add('control-active')
            } else {
                // @ts-ignore
                slides[i].classList.remove('control-active')
            }
        }
    }

    serdescriptions(e: any) {
        new Array(e.target.children[0].children[0].children).forEach(i => {
            for (let item of i) {
                const active = item.classList.value.includes('active')
                if (active) {
                    const text  = item.nextElementSibling.children[0].textContent.trim();
                    $('.descripton').html(text);
                }
            }
        })

        const itemText = $('.active > ').text().trim()
        // console.log(itemText)
    }
}
