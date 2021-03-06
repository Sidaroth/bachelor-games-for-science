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
	'game.entities.arrow',
	'game.entities.button',
	'game.entities.electromagnet',
	'game.entities.gate',
	'game.entities.goal',
	'game.entities.infoScreen',
	'game.entities.endScreen',
	'game.entities.language',
	'game.entities.lolgate',
	'game.entities.magnet',
	'game.entities.menuButton',
	'game.entities.muteButton',
	'game.entities.pendulum',
	'game.entities.player',
	'game.entities.rail',
	'game.entities.shield',
	'game.entities.spring_board',
	'game.entities.switch',
	'game.entities.trigger',
	'game.entities.particles',

	// Infoscreens
	'game.levels.level1Info',
	'game.levels.level2Info',
	'game.levels.level3Info',
	'game.levels.level4Info',
	'game.levels.level5Info',
	'game.levels.level6Info',
	'game.levels.level7Info',
	'game.levels.level8Info',
	'game.levels.level9Info',
	'game.levels.level10Info',
	'game.levels.level11Info',
	'game.levels.level12Info',
	'game.levels.level13Info',
	'game.levels.level14Info',
	'game.levels.level15Info',

	// Levels
	'game.levels.level1',
	'game.levels.level2',
	'game.levels.level3',
	'game.levels.level4',
	'game.levels.level5',
	'game.levels.level6',
	'game.levels.level7',
	'game.levels.level8',
	'game.levels.level9',
	'game.levels.level10',
	'game.levels.level11',
	'game.levels.level12',
	'game.levels.level13',
	'game.levels.level14',
	'game.levels.level15',
	'game.levels.splashScreen',
	'game.levels.mainMenu',
	'game.levels.credits',
	
	// Endscreens
	'game.levels.level1End',
	'game.levels.level2End',
	'game.levels.level3End',
	'game.levels.level4End',
	'game.levels.level5End',
	'game.levels.level6End',
	'game.levels.level7End',
	'game.levels.level8End',
	'game.levels.level9End',
	'game.levels.level10End',
	'game.levels.level11End',
	'game.levels.level12End',
	'game.levels.level13End',
	'game.levels.level14End',
	'game.levels.level15End',

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
	muted: false,

	version: 1.0,

	currentLevelUnlocked: 1,

	metricStart: null,
	playStart: null,
	serialNumber: "",
	metricMD5: null,
	playMD5: null,
	timeInLevel: new ig.Timer(),
	newParticle: new ig.Timer(),
	leftArrow: null,
	rightArrow: null,
	upArrow: null,
	downArrow: null,
	particles: false,
	particle: [null, null],
	killParticleOne: false,
	
	//array with all levels
	levels: {
		'SplashScreen': LevelSplashScreen,
		'Level1Info': LevelLevel1Info,
		'Level2Info': LevelLevel2Info,
		'Level3Info': LevelLevel3Info,
		'Level4Info': LevelLevel4Info,
		'Level5Info': LevelLevel5Info,
		'Level6Info': LevelLevel6Info,
		'Level7Info': LevelLevel7Info,
		'Level8Info': LevelLevel8Info,
		'Level9Info': LevelLevel9Info,
		'Level10Info': LevelLevel10Info,
		'Level11Info': LevelLevel11Info,
		'Level12Info': LevelLevel12Info,
		'Level13Info': LevelLevel13Info,
		'Level14Info': LevelLevel14Info,
		'Level15Info': LevelLevel15Info,

		'Level1End': LevelLevel1End,
		'Level2End': LevelLevel2End,
		'Level3End': LevelLevel3End,
		'Level4End': LevelLevel4End,
		'Level5End': LevelLevel5End,
		'Level6End': LevelLevel6End,
		'Level7End': LevelLevel7End,
		'Level8End': LevelLevel8End,
		'Level9End': LevelLevel9End,
		'Level10End': LevelLevel10End,
		'Level11End': LevelLevel11End,
		'Level12End': LevelLevel12End,
		'Level13End': LevelLevel13End,
		'Level14End': LevelLevel14End,
		'Level15End': LevelLevel15End,

		'MainMenu' : LevelMainMenu,
		'Level1' : LevelLevel1,
		'Level2' : LevelLevel2,
		'Level3' : LevelLevel3,
		'Level4' : LevelLevel4,
		'Level5' : LevelLevel5,
		'Level6' : LevelLevel6,
		'Level7' : LevelLevel7,
		'Level8' : LevelLevel8,
		'Level9' : LevelLevel9,
		'Level10' : LevelLevel10,
		'Level11' : LevelLevel11,
		'Level12' : LevelLevel12,
		'Level13' : LevelLevel13,
		'Level14' : LevelLevel14,
		'Level15' : LevelLevel15,

		'Credits' : LevelCredits
	},

	// Which background music should be played for which level (screen)
	musicDB: {
		'SplashScreen': 'none',
		'Credits' : 'menuBGSoundtrack',
		'MainMenu': 'menuBGSoundtrack',
		'Level1Info': 'menuBGSoundtrack',
		'Level2Info': 'menuBGSoundtrack',
		'Level3Info': 'menuBGSoundtrack',
		'Level4Info': 'menuBGSoundtrack',
		'Level5Info': 'menuBGSoundtrack',
		'Level6Info': 'menuBGSoundtrack',
		'Level7Info': 'menuBGSoundtrack',
		'Level8Info': 'menuBGSoundtrack',
		'Level9Info': 'menuBGSoundtrack',
		'Level10Info': 'menuBGSoundtrack',
		'Level11Info': 'menuBGSoundtrack',
		'Level12Info': 'menuBGSoundtrack',
		'Level13Info': 'menuBGSoundtrack',
		'Level14Info': 'menuBGSoundtrack',
		'Level15Info': 'menuBGSoundtrack',

		'Level1End': 'none',
		'Level2End': 'none',
		'Level3End': 'none',
		'Level4End': 'none',
		'Level5End': 'none',
		'Level6End': 'none',
		'Level7End': 'none',
		'Level8End': 'none',
		'Level9End': 'none',
		'Level10End': 'none',
		'Level11End': 'none',
		'Level12End': 'none',
		'Level13End': 'none',
		'Level14End': 'none',
		'Level15End': 'none',

		'Level1' : 'level1BGSoundtrack',
		'Level2' : 'level1BGSoundtrack',
		'Level3' : 'level1BGSoundtrack',
		'Level4' : 'level1BGSoundtrack',
		'Level5' : 'level1BGSoundtrack',
		'Level6' : 'level1BGSoundtrack',
		'Level7' : 'level1BGSoundtrack',
		'Level8' : 'level1BGSoundtrack',
		'Level9' : 'level1BGSoundtrack',
		'Level10': 'level1BGSoundtrack',
		'Level11': 'level1BGSoundtrack',
		'Level12': 'level1BGSoundtrack',
		'Level13': 'level1BGSoundtrack',
		'Level14': 'level1BGSoundtrack',
		'Level15': 'level1BGSoundtrack'
	},

	// Where should logging be performed? 
	logLevel: {
		'SplashScreen': false,
		'Level1Info': false,
		'Level2Info': false,
		'Level3Info': false,
		'Level4Info': false,
		'Level5Info': false,
		'Level6Info': false,
		'Level7Info': false,
		'Level8Info': false,
		'Level9Info': false,
		'Level10Info': false,
		'Level11Info': false,
		'Level12Info': false,
		'Level13Info': false,
		'Level14Info': false,
		'Level15Info': false,

		'Level1End': false,
		'Level2End': false,
		'Level3End': false,
		'Level4End': false,
		'Level5End': false,
		'Level6End': false,
		'Level7End': false,
		'Level8End': false,
		'Level9End': false,
		'Level10End': false,
		'Level11End': false,
		'Level12End': false,
		'Level13End': false,
		'Level14End': false,
		'Level15End': false,

		'MainMenu' : false,
		'Credits' : false,
		'Level1': true,
		'Level2' : true,
		'Level3' : true,
		'Level4' : true,
		'Level5' : true,
		'Level6' : true,
		'Level7' : true,
		'Level8' : true,
		'Level9' : true,
		'Level10' : true,
		'Level11' : true,
		'Level12' : true,
		'Level13' : true,
		'Level14' : true,
		'Level15' : true
	},

	// Used for mouse targetting and changing magnet radius etc. 
	closestMagnetToMouse: 
	{
		'magnet': null,
		'distance': 999999
	},

	//true and false for levels unlocked, see save.xml for details
	unlockedLevels: [	true, true, true, true, true,
						true, true, true, true, true,
						true, true, true, true, true	],
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
		ig.input.bind( ig.KEY.SPACE, 'space');
		

		ig.music.add('media/sound/menuBGSoundtrack.*', 'menuBGSoundtrack');
		ig.music.add('media/sound/level1BGSoundtrack.*', 'level1BGSoundtrack');

		//ig.music.currentTrack = ig.music.tracks[0];
		ig.music.volume = this.defaultSoundLevel;
		ig.music.loop = true;


		//ig.music.play('menuBGSoundtrack');
		//run first level
		if(userId == 0)
		{
			this.loadLevel( "SplashScreen", true );
		}
		// this.debugDrawer = new ig.Box2DDebug( ig.world );

		ig.game.startMetricSession();
	},
	
	update: function() 
	{
		if(this.paused)
		{
			this.pauseEntity.update();
			return;
		}

		var player = this.getEntitiesByType( EntityPlayer )[0];

		var threshold = 50;

		// Camera movement !
		if(ig.game.backgroundMaps[0])
		{
			if(ig.game.screen.x < ig.game.backgroundMaps[0].width * ig.game.backgroundMaps[0].tilesize - ig.system.width)
			{
				if(this.rightArrow === null)
				{
					settings = {firstAnim: "rightUnselected"};
					this.rightArrow = ig.game.spawnEntity(EntityArrow, 0, 0, settings );
				}
			}
			if(ig.game.screen.x > 0)
			{
				if(this.leftArrow === null)
				{
					settings = {firstAnim: "leftUnselected"};
					this.leftArrow = ig.game.spawnEntity(EntityArrow, 0, 0, settings );
				}
			}
			if(ig.game.screen.y > 0)
			{
				if(this.upArrow === null)
				{
					settings = {firstAnim: "upUnselected"};
					this.upArrow = ig.game.spawnEntity(EntityArrow, 0, 0, settings );
				}
			}
			if(ig.game.screen.y < ig.game.backgroundMaps[0].height * ig.game.backgroundMaps[0].tilesize - ig.system.height)
			{
				if(this.downArrow === null)
				{
					settings = {firstAnim: "downUnselected"};
					this.downArrow = ig.game.spawnEntity(EntityArrow, 0, 0, settings );
				}
			}


			if(ig.input.mouse.x < threshold)
			{
				ig.game.screen.x -= 10;
				if(this.leftArrow != null)
				{
					this.leftArrow.currentAnim = this.leftArrow.anims["leftSelected"];
				}
				if(ig.game.screen.x < 0)
				{
					ig.game.screen.x = 0;
					if(this.leftArrow != null)
					{
						this.leftArrow.kill();
						this.leftArrow = null;
					}
				}
			}
			else
			{
				if(this.leftArrow != null)
				{
					this.leftArrow.currentAnim = this.leftArrow.anims["leftUnselected"];
				}
			}

			if(ig.input.mouse.x > ig.system.width - threshold)
			{
				ig.game.screen.x += 10;
				if(this.rightArrow != null)
				{
					this.rightArrow.currentAnim = this.rightArrow.anims["rightSelected"];
				}
				if(ig.game.screen.x >= ig.game.backgroundMaps[0].width * ig.game.backgroundMaps[0].tilesize - ig.system.width)
				{
					ig.game.screen.x = ig.game.backgroundMaps[0].width * ig.game.backgroundMaps[0].tilesize - ig.system.width;
					if(this.rightArrow != null)
					{
						this.rightArrow.kill();
						this.rightArrow = null;
					}
				}
			}
			else
			{
				if(this.rightArrow != null)
				{
					this.rightArrow.currentAnim = this.rightArrow.anims["rightUnselected"];
				}
			}

			if(ig.input.mouse.y < threshold)
			{
				ig.game.screen.y -= 10;
				if(this.upArrow != null)
				{
					this.upArrow.currentAnim = this.upArrow.anims["upSelected"];
				}
				if(ig.game.screen.y <= 0)
				{
					ig.game.screen.y = 0;
					if(this.upArrow != null)
					{
						this.upArrow.kill();
						this.upArrow = null;
					}
				}
			}
			else
			{
				if(this.upArrow != null)
				{
					this.upArrow.currentAnim = this.upArrow.anims["upUnselected"];
				}
			}

			if(ig.input.mouse.y > ig.system.height - threshold)
			{
				ig.game.screen.y += 10;
				if(this.downArrow != null)
				{
					this.downArrow.currentAnim = this.downArrow.anims["downSelected"];
				}
				if(ig.game.screen.y >= ig.game.backgroundMaps[0].height * ig.game.backgroundMaps[0].tilesize - ig.system.height)
				{
					ig.game.screen.y = ig.game.backgroundMaps[0].height * ig.game.backgroundMaps[0].tilesize - ig.system.height;
					if(this.downArrow != null)
					{
						this.downArrow.kill();
						this.downArrow = null;
					}
				}
			}
		}			
		else
		{
			if(this.downArrow != null)
			{
				this.downArrow.currentAnim = this.downArrow.anims["downUnselected"];
			}
		}

		// Iron shavings
		if(this.particles)
		{
			for(var i = 0; i < this.particle.length; i++)
			{
				if(this.particle[i] !== null)
				{
					player = ig.game.getEntitiesByType(EntityPlayer);

					var distanceVec = 
					{
						x: player[0].pos.x + player[0].size.x/2 - (this.particle[i].pos.x + (this.particle[i].size.x / 2)),
						y: player[0].pos.y + player[0].size.y/2 - (this.particle[i].pos.y + (this.particle[i].size.y / 2))
					}
			
					var distanceToPlayer = Math.sqrt( Math.pow ( distanceVec.x, 2) + Math.pow( distanceVec.y, 2) );
					if(distanceToPlayer <= player[0].size.x/2 + 3 || this.particle[i].dead)
					{
						this.particle[i].kill();
						this.particle[i] = null;
					}
				}
			
			}


			if(this.newParticle.delta() > 0)
			{
				if(this.killParticleOne)
				{
					if(this.particle[0] !== null)
					{
						this.particle[0].kill();
					}
					var settings = {};
					this.particle[0] = ig.game.spawnEntity(EntityParticles, 0, 0, settings);
					this.newParticle.set(0.25);
					this.killParticleOne = false;
				}
				else
				{
					if(this.particle[1] !== null)
					{
						this.particle[1].kill();
					}
					var settings = {};
					this.particle[1] = ig.game.spawnEntity(EntityParticles, 0, 0, settings);
					this.newParticle.set(0.25);
					this.killParticleOne = true;
				}
			}
		}
		this.parent();
	},

	// Takes a string that describes which level is to be loaded, and a boolean that 
	// represents if it's an ingame screen, or something like a menu. 
	loadLevel: function(levelKey, gameScreen) 
	{

		if(this.leftArrow != null)
		{
			this.leftArrow.kill();
			this.leftArrow = null;
		}
		if(this.upArrow != null)
		{
			this.upArrow.kill();
			this.upArrow = null;
		}
		if(this.rightArrow != null)
		{
			this.rightArrow.kill();
			this.rightArrow = null;
		}
		if(this.downArrow != null)
		{
			this.downArrow.kill();
			this.downArrow = null;
		}

		this.parent(this.levels[levelKey]);

		this.timeInLevel.reset();
		this.particle[0] = null;
		this.particle[1] = null;
		this.newParticle.reset();
		this.killParticleOne = false;

		for( var i = 0; i < this.backgroundMaps.length; i++ ) 
		{
			this.backgroundMaps[i].preRender = true;
		}

		if(this.playMD5 != null)
		{
			ig.game.endPlaySession();
			ig.game.logEvent(2, 0, 0, 0, 0, 2, "Ended level " + (ig.game.currentLevel));
		}

		if(this.logLevel[levelKey])
		{
			ig.game.startPlaySession();
			ig.game.logEvent(2, 0, 0, 0, 0, 2, "Started level " + levelKey);
			this.particles = true;
			this.newParticle.set(0.5);
		}
		else
		{
			this.particles = false;
		}

		this.closestMagnetToMouse['distance'] = 999999;
		this.closestMagnetToMouse['magnet'] = null;

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
			// this.debugDrawer.draw();
	},

	//called after the post request to get save is done
	startLevel: function(response)
	{
		this.save = JSON.parse(response);

		this.language = this.save.save[0].language;
		this.currentLevelUnlocked = this.save.save[0].level;
		for (var i = 0; i < this.currentLevelUnlocked; i++)
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
		if(level > this.currentLevelUnlocked)
		{
			if(userId > 0)
			{
		    	var request = $.ajax({
				  	type: 'POST',
				  	url: "pages/save.php",
				  	data:
				  	{ 
				  		uid: userId,
			        	level: level
				    },
				  	async:true
				});
				ig.game.logEvent(1, 0, 0, 0, 0, 1, "saved level: " + ig.game.currentLevel);
			}
			this.currentLevelUnlocked = level;
			for (var i = 0; i < this.currentLevelUnlocked; i++)
			{
				this.unlockedLevels[i] = true;
			}
		}
	}
});


// Start the Game with 60fps, a resolution of 800x640, not scaled. 
ig.main( '#canvas', MyGame, 60, 832, 640, 1 );

});
