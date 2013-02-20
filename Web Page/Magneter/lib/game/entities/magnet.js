ig.module(
	'game.entities.magnet'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityMagnet = ig.Entity.extend({

	// weltmeister 
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 255, 0.7)',

	size: {x: 10, y: 10},
	//offset: {x: 0, y:0 },

	fieldRadius: 0,		// Radius of the circle the magnet will have an effect on.
	fieldStrength: 10,  // The strenght of the magnetic field (Used to calculate the strength at a location)
	polarity: 0,		// Polarities are represented as (1, 0, -1)(North, Neutral, South). 

	player: null,

	init: function( x, y, settings )
	{
		this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
	},

	update: function()
	{
		if(this.player === null)
		{
			this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
		}

		//console.log("ig.game: " + ig.game.getEntitiesByType(EntityPlayer)[0].pos.x);
		this.parent();
	}
})
;});