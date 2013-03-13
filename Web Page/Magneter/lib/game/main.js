ig.module( 
	'game.main' 
)
.requires(
	// Impact
	'impact.game',
	'impact.font',

	// Entities
	'game.entities.player',
	'game.entities.magnet',
	'game.entities.button',
	'game.entities.trigger',
	'game.entities.language',
	'game.entities.shield',
	'game.entities.infoScreen',

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

MyGame = ig.Game.extend(
{

	gravity: 0,
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	//array with all levels
	levels: {
		'SplashScreen': LevelSplashScreen,
		'Level1': LevelLevel1,
		'Level1Info': LevelLevel1Info,
		'MainMenu' : LevelMainMenu
	},

	//chosen language, default Norwegian(NO)
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
	
	init: function() 
	{
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.MOUSE1, 'mouse1' );
		ig.input.bind( ig.KEY.ENTER, 'enter');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.UP_ARROW, 'up');
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		
		this.loadLevel( "SplashScreen", true );
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
		console.log("loaded level");

        if(gameScreen === true)
        {
            
        }
        else
        {

        }
	},
	
	draw: function() 
	{
		// Draw all entities and backgroundMaps
		this.parent();
		
		
/*		Add your own drawing code here
		var 	x = ig.system.width / 2,
				y = ig.system.height / 2;
		this.font.draw( 'Sheeeiiiit nigga!', x, y, ig.Font.ALIGN.CENTER );*/
	}
});


// Start the Game with 60fps, a resolution of 800x640, not scaled. 
ig.main( '#canvas', MyGame, 60, 800, 640, 1 );

});
