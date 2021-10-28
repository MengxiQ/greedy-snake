import {Stage} from "./Stage";
export class Snake {
    //蛇的头部
    head:HTMLElement;
    //蛇的身体
    bodies:HTMLCollection;
    //蛇的容器
    element:HTMLElement;
    //舞台
    stage:Stage = new Stage();
    constructor(defaultLength:number = 2) {
        this.element = document.getElementById('snake')!;
        //从蛇的容器里面获取身体
        this.bodies = this.element.getElementsByTagName('div');
        this.head = this.bodies.item(0) as HTMLElement;

        //初始化身体
        for (let i = 0; i < defaultLength; i++) {
            this.addBody()
        }
    }
    //获取蛇头的X、Y坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    //设置蛇头的X、Y坐标，判断坐标是否越界，判断蛇是否掉头
    set X(x:number){
        if(this.X === x) return;
        if (x%10 === 0 && (x >= 0 && x < this.stage.width)){
            //判断是否掉头了。

            this.moveBody();//注意这个函数的位置
            //这时候蛇头跟身体第一节是重合的，所以下面蛇头再前进一格，那么就看到长度了。
            this.head.style.left = x + 'px';
            //如果是这里移动蛇身体，那么就会头和第一格覆盖。
            this.checkHeadBody()
        }
        else {
            throw new Error('撞墙了~')
        }
    }
    set Y(y:number){
        if(this.Y === y) return;
        if (y%10 === 0 && (y >= 0 && y < this.stage.height)){
            this.moveBody();
            this.head.style.top = y + 'px';
            this.checkHeadBody()
        }
        else{
            throw new Error('撞墙了~')
        }
    }
    //添加蛇的身体
    //这个函数会把所有的身体（不包括头）覆盖到前一格的位置。所以执行完之后，头会被覆盖。就需要调用后头再往前走一格。
    addBody():void{
        const nodeId:string = Date.now().toString();
        this.element.insertAdjacentHTML('beforeend',`<div "id"="${nodeId}"></div>`)
    }
    //移动蛇的身体，从最后面开始移动，后一节移动到前一节的位置
    moveBody(){
        for (let i = this.bodies.length - 1; i>0; i--) {
            (this.bodies.item(i) as HTMLElement).style.top = (this.bodies.item(i - 1) as HTMLElement).style.top;
            (this.bodies.item(i) as HTMLElement).style.left = (this.bodies.item(i - 1) as HTMLElement).style.left;
        }
    }
    //监测是否吃到自己的身体
    checkHeadBody(){
        for (let i = 1; i < this.bodies.length; i++){
            let body = (this.bodies.item(i)! as HTMLElement);
            if(this.X === body.offsetLeft && this.Y === body.offsetTop){
                throw new Error('撞到自己了~')
            }
        }
    }

}