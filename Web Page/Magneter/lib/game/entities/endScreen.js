ig.module(
	'game.entities.endScreen'
)
.requires(
	'impact.entity'
)
.defines(function()
{
	// The entity that handles everything that has to do with the endscreens that show up when you beat the level. 
	EntityEndScreen = ig.Entity.extend(
	{
		font: new ig.Font( 'media/calibri-16pt.png' ),
		nextScreen: null,
		size: {x:800, y:640},
		gravityFactor: 0,
		//name for the image in the xml ex. game>levelOneEndScreen>image
		imageName: "",
		//name for the info in the xml ex. game>splashScreen>end
		messageName: "",
		image: null,
		message: "",
		xmlDocument: "",
		//true if endScreen, false if popUpMessage
		endScreen: true,
		zIndex: 2,

		soundDB: 
		{
			levelCleared: new ig.Sound( 'media/sound/levelCleared.*' )
		},
		
		animSheet: new ig.AnimationSheet( 'media/endScreen/endScreen.png', 800, 640 ),
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			
			this.addAnim( 'idle', 1, [0] );

			this.xmlDocument = "lib/game/xml/strings" + ig.game.language + ".xml";
		},
		
		draw: function() 
		{
			this.parent();
			
			if(this.endScreen)
			{
				this.font.draw( this.message, this.pos.x + (this.size.x / 2), this.pos.y + (this.size.y / 4), [ig.Font.ALIGN.CENTER] );
				if(this.image != null)
				{
					this.image.draw(this.pos.x + (this.size.x / 2) - (this.image.height/2), this.pos.y + ((this.size.y / 4) * 3) - (this.image.width/2));
				}
				//console.log(this.infoScreen);
			}
		},

		// loads the assets...
		ready: function()
		{
			this.soundDB.levelCleared.play();

			if(this.messageName != "")
			{
				this.message = ig.game.xml.loadTextFromXML(this.messageName, 0, this.xmlDocument);
			}

			if(this.imageName != "")
			{
				this.image = new ig.Image(ig.game.xml.loadTextFromXML(this.imageName, 0, this.xmlDocument));
			}
		},

		update: function() 
		{
			this.parent();

			if( ig.input.pressed('enter') || ig.input.pressed('mouse1') && this.nextScreen != null) 
			{
				ig.game.loadLevel( this.nextScreen, false );
			}
		}
	});
});