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

	fieldRadius: 100,		// Radius of the circle the magnet will have an effect on.
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
		if(this.player === null)
		{
			this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
		}

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

		console.log(this.pos);
	},

	update: function()
	{

		this.handleEvents();
		
		//console.log("ig.game: " + ig.game.getEntitiesByType(EntityPlayer)[0].pos.x);
		this.parent();
	},

	draw: function()
	{
		this.parent();
		this.drawFieldEffectRing();
	},

	drawFieldEffectRing: function()
	{
		var context = ig.system.context;

		context.strokeStyle = this.ringColor; 
		context.beginPath();
		context.arc( ig.system.getDrawPos( this.pos.x - ig.game.screen.x ),
					ig.system.getDrawPos( this.pos.y - ig.game.screen.y ),
					this.fieldRadius * ig.system.scale,
					0, Math.PI * 2);

		context.stroke();
	}
})
;});