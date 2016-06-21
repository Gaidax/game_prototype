//****************************************************************************
//abstract_states.ts
//Author: Vasyl Milchevskyi
//Last Modified by: Vasyl Milchevskyi
//Description: This file contains abstract class that constructs scenes for each state/node
//Last Modified: 6/12/2016
//****************************************************************************

//These are all of the games' possible states
enum GameStates {
    START,
    GO_INSIDE,
    GO_AWAY,
    CRACK_DOOR,
    KNOCK_IN_DOOR,
    GIVE_HAND_TO_PINK,
    SAY_HI_TO_PINK,
    PUNCH_STRANGE_MAN,
    GIVE_HAND_TO_STRANGE,
    GO_FOREST,
    GO_MOUNTAINS,
    FIGHT_CHIN,
    GIVE_SOUL_TO_CHIN,
    STOP_SALAMANDER,
    TUNE_TO_SALAMANDER,
}

//these two variables are collectebles that are required for a good ending
var MAGIC_FLUTE: boolean;
MAGIC_FLUTE = false;
var PINK_ALLY: boolean;
PINK_ALLY = false;
var MAGIC_FLUTE_TRANSITION: boolean;
MAGIC_FLUTE_TRANSITION = false;
var PINK_ALLY_TRANSITION: boolean;
PINK_ALLY_TRANSITION = false;

//this class represents the logic of all final states
abstract class FinalState {
    constructor(text_file: string, end_pic: string) {
        MAGIC_FLUTE = false;
        PINK_ALLY = false;
        stage.removeAllChildren();
        this.end_game(end_pic);
        setText(text_file);
    }
    private end_game(back: string) {
        background = new createjs.Bitmap(assets.getResult(back));
        background.regX = background.getBounds().width * 0.5;
        background.regY = background.getBounds().height * 0.5;
        background.x = 320;
        background.y = 240;
        background.alpha = 0;
        createjs.Tween.get(background).to({ alpha: 1 }, 2000);
        stage.addChild(background);
        background.on("click", function () {
            stage.removeAllChildren();
            let sc = new StartState();
        });
    }
}

//This is an abstract class for game states. It contains all the logic for game states
abstract class GameState {
    protected curr_state: GameStates;
    private button_1;
    private button_2;
    private background;
    private can_go_back;

    constructor(the_state: GameStates, button_add1: string,
        button_add2: string, set_background: string,
        can_go_back: boolean) {

        this.curr_state = the_state;
        this.button_1 = button_add1;
        this.button_2 = button_add2;
        this.background = set_background;
        this.can_go_back = can_go_back;
        this.backTransition();     
    }

    //This method desides whether a transition screen is needed for this state, if yes builds a corresponding
    //transition screen (like a mountains picture) calling display_transition if not just builds a screen
    //with build_screen call
    private backTransition() {
        switch (this.curr_state) {
            case GameStates.GO_FOREST:
                this.display_transition("forest_back", "The forest is gloomy and dark. You sense danger.");
                break;
            case GameStates.GO_MOUNTAINS:
                this.display_transition("mountain_back", "It's cold and foggy in the mountains");
                break;
            case GameStates.KNOCK_IN_DOOR:
                this.display_transition('knocks_back', "You knock the door calmly.");          
                break;
            case GameStates.GO_AWAY:
                if (MAGIC_FLUTE_TRANSITION) {
                    MAGIC_FLUTE_TRANSITION = false;               
                    this.display_transition('sal_gives_flute', "You stop Salamender man "+
                        "and he gives you his flute.\nApparently, it has some significance.\n Salamander" +
                        "Man however, dissappeared. He is nowhere to be found\n");
                    break;
                }
            case GameStates.START:
                if (PINK_ALLY_TRANSITION) {
                    PINK_ALLY_TRANSITION = false;
                    this.display_transition("pink_friend", "Pink man is attracted to a flute you" +
                        "got from Salamander man.\n He seems very excited about it and you give it to him." +
                        "After a couple of songs\n and dances he agrees\n to accompany you on your quest.");
                    break;
                }
                
            default:
                this.build_screen(this.button_1, this.button_2, this.background);
                break;
        }
    }

    //Shows a transition screen (image) an a text, which disappears on click
    private display_transition(image, text) {
        changeScreen();
        transition = new createjs.Bitmap(assets.getResult(image));
        transition.alpha = 0;
        createjs.Tween.get(transition).to({ alpha: 1 }, 1000);
        stage.addChild(transition);
        displayMessage(text);
        transition.addEventListener("click", this.show);
    }

    private show = (event) => {
        createjs.Tween.get(transition).to({ alpha: 0 }, 1000);
        stage.removeChild(text_message);
        //stage.removeChild(transition);
        this.build_screen(this.button_1, this.button_2, this.background);
    }

