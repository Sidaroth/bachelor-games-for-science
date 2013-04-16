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
	'game.entities.muteButton',

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

	defaultSoundLevel: 1,

	version: 1.0,

	currentLevel: 1,

	metricStart: null,
	playStart: null,
	serialNumber: "",
	metricMD5: null,
	playMD5: null,
	timeInLevel: new ig.Timer(),


	
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

	logLevel: {
		'SplashScreen': false,
		'Level1': true,
		'Level1Info': false,
		'MainMenu' : false
	},

	// Used for mouse targetting and changing magnet radius etc. 
	closestMagnetToMouse: 
	{
		'magnet': null,
		'distance': 999999,
	},

	//true and false for levels unlocked, see save.xml for details
	unlockedLevels: [	true, false, false, false, false,
						false, false, false, false, false,
						false, false, false, false, false	],
	save: null,
	//chosen language, default Norwegian(NO), see save.xml for saved language
	language: "NO",
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
	
	init: function() {
		if(userId > 0)
		{
		    var request = $.ajax({
			  type: 'POST',
			  url: "pages/getsave.php",
			  data: { 
			        	uid: userId 
			    	},
			  //success: ig.game.startLevel(),
			  async:false
			});

			request.done(function (response, textStatus, jqXHR){
	        	ig.game.startLevel(response);
	    	});
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
		ig.music.volume = this.defaultSoundLevel;
		ig.music.loop = true;


		//ig.music.play('menuBGSoundtrack');
		//run first level
		if(userId == 0){
			this.loadLevel( "SplashScreen", true );
		}
		//this.debugDrawer = new ig.Box2DDebug( ig.world );

		ig.game.startMetricSession();
	},
	
	update: function() 
	{
		console.log(this.closestMagnetToMouse['magnet']);

		// if(this.closestMagnetToMouse['magnet'] != null && this.closestMagnetToMouse['magnet'].drag['state'] === false)
		// {
		// 	this.closestMagnetToMouse['distance'] = 999999;
		// 	this.closestMagnetToMouse['magnet'] = null;
		// }
	
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

		this.timeInLevel.reset();

		for( var i = 0; i < this.backgroundMaps.length; i++ ) 
		{
			this.backgroundMaps[i].preRender = true;
		}

		if(this.playMD5 != null)
		{
			ig.game.endPlaySession();
			ig.game.logEvent(2, 0, 0, 0, 0, 2, "Ended level " + ig.game.currentLevel);
		}

		if(this.logLevel[levelKey])
		{
			ig.game.startPlaySession();
			ig.game.logEvent(2, 0, 0, 0, 0, 2, "Started level " + levelKey);
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
	},

	//called after the post request to get save is done
	startLevel: function(response)
	{
		this.save = JSON.parse(response);

		this.language = this.save.save[0].language;
		this.currentLevel = this.save.save[0].level;
		for (var i = 0; i < this.currentLevel; i++)
		{
			this.unlockedLevels[i] = true;
		}

		this.loadLevel( "SplashScreen", true );
	},

	logEvent: function(eventType, eventSubtype, x, y, z, magnitude, extended)
	{
		if(this.playMD5 === null){this.playMD5 = "NONE"}
	    var request = $.ajax({
		  type: 'POST',
		  url: "pages/newevent.php",
		  data: { 
		        	playMD5: this.playMD5,
		        	metricMD5: this.metricMD5,
		        	gameTime: this.timeInLevel.delta(),	//time passed in playsession
		        	eventType: eventType,				//type of event
		        	eventSubtype: eventSubtype,			//subtype of event
		        	x: x,								//int 1
		        	y: y,								//int 2
		        	z: z,								//int 3
		        	magnitude: magnitude,				//impact on game
		        	extended: extended					//extra info if neccessary
		    	},
		  async:true
		});
	},

	startPlaySession: function()
	{
		this.playStart = ig.game.getTime();
		this.playMD5 = CryptoJS.MD5(this.serialNumber + this.playStart).toString();
	    var request = $.ajax({
		  type: 'POST',
		  url: "pages/playsession.php",
		  data: { 
		        	playMD5: this.playMD5,
		        	metricMD5: this.metricMD5 
		    	},
		  async:true
		});
	},

	startMetricSession: function()
	{
		this.metricStart = ig.game.getTime();
		this.serialNumber = userId + BrowserDetect.browser + BrowserDetect.version + BrowserDetect.OS + this.version;
		this.metricMD5 = CryptoJS.MD5(this.serialNumber + this.metricStart).toString();
	    var request = $.ajax({
		  type: 'POST',
		  url: "pages/metricsession.php",
		  data: { 
		        	serialNumber: this.serialNumber,
		        	metricMD5: this.metricMD5 
		    	},
		  async:true
		});
	},

	endPlaySession: function()
	{
		if(this.playMD5 !== null)
		{
			var request = $.ajax({
			  type: 'POST',
			  url: "pages/endplaysession.php",
			  data: { 
			        	playMD5: this.playMD5,
			        	metricMD5: this.metricMD5 
			    	},
			  async:true
			});

			this.playMD5 = null;
		}
	},

	endMetricSession: function()
	{
		if(this.playMD5 !== null)
		{
			this.endPlaySession();
		}
		var request = $.ajax({
		  type: 'POST',
		  url: "pages/endmetricsession.php",
		  data: { 
		        	serialNumber: this.serialNumber,
		        	metricMD5: this.metricMD5 
		    	},
		  async:false
		});
	},

	getTime: function()
	{
		var currentdate = new Date(); 
		var datetime 	= currentdate.getDate() + "/"
                		+ (currentdate.getMonth()+1)  + "/" 
                		+ currentdate.getFullYear() + "-"  
                		+ currentdate.getHours() + ":"  
                		+ currentdate.getMinutes() + ":" 
                		+ currentdate.getSeconds();

        return datetime;
	},

	updateLevel: function(level)
	{
		if(level > this.currentLevel)
		{
			if(userId > 0)
			{
		    	var request = $.ajax({
				  	type: 'POST',
				  	url: "pages/save.php",
				  	data:
				  	{ 
				  		uid: userId,
			        	level: this.currentLevel
				    },
				  	async:true
				});
				ig.game.logEvent(1, 0, 0, 0, 0, 1, "saved level: " + this.currentLevel);
			}
		}
	}
});


// Start the Game with 60fps, a resolution of 800x640, not scaled. 
ig.main( '#canvas', MyGame, 60, 800, 640, 1 );

});
