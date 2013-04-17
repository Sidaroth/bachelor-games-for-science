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

	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!

	size: {x: 50, y: 50},
	//offset: {x: 0, y:0 },

	resetable: 0, // by default the magnets will not reset. 

	fieldRadiusMax: 300,
	fieldRadiusMin: 50,

	fieldRadius: 200,		// Radius of the circle the magnet will have an effect on.
	fieldMagnitude: 10000,  // The strength of the magnetic field (Used to calculate the strength at a location)
	polarity: -1,		// Polarities are represented as (-1, 0, 1)(Attract, Neutral, Repel). 
	density: 0,

	drag:
	{
		'distance': null,
		'state': false
	},

	ringColor: 
	{
		'current': 'rgba(123, 123, 123, 1)',
		'targetted': 'rgba(0, 0, 255, 1)',
		'untargetted': 'rgba(123, 123, 123, 1)'
	},

	objectsToTest: [], // Any object added here will be tested and affected by magnetism. 

	animSheet: new ig.AnimationSheet( 'media/magnets/magnets.png', 50, 50),
	player: null,
	gate: null,

	targetted: false,


	updateTargetStatus: function()
	{
		//console.log("Updating: " + this.targetted);
		if(this.targetted === false)
		{
			this.currentAnim = this.anims['targetted'];
			this.targetted = true;
		}
		else
		{
			this.currentAnim = this.anims['idle'];
			this.targetted = false;
		}
	},

	init: function( x, y, settings )
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );
		this.addAnim( 'targetted', 1, [1]);
		this.currentAnim = this.anims['idle'];

		if( !ig.global.wm )
		{
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.density = this.density;
			shapeDef.friction = 0;
			shapeDef.restitution = 0;

			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		}
	},

	// runs when all entities have finished loading. 
	ready: function()
	{
		 this.parent();
		this.loadObjectsToTest();
		//this.objectsToTest = ig.game.getEntitiesByType(EntityMagnet);
		//this.objectsToTest.push( this.player );
		//this.objectsToTest.push( this.gate );	
	},
	
	loadObjectsToTest: function()
	{
		for(var i = 0; i < ig.game.getEntitiesByType(EntityMagnet).length; i++)
		{
			this.objectsToTest.push(ig.game.getEntitiesByType(EntityMagnet)[i]);
			console.log(i);
		}

	},



	// Minor targetting bugs, beware!
	update: function()
	{
		var distanceToMouse = Math.sqrt( Math.pow ( Math.abs( ig.input.mouse.x - (this.pos.x + (this.size.x / 2))), 2) + Math.pow( Math.abs( ig.input.mouse.y - (this.pos.y + (this.size.y / 2))), 2) );
		if(distanceToMouse <= this.fieldRadius)
		{
			if(distanceToMouse < ig.game.closestMagnetToMouse['distance'])
			{
				if(ig.game.closestMagnetToMouse['magnet'] == null)
				{
					//ig.game.closestMagnetToMouse['magnet'].ringColor['current'] = ig.game.closestMagnetToMouse['magnet'].ringColor['untargetted'];
					ig.game.closestMagnetToMouse['magnet'] = this;
					ig.game.closestMagnetToMouse['distance'] = distanceToMouse;

					this.ringColor['current'] = this.ringColor['targetted'];
				}
				else if(ig.game.closestMagnetToMouse['magnet'].drag['state'] === false)
				{
					ig.game.closestMagnetToMouse['magnet'].ringColor['current'] = ig.game.closestMagnetToMouse['magnet'].ringColor['untargetted'];
					ig.game.closestMagnetToMouse['magnet'] = this;
					ig.game.closestMagnetToMouse['distance'] = distanceToMouse;

					this.ringColor['current'] = this.ringColor['targetted'];
				}
				else
				{
					this.ringColor['current'] = this.ringColor['untargetted'];
				}
			}
		}
		else if(this.drag['state'] === false)
		{
			this.ringColor['current'] = this.ringColor['untargetted'];

			if(ig.game.closestMagnetToMouse['magnet'] == this)
			{
				ig.game.closestMagnetToMouse['magnet'] = null;
				ig.game.closestMagnetToMouse['distance'] = 999999;
			}
		}

		if(ig.input.pressed('mouse1'))
		{
			if(ig.game.closestMagnetToMouse['magnet'] == this)
			{
				this.drag['state'] = true;
				this.drag['distance'] = distanceToMouse;
			}
		}

		if(ig.input.released( 'mouse1' ))
		{
			this.drag['state'] = false;

			if(ig.game.closestMagnetToMouse['magnet'] == this)
			{
				ig.game.closestMagnetToMouse['magnet'] = null;
				ig.game.closestMagnetToMouse['distance'] = 999999;
			}

			this.ringColor['current'] = this.ringColor['untargetted'];
		}

		if(this.drag['state'] === true)
		{
			//console.log(this.fieldRadius);
			this.ringColor['current'] = this.ringColor['targetted'];

			if(distanceToMouse > this.drag['distance'])
			{
				this.fieldRadius += distanceToMouse - this.drag['distance'];
				this.fieldMagnitude += ((distanceToMouse - this.drag['distance'])*50);
				this.drag['distance'] = distanceToMouse;

				if(this.fieldRadius > this.fieldRadiusMax)
				{
					this.fieldRadius = this.fieldRadiusMax;
				}
			}

			if(distanceToMouse < this.drag['distance'])
			{
				this.fieldRadius -= this.drag['distance'] - distanceToMouse;
				this.fieldMagnitude -= ((distanceToMouse - this.drag['distance'])*50);
				this.drag['distance'] = distanceToMouse;

				if(this.fieldRadius < this.fieldRadiusMin)
				{
					this.fieldRadius = this.fieldRadiusMin;
				}
			}
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
			x: entity.pos.x + (entity.size.x / 2) - this.pos.x + (this.size.x / 2),
			y: entity.pos.y + (entity.size.y / 2) - this.pos.y + (this.size.y / 2)
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

			var mass = 1; // temporary
			var z = Math.floor(this.fieldRadius / 5);

		//	var magneticForce = 1 / Math.pow( distanceVecLength, 2 );
			var magneticForce = Math.exp( -distanceVecLength / z );
			//console.log(magneticForce);

			var forceDirection = -1;

			if (entity.polarity =! undefined && entity.polarity == this.polarity)
			{
				forceDirection = 1;
			}
			
			var acceleration = 
			{
				x: forceDirection * ((magneticForce * unitDistVec.x * this.fieldMagnitude) / mass), // + gravity... 0 in X.
				y: forceDirection * ((magneticForce * unitDistVec.y * this.fieldMagnitude) / mass), // + gravity... g(0, -1) * G (magnitude). 
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

		context.strokeStyle = this.ringColor['current']; 
		context.beginPath();
		context.lineWidth = 2;
		context.arc( ig.system.getDrawPos( this.pos.x + (this.size.x / 2) - ig.game.screen.x ),
					ig.system.getDrawPos( this.pos.y + (this.size.y / 2) - ig.game.screen.y ),
					this.fieldRadius * ig.system.scale,
					0, Math.PI * 2);

		context.stroke();
	}
});
});