/// <reference path="game.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameStates;
(function (GameStates) {
    GameStates[GameStates["START"] = 0] = "START";
    GameStates[GameStates["GO_INSIDE"] = 1] = "GO_INSIDE";
    GameStates[GameStates["GO_AWAY"] = 2] = "GO_AWAY";
    GameStates[GameStates["CRACK_DOOR"] = 3] = "CRACK_DOOR";
    GameStates[GameStates["KNOCK_IN"] = 4] = "KNOCK_IN";
    GameStates[GameStates["GIVE_HAND"] = 5] = "GIVE_HAND";
    GameStates[GameStates["PUNCH_MAN"] = 6] = "PUNCH_MAN";
    GameStates[GameStates["SAY_HI"] = 7] = "SAY_HI";
})(GameStates || (GameStates = {}));
var FinalState = (function () {
    function FinalState(message) {
        stage.removeAllChildren();
        console.log(message);
    }
    return FinalState;
}());
var GameState = (function () {
    function GameState(the_state, button_add1, button_add2, can_go_back) {
        var _this = this;
        this.goBack = function () {
            _this.curr_state -= _this.curr_state;
            console.log(_this.curr_state);
            GameState.stateChange(_this.curr_state);
        };
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
    GameState.stateChange = function (state) {
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
    };
    GameState.prototype.build_two_buttons = function (button_add1, button_add2) {
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
    };
    Object.defineProperty(GameState.prototype, "state", {
        get: function () {
            return this.curr_state;
        },
        set: function (state) {
            this.curr_state = state;
        },
        enumerable: true,
        configurable: true
    });
    return GameState;
}());
var StartState = (function (_super) {
    __extends(StartState, _super);
    function StartState() {
        _super.call(this, GameStates.START, "button1", "button2", false);
        console.log(this.curr_state);
    }
    StartState.prototype.choice_1 = function (event) {
        console.log('selected to go inside');
        GameState.stateChange(GameStates.GO_INSIDE);
    };
    StartState.prototype.choice_2 = function (event) {
        console.log('selected to go away');
        GameState.stateChange(GameStates.GO_AWAY);
    };
    return StartState;
}(GameState));
var GoesAway = (function (_super) {
    __extends(GoesAway, _super);
    function GoesAway() {
        _super.call(this, GameStates.GO_AWAY, "button2", "button1", true);
        console.log("Selected second" + this.curr_state.toString());
    }
    GoesAway.prototype.choice_1 = function (event) {
        console.log('selection 2');
    };
    GoesAway.prototype.choice_2 = function (event) {
        console.log('selecton 1');
    };
    return GoesAway;
}(GameState));
var GoesIn = (function (_super) {
    __extends(GoesIn, _super);
    function GoesIn() {
        _super.call(this, GameStates.GO_INSIDE, "button3", "button4", true);
        console.log("Selected inside" + this.curr_state.toString());
        console.log("He's in");
    }
    GoesIn.prototype.choice_1 = function (event) {
        console.log('knocks');
        GameState.stateChange(GameStates.KNOCK_IN);
    };
    GoesIn.prototype.choice_2 = function (event) {
        console.log('cracks door');
        GameState.stateChange(GameStates.CRACK_DOOR);
    };
    return GoesIn;
}(GameState));
var CracksOpenDoor = (function (_super) {
    __extends(CracksOpenDoor, _super);
    function CracksOpenDoor() {
        _super.call(this, GameStates.CRACK_DOOR, "button4", "button3", false);
        console.log("Cracks door");
    }
    CracksOpenDoor.prototype.choice_1 = function (event) {
        console.log('selection 2');
        GameState.stateChange(GameStates.PUNCH_MAN);
    };
    CracksOpenDoor.prototype.choice_2 = function (event) {
        console.log('selecton 1');
        GameState.stateChange(GameStates.GIVE_HAND);
    };
    return CracksOpenDoor;
}(GameState));
var KnocksDoor = (function (_super) {
    __extends(KnocksDoor, _super);
    function KnocksDoor() {
        _super.call(this, GameStates.KNOCK_IN, 'button2', 'button1', false);
        console.log("knocks in");
    }
    KnocksDoor.prototype.choice_1 = function (event) {
        console.log('selection 2');
        GameState.stateChange(GameStates.GIVE_HAND);
    };
    KnocksDoor.prototype.choice_2 = function (event) {
        console.log('selecton 1');
        GameState.stateChange(GameStates.SAY_HI);
    };
    return KnocksDoor;
}(GameState));
var PunchesHim = (function (_super) {
    __extends(PunchesHim, _super);
    function PunchesHim() {
        _super.call(this, "You died");
    }
    return PunchesHim;
}(FinalState));
var GivesHimHand = (function (_super) {
    __extends(GivesHimHand, _super);
    function GivesHimHand() {
        _super.call(this, "You greated him");
    }
    return GivesHimHand;
}(FinalState));
var SayHi = (function (_super) {
    __extends(SayHi, _super);
    function SayHi() {
        _super.call(this, "You said hi");
    }
    return SayHi;
}(FinalState));
//# sourceMappingURL=states.js.map