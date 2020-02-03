import {tns} from "../assets/js/tini";

export class aboutSlider {
    constructor() {
        this.slaiderInit()
    }

    slaiderInit() {
        let slider = tns({
            container: '.stafSlider',
            items: 3,
            rewind: true,
            swipeAngle: false,
            speed: 400,
            controls: false,
            responsive: {
                350: {
                    "items": 2
                },
                500: {
                    "items": 3
                }
            },
        })
    }

    next() {

    }

    prev() {

    }

    

}
