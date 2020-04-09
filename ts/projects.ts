import {ellipsizeTextBox} from "./helpers/helper";

export class Projects {
    showState = true;

    constructor() {
        this.addEventListeners()
    }

    addEventListeners() {
        $('.filter-head').on('click', (e) => {
            const element = $(e.target);
            const filterType = element.data('type');
            this.showHide(element)
        })
    }

    showHide(element: JQuery) {
        const list = $('.list-container')
        if (this.showState) {
            list.css({
                // left: `${-100}px`,
                height: $('.list').height()
            })
            this.showState = false;
        } else {
            list.css({
                height: 0
            })
            this.showState = true;
        }

        console.log(this.showState);

    }

}
