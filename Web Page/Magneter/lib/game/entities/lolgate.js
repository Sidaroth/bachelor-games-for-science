ig.module(
	'game.entities.lolgate'
)
.requires(
	
	'game.entities.electromagnet'
)
.defines(function(){

// The start entity. It is an electromagnet that hold the ball in place until it is turned off. 
// It has a special sprite. 
EntityLolgate = EntityElectromagnet.extend({
	// weltmeister 
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(55, 200, 255, 0.7)',
	
	resetable: true,
	
	fieldRadius: 75,
	fieldMagnitude: 100000,
	
	interactive: false,
	
	init: function( x, y, settings )
	{
		this.parent(x, y, settings);
		
		this.addAnim( 'lolgate', 1, [3] );
	},
	
	ready: function()
	{
		this.currentAnim = this.anims['lolgate'];		
	},

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
			this.soundDB['powerOff'].play();
			this.currentAnim = this.anims['off'];
			this.isOn = false;
		}
	},
	
	reset: function() 
	{
		this.currentAnim = this.anims['lolgate'];
		this.isOn = true;			
	}
});
});