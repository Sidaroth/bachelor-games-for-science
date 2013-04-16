ig.module(
	'game.entities.player'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntityPlayer = ig.Box2DEntity.extend({

	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',

	size: { x: 50, y: 50 },
	spawn: { x: 0, y: 0},

	resetable: 1, // by default the player will reset

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!

	animSheet: new ig.AnimationSheet( 'media/ball/ball.png', 50, 50),

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];

		this.spawn.x = this.pos.x;
		this.spawn.y = this.pos.y;

		//this.body.DestroyShape();


		if( !ig.global.wm )
		{
			var shapeDef = new b2.CircleDef();
			shapeDef.radius = (this.size.x / 2) * b2.SCALE;
			shapeDef.friction = 5;
			shapeDef.density = 1;
			shapeDef.restitution = 0.5;
			//current = this;

			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		}
	},

	update: function() 
	{
		this.parent();
	//	console.log(this.body.GetPosition());
	}, 

	draw: function()
	{
		this.parent();
	},

	reset: function()
	{
		console.log(this.body.GetPosition());
		ig.game.spawnEntity(EntityPlayer, this.spawn.x, this.spawn.y, null);
		this.kill();
	}
});
});