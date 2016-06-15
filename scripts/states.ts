/// <reference path="game.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />

enum GameStates {
    START,
    GO_INSIDE,
    GO_AWAY,
    CRACK_DOOR,
    KNOCK_IN,
    GIVE_HAND,
    PUNCH_MAN,
    SAY_HI,
}

abstract class FinalState {
    constructor(message: string) {
        stage.removeAllChildren();
        console.log(message);
    }
}

abstract class GameState {
    protected curr_state: GameStates;

    constructor(the_state: GameStates, button_add1: string,
        button_add2: string, can_go_back: boolean) {

        this.curr_state = the_state;
        this.build_two_buttons(button_add1, button_add2);

        if (can_go_back) {
            back_button = new createjs.Bitmap(assets.getResult("back_btn"));
            back_button.regX = button.getBounds().width * 0.5;
            back_button.regY = button.getBounds().height * 0.5;
            back_button.x = 190;
            back_button.y = 300;
            stage.addChild(back_button);
            back_button.on("click", this.goBack); 
        }
    }

    protected static stateChange(state: GameStates) {

        switch (state) {
            case 0:
                new StartState();
                break;
            case 1:
                new GoesIn();
                break;
            case 2:
                new GoesAway();
                break;
            case 3:
                new CracksOpenDoor();
                break;
            case 4:
                new KnocksDoor();
                break;
            case 5:
                new GivesHimHand();
                break;
            case 6:
                new PunchesHim();
                break;
            case 7:
                new SayHi();
                break;
            default:
                break;
        }
    }

    protected build_two_buttons(button_add1: string, button_add2: string) {

        stage.removeAllChildren();
        button = new createjs.Bitmap(assets.getResult(button_add1));
        button.regX = button.getBounds().width * 0.5;
        button.regY = button.getBounds().height * 0.5;
        button.x = 60;
        button.y = 300;
        stage.addChild(button);
        button2 = new createjs.Bitmap(assets.getResult(button_add2));
        button2.regX = button.getBounds().width * 0.5;
        button2.regY = button.getBounds().height * 0.5;
        button2.x = 160;
        button2.y = 300;
        stage.addChild(button2);

        button.on("click", this.choice_1);
        button2.on("click", this.choice_2);
    }

    protected goBack = () => {
        this.curr_state -= this.curr_state;
        console.log(this.curr_state);
        GameState.stateChange(this.curr_state);
    }

    get state(): GameStates {
        return this.curr_state;
    }

    set state(state: GameStates) {
        this.curr_state = state;
    }

    abstract choice_1(event: createjs.MouseEvent): void;
    abstract choice_2(event: createjs.MouseEvent): void;

}

class StartState extends GameState {

    constructor() {
        super(GameStates.START, "button1", "button2", false);
        console.log(this.curr_state);
    }
    choice_1(event: createjs.MouseEvent) {
        console.log('selected to go inside');
        GameState.stateChange(GameStates.GO_INSIDE);
    }
    choice_2(event: createjs.MouseEvent) {
        console.log('selected to go away');
        GameState.stateChange(GameStates.GO_AWAY);
    }
}

class GoesAway extends GameState {
    constructor() {
        super(GameStates.GO_AWAY, "button2","button1", true);
        console.log("Selected second" + this.curr_state.toString());
    }
    choice_1(event: createjs.MouseEvent) {
        console.log('selection 2');
    }
    choice_2(event: createjs.MouseEvent) {
        console.log('selecton 1');
    }
}

class GoesIn extends GameState {
    constructor() {
        super(GameStates.GO_INSIDE, "button3", "button4", true);
        console.log("Selected inside" + this.curr_state.toString());
        console.log("He's in");
    }
    choice_1(event: createjs.MouseEvent) {
        console.log('knocks');
        GameState.stateChange(GameStates.KNOCK_IN);
    }
    choice_2(event: createjs.MouseEvent) {
        console.log('cracks door');
        GameState.stateChange(GameStates.CRACK_DOOR);
    }
}

class CracksOpenDoor extends GameState {
    constructor() {
        super(GameStates.CRACK_DOOR, "button4", "button3", false);
        console.log("Cracks door");
    }
    choice_1(event: createjs.MouseEvent) {
        console.log('selection 2');
        GameState.stateChange(GameStates.PUNCH_MAN);
    }
    choice_2(event: createjs.MouseEvent) {
        console.log('selecton 1');
        GameState.stateChange(GameStates.GIVE_HAND);
    }

}

class KnocksDoor extends GameState {
    constructor() {
        super(GameStates.KNOCK_IN, 'button2', 'button1', false);
        console.log("knocks in");
    }
    choice_1(event: createjs.MouseEvent) {
        console.log('selection 2');
        GameState.stateChange(GameStates.GIVE_HAND);
    }
    choice_2(event: createjs.MouseEvent) {
        console.log('selecton 1');
        GameState.stateChange(GameStates.SAY_HI);
    }

}

class PunchesHim extends FinalState {
    constructor() {
        super("You died");
    }

}
class GivesHimHand extends FinalState {
    constructor() {
        super("You greated him");
    }

}

class SayHi extends FinalState {
    constructor() {
        super("You said hi");
    }

}
