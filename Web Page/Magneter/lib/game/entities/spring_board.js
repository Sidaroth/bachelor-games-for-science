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
	
	animSheet: new ig.AnimationSheet( 'media/spring_board/spring_board.png', 170, 10),
	

	init: function( x, y, settings ) 
	{
		console.log('hei');
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];
		
		if( !ig.global.wm )
		{

			var shapeDef = new b2.CircleDef();
			shapeDef.radius = 0.5;
			shapeDef.friction = 5;
			shapeDef.density = 0;
			shapeDef.restitution = 0.5;
			//current = this;
			
			
			var circleBd = new b2.BodyDef();
			console.log(circleBd);
			//circleBd.AddShape(shapeDef);
			circleBd.position.Set(20, 20)
			var circleBody = ig.world.CreateBody(circleBd)
			console.log(circleBody);
			circleBody.CreateShape(shapeDef);
			circleBody.SetMassFromShapes();

			
			
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.friction = 5;
			shapeDef.density = 0.5;
			shapeDef.restitution = 0.5;
			
			var boxBd = new b2.BodyDef();
			console.log(boxBd);
			//boxBd.AddShape(shapeDef);
			boxBd.position.Set(10, 10)
			/*
			var boxBody = ig.world.CreateBody(boxBd)
			console.log(boxBody);
			boxBody.CreateShape(shapeDef);
			boxBody.SetMassFromShapes();
			*/
			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		    	
    		var jointDef = new b2.RevoluteJointDef();
    		console.log(jointDef);
    		//jointDef.bodyA = boxBody;
    		//jointDef.bodyB = circleBody;

    		jointDef.body1 = this.body;
    		jointDef.body2 = circleBody;
    		
    		jointDef.collideConnected = false;
     
		    jointDef.localAnchor1 = new b2.Vec2(-8.5, -0.5);
		    jointDef.localAnchor2 = new b2.Vec2(0, 0);
    		
    		//add the joint to the world
    		ig.world.CreateJoint(jointDef);
    	
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