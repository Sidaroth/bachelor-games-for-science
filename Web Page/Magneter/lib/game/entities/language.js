ig.module(
	'game.entities.language'
)
.requires(
	'impact.entity',
	'game.entities.shield'
)
.defines(function()
{
	EntityLanguage = ig.Entity.extend(
	{
		soundDB: {"errorSound": new ig.Sound("media/sound/errorSound.*")},
		nextScreen: null,
		size: {x:64, y:64},
		// _wmDrawBox: true,
		// _wmDrawColor: 'rgba(255, 0, 255, 0.7)',
		// _wmScalable: true,
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
					ig.game.language = this.flag;
				}
				this.shieldResponse = null;
				this.shield.kill();
				this.shield = null;
			}

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