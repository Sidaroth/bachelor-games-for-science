ig.module(
	'game.entities.menuButton'
)
.requires(
	'game.entities.button',
	'game.entities.shield'
	)
.defines(function()
{
	EntityMenuButton = EntityButton.extend(
	{

		size: {x:100, y:50},
		
		animSheet: new ig.AnimationSheet( 'media/menu/smallButton.png', 100, 50 ),

		shield: null,
		shieldResponse: null,
		//pos:{x:0,y:0},
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			this.goToLevel = "MainMenu";
			this.pos.x = 0;
			this.pos.y = 0;
		},
		
		draw: function() 
		{
			this.parent();
		},

		update: function() 
		{
			this.parent();

			if(this.buttonText == "")
			{
				this.buttonText = ig.game.xml.loadTextFromXML("game>menuButton>buttonText", 0, "lib/game/xml/strings"+ ig.game.language +".xml");
			}

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

			if(	ig.input.mouse.x >= this.pos.x && ig.input.mouse.x <= (this.pos.x + this.size.x)
			 && ig.input.mouse.y >= this.pos.y && ig.input.mouse.y <= (this.pos.y + this.size.y))
			{
				if(ig.input.pressed( 'mouse1' ))
				{
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
		}
	});
});