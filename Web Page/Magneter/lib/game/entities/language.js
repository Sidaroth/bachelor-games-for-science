ig.module(
	'game.entities.language'
)
.requires(
	'impact.entity',
	'game.entities.shield'
)
.defines(function()
{
	// The entity that handles language switching and the language flag interactions. 
	EntityLanguage = ig.Entity.extend(
	{
		soundDB: {"errorSound": new ig.Sound("media/sound/errorSound.*")},
		nextScreen: null,
		size: {x:64, y:64},

		flag: "",
		shield: null,
		shieldResponse: null,

		gravityFactor: 0,
		
		animSheet: new ig.AnimationSheet( 'media/menu/flags.png', 64, 64 ),
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			
			this.addAnim('EN', .1, [0]);
			this.addAnim('NO', .1, [1]);

			this.currentAnim = this.anims[this.flag];

			this.soundDB["errorSound"].volume = ig.game.defaultSoundLevel;
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
					// change language and log the change. 
					ig.game.language = this.flag;
					if(userId > 0)
					{
				    	var request = $.ajax({
						  	type: 'POST',
						  	url: "pages/save.php",
						  	data:
						  	{ 
						  		uid: userId,
					        	language: this.flag
						    },
						  	async:true
						});
						ig.game.logEvent(1, 0, 0, 0, 0, 1, "Changed language to " + this.flag);
					}
				}
				this.shieldResponse = null;
				this.shield.kill();
				this.shield = null;
			}

			// If click, and on the button, and on a flag that doesn't represent the language already chosen. Create the shield dialogue box. 
			if(ig.input.pressed('mouse1') && ig.game.language != this.flag)
			{
				if(	ig.input.mouse.x >= this.pos.x && ig.input.mouse.x <= (this.pos.x + this.size.x)
			 	 && ig.input.mouse.y >= this.pos.y && ig.input.mouse.y <= (this.pos.y + this.size.y))
				{
					settings = {creator: this, message: ig.game.xml.loadTextFromXML("language", 0, "lib/game/xml/strings"+ ig.game.language +".xml")};
					this.shield = new EntityShield( 100, 100, settings );
					ig.game.paused = true;
					ig.game.pauseEntity = this.shield;
				}
				else
				{
					this.soundDB["errorSound"].play();
				}
			}
		},

		draw: function()
		{
			this.parent();
			if(this.shield)
			{
				this.shield.draw();
			}
		}
	});
});