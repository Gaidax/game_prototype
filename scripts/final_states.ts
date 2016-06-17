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



class Passify_With_Pink extends FinalState {
    constructor() {
        super("You passified him and won");
        displayMessage("DEFEATED EVIL");
    }
}

class StopSalamander extends FinalState {
    constructor() {
        super("You stopped him took fluete");
    }
}

class TuneToSalamander extends FinalState {
    constructor() {
        super("You lost your mind");
    }
}

class PunchesStrange extends FinalState {
    constructor() {
        super("You died");
    }

}
class GivesStrangeHand extends FinalState {
    constructor() {
        super("You greated him");
    }

}

class GivesPinkHand extends FinalState {
    constructor() {
        super("You gave hand (lost hand)");
    }
}

class SayHiPink extends FinalState {
    constructor() {
        super("You said hi");
    }

}

class GiveSoulToChin extends FinalState {
    constructor() {
        super("Gave soul and become hollow");
    }
}

class BadIdea extends FinalState {
    constructor() {
        super("Bad Idea, mate, you died");
    }
}