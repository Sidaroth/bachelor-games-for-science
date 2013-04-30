ig.module(
	'game.entities.particles'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function()
{

EntityParticles = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 0, 0.5)',
	
	size: {x: 4, y: 4},

	animSheet: new ig.AnimationSheet( 'media/particle/particle.png', 4, 4 ),
	zIndex: 40,
	player: null,

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim('particle', .1, [0]);

		this.currentAnim = this.anims['particle'];

		if( !ig.global.wm )
		{
			var shapeDef = new b2.CircleDef();
			shapeDef.radius = (this.size.x / 2) * b2.SCALE;
			shapeDef.friction = 1;
			shapeDef.density = 75;
			shapeDef.restitution = 0.3;
			//current = this;

			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		}

		this.body.SetXForm( new b2.Vec2(ig.input.mouse.x/10 + ig.game.screen.x/10, ig.input.mouse.y/10 + ig.game.screen.y/10), 0);

		var magnetsToPush = ig.game.getEntitiesByType(EntityMagnet);
		for (var i = 0; i < magnetsToPush.length; i++) {
			magnetsToPush[i].objectsToTest.push(this);
		}
	},

	draw: function()
	{
		this.parent();
	},

	update: function() 
	{
		this.parent();

		if(this.pos.x <= 0)
		{
			this.kill();
		}
		if(this.pos.y <= 0)
		{
			this.kill();
		}
		if(this.pos.x >= ig.system.widht + ig.game.screen.x)
		{
			this.kill();
		}
		if(this.pos.y >= ig.system.height + ig.game.screen.y)
		{
			this.kill();
		}
	},

	ready: function()
	{
		this.parent();
	}
});
});