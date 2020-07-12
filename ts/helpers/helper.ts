export function ellipsizeTextBox(elementLinkName: string, elementLink: any ,el: any, text: string, elementRead: string, length: number, fullText: boolean) {
    const maxStrLength = length;
    let innerText = ''
    if (elementLink) {
        innerText = `${text.substring(0, maxStrLength)}... <span class="readMore"><a href="${elementLink}">${elementLinkName}</a></span>`
        el.html(innerText)
    } else {
        innerText = text.length > maxStrLength ?
            `${text.substring(0, maxStrLength)}... <span class="readMore">${elementRead}</span>`
            : text;
        el.html(innerText)
    }
}


export function toggleBodyFIx() {
    const body = $('body');
    if (body.hasClass('fix')) {
        body.removeClass('fix')
    } else {
        body.addClass('fix')
    }

}
