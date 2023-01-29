Game.Win('Third-party');
if(HurricaneSugar === undefined) var HurricaneSugar = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/' + (0 ? 'Beta/' : '') + 'CCSE.js');
HurricaneSugar.name = 'Hurricane Sugar';
HurricaneSugar.version = '1.7';
HurricaneSugar.GameVersion = '2.048';

HurricaneSugar.launch = function(){
	HurricaneSugar.init = function(){
		CCSE.AppendStatsGeneral('Booyah!')
		
		CCSE.MinigameReplacer(function(){
			var objKey = 'Wizard tower';
			var M = Game.Objects[objKey].minigame;
			
			//???
			CCSE.InjectCodeIntoFunction(M.getSpellCost, 'M.magicM', 'M.magic', 0);
			CCSE.InjectCodeIntoFunction(M.getSpellCostBreakdown, 'max', 'current', 0);
			
		}, 'Wizard tower');
		
		HurricaneSugar.isLoaded = 1;
		if (Game.prefs.popups) Game.Popup(HurricaneSugar.name + ' loaded!');
		else Game.Notify(HurricaneSugar.name + ' loaded!', '', '', 1, 1);
	}
	
	HurricaneSugar.buffedLumpTime = function(){
		if(Game.hasBuff('Hurri-Cane Sugar')){
			var buff = Game.buffs['Hurri-Cane Sugar'];
			Game.lumpMatureAge = buff.power;
			Game.lumpRipeAge = buff.power * 2;
			Game.lumpOverripeAge = buff.power * 10;
		}
	}
	
	HurricaneSugar.InjectIntoGoldenCookie = function(){
		Game.customShimmerTypes['golden'].customListPush.push(function(me, list){
			if(me.wrath == 0 && Game.canLumps() && Math.random() < 0.05) list.push('hurricane sugar');
		});
		
		Game.customShimmerTypes['golden'].customBuff.push(function(me, buff, choice, effectDurMod, mult){
			var ret = buff;
			if(choice == 'hurricane sugar') ret = Game.gainBuff('hurricane sugar', Math.ceil(5 * effectDurMod), 500);
			return ret;
		});
		
		Game.goldenCookieChoices.push('Hurri-Cane Sugar','hurricane sugar');
	}
	
	HurricaneSugar.InjectIntoHandofFate = function(){
		if(!Game.customMinigame['Wizard tower'].fateWin) Game.customMinigame['Wizard tower'].fateWin = [];
		Game.customMinigame['Wizard tower'].fateWin.push(function(choices){
			if(Math.random() < 0.05) choices.push('hurricane sugar');
		});
		
		if(typeof FortuneCookie == 'undefined') FortuneCookie = {};
		if(FortuneCookie.customFateCheckerWin === undefined) FortuneCookie.customFateCheckerWin = [];
		FortuneCookie.customFateCheckerWin.push(function(spellCount, idx, choices){
			if(Math.random() < 0.05) choices.push('Hurri-Cane Sugar');
		});
	}
	
	
	if(CCSE.ConfirmGameVersion(HurricaneSugar.name, HurricaneSugar.version, HurricaneSugar.GameVersion)) HurricaneSugar.init();
}


if(!HurricaneSugar.isLoaded){
	if(CCSE && CCSE.isLoaded){
		HurricaneSugar.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(HurricaneSugar.launch);
	}
}
