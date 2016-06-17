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




var stage: createjs.Stage;
var assets: createjs.LoadQueue;
var button: createjs.Bitmap;
var button2: createjs.Bitmap;
var back_button: createjs.Bitmap;
var background: createjs.Bitmap;
var transition: createjs.Bitmap;
var text_message: createjs.Text = new createjs.Text;
var canvas = document.getElementById("canvas");
var stop = true;

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
            ]);   
}

function gameLoop() {
    stage.update();
}

function main() {
    console.log("running...");

    let sc = new StartState();

}

function displayMessage(text: string): void {
    stage.removeChild(text_message);
    text_message = new createjs.Text(text, "20px Trirong serif", "#B73D15");
    text_message.x = 60;
    text_message.y = 200;
    text_message.textBaseline = "alphaba";
    stage.addChild(text_message);
}

function mouse_over (_button) {
    console.log("OVER");
    _button.filters = [
        //new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
        new createjs.BlurFilter(5, 5, 10),
        new createjs.AlphaMaskFilter(_button.cacheCanvas)
    ];
    _button.cache(0, 0, 100, 100);
}

function mouse_out(_button) {
    console.log("OUT");
    _button.filters = [];
    _button.updateCache();
}
