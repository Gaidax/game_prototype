//****************************************************************************
//abstract_states.ts
//Author: Vasyl Milchevskyi
//Last Modified by: Vasyl Milchevskyi
//Description: This file contains all the final outcome states/nodes
//Last Modified: 6/12/2016
//****************************************************************************
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="game.ts" />
/// <reference path="abstract_states.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
//These are the ending states.
var Passify_With_Pink = (function (_super) {
    __extends(Passify_With_Pink, _super);
    function Passify_With_Pink() {
        _super.call(this, "good_ending_text", "good_ending");
    }
    return Passify_With_Pink;
}(FinalState));
var TuneToSalamander = (function (_super) {
    __extends(TuneToSalamander, _super);
    function TuneToSalamander() {
        _super.call(this, "madness_text", "maddness_ending");
    }
    return TuneToSalamander;
}(FinalState));
var PunchesStrange = (function (_super) {
    __extends(PunchesStrange, _super);
    function PunchesStrange() {
        _super.call(this, "strange_killed_text", "you_died");
    }
    return PunchesStrange;
}(FinalState));
var GivesStrangeHand = (function (_super) {
    __extends(GivesStrangeHand, _super);
    function GivesStrangeHand() {
        _super.call(this, "cage_ending_text", "strange_cage_ending");
    }
    return GivesStrangeHand;
}(FinalState));
var GivesPinkHand = (function (_super) {
    __extends(GivesPinkHand, _super);
    function GivesPinkHand() {
        _super.call(this, "lost_hand_text", "pink_takes_hand_ending");
    }
    return GivesPinkHand;
}(FinalState));
var SayHiPink = (function (_super) {
    __extends(SayHiPink, _super);
    function SayHiPink() {
        _super.call(this, "talked_to_pink_text", "you_died");
    }
    return SayHiPink;
}(FinalState));
var GiveSoulToChin = (function (_super) {
    __extends(GiveSoulToChin, _super);
    function GiveSoulToChin() {
        _super.call(this, "hollow_text", "hollow_ending");
    }
    return GiveSoulToChin;
}(FinalState));
var BadIdea = (function (_super) {
    __extends(BadIdea, _super);
    function BadIdea() {
        _super.call(this, "chin_kills_text", "you_died");
    }
    return BadIdea;
}(FinalState));
