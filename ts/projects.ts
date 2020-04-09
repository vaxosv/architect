export class Projects {
    showState = true;

    constructor() {
        this.setPositions()
        this.events()
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
        const cover = $('.cover');

        filters.hover(() => {
            cover.addClass('full')
        })

        filters.mouseleave(() => {
            cover.removeClass('full')
        })
    }
}
