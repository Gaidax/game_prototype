//****************************************************************************
//abstract_states.ts
//Author: Vasyl Milchevskyi
//Last Modified by: Vasyl Milchevskyi
//Description: This is a file that contains logic for each decision on each node
//Last Modified: 6/12/2016
//****************************************************************************
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="abstract_states.ts" />
/// <reference path="game.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
//These classes are classes for states. They all inherit a abstract GameState class
//They contain a logic for each state/screen - what happens if you click a button, which
//images are used for a button, if you can go back from this stage or not, e.t.c
var StartState = (function (_super) {
    __extends(StartState, _super);
    function StartState() {
        _super.call(this, GameStates.START, "button_go_inside", "button_go_away", "stage1_back", false);
    }
    StartState.prototype.choice_1 = function (event) {
        GameState.stateChange(GameStates.GO_INSIDE);
    };
    StartState.prototype.choice_2 = function (event) {
        GameState.stateChange(GameStates.GO_AWAY);
    };
    return StartState;
}(GameState));
var GoesAway = (function (_super) {
    __extends(GoesAway, _super);
    function GoesAway(state) {
        _super.call(this, state, "button_go_mountains", "button_go_forest", "outside_back", true);
    }
    GoesAway.prototype.choice_1 = function (event) {
        GameState.stateChange(GameStates.GO_MOUNTAINS);
    };
    GoesAway.prototype.choice_2 = function (event) {
        GameState.stateChange(GameStates.GO_FOREST);
    };
    return GoesAway;
}(GameState));
var GoesIn = (function (_super) {
    __extends(GoesIn, _super);
    function GoesIn(state) {
        _super.call(this, state, "button_knock", "button_crack", "seedoor_back", true);
    }
    GoesIn.prototype.choice_1 = function (event) {
        GameState.stateChange(GameStates.KNOCK_IN_DOOR);
    };
    GoesIn.prototype.choice_2 = function (event) {
        GameState.stateChange(GameStates.CRACK_DOOR);
    };
    return GoesIn;
}(GameState));
var CracksOpenDoor = (function (_super) {
    __extends(CracksOpenDoor, _super);
    function CracksOpenDoor(state) {
        _super.call(this, state, "button_punch", "button_give_hand", "strange_man", false);
        console.log("Cracks door");
    }
    CracksOpenDoor.prototype.choice_1 = function (event) {
        GameState.stateChange(GameStates.PUNCH_STRANGE_MAN);
    };
    CracksOpenDoor.prototype.choice_2 = function (event) {
        GameState.stateChange(GameStates.GIVE_HAND_TO_STRANGE);
    };
    return CracksOpenDoor;
}(GameState));
var KnocksDoor = (function (_super) {
    __extends(KnocksDoor, _super);
    function KnocksDoor(state) {
        _super.call(this, state, 'button_give_hand', 'button_say_hi', 'pink_man', true);
        console.log("knocks in");
    }
    KnocksDoor.prototype.choice_1 = function (event) {
        GameState.stateChange(GameStates.GIVE_HAND_TO_PINK);
    };
    KnocksDoor.prototype.choice_2 = function (event) {
        GameState.stateChange(GameStates.SAY_HI_TO_PINK);
    };
    return KnocksDoor;
}(GameState));
var GoesForest = (function (_super) {
    __extends(GoesForest, _super);
    function GoesForest(state) {
        _super.call(this, state, 'button_fight_chin', 'button_sacrifice', 'chin-chin', false);
    }
    GoesForest.prototype.choice_1 = function (event) {
        GameState.stateChange(GameStates.FIGHT_CHIN);
    };
    GoesForest.prototype.choice_2 = function (event) {
        GameState.stateChange(GameStates.GIVE_SOUL_TO_CHIN);
    };
    return GoesForest;
}(GameState));
var GoesMountains = (function (_super) {
    __extends(GoesMountains, _super);
    function GoesMountains(state) {
        _super.call(this, state, 'button_stop_sal', 'button_enjoy_music', 'salamander', true);
    }
    GoesMountains.prototype.choice_1 = function (event) {
        GameState.stateChange(GameStates.STOP_SALAMANDER);
    };
    GoesMountains.prototype.choice_2 = function (event) {
        GameState.stateChange(GameStates.TUNE_TO_SALAMANDER);
    };
    return GoesMountains;
}(GameState));
