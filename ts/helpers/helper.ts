export function ellipsizeTextBox(el: any) {
    const maxStrLength = 400;
    el.innerHTML = el.innerHTML.length > maxStrLength ?
        `${el.innerHTML.substring(0, maxStrLength)}... <span class="readMore">Reade More</span>`
        : el.innerHTML;
}
