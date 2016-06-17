//****************************************************************************
//abstract_states.ts
//Author: Vasyl Milchevskyi
//Last Modified by: Vasyl Milchevskyi
//Description: This file contains abstract class that constructs scenes for each state/node
//Last Modified: 6/12/2016
//****************************************************************************
var GameStates;
(function (GameStates) {
    GameStates[GameStates["START"] = 0] = "START";
    GameStates[GameStates["GO_INSIDE"] = 1] = "GO_INSIDE";
    GameStates[GameStates["GO_AWAY"] = 2] = "GO_AWAY";
    GameStates[GameStates["CRACK_DOOR"] = 3] = "CRACK_DOOR";
    GameStates[GameStates["KNOCK_IN_DOOR"] = 4] = "KNOCK_IN_DOOR";
    GameStates[GameStates["GIVE_HAND_TO_PINK"] = 5] = "GIVE_HAND_TO_PINK";
    GameStates[GameStates["SAY_HI_TO_PINK"] = 6] = "SAY_HI_TO_PINK";
    GameStates[GameStates["PUNCH_STRANGE_MAN"] = 7] = "PUNCH_STRANGE_MAN";
    GameStates[GameStates["GIVE_HAND_TO_STRANGE"] = 8] = "GIVE_HAND_TO_STRANGE";
    GameStates[GameStates["GO_FOREST"] = 9] = "GO_FOREST";
    GameStates[GameStates["GO_MOUNTAINS"] = 10] = "GO_MOUNTAINS";
    GameStates[GameStates["FIGHT_CHIN"] = 11] = "FIGHT_CHIN";
    GameStates[GameStates["GIVE_SOUL_TO_CHIN"] = 12] = "GIVE_SOUL_TO_CHIN";
    GameStates[GameStates["STOP_SALAMANDER"] = 13] = "STOP_SALAMANDER";
    GameStates[GameStates["TUNE_TO_SALAMANDER"] = 14] = "TUNE_TO_SALAMANDER";
})(GameStates || (GameStates = {}));
var MAGIC_FLUTE;
MAGIC_FLUTE = false;
var PINK_ALLY;
PINK_ALLY = false;
var FinalState = (function () {
    function FinalState(message) {
        stage.removeAllChildren();
        console.log(message);
    }
    return FinalState;
}());
var GameState = (function () {
    function GameState(the_state, button_add1, button_add2, set_background, can_go_back) {
        var _this = this;
        this.show = function (event) {
            createjs.Tween.get(transition).to({ alpha: 0 }, 1000);
            stage.removeChild(text_message);
            _this.build_screen(_this.button_1, _this.button_2, _this.background);
        };
        this.goBack = function () {
            switch (_this.curr_state) {
                case GameStates.GO_MOUNTAINS:
                    GameState.stateChange(GameStates.GO_AWAY);
                    break;
                case GameStates.KNOCK_IN_DOOR:
                    GameState.stateChange(GameStates.GO_INSIDE);
                    break;
                default:
                    _this.curr_state -= _this.curr_state;
                    GameState.stateChange(_this.curr_state);
                    break;
            }
        };
        this.curr_state = the_state;
        this.button_1 = button_add1;
        this.button_2 = button_add2;
        this.background = set_background;
        this.can_go_back = can_go_back;
        this.backTransition();
    }
    GameState.prototype.backTransition = function () {
        switch (this.curr_state) {
            case GameStates.GO_FOREST:
                this.display_transition("forest_back", "Go to forest");
                break;
            case GameStates.GO_MOUNTAINS:
                this.display_transition("mountain_back", "Go mountains");
                break;
            case GameStates.KNOCK_IN_DOOR:
                this.display_transition('knocks_back', "Knocks it");
                break;
            case GameStates.GO_AWAY:
                console.log("here");
                console.log(MAGIC_FLUTE);
                if (MAGIC_FLUTE) {
                    this.display_transition('sal_gives_flute', "He gives you the flute");
                    break;
                }
            case GameStates.START:
                if (PINK_ALLY) {
                    this.display_transition("pink_friend", "Friends with this guy");
                    break;
                }
            default:
                this.build_screen(this.button_1, this.button_2, this.background);
                break;
        }
    };
    GameState.prototype.display_transition = function (image, text) {
        transition = new createjs.Bitmap(assets.getResult(image));
        transition.alpha = 0;
        createjs.Tween.get(transition).to({ alpha: 1 }, 1000);
        stage.addChild(transition);
        displayMessage(text);
        transition.addEventListener("click", this.show);
    };
    GameState.stateChange = function (state) {
        switch (state) {
            case GameStates.START:
                new StartState();
                break;
            case GameStates.GO_INSIDE:
                if (PINK_ALLY) {
                    displayMessage("You've already been there");
                    break;
                }
                else {
                    new GoesIn(state);
                    break;
                }
            case GameStates.GO_AWAY:
                new GoesAway(state);
                break;
            case GameStates.CRACK_DOOR:
                new CracksOpenDoor(state);
                break;
            case GameStates.KNOCK_IN_DOOR:
                new KnocksDoor(state);
                break;
            case GameStates.GIVE_HAND_TO_STRANGE:
                new GivesStrangeHand();
                break;
            case GameStates.PUNCH_STRANGE_MAN:
                new PunchesStrange();
                break;
            case GameStates.GIVE_HAND_TO_PINK:
                if (MAGIC_FLUTE) {
                    PINK_ALLY = true;
                    MAGIC_FLUTE = false;
                    GameState.stateChange(GameStates.START);
                    break;
                }
                else {
                    new GivesPinkHand();
                    break;
                }
            case GameStates.SAY_HI_TO_PINK:
                new SayHiPink();
                break;
            case GameStates.GO_FOREST:
                new GoesForest(state);
                break;
            case GameStates.STOP_SALAMANDER:
                MAGIC_FLUTE = true;
                console.log(MAGIC_FLUTE);
                new GoesAway(GameStates.GO_AWAY);
                break;
            case GameStates.TUNE_TO_SALAMANDER:
                new TuneToSalamander();
                break;
            case GameStates.GO_MOUNTAINS:
                if (MAGIC_FLUTE) {
                    displayMessage("Can't go there any more");
                    break;
                }
                else {
                    new GoesMountains(state);
                    break;
                }
            case GameStates.GIVE_SOUL_TO_CHIN:
                new GiveSoulToChin();
                break;
            case GameStates.FIGHT_CHIN:
                if (PINK_ALLY) {
                    new Passify_With_Pink();
                    break;
                }
                new BadIdea();
                break;
            default:
                break;
        }
    };
    GameState.prototype.build_screen = function (button_add1, button_add2, back) {
        stage.removeChild(text_message);
        if (button_add1 && button_add2 && back && back_button) {
            createjs.Tween.get(back_button).to({ alpha: 0 }, 1000);
            createjs.Tween.get(button2).to({ alpha: 0 }, 1000);
            createjs.Tween.get(button).to({ alpha: 0 }, 1000);
            createjs.Tween.get(background).to({ alpha: 0 }, 1500);
        }
        background = new createjs.Bitmap(assets.getResult(back));
        background.regX = background.getBounds().width * 0.5;
        background.regY = background.getBounds().height * 0.5;
        background.x = 320;
        background.y = 240;
        background.alpha = 0;
        createjs.Tween.get(background).to({ alpha: 1 }, 2000);
        stage.addChild(background);
        button = new createjs.Bitmap(assets.getResult(button_add1));
        button.regX = button.getBounds().width * 0.5;
        button.regY = button.getBounds().height * 0.5;
        button.setBounds(60, 300, 80, 80);
        button.x = 100;
        button.y = 300;
        button.alpha = 0;
        createjs.Tween.get(button).to({ alpha: 1 }, 2500);
        stage.addChild(button);
        button2 = new createjs.Bitmap(assets.getResult(button_add2));
        button2.regX = button.getBounds().width * 0.5;
        button2.regY = button.getBounds().height * 0.5;
        button2.setBounds(60, 300, 80, 80);
        button2.x = 190;
        button2.y = 300;
        button2.alpha = 0;
        createjs.Tween.get(button2).to({ alpha: 1 }, 2500);
        stage.addChild(button2);
        back_button = new createjs.Bitmap(assets.getResult("back_btn"));
        back_button.regX = button.getBounds().width * 0.5;
        back_button.regY = button.getBounds().height * 0.5;
        back_button.x = 290;
        back_button.y = 400;
        back_button.alpha = 0;
        createjs.Tween.get(back_button).to({ alpha: 1 }, 2500);
        stage.addChild(back_button);
        button.on('mouseover', function () { mouse_over(button); });
        button.on('mouseout', function () { mouse_out(button); });
        button2.on('mouseover', function () { mouse_over(button2); });
        button2.on('mouseout', function () { mouse_out(button2); });
        back_button.on('mouseover', function () { mouse_over(back_button); });
        back_button.on('mouseout', function () { mouse_out(back_button); });
        button.on("click", this.choice_1);
        button2.on("click", this.choice_2);
        if (this.can_go_back) {
            back_button.on("click", this.goBack);
        }
        else {
            back_button.on("click", function () {
                displayMessage("At this point you can't go back any more.");
            });
        }
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
//# sourceMappingURL=abstract_states.js.map