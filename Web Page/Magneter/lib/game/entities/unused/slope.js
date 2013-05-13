ig.module(
	'game.entities.slope'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntitySlope = ig.Box2DEntity.extend({
	size: {x: 8, y: 8},
	
	_wmDrawBox: true,
	_wmScalable: true,
	_wmBoxColor: 'rgba(255, 0, 255, 0.7)',

	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // BOX2D handles collisions. 
	
	//animSheet: new ig.AnimationSheet( 'media/crate.png', 8, 8 ),
	
	init: function( x, y, settings ) {
		//this.addAnim( 'idle', 1, [0] );
		this.parent( x, y, settings );


		var triangleDef = new b2.polygonDef();

		triangleDef.vertexCount = 3;

		triangleDef.vertices[0].set(-1.0, 0.0);
		triangleDef.vertices[1].set(1.0, 0.0);
		triangleDef.vertices[2].set(0.0, 1.0);
	},

	update: function()
	{
		this.parent();
	},

	draw: function()
	{
		this.parent();
	}
});


});