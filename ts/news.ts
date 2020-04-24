import {ellipsizeTextBox} from "./helpers/helper";
import * as $ from "jquery";

export class News {
    constructor() {
        this.threeDots();
        this.eventListeners()
        this.loading()
    }

    loading() {
        $('.loader').addClass('loader-done')
    }

    threeDots() {
        $('.newsDescription').each((i, el) => {
            const element = $(el)
            const elementText = element.data('text');
            ellipsizeTextBox(element, elementText, 230, false);
        })
    }

    private eventListeners() {

        $('.readMore').on('click', function (event) {
            const element = $(event.target).parent()
            const elementText = element.data('text');
            element.html(elementText)
        })
    }
}
