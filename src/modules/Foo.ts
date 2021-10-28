export class Foo{
    element:HTMLElement;
    constructor() {
        this.element = document.getElementById("foo")!; //! 表示该类型十分确定
    }
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    changePosition():void{
        //舞台是正方形，xy位置只能在范围：舞台边长-foo的边长-上下边和=304-10-4=290px
        //并且位置只能是10的倍数，因为蛇每走一步是10
        const random_x:number = Math.round(Math.random() * 29) * 10; //Math.random() * 29 生成0~29的数
        const random_y:number = Math.round(Math.random() * 29) * 10;
        this.element.style.left = random_x + 'px';
        this.element.style.top = random_y + 'px';
    }
}

