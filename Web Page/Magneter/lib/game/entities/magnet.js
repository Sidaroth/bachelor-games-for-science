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

	size: {x: 10, y: 10},
	//offset: {x: 0, y:0 },

	fieldRadius: 200,		// Radius of the circle the magnet will have an effect on.
	fieldMagnitude: 450,  // The strength of the magnetic field (Used to calculate the strength at a location)
	polarity: -1,		// Polarities are represented as (1, 0, -1)(Attract, Neutral, Repel). 
	ringColor: 'rgba(123, 123, 123, 1)',

	objectsToTest: {},

	player: null,

	init: function( x, y, settings )
	{
		 this.parent(x, y, settings);

		// console.log(ig.game.getEntitiesByType(EntityMagnet));
		// this.objectsToTest = ig.game.getEntitiesByType(EntityMagnet);
		// this.objectsToTest.push(this.player);
	},


	handleEvents: function()
	{

	},

	update: function()
	{
		if(this.player === null)
		{
			this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
		}

		this.handleEvents();

		for(var entity in this.objectsToTest)
		{
			console.log(this.objectsToTest);
			this.checkDistance(entity);

		}

		//this.checkDistance(); // check if ball is within field effect circle. 
		
		//console.log("ig.game: " + ig.game.getEntitiesByType(EntityPlayer)[0].pos.x);
		this.parent();
	},

	draw: function()
	{
		this.parent();

		var context = ig.system.context;

		context.beginPath();
		context.arc( ig.system.getDrawPos( this.pos.x - ig.game.screen.x ),
					 ig.system.getDrawPos( this.pos.y - ig.game.screen.y ),
					 15 * ig.system.scale,
					 0, Math.PI * 2);

		context.fill();

		this.drawFieldEffectRing();
	},

	checkDistance: function(entity)
	{
		var distanceVector = 
		{
			x: this.entity.pos.x - this.pos.x,
			y: this.entity.pos.y - this.pos.y
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
			console.log(magneticForce);

			var acceleration = 
			{
				x: this.polarity * ((magneticForce * unitDistVec.x * this.fieldMagnitude) / mass), // + gravity... 0 in X.
				y: this.polarity * ((magneticForce * unitDistVec.y * this.fieldMagnitude) / mass), // + gravity... g(0, -1) * G (magnitude). 
			};

			this.entity.vel.x = this.entity.vel.x + acceleration.x * 0.0166666667;
			this.entity.vel.y = this.entity.vel.y + acceleration.y * 0.0166666667;
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
		context.arc( ig.system.getDrawPos( this.pos.x - ig.game.screen.x ),
					ig.system.getDrawPos( this.pos.y - ig.game.screen.y ),
					this.fieldRadius * ig.system.scale,
					0, Math.PI * 2);

		context.stroke();
	}
})
;});