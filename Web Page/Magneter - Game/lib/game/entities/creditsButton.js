ig.module(
	'game.entities.creditsButton'
)
.requires(
	'impact.entity'
)
.defines(function()
{

// The button that brings you to the credits screen. 
EntityCreditsButton = ig.Entity.extend(
	{
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 23, 70, 0.7)',

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,

	font: new ig.Font( 'media/calibri-16pt-white.png' ),
	font2: new ig.Font( 'media/calibri-16pt-white.png' ),

	gravityFactor: 0,
	zIndex: 1,
	
	size: {x: 100, y: 50},

	lastPos: {x: 0, y:0 },

	animSheet: new ig.AnimationSheet( 'media/menu/smallButton.png', 100, 50 ),

	buttonText: "", 

	init: function(x, y, settings)
	{
		this.parent(x, y, settings);
		
		this.addAnim('standard', 1, [0]);
		this.addAnim('highlight', 1, [1]);
		
		this.currentAnim = this.anims['standard'];

		this.pos.x = ig.system.width - this.size.x;
		this.pos.y = 0;
	},

	ready: function()
	{
		this.buttonText = ig.game.xml.loadTextFromXML( 'game>creditsButton>buttonText', 0, 'lib/game/xml/strings' + ig.game.language +'.xml');
	},

	update: function()
	{
		this.parent();

		if(ig.input.mouse.x >= this.pos.x - ig.game.screen.x && ig.input.mouse.x <= (this.pos.x + this.size.x - ig.game.screen.x)
		&& ig.input.mouse.y >= this.pos.y - ig.game.screen.y && ig.input.mouse.y <= (this.pos.y + this.size.y - ig.game.screen.y))
		{
			this.currentAnim = this.anims['highlight'];

			if(ig.input.pressed( 'mouse1' ))
			{
				ig.game.loadLevel( "Credits", false );
			}
		}
		else if(this.currentAnim == this.anims['highlight'])
		{
			this.currentAnim = this.anims['standard'];
		}


		// keep the button at the same location at all times. 
		if(ig.game.screen.x != this.lastPos.x)
		{
			this.lastPos.x = ig.game.screen.x;
			this.pos.x = ig.system.width - this.size.x + ig.game.screen.x;
		}

		if(ig.game.screen.y != this.lastPos.y)
		{
			this.lastPos.y = ig.game.screen.y;
			this.pos.y = ig.game.screen.y;
		}
	},
	
	draw: function() 
	{
		this.parent();
		if(this.currentAnim == this.anims['standard'])
		{
			this.font.draw( this.buttonText, this.pos.x + (this.size.x / 2) - ig.game.screen.x, this.pos.y + (this.size.y / 2) - ig.game.screen.y, [ig.Font.ALIGN.CENTER] );
		}
		else if(this.currentAnim == this.anims['highlight'])
		{
			this.font2.draw( this.buttonText, this.pos.x + (this.size.x / 2) - ig.game.screen.x, this.pos.y + (this.size.y / 2) - ig.game.screen.y, [ig.Font.ALIGN.CENTER] );
		}
	}
});
});