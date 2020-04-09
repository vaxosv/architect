import {ellipsizeTextBox} from "./helpers/helper";

export class Projects {
    showState = true;

    constructor() {
        this.setPositions()
    }

    setPositions() {
        $('.filter-head').each((i, el) => {
            const element = $(el)
            const pos = element.position().left

            // const someContainerWidth = element.children().first().children().first().children().first()
            element.children().first().children().first().css({
                paddingLeft: pos - (840 / 2) + (element.width() / 2) + 4
            })
        })
    }
}
