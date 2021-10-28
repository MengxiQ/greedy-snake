export class Stage {
    element:HTMLElement;
    constructor() {
        this.element = document.getElementById('stage')!;
    }
    get width():number{
        return this.element.clientWidth;
    }
    get height():number{
        return this.element.clientHeight;
    }
}