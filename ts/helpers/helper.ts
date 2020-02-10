export function ellipsizeTextBox(el: any) {
    const maxStrLength = 400;
    el.innerHTML = el.innerHTML.length > maxStrLength ?
        `${el.innerHTML.substring(0, maxStrLength)}... <span class="readMore">Reade More</span>`
        : el.innerHTML;
}


export function toggleBodyFIx() {
    const body = $('body');
    if (body.hasClass('fix')) {
        body.removeClass('fix')
    } else {
        body.addClass('fix')
    }

}
