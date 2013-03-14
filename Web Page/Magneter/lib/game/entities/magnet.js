ig.module(
	'game.entities.magnet'
)
.requires(
	'impact.entity',

	'game.entities.player'
)
.defines(function(){

EntityMagnet = ig.Entity.extend({

	// weltmeister 
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 255, 0.7)',

	size: {x: 10, y: 10},
	//offset: {x: 0, y:0 },

	fieldRadius: 200,		// Radius of the circle the magnet will have an effect on.
	fieldMagnitude: 300,  // The strength of the magnetic field (Used to calculate the strength at a location)
	polarity: 0,		// Polarities are represented as (1, 0, -1)(North, Neutral, South). 
	ringColor: 'rgba(123, 123, 123, 1)',

	player: null,

	init: function( x, y, settings )
	{
		//this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
	},


	handleEvents: function()
	{
		if(ig.input.state('right'))
		{
			this.pos.x += 10;
		}

		if(ig.input.state('left'))
		{
			this.pos.x -= 10;
		}

		if(ig.input.state('up'))
		{
			this.pos.y -= 10;
		}

		if(ig.input.state('down'))
		{
			this.pos.y += 10;
		}
	},

	update: function()
	{
		if(this.player === null)
		{
			this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
		}

		this.handleEvents();

		this.checkDistance(); // check if ball is within field effect circle. 
		
		//console.log("ig.game: " + ig.game.getEntitiesByType(EntityPlayer)[0].pos.x);
		this.parent();
	},

	draw: function()
	{
		this.parent();

		var context = ig.system.context;

		context.arc( ig.system.getDrawPos( this.pos.x - ig.game.screen.x ),
					 ig.system.getDrawPos( this.pos.y - ig.game.screen.y ),
					 15 * ig.system.scale,
					 0, Math.PI * 2);

		context.fill();

		this.drawFieldEffectRing();
	},

	checkDistance: function()
	{
		var distanceVector = 
		{
			x: this.player.pos.x - this.pos.x,
			y: this.player.pos.y - this.pos.y
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



			//var magneticForce = 1 / Math.pow( distanceVecLength, 2 );
			var magneticForce = Math.exp( -distanceVecLength / z );
			console.log(magneticForce);

			var acceleration = 
			{
				x: -1 * ((magneticForce * unitDistVec.x * this.fieldMagnitude) / mass), // + gravity... 0 in X.
				y: -1 *  ((magneticForce * unitDistVec.y * this.fieldMagnitude) / mass), // + gravity... g(0, -1) * G (magnitude). 
			};


			this.player.vel.x = this.player.vel.x + acceleration.x * 0.0166666667;
			this.player.vel.y = this.player.vel.y + acceleration.y * 0.0166666667;
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