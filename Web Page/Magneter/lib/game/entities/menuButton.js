ig.module(
	'game.entities.menuButton'
)
.requires(
	'game.entities.button',
	'game.entities.shield'
	)
.defines(function()
{
	// a menu button entity that returns the player to the main menu. 
	EntityMenuButton = EntityButton.extend(
	{
		size: {x:100, y:50},
		
		animSheet: new ig.AnimationSheet( 'media/menu/smallButton.png', 100, 50 ),

		shield: null,
		shieldResponse: null,
		lastPos: {x:0, y:0},
		zIndex: 20,
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			this.goToLevel = "MainMenu";
			this.pos.x = 0;
			this.pos.y = 0;
			this.lastPos.x = 0;
			this.lastPos.y = 0;
		},
		
		draw: function() 
		{
			this.parent();
		},

		// loads the button text depending on language. 
		ready: function()
		{
			this.buttonText = ig.game.xml.loadTextFromXML("game>menuButton>buttonText", 0, "lib/game/xml/strings"+ ig.game.language +".xml");
		},

		update: function() 
		{
			this.parent();

			if(this.shield)
			{
				this.shield.update();
			}

			if(this.shieldResponse != null)
			{
				if(this.shieldResponse == true)
				{
					this.goToNextLevel();
				}
				this.shieldResponse = null;
				this.shield.kill();
				this.shield = null;
			}

			// On mousehover... 
			if(	ig.input.mouse.x >= this.pos.x - ig.game.screen.x && ig.input.mouse.x <= (this.pos.x + this.size.x - ig.game.screen.x)
			 && ig.input.mouse.y >= this.pos.y - ig.game.screen.y && ig.input.mouse.y <= (this.pos.y + this.size.y - ig.game.screen.y))
			{
				if(ig.input.pressed( 'mouse1' ))
				{
					// Create shield confirmation dialogue box. 
					settings = {creator: this, message: ig.game.xml.loadTextFromXML("game>menuButton>shieldText", 0, "lib/game/xml/strings"+ ig.game.language +".xml")};
					this.shield = new EntityShield( 100, 100, settings );
					ig.game.paused = true;
					ig.game.pauseEntity = this.shield;
				}
				if(this.currentAnim == this.anims['unselected'])
				{
					this.highlight();
				}
			}
			else if(this.currentAnim == this.anims['selected'])
			{
				this.highlight();
			}


			// Keep the button in the top left corner of the screen, even when camera is moving. 
			if(ig.game.screen.x != this.lastPos.x)
			{
				//console.log(ig.game.screen.x);
				this.pos.x = ig.game.screen.x;
				this.lastPos.x = ig.game.screen.x;
			}

			if(ig.game.screen.y != this.lastPos.y)
			{
				this.pos.y = ig.game.screen.y;
				this.lastPos.y = ig.game.screen.y;
			}
		}
	});
});