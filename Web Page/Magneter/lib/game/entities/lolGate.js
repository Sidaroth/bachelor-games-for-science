ig.module(
	'game.entities.electromagnet'
)
.requires(
	
	'game.entities.magnet'
)
.defines(function(){

EntityLolgate = EntityElectromagnet.extend({
	// weltmeister 
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(55, 200, 255, 0.7)',
	
	resettable: true,
	
	fieldRadius: 75,
	fieldMagnitude: 100000,
	
	init: function( x, y, settings )
	{
		this.parent(x, y, settings);
		
		this.addAnim( 'lolgate', 1, [3] );

		this.currentAnim = this.anims['lolgate'];
	},

	// NEED TO FIX TARGETTING BUGS. 
	update: function()
	{
		this.parent();
	},

	draw: function()
	{
		this.parent();
	},
	
	turnOnOrOff: function()
	{
		if(this.isOn === true)
		{
			this.soundDB['powerOn'].play();
			this.currentAnim = this.anims['idle'];
			this.isOn = false;
		}
	}
	
	reset: function() 
	{
			this.soundDB['powerOff'].play();
			this.currentAnim = this.anims['lolgate'];
			this.isOn = true;			
	}
});
});