ig.module( 
	'game.main' 
)
.requires(
	// Impact
	'impact.game',
	'impact.font',

	// Box2d
	'plugins.box2d.game',
	'plugins.box2d.debug',

	// Entities
	'game.entities.player',
	'game.entities.magnet',
	'game.entities.button',
	'game.entities.trigger',
	'game.entities.language',
	'game.entities.shield',
	'game.entities.infoScreen',
	'game.entities.gate',
	'game.entities.goal',
	'game.entities.basket',
	
	// Levels
	'game.levels.level1',
	'game.levels.level1Info',
	'game.levels.splashScreen',
	'game.levels.mainMenu',

	//xml
	'game.xml.getXmlString'
)
.defines(function()
{

MyGame = ig.Box2DGame.extend(
{

	gravity: 400,
	
	font: new ig.Font( 'media/calibri-16pt.png' ),
	clearColor: '#1b2026',

	currentTrackKey: null,
	
	//array with all levels
	levels: {
		'SplashScreen': LevelSplashScreen,
		'Level1': LevelLevel1,
		'Level1Info': LevelLevel1Info,
		'MainMenu' : LevelMainMenu
	},

	// Which background music should be played for which level (screen)
	musicDB: {
		'SplashScreen': 'none',
		'MainMenu': 'menuBGSoundtrack',
		'Level1Info': 'menuBGSoundtrack',
		'Level1': 'level1BGSoundtrack'
	},

	//true and false for levels unlocked, see save.xml for details
	unlockedLevels: [	true, false, false, false, false,
						false, false, false, false, false,
						false, false, false, false, false	],
	saveFile: "lib/game/xml/save.xml",
	//chosen language, default Norwegian(NO), see save.xml for saved language
	language: "",
	//paused if true and will only run pauseEntity
	paused: false,
	pauseEntity: null,

	//ig.game.xml.loadTextFromXML(label, index, document)
	//label is the name of the xml bracket you want the info from
	//index is the number of that index you want, 0 if there is only one
	//document is which document you want to get the xml string from
	//example this.myString = ig.game.xml.loadTextFromXML("myString", 0, "lib/game/xml/strings"+ ig.game.language +".xml")
	//this will return the string "Magneter"
	xml: new getXmlString( 0, 0, 0 ),
	
	init: function() 
	{
		//load save from save.xml
		this.language = ig.game.xml.loadTextFromXML("language", 0, this.saveFile);
		for (var i = 0; i < this.unlockedLevels.length; i++)
		{
			if(ig.game.xml.loadTextFromXML("level", i, this.saveFile) == "true")
			{
				this.unlockedLevels[i] = true;
			}
			else
			{
				this.unlockedLevels[i] = false;
			}
		}

		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.MOUSE1, 'mouse1');
		ig.input.bind( ig.KEY.ENTER, 'enter');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.UP_ARROW, 'up');
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		

		ig.music.add('media/sound/menuBGSoundtrack.*', 'menuBGSoundtrack');
		ig.music.add('media/sound/level1BGSoundtrack.*', 'level1BGSoundtrack');

		//ig.music.currentTrack = ig.music.tracks[0];
		ig.music.volume = 0.2;
		ig.music.loop = true;


		//ig.music.play('menuBGSoundtrack');
		//run first level
		this.loadLevel( "SplashScreen", true );

		//this.debugDrawer = new ig.Box2DDebug( ig.world );
	},
	
	update: function() 
	{
		if(this.paused)
		{
			this.pauseEntity.update();
			return;
		}
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},

	// Takes a string that describes which level is to be loaded, and a boolean that 
	// represents if it's an ingame screen, or something like a menu. 
	loadLevel: function(levelKey, gameScreen) 
	{
		this.parent(this.levels[levelKey]);

		for( var i = 0; i < this.backgroundMaps.length; i++ ) 
		{
			this.backgroundMaps[i].preRender = true;
		}

		// console.log(levelKey);
		// console.log(this.musicDB);
		// console.log(this.musicDB[levelKey]);

		// If a background music has been specified / is wanted. 
		if(this.musicDB[levelKey] != 'none')
		{	
			// Does not restart if it's the same song playing.
			if(this.musicDB[levelKey] != this.currentTrackKey)
			{
				this.currentTrackKey = this.musicDB[levelKey];
				ig.music.play(this.musicDB[levelKey]);
			}
		}
		else
		{
			//ig.music.stop();
		}
	},
	
	draw: function() 
	{
		// Draw all entities and backgroundMaps
		if(this.paused)
		{
			this.pauseEntity.draw();
			return;
		}
		this.parent();

		//this.debugDrawer.draw();
	}
});


// Start the Game with 60fps, a resolution of 800x640, not scaled. 
ig.main( '#canvas', MyGame, 60, 800, 640, 1 );

});
