//****************************************************************************
//abstract_states.ts
//Author: Vasyl Milchevskyi
//Last Modified by: Vasyl Milchevskyi
//Description: This is a file that contains logic for each decision on each node
//Last Modified: 6/12/2016
//****************************************************************************

/// <reference path="abstract_states.ts" />
/// <reference path="game.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />

class StartState extends GameState {
    constructor() {
        super(GameStates.START, "button_go_inside",
            "button_go_away", "stage1_back", false);
    }
    choice_1(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.GO_INSIDE);
    }
    choice_2(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.GO_AWAY);
    }
}

class GoesAway extends GameState {
    constructor(state) {
        super(state, "button_go_mountains",
            "button_go_forest", "outside_back", true);
    }
    choice_1(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.GO_MOUNTAINS);
    }
    choice_2(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.GO_FOREST);    
    }
}

class GoesIn extends GameState {
    constructor(state) {
        super(state, "button_knock",
            "button_crack", "seedoor_back", true);
    }
    choice_1(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.KNOCK_IN_DOOR);
    }
    choice_2(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.CRACK_DOOR);
    }
}

class CracksOpenDoor extends GameState {
    constructor(state) {
        super(state, "button_punch",
            "button_give_hand", "strange_man", false); 
        console.log("Cracks door");
    }
    choice_1(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.PUNCH_STRANGE_MAN);
    }
    choice_2(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.GIVE_HAND_TO_STRANGE);
    }

}

class KnocksDoor extends GameState {
    constructor(state) {
        super(state, 'button_give_hand',
            'button_say_hi', 'pink_man', true);
        console.log("knocks in");

    }
    choice_1(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.GIVE_HAND_TO_PINK);
    }
    choice_2(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.SAY_HI_TO_PINK);
    }

}

class GoesForest extends GameState {
    constructor(state) {
        super(state, 'button_fight_chin',
            'button_sacrifice', 'chin-chin', false);
    }
    choice_1(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.FIGHT_CHIN);
    }
    choice_2(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.GIVE_SOUL_TO_CHIN);
    }

}

class GoesMountains extends GameState {
    constructor(state) {
        super(state, 'button_stop_sal',
            'button_enjoy_music', 'salamander', true);
    }
    choice_1(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.STOP_SALAMANDER);
    }
    choice_2(event: createjs.MouseEvent) {
        GameState.stateChange(GameStates.TUNE_TO_SALAMANDER);
    }

}
