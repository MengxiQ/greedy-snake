export class ScorePanel{
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    score:number = 0;
    level:number = 1;
    maxLevel:number; //最大等级
    upScore:number; //每多少分升级
    constructor(maxLevel:number = 10,upScore:number = 10){
        this.levelEle = document.getElementById('level')!;
        this.scoreEle = document.getElementById('score')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore():void{
        this.scoreEle.innerText = String(++this.score);
        if(this.score % this.upScore === 0){
            this.levelUP()
        }
    }
    levelUP(level:number = 1):void{
        if (this.level < this.maxLevel){
            this.level += level;
            this.levelEle.innerText = String(this.level);
        }
    }
}