ig.module(
	'game.entities.gate'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntityGate = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 0, 0.5)',
	//_wmScalable: true,
	
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 50, y: 100},
	spawn: { x: 0, y: 0},

	resetable: 1,

	animSheet: new ig.AnimationSheet( 'media/gate/gate_slab.png', 50, 100),
	pushedToMagnets: false,

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
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.friction = 5;
			shapeDef.density = 1;
			shapeDef.restitution = 0.5;
			
			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		}
	},	

	update: function() 
	{
		this.parent();
		if(this.pushedToMagnets === false)
		{
			this.ready();
		}
	},
	
	check: function(other)
	{
		//other.reset();
		//this.reset();	  
	},

	draw: function()
	{
		this.parent();
	},

	reset: function()
	{
		console.log(this.body.GetPosition());
		ig.game.spawnEntity(EntityGate, this.spawn.x, this.spawn.y, null);
		this.kill();
	},

	ready: function()
	{
		this.parent();
		var magnetsToPush = ig.game.getEntitiesByType(EntityMagnet);

		for (var i = 0; i < magnetsToPush.length; i++) {
			magnetsToPush[i].objectsToTest.push(this);
		}
		this.pushedToMagnets = true;
	}
	
});
});