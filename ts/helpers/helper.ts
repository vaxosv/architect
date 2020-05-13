export function ellipsizeTextBox(el: any, text: string, length: number, fullText: boolean) {
    const maxStrLength = length;
    let innerText = ''
    innerText = text.length > maxStrLength ?
        `${text.substring(0, maxStrLength)}... <span class="readMore">Reade More</span>`
        : text;
    el.html(innerText)
    console.log(innerText)
}


export function toggleBodyFIx() {
    const body = $('body');
    if (body.hasClass('fix')) {
        body.removeClass('fix')
    } else {
        body.addClass('fix')
    }

}
