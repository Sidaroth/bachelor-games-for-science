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

	
	animSheet: new ig.AnimationSheet( 'media/magnets/magnets.png', 50, 50),
	
	soundDB: 
		{
			'powerOn': new ig.Sound( 'media/sound/popUpSound.*' ),
			'powerOff': new ig.Sound( 'media/sound/popUpSound.*' )
		},
	
	init: function( x, y, settings )
	{
		this.parent(x, y, settings);
		this.addAnim( 'off', 1, [2] );
	},

	// NEED TO FIX TARGETTING BUGS. 
	update: function()
	{
		this.parent();
		
		//if mouse1 down
		if (ig.input.pressed('mouse1'))
		{
			if(ig.input.mouse.x >= this.pos.x && ig.input.mouse.x <= (this.pos.x + this.size.x)
			&& ig.input.mouse.y >= this.pos.y && ig.input.mouse.y <= (this.pos.y + this.size.y)
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