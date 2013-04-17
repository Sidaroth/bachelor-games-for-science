ig.module(
	'game.entities.switch'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntitySwitch = ig.Entity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(150, 50, 255, 0.5)',
	//_wmScalable: true,
	
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	isPressed: false,
	
	target: null,
	
	size: {x: 64, y: 64},
	
	soundDB: 
		{
			'switchPress': new ig.Sound( 'media/sound/popUpSound.*' )
		},
	

	animSheet: new ig.AnimationSheet( 'media/switch/switch.png', 64, 64),

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'unpressed', 1, [0] );
		this.addAnim( 'pressed', 1, [1] );

		this.currentAnim = this.anims['unpressed'];
	},	

	update: function() 
	{
		this.parent();
	},
	
	check: function(other)
	{
		this.turnOnOrOff();
		
		if (typeof(this.target) == 'object') 
		{
            for (var t in this.target) 
            {
                var ent = ig.game.getEntityByName( this.target[t] );
                
                if (ent && typeof(ent.switchPressed) == 'function') 
                {
                    ent.switchPressed();
                }
            }
        }
	},

	draw: function()
	{
		this.parent();
	},
	
	turnOnOrOff: function()
	{
		this.soundDB['switchPress'].play();
		
		if(this.isPressed === false)
		{
			this.currentAnim = this.anims['pressed'];
			this.isPressed = true;
		}
		
		else
		{
			this.currentAnim = this.anims['unpressed'];
			this.isPressed = false;	
		}
	}
	
});
});