ig.module(
	'game.entities.shield'
)
.requires(
	'impact.entity'
)
.defines(function()
{
	EntityShield = ig.Entity.extend(
	{
		size: {x:300, y:200},

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

			this.yes = ig.game.xml.loadTextFromXML("yes", 0, "lib/game/xml/strings"+ ig.game.language +".xml")
			this.no = ig.game.xml.loadTextFromXML("no", 0, "lib/game/xml/strings"+ ig.game.language +".xml")
		},
		
		update: function() 
		{
			this.parent();
			this.currentAnim = this.anims['none'];
			if(ig.input.mouse.y >= this.pos.y + this.size.y - 50 && ig.input.mouse.y <= this.pos.y + this.size.y)
			{
				if(ig.input.mouse.x >= this.pos.x && ig.input.mouse.x < this.pos.x + (this.size.x / 2))
				{
					this.currentAnim = this.anims['yes'];
					if(ig.input.pressed('mouse1'))
					{
						ig.game.paused = false;
						this.creator.shieldResponse = true;
					}
				}
				else if(ig.input.mouse.x > this.pos.x + (this.size.x / 2) && this.pos.x + this.size.x)
				{
					this.currentAnim = this.anims['no'];
					if(ig.input.pressed('mouse1'))
					{
						ig.game.paused = false;
						this.creator.shieldResponse = false;
					}
				}
			}
		},

		draw: function()
		{
			this.parent();
			this.font.draw( this.message, this.pos.x + (this.size.x / 2), this.pos.y + (this.size.y / 2), [ig.Font.ALIGN.CENTER] );
			this.font.draw( this.no, this.pos.x + (this.size.x ) - 75, this.pos.y + (this.size.y ) - 25, [ig.Font.ALIGN.CENTER] );
			this.font.draw( this.yes, this.pos.x + 75, this.pos.y + (this.size.y ) - 25, [ig.Font.ALIGN.CENTER] );
		}
	});
});