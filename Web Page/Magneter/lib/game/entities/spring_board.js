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
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 170, y: 10},
	
	magnet: null,
	
	animSheet: new ig.AnimationSheet( 'media/spring_board/spring_board.png', 170, 10),
	

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];
		
		if( !ig.global.wm )
		{
			
			// Building a circle for the Joint
			var shapeDef = new b2.CircleDef();
			shapeDef.radius = 0.5;
			shapeDef.friction = 5;
			shapeDef.density = 0;
			shapeDef.restitution = 0.5;
			//current = this;
			
			var circleBd = new b2.BodyDef();
			console.log(circleBd);
			circleBd.position.Set(20, 20)
			var circleBody = ig.world.CreateBody(circleBd)
			console.log(circleBody);
			circleBody.CreateShape(shapeDef);
			circleBody.SetMassFromShapes();

			
			// Building the main bar.
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.friction = 5;
			shapeDef.density = 0.5;
			shapeDef.restitution = 0.5;
			
			var boxBd = new b2.BodyDef();
			boxBd.position.Set(10, 10)
			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		   
		    //Creating the first joint
    		var jointDef = new b2.RevoluteJointDef();
    		jointDef.body1 = this.body;
    		jointDef.body2 = circleBody;
    		
    		jointDef.collideConnected = false;
     
		    jointDef.localAnchor1 = new b2.Vec2(-8.5, -0.5);
		    jointDef.localAnchor2 = new b2.Vec2(0, 0);
    		
    		//add the joint to the world
    		ig.world.CreateJoint(jointDef);
			
			this.magnet = new EntityMagnet( 10, 10, null );
			
			var jointDef2 = new b2.RevoluteJointDef();
    		jointDef2.body1 = this.magnet;
    		jointDef2.body2 = this.body;
    		
    		jointDef2.collideConnected = false;
     
		    jointDef2.localAnchor1 = new b2.Vec2(0, 0);
		    jointDef2.localAnchor2 = new b2.Vec2(0, 0);
    		
    		//add the joint to the world
    		ig.world.CreateJoint(jointDef2);
    	}
    	

	},	

	update: function() 
	{
		this.parent();

	
	},
	

	draw: function()
	{
		this.parent();
		
		//this.board['ball'].image.draw( this.board['ball'].xpos, this.board['ball'].ypos );
		//this.board['box'].image.draw( this.board['box'].xpos, this.board['box'].ypos );
	}
	
	
});
});