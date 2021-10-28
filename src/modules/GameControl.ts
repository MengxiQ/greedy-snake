import {Snake} from "./Snake";
import {ScorePanel} from "./ScorePanel";
import {Foo} from "./Foo";
export class GameControl {
    snake:Snake;
    foo:Foo;
    scorePanel:ScorePanel;
    //存储蛇的移动方向
    direction:string = '';
    //控制蛇是否还活着
    isLive:Boolean = true;
    //记录可以用那些值控制方向，兼容或者使用其他键映射自行修改：[键,方向]
    keyMap = new Map(
        [
            ['ArrowUp','up'],
            ['ArrowDown','down'],
            ['ArrowLeft','left'],
            ['ArrowRight','right'],
            ['w','up'],
            ['s','down'],
            ['a','left'],
            ['d','right']
        ])
    constructor() {
        this.snake = new Snake(2);
        this.foo = new Foo();
        this.scorePanel = new ScorePanel(10,2);
    }
    //初始化游戏，调用后游戏就开始
    init():void{
        //键盘按下就开始游戏,绑定键盘事件
        document.addEventListener('keydown',e => {
            this.changeDirection(e)
        })
        this.run()
    }
    changeDirection(e:KeyboardEvent){
        if(this.keyMap.has(e.key)){
            //不能反向掉头
            if(this.direction === 'up' && this.keyMap.get(e.key) === 'down') return;
            if(this.direction === 'left' && this.keyMap.get(e.key) === 'right') return;
            if(this.direction === 'down' && this.keyMap.get(e.key) === 'up') return;
            if(this.direction === 'right' && this.keyMap.get(e.key) === 'left') return;

            this.direction = String(this.keyMap.get(e.key));

        }
    }
    run(){
        /*  根据方向（this.direction）来使蛇的位置改变
           *       向上 top 减少
           *       向下 down 增加
           *       向左  left 减少
           *       向右  right 增加
           * */
        let x = this.snake.X;
        let y = this.snake.Y;
        this.checkEatFoo(x,y);
        switch (this.direction) { //如果是按到了其他键，那么这里都不命中，蛇不会走。
            case 'up':
                y -= 10;
                break;
            case 'down':
                y += 10;
                break;
            case 'left':
                x -= 10;
                break;
            case 'right':
                x += 10;
                break;
        }
        try{
            this.snake.Y = y;
            this.snake.X = x;
        }catch (e:any) {
            alert(e.message)
            this.isLive = false;
        }

        //如果蛇还活着，那么就一直run下去

        this.isLive && setTimeout(this.run.bind(this),300 - this.scorePanel.level * 30);

    }
    checkEatFoo(x:number,y:number){
        if(x === this.foo.X && y === this.foo.Y){
            this.scorePanel.addScore();
            this.foo.changePosition();
            this.snake.addBody();
        }
    }
}