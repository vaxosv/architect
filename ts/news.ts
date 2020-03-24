import {ellipsizeTextBox} from "./helpers/helper";

export class News {
    constructor() {
        this.threeDots();
        this.eventListeners()
    }

    threeDots() {
        $('.newsDescription').each((i, el) => {
            const element = $(el)
            const elementText = element.data('text');
            ellipsizeTextBox(element, elementText, 230, false);
        })
    }

    private eventListeners() {

        $('.readMore').on('click', (event) => {
            const element = $(event.target).parent()
            const elementText = element.data('text');
            element.html(elementText)


            element.parent().parent().parent().parent().siblings().each((i, el) => {
                const element =
                    $(el).children('a')
                    .children('.postContainer')
                    .children('.description')
                    .children('.newsDescription')

                const elementText = element.data('text');
                ellipsizeTextBox(element, elementText, 230, false);
            });

        })
    }
}
