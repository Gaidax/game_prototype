/// <reference path="states.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
var stage;
var assets;
var button;
var button2;
var back_button;
var canvas = document.getElementById("canvas");
function init() {
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop);
    main();
}
function preload() {
    assets = new createjs.LoadQueue();
    console.log("entered");
    assets.on("complete", init, this);
    assets.loadManifest([
        { id: "button1", src: "images/download.jpg" },
        { id: "button2", src: "images/jelly.jpg" },
        { id: "button3", src: "images/gravy_in_jug.jpg" },
        { id: "button4", src: "images/gravy-regular.png" },
        { id: "back_btn", src: "images/backbutton.jpg" }
    ]);
}
function gameLoop() {
    //curr_state_func(is_state);
    stage.update();
}
function main() {
    console.log("running...");
    var sc = new StartState();
    //var textHello: createjs.Text = new createjs.Text("THIS IS A TEST", "40px Arial", "#00FF00");
    //textHello.x = 60;
    //textHello.y = 200;
    //textHello.textBaseline = "alphaba";
    //stage.addChild(textHello);
}
//# sourceMappingURL=game.js.map