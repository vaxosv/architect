
import {HtmlActionElementInterface} from "../models/models";


export class ClassToggler {

    constructor(
        private cssClass: string,
        private addActionElement: HtmlActionElementInterface,
        private removeActionlement: HtmlActionElementInterface,
        private targetElement: HTMLElement,
    ) {
        this.addClass();
        this.removeClass();
    }

    addClass():void{
        this.addActionElement.element.addEventListener(this.addActionElement.event, (event: Event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
            this.targetElement.classList.add(this.cssClass);
        });
    }

    removeClass():void{
        this.removeActionlement.element.addEventListener(this.removeActionlement.event, (event: Event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
            this.targetElement.classList.remove(this.cssClass);
        });
    }

}
