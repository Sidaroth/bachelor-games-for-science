ig.module(
	'game.entities.goal'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityGoal = ig.Entity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 150, 0.5)',
	//_wmScalable: true,
	
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

		//this.body.DestroyShape();


		if( !ig.global.wm )
		{
			// var shapeDef = new b2.PolygonDef();
			// shapeDef.SetAsBox(
			//  	this.size.x / 2 * b2.SCALE,
			// 	this.size.y / 2 * b2.SCALE
			// );

			// shapeDef.friction = 5;
			// shapeDef.density = 1;
			// shapeDef.restitution = 0.5;
			
			// this.body.CreateShape( shapeDef );
			// this.body.SetMassFromShapes();
		}
	},	

	update: function() 
	{
		this.parent();
	},
	
	check: function(other)
	{
		other.reset();
		// console.log(other.nam);
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