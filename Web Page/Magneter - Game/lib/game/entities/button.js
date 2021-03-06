ig.module(
	'game.entities.button'
)
.requires(
	'impact.entity'
)
.defines(function()
{

// The generic button entity that brings you to the different levels. 
EntityButton = ig.Entity.extend(
	{

	soundDB: 
	{
		'buttonHighlight': new ig.Sound( 'media/sound/buttonHighlight.*' )
	},
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 255, 0, 0.7)',

	font: new ig.Font( 'media/calibri-16pt.png' ),
	font2: new ig.Font( 'media/calibri-16pt-white.png' ),

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	goToLevel: null, // Which level to go to next. 
	buttonText: "",

	gravityFactor: 0,
	zIndex: 1,
	
	size: {x: 100, y:100},
	highlighted: false,

	animSheet: new ig.AnimationSheet( 'media/menu/buttons.png', 100, 100 ),

	init: function(x, y, settings)
	{
		this.parent(x, y, settings);
		
		this.addAnim('unselected', .1, [0]);
		this.addAnim('selected', .1, [1]);
		
		this.currentAnim = this.anims['unselected'];

		this.soundDB['buttonHighlight'].volume = 1.0;

		//console.log(this.pos);
	},
	
	// If not highlighted, highlights the button. Or vice-versa. 
	highlight: function()
	{
		if(this.highlighted === false)
		{
			this.currentAnim = this.anims['selected'];
			this.highlighted = true;
		}
		else
		{
			this.soundDB['buttonHighlight'].play();
			this.currentAnim = this.anims['unselected'];
			this.highlighted = false;
		}
	},

	draw: function() 
	{
		this.parent();

		if( !ig.global.wm ) // Not in the level editor
		{
			var mainMenu = ig.game.getEntitiesByType(EntityMainMenu);
			if(mainMenu[0] !== undefined && mainMenu[0].buttons !== null)
			{
				for (var i = 1; i < mainMenu[0].buttons.length; i++) 
				{
					if(ig.game.unlockedLevels[i] === false && this == mainMenu[0].buttons[i])
					{
						mainMenu[0].lock.draw(mainMenu[0].buttons[i].pos.x, mainMenu[0].buttons[i].pos.y);
					}
				}
			}
		}
		if(this.currentAnim == this.anims['unselected'])
		{
			this.font.draw( this.buttonText, this.pos.x + (this.size.x / 2) - ig.game.screen.x, this.pos.y + (this.size.y / 2) - ig.game.screen.y, [ig.Font.ALIGN.CENTER] );
		}
		else if(this.currentAnim == this.anims['selected'])
		{
			this.font2.draw( this.buttonText, this.pos.x + (this.size.x / 2) - ig.game.screen.x, this.pos.y + (this.size.y / 2) - ig.game.screen.y, [ig.Font.ALIGN.CENTER] );
		}



	},
	
	goToNextLevel: function()
	{
		if(this.goToLevel !== null)
		{
			ig.game.loadLevel( this.goToLevel, true );
		}
		else
		{
			console.log("Set the variable goToLevel to the level you want it to go to");
		}
	}
});

});