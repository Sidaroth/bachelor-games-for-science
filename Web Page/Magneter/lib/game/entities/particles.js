ig.module(
	'game.entities.particles'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function()
{

// Particles that spawn from the mouse and interacts with magnetic fields to simulate iron shavings.
// giving the player the ability to test out the magnetic fields without using the ball. 
EntityParticles = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 0, 0.5)',
	
	size: {x: 4, y: 4},

	animSheet: new ig.AnimationSheet( 'media/particle/particle.png', 4, 4 ),
	zIndex: 40,
	player: null,

	type: ig.Entity.TYPE.NONE,
    checkAgainst: ig.Entity.TYPE.BOTH,
    collides: ig.Entity.COLLIDES.ACTIVE,

    dead: false,

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim('particle', .1, [0]);

		this.currentAnim = this.anims['particle'];

		if( !ig.global.wm ) // if not in weltmeister (level editor).
		{
			// Create the shape for the body. 
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
		var threshold = 30;

		if(		(this.pos.x < threshold)
			||	(this.pos.y < threshold)
			||	(this.pos.x > (ig.system.width + ig.game.screen.x) - threshold)
			||	(this.pos.y > (ig.system.height + ig.game.screen.y) - threshold))
		{
			this.dead = true;
			console.log(this.pos.x);
		}

    	for( var edge = this.body.m_contactList; edge; edge = edge.next ) 
    	{
	        // Get the normal vector for this contact
	        var normal = edge.contact.m_manifold.normal;
	        
	        // If the normal vector for this contact is pointing upwards
	        // (y is less than 0), then this body is "standing" on something
	        if( normal.x > 0 ){
			//vector points right
				this.dead = true;
			}
			else if( normal.x < 0 ){
			//vector points left
				this.dead = true;
			}
			else{
			//point.x = 0 and thus, no horizontal collision
			}

			if( normal.y > 0 ){
			//vector points down
				this.dead = true;
			}
			else if( normal.y < 0 ){
			//vector points up
				this.dead = true;
			}
			else{
			//point.y = 0 and thus, no vertical collision
			}               
    	}
	},

	ready: function()
	{
		this.parent();
	},

	check: function(other)
	{
		this.parent(other);
		// this.kill();
	}
});
});