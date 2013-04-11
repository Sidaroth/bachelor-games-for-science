ig.module(
	'game.entities.magnet'
)
.requires(
	'plugins.box2d.entity',

	'game.entities.player'
)
.defines(function(){

EntityMagnet = ig.Box2DEntity.extend({

	// weltmeister 
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 255, 0.7)',

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!

	size: {x: 50, y: 50},
	//offset: {x: 0, y:0 },

	fieldRadius: 200,		// Radius of the circle the magnet will have an effect on.
	fieldMagnitude: 10000,  // The strength of the magnetic field (Used to calculate the strength at a location)
	polarity: -1,		// Polarities are represented as (1, 0, -1)(Attract, Neutral, Repel). 
	ringColor: 'rgba(123, 123, 123, 1)',

	objectsToTest: null, // Any object added here will be tested and affected by magnetism. 

	animSheet: new ig.AnimationSheet( 'media/magnets/magnet-north.png', 50, 50),
	player: null,

	init: function( x, y, settings )
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );
		this.currentAnim = this.anims['idle'];

		if( !ig.global.wm )
		{
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.density = 0;
			shapeDef.friction = 5;
			shapeDef.restitution = 0.5;

			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		}
	},

	update: function()
	{
		if(this.player === null)
		{
			this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
		}

		//console.log(this.objectsToTest.length);
		if(this.objectsToTest === null)
		{
			this.objectsToTest = ig.game.getEntitiesByType(EntityMagnet);
			this.objectsToTest.push( this.player );

			console.log(this.objectsToTest);
		}

		for( var i = 0; i < this.objectsToTest.length; i++ )
		{
			if(!(this.objectsToTest[i].id == this.id))
			{
				this.checkDistance(this.objectsToTest[i]);
			}
		}

		this.parent();
	},

	draw: function()
	{
		this.parent();
		this.drawFieldEffectRing();
	},

	checkDistance: function(entity)
	{
		var distanceVector = 
		{
			x: entity.pos.x - this.pos.x,
			y: entity.pos.y - this.pos.y
		};

		// Standard pythagorean theorem -- Length of vector. 
		var distanceVecLength = Math.sqrt( Math.pow( Math.abs(distanceVector.x), 2 ) + Math.pow( Math.abs(distanceVector.y), 2 ) );

		// If within the field. 
		if(distanceVecLength <= this.fieldRadius)
		{
			var unitDistVec = 
			{
				x: distanceVector.x / distanceVecLength,
				y: distanceVector.y / distanceVecLength,
			};

			var mass = 1; //// TEEEEEEMPORARY.. simulate own gravity?
			var z = Math.floor(this.fieldRadius / 5);

		//	var magneticForce = 1 / Math.pow( distanceVecLength, 2 );
			var magneticForce = Math.exp( -distanceVecLength / z );
			//console.log(magneticForce);

			var acceleration = 
			{
				x: this.polarity * ((magneticForce * unitDistVec.x * this.fieldMagnitude) / mass), // + gravity... 0 in X.
				y: this.polarity * ((magneticForce * unitDistVec.y * this.fieldMagnitude) / mass), // + gravity... g(0, -1) * G (magnitude). 
			};

			//entity.body.ApplyImpulse( acceleration.x * ig.system.tick );

			entity.body.ApplyForce( new b2.Vec2(acceleration.x, acceleration.y), entity.body.GetPosition() );
			//this.entity.vel.x = this.entity.vel.x + acceleration.x * ig.system.tick;
			//this.entity.vel.y = this.entity.vel.y + acceleration.y * ig.system.tick;
		}
	},

	/// Draws a ring around the effect of the magnetic field
	/// of the magnet. 
	drawFieldEffectRing: function()
	{
		var context = ig.system.context;

		context.strokeStyle = this.ringColor; 
		context.beginPath();
		context.lineWidth = 2;
		context.arc( ig.system.getDrawPos( this.pos.x + (this.size.x / 2) - ig.game.screen.x ),
					ig.system.getDrawPos( this.pos.y + (this.size.y / 2) - ig.game.screen.y ),
					this.fieldRadius * ig.system.scale,
					0, Math.PI * 2);

		context.stroke();
	}
})
;});