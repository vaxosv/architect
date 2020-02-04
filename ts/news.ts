import {ellipsizeTextBox} from "./helpers/helper";

export class News {
    constructor() {
        this.threeDots();
    }

    threeDots() {
        $('.newsDescription').each((i, element) => {
            console.log(element)
            ellipsizeTextBox(element);
        })
    }
}
