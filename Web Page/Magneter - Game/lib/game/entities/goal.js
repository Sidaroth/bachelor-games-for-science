ig.module(
	'game.entities.goal'
)
.requires(
	'impact.entity'
)
.defines(function(){

// The goal flag entity that brings you to the next level / the main menu when you hit it. 
EntityGoal = ig.Entity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 150, 0.5)',
	
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 100, y: 100},
	levelToUnlock: 0,
	goToLevel: null,

	message: 'Congratulation on completing the level!',
	killTimer: null,
	font: new ig.Font('media/04b03.font.png'),

	animSheet: new ig.AnimationSheet( 'media/goal/goal_flag.png', 100, 100),

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];
	},	

	update: function() 
	{
		this.parent();
	},
	
	// If it is the player (ball) that hit's the flag, the game updates which levels have been unlocked
	// and starts the new level, or returns the user to the main menu. 
	check: function(other)
	{
		if(other.name == "player")
		{
			ig.game.updateLevel(this.levelToUnlock);
			if(this.goToLevel !== null)
			{
				ig.game.loadLevel(this.goToLevel);
			}
			else
			{
				ig.game.loadLevel('MainMenu');
			}
		}

		this.killTimer = new ig.Timer(2);	  
	},

	draw: function()
	{
		this.parent();
		
		if(this.killTimer && this.killTimer.delta() < 0)
		{
			this.font.draw( this.message, 250, 180);
		}
	}
	
});
});