    //A method for a "go back" button and it's logic. 
    //Depending on your current state it desides where can you go back
    private goBack = () => {
        switch (this.curr_state) {
            case GameStates.GO_MOUNTAINS:
                GameState.stateChange(GameStates.GO_AWAY);
                break;
            case GameStates.KNOCK_IN_DOOR:
                GameState.stateChange(GameStates.GO_INSIDE);
                break;
            default:
                this.curr_state -= this.curr_state;
                GameState.stateChange(this.curr_state);
                break;
        }
    }

    //This method returns a string for each button, the string 
    //explains the action associated with a button
    private buttonText = (): string =>  {

        switch (this.curr_state) {
            case GameStates.START:
                return "Take a closer look to a house|Venture outside";
            case GameStates.GO_INSIDE:
                return "Knock the door|Break in";
            case GameStates.GO_AWAY:
                return "Travel to mountains|Go in the forest";
            case GameStates.CRACK_DOOR:
                return "Punch strange man|Give a hand to a strange man (as a friendly gesture)";
            case GameStates.KNOCK_IN_DOOR:
                return "Give hand to a pink man (as a friendly gesture)|Talk to the pink man";
            case GameStates.GO_MOUNTAINS:
                return "Stop Salamander man|Tune in to the melody";
            case GameStates.GO_FOREST:
                return "Fight evil Chin-Chin|Surrender your soul to Chin-Chin";
            default: return "ERROR|ERROR";
            
        }

    }
    //This method sets a text for a screen
    private stageText = () => {
        switch (this.curr_state) {
            case GameStates.START:
                setText("start_text");
                break;
            case GameStates.GO_INSIDE:
                setText("inside_text");
                break;
            case GameStates.GO_AWAY:
                setText("away_text");
                break;
            case GameStates.GO_FOREST:
                if (PINK_ALLY) {
                    setText("forest_pink_text");
                    break;
                }
                setText("forest_text");
                break;
            case GameStates.GO_MOUNTAINS:
                setText("mountain_text");
                break;
            case GameStates.KNOCK_IN_DOOR:
                if (MAGIC_FLUTE) {
                    setText("knock_flute_text");
                    break;
                }
                setText("knock_text");
                break;
            case GameStates.CRACK_DOOR:
                setText("crack_text");
                break;
            default:
                displayMessage("There was an error");
                break;
        }
    }

//This method defines state switching logic.
    protected static stateChange(state: GameStates) {

        switch (state) {
            case GameStates.START:
                new StartState();
                break;
            case GameStates.GO_INSIDE:
                if (PINK_ALLY) {
                    displayMessage("You've already been there");
                    break;
                } else {
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
                    PINK_ALLY_TRANSITION = true;
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
                MAGIC_FLUTE_TRANSITION = true;
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
                } else {
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
    }


//This method builds each screen with two corresponding buttons for each state and a go back button
    private build_screen(button_add1: string, button_add2: string, back: string) {

        stage.removeChild(text_message);

        changeScreen();

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
        button.x = 200;
        button.y = 350;
        button.alpha = 0;
        createjs.Tween.get(button).to({ alpha: 1 }, 2500);
        stage.addChild(button);

        button2 = new createjs.Bitmap(assets.getResult(button_add2));
        button2.regX = button.getBounds().width * 0.5;
        button2.regY = button.getBounds().height * 0.5;
        button2.setBounds(60, 300, 80, 80);
        button2.x = 400;
        button2.y = 350;
        button2.alpha = 0;
        createjs.Tween.get(button2).to({ alpha: 1 }, 2500);
        stage.addChild(button2);

        back_button = new createjs.Bitmap(assets.getResult("back_btn"));
        back_button.regX = button.getBounds().width * 0.5;
        back_button.regY = button.getBounds().height * 0.5;
        back_button.x = 290;
        back_button.y = 450;
        back_button.alpha = 0;
        createjs.Tween.get(back_button).to({ alpha: 1 }, 2500);
        stage.addChild(back_button);

        var button_text = this.buttonText().split("|", 2);
        var button1_text = button_text[0];
        var button2_text = button_text[1];

        button.on('mouseover', function () { mouse_over(button, button1_text);});
        button.on('mouseout', function () { mouse_out(button); });
        button2.on('mouseover', function () { mouse_over(button2, button2_text);});
        button2.on('mouseout', function () { mouse_out(button2);});
        back_button.on('mouseover', function () { mouse_over(back_button, "Go Back");});
        back_button.on('mouseout', function () { mouse_out(back_button); });

        button.on("click", this.choice_1);
        button2.on("click", this.choice_2);

        //Back button only works when you are able to go back.
        //Sometimes you can't escape
        if (this.can_go_back) {
            back_button.on("click", this.goBack);
        } else {
            back_button.on("click", function () {
                displayMessage("You can't go back.");
            });
        }

        this.stageText();
    }
    get state(): GameStates {
        return this.curr_state;
    }

    set state(state: GameStates) {
        this.curr_state = state;
    }

    //Each State has two choises which have to be implemented
    abstract choice_1(event: createjs.MouseEvent): void;
    abstract choice_2(event: createjs.MouseEvent): void;

}