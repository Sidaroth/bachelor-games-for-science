ig.module(
	'game.entities.restartButton'
)
.requires(
	'impact.entity'
)
.defines(function()
{

EntityRestartButton = ig.Entity.extend(
	{
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 23, 70, 0.7)',

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,

	font: new ig.Font( 'media/calibri-16pt.png' ),

	gravityFactor: 0,
	zIndex: 1,

	buttonText: '',
	
	size: {x: 100, y: 50},

	player: null,

	animSheet: new ig.AnimationSheet( 'media/menu/smallButton.png', 100, 50 ),

	init: function(x, y, settings)
	{
		this.parent(x, y, settings);
		
		this.addAnim('standard', 1, [0]);
		this.addAnim('highlight', 1, [1]);
		
		this.currentAnim = this.anims['standard'];
	},

	ready: function()
	{
		this.player = ig.game.getEntitiesByType( EntityPlayer )[0];
		this.buttonText = ig.game.xml.loadTextFromXML( 'game>restartButton>buttonText', 0, 'lib/game/xml/strings'+ ig.game.language +'.xml');
	},

	update: function()
	{
		this.parent();

		if(ig.input.mouse.x >= this.pos.x && ig.input.mouse.x <= (this.pos.x + this.size.x)
		&& ig.input.mouse.y >= this.pos.y && ig.input.mouse.y <= (this.pos.y + this.size.y))
		{
			this.currentAnim = this.anims['highlight'];

			if(ig.input.pressed( 'mouse1' ))
			{
				var entitiesLength = ig.game.entities.length;

				for(var i = 0; i < entitiesLength; i++)
				{
					if(ig.game.entities[i].resetable != undefined && ig.game.entities[i].resetable == 1)
					{
						ig.game.entities[i].reset();
					}
				}
			}
		}
		else if(this.currentAnim == this.anims['highlight'])
		{
			this.currentAnim = this.anims['standard'];
		}
	},
	
	draw: function() 
	{
		this.parent();
		this.font.draw( this.buttonText, this.pos.x + (this.size.x / 2), this.pos.y + (this.size.y / 2), [ig.Font.ALIGN.CENTER] );
	}
});
});