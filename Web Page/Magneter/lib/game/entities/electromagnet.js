ig.module(
	'game.entities.electromagnet'
)
.requires(
	
	'game.entities.magnet'
)
.defines(function(){

EntityElectromagnet = EntityMagnet.extend({
	// weltmeister 
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(55, 50, 255, 0.7)',
	
	isOn: true,
	playerClickable: true,
	
	name: null,
	zIndex: 2,
	
	soundDB: 
		{
			'powerOn': new ig.Sound( 'media/sound/MagnetHum2.*' ),
			'powerOff': new ig.Sound( 'media/sound/MagnetHum2.*' ),
			resize: new ig.Sound( 'media/sound/MagnetPulse2.*' )
		},
	animSheet: new ig.AnimationSheet( 'media/electro_magnets/electro_magnets.png', 50, 50),
	
	init: function( x, y, settings )
	{
		this.parent(x, y, settings);
		this.addAnim( 'off', 1, [2] );		
	},

	update: function()
	{
		this.parent();
		
		//if mouse1 down
		if (ig.input.pressed('mouse1'))
		{
			if(ig.input.mouse.x + ig.game.screen.x >= this.pos.x && ig.input.mouse.x + ig.game.screen.x <= (this.pos.x + this.size.x)
			&& ig.input.mouse.y + ig.game.screen.y >= this.pos.y && ig.input.mouse.y + ig.game.screen.y <= (this.pos.y + this.size.y)
			&& this.playerClickable === true)
			{
				this.turnOnOrOff();
			}
		}
	},

	draw: function()
	{
		this.parent();
	},
	
	ready: function()
	{
		if(this.isOn === true)
		{
			this.currentAnim = this.anims['idle'];
		}
		else
		{
			this.currentAnim = this.anims['off'];
		}
	},

	checkDistance: function(entity)
	{
		if (this.isOn === true)
		{
			this.parent(entity);
		}
	},
	
	switchPressed: function()
	{
		this.turnOnOrOff();
	},
	
	turnOnOrOff: function()
	{
		if(this.isOn === false)
		{
			this.soundDB['powerOn'].play();
			this.currentAnim = this.anims['idle'];
			this.isOn = true;
		}
		
		else
		{
			this.soundDB['powerOff'].play();
			this.currentAnim = this.anims['off'];
			this.isOn = false;	
		}
	}
});
});