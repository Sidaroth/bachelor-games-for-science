ig.module(
	'game.entities.spring_board'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntitySpring_board = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 150, 0.5)',
	//_wmScalable: true,
	
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 170, y: 10},
	
	board: 
	{
		'ball': { image: new ig.Image( 'media/ball/ball.png' ), xpos: 50, ypos: 50},
		'box': { image: new ig.Image( 'media/spring_board/spring_board.png' ), xpos: 170, ypos: 10}
	},

	init: function( x, y, settings ) 
	{
		this.parent( x, y, settings );

		this.board['ball'].xpos = this.pos.x;
		this.board['ball'].ypos = this.pos.y;

		this.board['box'].xpos = this.pos.x - 16 + (this.board['ball'].image.width / 2);
		this.board['box'].ypos = this.pos.y;
		
		if( !ig.global.wm )
		{
			var body1 = this.board['ball'];
    		var body2 = this.board['box'];
    		var joint = new b2.RevoluteJointDef();
    		var position = new b2Vec2(0, 0);
    		joint.Initialize(body1, body2, position);
    		//world.CreateJoint(joint);
    		
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
	

	draw: function()
	{
		this.parent();
		
		this.board['ball'].image.draw( this.board['ball'].xpos, this.board['ball'].ypos );
		this.board['box'].image.draw( this.board['box'].xpos, this.board['box'].ypos );
	}
	
});
});