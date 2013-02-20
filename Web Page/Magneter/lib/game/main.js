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

	// Levels
	'game.levels.level1',
	'game.levels.splashScreen'
)
.defines(function()
{

MyGame = ig.Game.extend(
	{
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	//button selected in the menu
	selectedButton: 0,
	//array with all the buttons
    buttons: {},
	//array with all levels
	levels: {
		'SplashScreen': LevelSplashScreen,
		'Level1': LevelLevel1
	},
	
	init: function() 
	{
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.MOUSE1, 'mouse1' );
		ig.input.bind( ig.KEY.ENTER, 'enter');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		
		this.loadLevel( "SplashScreen", true );
	},
	
	update: function() 
	{
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
			this.selectedButton = 0;
			this.buttons = this.getEntitiesByType(EntityButton);
			
			if(this.buttons.length > 0)
			{
		    	this.buttons[this.selectedButton].highlight(this.selectedButton);
			}
        }
	},
	
	draw: function() 
	{
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		// var 	x = ig.system.width / 2,
		// 		y = ig.system.height / 2;
		// this.font.draw( 'Sheeeiiiit nigga!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 800x640, not scaled. 
ig.main( '#canvas', MyGame, 60, 800, 640, 1 );

});
