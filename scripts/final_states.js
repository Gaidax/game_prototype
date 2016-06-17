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
var Passify_With_Pink = (function (_super) {
    __extends(Passify_With_Pink, _super);
    function Passify_With_Pink() {
        _super.call(this, "You passified him and won");
        displayMessage("DEFEATED EVIL");
    }
    return Passify_With_Pink;
}(FinalState));
var StopSalamander = (function (_super) {
    __extends(StopSalamander, _super);
    function StopSalamander() {
        _super.call(this, "You stopped him took fluete");
    }
    return StopSalamander;
}(FinalState));
var TuneToSalamander = (function (_super) {
    __extends(TuneToSalamander, _super);
    function TuneToSalamander() {
        _super.call(this, "You lost your mind");
    }
    return TuneToSalamander;
}(FinalState));
var PunchesStrange = (function (_super) {
    __extends(PunchesStrange, _super);
    function PunchesStrange() {
        _super.call(this, "You died");
    }
    return PunchesStrange;
}(FinalState));
var GivesStrangeHand = (function (_super) {
    __extends(GivesStrangeHand, _super);
    function GivesStrangeHand() {
        _super.call(this, "You greated him");
    }
    return GivesStrangeHand;
}(FinalState));
var GivesPinkHand = (function (_super) {
    __extends(GivesPinkHand, _super);
    function GivesPinkHand() {
        _super.call(this, "You gave hand (lost hand)");
    }
    return GivesPinkHand;
}(FinalState));
var SayHiPink = (function (_super) {
    __extends(SayHiPink, _super);
    function SayHiPink() {
        _super.call(this, "You said hi");
    }
    return SayHiPink;
}(FinalState));
var GiveSoulToChin = (function (_super) {
    __extends(GiveSoulToChin, _super);
    function GiveSoulToChin() {
        _super.call(this, "Gave soul and become hollow");
    }
    return GiveSoulToChin;
}(FinalState));
var BadIdea = (function (_super) {
    __extends(BadIdea, _super);
    function BadIdea() {
        _super.call(this, "Bad Idea, mate, you died");
    }
    return BadIdea;
}(FinalState));
//# sourceMappingURL=final_states.js.map