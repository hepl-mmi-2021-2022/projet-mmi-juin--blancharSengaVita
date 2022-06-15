import {GameController} from "./controllers/GameController";


class Main {
    private gameController: GameController;

    constructor() {
        this.gameController = new GameController()
    }
}

new Main();
