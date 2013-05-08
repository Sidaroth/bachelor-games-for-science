ig.module(
	'game.entities.shield'
)
.requires(
	'impact.entity'
)
.defines(function()
{
	// an entity used for the shield pattern. Brings up an "Are you sure" type window
	EntityShield = ig.Entity.extend(
	{
		size: {x:300, y:200},

		soundDB: 
		{
			'buttonClick': new ig.Sound( 'media/sound/buttonClick.*' )
		},

		font: new ig.Font( 'media/calibri-16pt.png' ),
		message: "",
		yes: "",
		no: "",
		creator: null,
		animSheet: new ig.AnimationSheet( 'media/menu/shield.png', 300, 200 ),
		zIndex: 2,
		gravityFactor: 0,
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			
			this.addAnim('yes', .1, [0]);
			this.addAnim('no', .1, [1]);
			this.addAnim('none', .1, [2]);

			this.currentAnim = this.anims.none;

			this.soundDB['buttonClick'].volume = ig.game.defaultSoundLevel;
			this.soundDB['buttonClick'].play();

			// Loads the appropriate text dependant on language. 
			this.yes = ig.game.xml.loadTextFromXML("yes", 0, "lib/game/xml/strings"+ ig.game.language +".xml")
			this.no = ig.game.xml.loadTextFromXML("no", 0, "lib/game/xml/strings"+ ig.game.language +".xml")
		
			this.pos.x = (ig.system.width / 2) + ig.game.screen.x - (this.size.x / 2);
			this.pos.y = (ig.system.height / 2) + ig.game.screen.y - (this.size.y / 2);
		},
		
		update: function() 
		{
			this.parent();
			this.currentAnim = this.anims['none'];
			// if mouseover 
			if(ig.input.mouse.y >= this.pos.y + this.size.y - 50 - ig.game.screen.y && ig.input.mouse.y <= this.pos.y + this.size.y - ig.game.screen.y)
			{
				if(ig.input.mouse.x >= this.pos.x - ig.game.screen.x && ig.input.mouse.x < this.pos.x + (this.size.x / 2)  - ig.game.screen.x)
				{
					this.currentAnim = this.anims['yes'];
					if(ig.input.pressed('mouse1'))
					{
						this.soundDB['buttonClick'].play();
						ig.game.paused = false;
						this.creator.shieldResponse = true;
					}
				}
				else if(ig.input.mouse.x > this.pos.x + (this.size.x / 2)  - ig.game.screen.x && ig.input.mouse.x < this.pos.x + this.size.x  - ig.game.screen.x)
				{
					this.currentAnim = this.anims['no'];
					if(ig.input.pressed('mouse1'))
					{
						this.soundDB['buttonClick'].play();
						ig.game.paused = false;
						this.creator.shieldResponse = false;
					}
				}
			}
		},

		draw: function()
		{
			this.parent();
			this.font.draw( this.message, this.pos.x + (this.size.x / 2) - ig.game.screen.x, this.pos.y + (this.size.y / 2) - ig.game.screen.y, [ig.Font.ALIGN.CENTER] );
			this.font.draw( this.no, this.pos.x + (this.size.x ) - 75 - ig.game.screen.x, this.pos.y + (this.size.y ) - 25  - ig.game.screen.y, [ig.Font.ALIGN.CENTER] );
			this.font.draw( this.yes, this.pos.x + 75  - ig.game.screen.x, this.pos.y + (this.size.y ) - 25 - ig.game.screen.y, [ig.Font.ALIGN.CENTER] );
		}
	});
});