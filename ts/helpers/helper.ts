export function ellipsizeTextBox(el: any, text: string, elementRead: string, length: number, fullText: boolean) {
    const maxStrLength = length;
    let innerText = ''
    innerText = text.length > maxStrLength ?
        `${text.substring(0, maxStrLength)}... <span class="readMore">${elementRead}</span>`
        : text;
    el.html(innerText)
}


export function toggleBodyFIx() {
    const body = $('body');
    if (body.hasClass('fix')) {
        body.removeClass('fix')
    } else {
        body.addClass('fix')
    }

}
