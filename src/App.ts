require('./style/main.scss');
import {GameControl} from "./modules/GameControl";
new class App{
    gameControl:GameControl;
    constructor() {
        this.gameControl = new GameControl();
        this.init()
    }
    init(){
        this.gameControl.init();
    }

}
