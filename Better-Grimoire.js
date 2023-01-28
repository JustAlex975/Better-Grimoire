Game.Win('Third-party');
if(BetterGrimoire === undefined) var BetterGrimoire = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/' + (0 ? 'Beta/' : '') + 'CCSE.js');
BetterGrimoire.name = 'Better Grimoire';
BetterGrimoire.pic = 'https://klattmose.github.io/CookieClicker/img/timer.png';
BetterGrimoire.version = '0.0';
BetterGrimoire.GameVersion = '2.048';

BetterGrimoire.launch = function(){
	BetterGrimoire.isLoaded = 1;
	CCSE.MinigameReplacer(function(){
		var objKey = 'Wizard tower';
		var M = Game.Objects[objKey].minigame;
		
		//I'll work this out later
		
	}, 'Wizard tower');
}

if(!BetterGrimoire.isLoaded){
	if(CCSE && CCSE.isLoaded){
		BetterGrimoire.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(BetterGrimoire.launch);
	}
}
