ig.module(
	'game.entities.player'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){


// The "player" entity, in the case of magnets, a ball that cannot be controlled. 
EntityPlayer = ig.Box2DEntity.extend({

	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',

	size: { x: 50, y: 50 },
	spawn: { x: 0, y: 0},

	resetable: 1, // by default the player will reset (if this parameter is set, the reset button will call this entity's reset function). 

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!

	animSheet: new ig.AnimationSheet( 'media/ball/ball.png', 50, 50),
	pushedToMagnets: false,
	name: "player",

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];

		this.spawn.x = this.pos.x; // saves the spawn position. 
		this.spawn.y = this.pos.y;


		if( !ig.global.wm ) // if not in weltmeister, create the body and shape. 
		{
			var shapeDef = new b2.CircleDef();
			shapeDef.radius = (this.size.x / 2) * b2.SCALE;
			shapeDef.friction = 1;
			shapeDef.density = 1;
			shapeDef.restitution = 0.3;
			//current = this;

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

	draw: function()
	{
		this.parent();
	},

	reset: function()
	{
		ig.game.spawnEntity(EntityPlayer, this.spawn.x, this.spawn.y, null);
		ig.game.screen.x = 0;
		ig.game.screen.y = 0;
		this.kill();
	},

	// When everything has been loaded, adds the player into the arrays to be checked for magnetism. 
	ready: function()
	{
		this.parent();
		var magnetsToPush = ig.game.getEntitiesByType(EntityMagnet);
		for (var i = 0; i < magnetsToPush.length; i++) {
			magnetsToPush[i].objectsToTest.push(this);
		}

		var eMagnets = ig.game.getEntitiesByType( EntityElectromagnet );

		for(var i = 0; i < eMagnets.length; i++)
		{
			eMagnets[i].objectsToTest.push(this);
		}

		this.pushedToMagnets = true;
	},
});
});