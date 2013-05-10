ig.module(
	'game.entities.infoScreen'
)
.requires(
	'impact.entity'
)
.defines(function()
{
	// The entity that represents all the info screens that give information to the player. 
	EntityInfoScreen = ig.Entity.extend(
	{
		font: new ig.Font( 'media/calibri-16pt-white.png' ),
		nextScreen: null,
		size: {x:832, y:640},
		gravityFactor: 0,
		//name for the image in the xml ex. game>levelOneInfoScreen>image
		imageName: "",
		//name for the info in the xml ex. game>splashScreen>info
		messageName: "",
		image: null,
		message: "",
		xmlDocument: "",
		//true if infoScreen, false if popUpMessage
		infoScreen: true,
		zIndex: 2,
		
		animSheet: new ig.AnimationSheet( 'media/infoScreen/infoScreen.png', 832, 640 ),
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			
			this.addAnim( 'idle', 1, [0] );

			this.xmlDocument = "lib/game/xml/strings" + ig.game.language + ".xml";
		},
		
		draw: function() 
		{
			this.parent();
			
			if(this.infoScreen)
			{
				this.font.draw( this.message, this.pos.x + (this.size.x / 2), this.pos.y + (this.size.y / 4), [ig.Font.ALIGN.CENTER] );
				if(this.image != null)
				{
					this.image.draw(this.pos.x + (this.size.x / 2) - (this.image.height/2), this.pos.y + ((this.size.y / 4) * 3) - (this.image.width/2));
				}
			}
		},

		ready: function()
	    {
	    	// if a message has been specified, but isn't loaded. 
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