ig.module(
	'game.entities.infoScreen'
)
.requires(
	'impact.entity'
)
.defines(function()
{
	EntityInfoScreen = ig.Entity.extend(
	{
		//font to use on the message
		font: new ig.Font( 'media/04b03.font.png' ),
		//Level to load and run when 'enter' or 'mouse1' is pressed
		nextScreen: null,
		size: {x:800, y:640},
		// _wmDrawBox: true,
		// _wmDrawColor: 'rgba(255, 0, 255, 0.7)',
		// _wmScalable: true,
		gravityFactor: 0,
		//name for the image in the xml ex. game>levelOneInfoScreen>image
		imageName: "",
		//name for the info in the xml ex. game>splashScreen>info
		messageName: "",
		//path to the image gotten from the xml
		imagePath: "",
		//the message to be written on the screen
		message: "",
		//xmlDocument path
		xmlDocument: "",
		
		animSheet: new ig.AnimationSheet( 'media/infoScreen/infoScreen.png', 800, 640 ),
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			
			this.addAnim( 'idle', 1, [0] );

			this.xmlDocument = "lib/game/xml/strings" + ig.game.language + ".xml";
		},
		
		draw: function() 
		{
			this.parent();
			this.font.draw( this.message, this.pos.x + (this.size.x / 2), this.pos.y + (this.size.y / 4), [ig.Font.ALIGN.CENTER] );
			if(this.imagePath != "")
			{
				this.imagePath.draw(this.pos.x + (this.size.x / 2) - (this.imagePath.height/2), this.pos.y + ((this.size.y / 4) * 3) - (this.imagePath.width/2));
			}
		},

		update: function() 
		{
			this.parent();

			if(this.messageName != "" && this.message == "")
			{
				this.message =  ig.game.xml.loadTextFromXML(this.messageName, 0, this.xmlDocument);
			}

			if(this.imageName != "" && this.imagePath == "")
			{
				this.imagePath =  new ig.Image(ig.game.xml.loadTextFromXML(this.imageName, 0, this.xmlDocument));
				console.log(this.imagePath);
			}

			if( ig.input.pressed('enter') || ig.input.pressed('mouse1')) 
			{
				ig.game.loadLevel( this.nextScreen, false );
			}
		}
	});
});