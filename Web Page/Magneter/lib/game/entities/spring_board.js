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
	
	board: 
	{
		'ball': { image: new ig.Image( 'media/ball/ball.png' ), xpos: 50, ypos: 50},
		'box': { image: new ig.Image( 'media/spring_board/spring_board.png' ), xpos: 170, ypos: 10}
	},

	init: function( x, y, settings ) 
	{
		console.log('hei');
		this.parent( x, y, settings );

		this.board['box'].xpos = this.pos.x;
		this.board['box'].ypos = this.pos.y;
		
		this.board['ball'].xpos = this.pos.x - 16 + (this.board['box'].image.width / 2);
		this.board['ball'].ypos = this.pos.y;
		
		if( !ig.global.wm )
		{
			//var body1 = this.board['ball'];
    		//var body2 = this.board['box'];
    		//var joint = new b2.RevoluteJointDef();
    		//var position = new b2Vec2(0, 0);
    		//joint.Initialize(body1, body2, position);
    		//ig.world.CreateJoint(joint);

		    /*
			var shapeDefBox = new b2.PolygonDef();
			shapeDefBox.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDefBox.friction = 5;
			shapeDefBox.density = 1;
			shapeDefBox.restitution = 0.5;
			
			//var a = ig.world.CreateShape( shapeDefbox );
			var a = this.body.CreateShape( shapeDefbox );
			
			var shapeDefCircle = new b2.CircleDef();
			shapeDefCircle.radius = (this.size.x / 2) * b2.SCALE;
			shapeDefCircle.friction = 5;
			shapeDefCircle.density = 1;
			shapeDefCircle.restitution = 0.5;
			//current = this;

			//var b = ig.world.CreateShape( shapeDefcircle );
		    var b = this.body.CreateShape( shapeDefcircle );
		    
		    this.body.SetMassFromShapes();
		        //create revolute joint between a and b
    		*//*
    		var circleSd = new b2.CircleDef();
			circleSd.density = 1.0;
			circleSd.radius = 20;
			circleSd.restitution = 1.0;
			circleSd.friction = 0;
			var circleBd = new b2.BodyDef();
			circleBd.AddShape(circleSd);
			circleBd.position.Set(this.board['ball'].xpos, this.board['ball'].ypos);
			var circleBody = ig.world.CreateBody(circleBd);
			
			
			var boxSd = new b2.PolygonDef();
			boxSd.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			boxSd.friction = 5;
			boxSd.density = 1;
			boxSd.restitution = 0.5;
			var boxBd = new b2.BodyDef();
			boxBd.AddShape(boxSd);
			boxBd.position.Set(this.board['box'].xpos, this.board['box'].ypos);
			var boxBody = ig.world.CreateBody(boxBd);
			*/
			
			//var a = createBox(this.board['box'].xpos, this.board['box'].ypos, 8 , 0.5);
    		//var b = createBall(this.board['ball'].xpos, this.board['ball'].ypos, 0.5, {type : b2.Body.b2_staticBody});
    		
			//body and fixture defs - the common parts
			//  b2BodyDef bodyDef;
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
			//this.body.CreateShape( shapeDef );
			//this.body.SetMassFromShapes();
			
			
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
			var boxBody = ig.world.CreateBody(boxBd)
			console.log(boxBody);
			boxBody.CreateShape(shapeDef);
			boxBody.SetMassFromShapes();
			
		    	
    		var jointDef = new b2.RevoluteJointDef();
    		console.log(jointDef);
    		//jointDef.bodyA = boxBody;
    		//jointDef.bodyB = circleBody;

    		jointDef.body1 = boxBody;
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
		/*
		this.board['box'].xpos = this.xpos;
		this.board['box'].ypos = this.ypos;
		this.board['ball'].xpos = this.xpos;
		this.board['ball'].ypos = this.ypos;
		*/
	
	},
	

	draw: function()
	{
		this.parent();
		
		//this.board['ball'].image.draw( this.board['ball'].xpos, this.board['ball'].ypos );
		//this.board['box'].image.draw( this.board['box'].xpos, this.board['box'].ypos );
	}
	
	
});
});