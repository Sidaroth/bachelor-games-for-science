ig.module(
	'game.entities.switch'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntitySwitch = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(150, 50, 255, 0.5)',
	//_wmScalable: true,
	
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	isPressed: false,
	
	target: null,
	
	size: {x: 64, y: 64},
	

	animSheet: new ig.AnimationSheet( 'media/switch/switch.png', 64, 64),

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'unpressed', 1, [0] );
		this.addAnim( 'pressed', 1, [1] );

		this.currentAnim = this.anims['unpressed'];
		//this.body.DestroyShape();


		if( !ig.global.wm )
		{
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.friction = 5;
			shapeDef.density = 1;
			shapeDef.restitution = 0.5;
			
			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		}
	},	

	update: function() 
	{
		this.parent();
	},
	
	check: function(other)
	{
		other.reset();
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
		if(this.isPressed === false)
		{
	//		this.soundDB['powerOn'].play();
			this.currentAnim = this.anims['pressed'];
			this.isPressed = true;
		}
		
		else
		{
	//		this.soundDB['powerOff'].play();
			this.currentAnim = this.anims['unpressed'];
			this.isPressed = false;	
		}
	}
	
});
});