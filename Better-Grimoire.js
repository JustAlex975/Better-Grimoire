Game.Win('Third-party');
if(BetterGrimoire === undefined) var BetterGrimoire = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
BetterGrimoire.name = 'Better Grimoire';
BetterGrimoire.pic = 'https://klattmose.github.io/CookieClicker/img/timer.png';
BetterGrimoire.version = '0.0';
BetterGrimoire.GameVersion = '2.048';

BetterGrimoire.launch = function(){
	BetterGrimoire.init = function(){
		CCSE.AppendStatsGeneral('Booyah!')
		
		CCSE.MinigameReplacer(function(){
			var objKey = 'Wizard tower';
			var M = Game.Objects[objKey].minigame;
			
			//???
			CCSE.InjectCodeIntoFunction(M.getSpellCost, 'M.magicM', 'M.magic', 0);
			CCSE.InjectCodeIntoFunction(M.getSpellCostBreakdown, 'max', 'current', 0);
			
		}, 'Wizard tower');
		
		BetterGrimoire.isLoaded = 1;
		if (Game.prefs.popups) Game.Popup(BetterGrimoire.name + ' loaded!');
		else Game.Notify(BetterGrimoire.name + ' loaded!', '', '', 1, 1);
	}
	
	if(CCSE.ConfirmGameVersion(BetterGrimoire.name, BetterGrimoire.version, BetterGrimoire.GameVersion)) BetterGrimoire.init();
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
