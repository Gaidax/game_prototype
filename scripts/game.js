//****************************************************************************
//game.ts
//Author: Vasyl Milchevskyi
//Last Modified by: Vasyl Milchevskyi
//Description: This is a main game file with a Loop.
//Last Modified: 6/12/2016
//****************************************************************************
/// <reference path="abstract_states.ts" />
/// <reference path="states.ts" />
/// <reference path="final_states.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
var stage;
var assets;
var button;
var button2;
var back_button;
var background;
var transition;
var text_message = new createjs.Text;
var button_option = new createjs.Text;
var ScreenText = new createjs.Text;
var canvas = document.getElementById("canvas");
var t2;
var tc;
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop);
    main();
}
function preload() {
    assets = new createjs.LoadQueue();
    console.log("entered");
    assets.on("complete", init, this);
    assets.loadManifest([
        { id: "button_go_inside", src: "images/buttons/go_inside.jpg" },
        { id: "button_go_away", src: "images/buttons/outside.jpg" },
        { id: "button_knock", src: "images/buttons/knock.jpg" },
        { id: "button_crack", src: "images/buttons/crack.jpg" },
        { id: "button_go_mountains", src: "images/buttons/go_mountain.jpg" },
        { id: "button_go_forest", src: "images/buttons/go_forest.jpg" },
        { id: "button_give_hand", src: "images/buttons/give_hand.jpg" },
        { id: "button_say_hi", src: "images/buttons/hello.jpg" },
        { id: "button_fight_chin", src: "images/buttons/attack_chin.png" },
        { id: "button_sacrifice", src: "images/buttons/sacrifice_soul.jpg" },
        { id: "button_punch", src: "images/buttons/attack_chin.png" },
        { id: "button_stop_sal", src: "images/buttons/stop_salamander.png" },
        { id: "button_enjoy_music", src: "images/buttons/dance.jpg" },
        { id: "back_btn", src: "images/buttons/backbutton.png" },
        { id: "stage1_back", src: "images/states/stage1seedoor.jpg" },
        { id: "seedoor_back", src: "images/states/see_door.jpg" },
        { id: "outside_back", src: "images/states/cave_outside.jpg" },
        { id: "cracks_back", src: "images/states/cracks.jpg" },
        { id: "knocks_back", src: "images/states/knocks.jpg" },
        { id: "mountain_back", src: "images/states/mountain.jpg" },
        { id: "forest_back", src: "images/states/forest.jpg" },
        { id: "pink_man", src: "images/states/pink.png" },
        { id: "salamander", src: "images/states/salamander.jpg" },
        { id: "chin-chin", src: "images/states/chin-chin.png" },
        { id: "strange_man", src: "images/states/franku.jpg" },
        { id: "sal_gives_flute", src: "images/states/sal_gives_flute.jpg" },
        { id: "pink_friend", src: "images/states/pink_friend.jpg" },
        { id: "died", src: "images/endings/You-Died.jpg" },
        { id: "hollow", src: "images/endings/hollow.jpg" },
        { id: "peace", src: "images/endings/peacefull_end.jpg" },
        { id: "mad", src: "images/endings/madness_cosmos.jpg" },
        { id: "start_text", src: "texts/FirstStage.txt" },
        { id: "inside_text", src: "texts/InsideStage.txt" },
        { id: "away_text", src: "texts/AwayStage.txt" },
        { id: "mountain_text", src: "texts/Mountains.txt" },
        { id: "forest_text", src: "texts/Forest.txt" },
        { id: "forest_pink_text", src: "texts/Forest_Pink.txt" },
        { id: "crack_text", src: "texts/BreakDoor.txt" },
        { id: "knock_flute_text", src: "texts/KnockFlute.txt" },
        { id: "madness_text", src: "texts/MadnessEnding.txt" },
        { id: "lost_hand_text", src: "texts/PinkTakesHand.txt" },
        { id: "talked_to_pink_text", src: "texts/TalkedToPink.txt" },
        { id: "chin_kills_text", src: "texts/ChinKills.txt" },
        { id: "hollow_text", src: "texts/Hollow.txt" },
        { id: "cage_ending_text", src: "texts/Cage.txt" },
        { id: "strange_killed_text", src: "texts/StrangeKilled.txt" },
        { id: "good_ending_text", src: "texts/GoodEnd.txt" },
        { id: "maddness_ending", src: "images/endings/madness_cosmos.jpg" },
        { id: "hollow_ending", src: "images/endings/hollow.jpg" },
        { id: "you_died", src: "images/endings/You-Died.jpg" },
        { id: "strange_cage_ending", src: "images/endings/cage_ending.jpg" },
        { id: "good_ending", src: "images/endings/peacefull_ending.jpg" },
        { id: "pink_takes_hand_ending", src: "images/endings/hand_end.jpg" },
        { id: "knock_flute_text", src: "texts/Knock_Flute.txt" },
        { id: "forest_pink_text", src: "texts/Forest_Pink.txt" },
        { id: "knock_text", src: "texts/KnockDoor.txt" },
    ]);
}
function gameLoop() {
    stage.update();
}
function main() {
    console.log("running...");
    var sc = new StartState();
}
//function that displays short messages on screen
function displayMessage(text) {
    stage.removeChild(text_message);
    stage.removeChild(ScreenText);
    stage.removeChild(t2);
    text_message = new createjs.Text(text, "20px Trirong serif", "#346D80");
    text_message.outline = 3;
    text_message.textBaseline = "alphaba";
    t2 = text_message.clone();
    t2.outline = 0;
    t2.color = "121010";
    text_message.x = 20;
    text_message.y = 90;
    t2.x = text_message.x;
    t2.y = text_message.y;
    stage.addChild(text_message);
    stage.addChild(t2);
}
//button handling
function mouse_over(_button, text) {
    _button.filters = [
        //new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
        new createjs.BlurFilter(5, 5, 10),
        new createjs.AlphaMaskFilter(_button.cacheCanvas)
    ];
    _button.cache(0, 0, 100, 100);
    button_option = new createjs.Text(text, "20px Trirong serif", "#000000");
    button_option.x = 120;
    button_option.y = 250;
    button_option.outline = 3;
    tc = button_option.clone();
    tc.outline = 0;
    tc.color = "WHITE";
    tc.x = button_option.x;
    tc.y = button_option.y;
    stage.addChild(button_option);
    stage.addChild(tc);
}
function mouse_out(_button) {
    _button.filters = [];
    _button.updateCache();
    stage.removeChild(button_option);
    stage.removeChild(tc);
}
//reads text from files and displays it on stages 
function setText(textfile) {
    displayMessage(assets.getResult(textfile));
}
function changeScreen() {
    if (button && button2 && background && back_button) {
        createjs.Tween.get(back_button).to({ alpha: 0 }, 1000);
        createjs.Tween.get(button2).to({ alpha: 0 }, 1000);
        createjs.Tween.get(button).to({ alpha: 0 }, 1000);
        createjs.Tween.get(background).to({ alpha: 0 }, 1500);
    }
}
