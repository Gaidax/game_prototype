//****************************************************************************
//abstract_states.ts
//Author: Vasyl Milchevskyi
//Last Modified by: Vasyl Milchevskyi
//Description: This file contains all the final outcome states/nodes
//Last Modified: 6/12/2016
//****************************************************************************

/// <reference path="game.ts" />
/// <reference path="abstract_states.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />

//These are the ending states.

class Passify_With_Pink extends FinalState {
    constructor() {
        super("good_ending_text", "good_ending");
    }
}

class TuneToSalamander extends FinalState {
    constructor() {
        super("madness_text", "maddness_ending");
    }
}

class PunchesStrange extends FinalState {
    constructor() {
        super("strange_killed_text", "you_died");
    }

}
class GivesStrangeHand extends FinalState {
    constructor() {
        super("cage_ending_text", "strange_cage_ending");
    }

}

class GivesPinkHand extends FinalState {
    constructor() {
        super("lost_hand_text", "pink_takes_hand_ending");
    }
}

class SayHiPink extends FinalState {
    constructor() {
        super("talked_to_pink_text", "you_died");
    }

}

class GiveSoulToChin extends FinalState {
    constructor() {
        super("hollow_text", "hollow_ending");
    }
}

class BadIdea extends FinalState {
    constructor() {
        super("chin_kills_text", "you_died");
    }
}