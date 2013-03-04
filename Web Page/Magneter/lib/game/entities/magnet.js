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
	fieldStrength: 10,  // The strength of the magnetic field (Used to calculate the strength at a location)
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


	/// Checks if the player is within the circle. 
	/// Distance = squareRoot( |player.x - magnet.x|^2 + |player.y - magnet.y|^2 )
	/// If inside field effect radius, apply exponential decay function:
	/// e^(-x/z) --- Where x equals distance from center of the magnetic field.
	checkDistance: function()
	{		
		var xDist = Math.abs(this.player.pos.x - this.pos.x);
		var yDist = Math.abs(this.player.pos.y - this.pos.y);

		var dist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)); 

		// If within magnetic field
		if(dist <= this.fieldRadius)
		{	
			var forceCoefficient = 250;
			var z = Math.floor(this.fieldRadius / 5);

			var force = forceCoefficient * Math.exp(-dist / z);

			var xRatio = Math.sin(xDist / dist);
			var yRatio = Math.cos(yDist / dist);

			var xForce = xRatio * force;
			var yForce = yRatio * force;

			this.player.vel.x = this.player.vel.x + xForce;
			this.player.vel.y = this.player.vel.y + yForce;

			console.log("x: " + xRatio + ", " + xForce);
			console.log("y: " + yRatio + ", " + yForce);
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