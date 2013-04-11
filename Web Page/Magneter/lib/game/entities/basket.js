ig.module(
	'game.entities.basket'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntityBasket = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(150, 0, 255, 0.5)',
	//_wmScalable: true,
	
	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 100, y: 50},
	
	pointsValue: 100, //what value the basket gives as a base for the final score

	animSheet: new ig.AnimationSheet( 'media/basket/basket_floor.png', 100, 50),

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];

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
		other.kill();	  
	},

	draw: function()
	{
		this.parent();
	}
	
});
});