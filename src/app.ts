require('./style/main.scss')
import {Foo} from "./modules/Foo";
import {ScorePanel} from "./modules/ScorePanel";

// const foo = new Foo()
// console.log(foo.X,foo.Y)
// foo.changePosition()
// console.log(foo.X,foo.Y)

const p = new ScorePanel()
for(let i = 0; i < 200; i++){
    p.addScore()
}
console.log(p.score,p.level)
