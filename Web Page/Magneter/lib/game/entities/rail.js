ig.module(
	'game.entities.rail'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntityRail = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 200, 50, 0.5)',
	//_wmScalable: true,
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 50, y: 50},
	spawn: { x: 0, y: 0},

	resetable: 1,
	
	railId: 0,
	partNr: 0,
	totJoints: 0,
	
	
	leader: false,
	conSide: 0, // side the next part of the rail is conected to, 0=r, 1=l, 2=top, 3=bot.
	
	magnet: null,
	magnetPower: 10000,
	magnetRadius: 200,
	
	animSheet: new ig.AnimationSheet( 'media/gate/gate_slab.png', 50, 50),
	pushedToMagnets: false,

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];

		//this.body.DestroyShape();


		if( !ig.global.wm )
		{
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.friction = 5;
			shapeDef.density = 0;
			shapeDef.restitution = 0.5;
			
			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
			
			console.log(this.leader);
			
				var settings = {density: 1, fieldRadius: this.magnetRadius, fieldMagnitude: this.magnetPower};
				this.magnet = new EntityMagnet( this.pos.x, this.pos.y, settings );
			
			if(this.leader === true){
				console.log('yeah');

			}
			
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
		if( !ig.global.wm)
		{
			if(this.leader === true){
				this.magnet.draw();
			}
		}
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