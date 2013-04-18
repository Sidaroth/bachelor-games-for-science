ig.module(
	'game.entities.pendulum'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntityPendulum = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 150, 0.5)',
	//_wmScalable: true,
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 10, y: 220},
	
	magnet: null,
	magnetPower: 10000,
	magnetRadius: 200,
	
	revolJoint: null,
	revMinAngle: -1,
	revMaxAngle: 0.75,
	
	motorTimer: null,
	motorDir: -10,
	
	animSheet: new ig.AnimationSheet( 'media/pendulum/pendulum.png', 10, 220),
	
	revolDef: new b2.RevoluteJointDef(),
	

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];
		
		if( !ig.global.wm )
		{
			
			//this.revolJoint = new b2.RevoluteJoint();
	
			// Building a circle for the Joint
			var shapeDef = new b2.CircleDef();
			shapeDef.radius = 1;
			shapeDef.friction = 0;
			shapeDef.density = 0;
			shapeDef.restitution = 0.5;
			//current = this;
			
			var circleBd = new b2.BodyDef();
			circleBd.position.Set(this.pos.x / 10, this.pos.y / 10);
			//circleBd.position.Set(20, 20);
			var circleBody = ig.world.CreateBody(circleBd);
			circleBody.CreateShape(shapeDef);
			circleBody.SetMassFromShapes();

			
			// Building the main bar.
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);
			shapeDef.friction = 5;
			shapeDef.density = 1;
			shapeDef.restitution = 1;
			
			var boxBd = new b2.BodyDef();
			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		   
		    //Creating the first joint
    		//var revolDef = new b2.RevoluteJointDef();
    		this.revolDef.body1 = this.body;
    		this.revolDef.body2 = circleBody;
    		
    		this.revolDef.collideConnected = true;
    		
    		this.revolDef.enableLimit    = true;
    		this.revolDef.lowerAngle = this.revMinAngle;
    		this.revolDef.upperAngle = this.revMaxAngle;
    		
    		this.revolDef.enableMotor    = true;
    		this.revolDef.maxMotorTorque = 50000.0;
    		//revolDef.motorSpeed     = 10000;
			this.revolDef.motorSpeed     = this.motorDir;
			
     
		    this.revolDef.localAnchor1 = new b2.Vec2(0, -12);
		    this.revolDef.localAnchor2 = new b2.Vec2(0, 0);
    		
    		//add the joint to the world
    		//ig.world.CreateJoint(this.revolDef);
    		this.revolJoint = ig.world.CreateJoint(this.revolDef);
    		console.log('etter denne');
    		console.log(this.revolJoint);
			//console.log(ig.world.CreateJoint(this.revolDef));
			
			
			var weldDef = new b2.RevoluteJointDef();
			
			
			var settings = {density: 1, fieldRadius: this.magnetRadius, fieldMagnitude: this.magnetPower};
			this.magnet = new EntityMagnet( this.pos.x + this.size.x - 50, this.pos.y + 10, settings );
			//this.magnet = new EntityMagnet( 0, 0, settings );
    		weldDef.body1 = this.body;
    		weldDef.body2 = this.magnet.body;
    		
    		weldDef.collideConnected = true;
    		weldDef.lowerAngle = 0;
    		weldDef.upperAngle = 0;
    		weldDef.enableLimit = true;
    		
     
		    weldDef.localAnchor1 = new b2.Vec2(0, 0);
		    weldDef.localAnchor2 = new b2.Vec2(-0.05, -12);
		    weldDef.lengt = 0;
   
    		//add the joint to the world
    		ig.world.CreateJoint(weldDef);
    	
    	}
    	

	},	
	
	ready: function()
	{
		this.parent();

		var magnets = ig.game.getEntitiesByType(EntityMagnet);
		var eMagnets = ig.game.getEntitiesByType(EntityElectromagnet);
		var gates = ig.game.getEntitiesByType(EntityGate);
		var players = ig.game.getEntitiesByType(EntityPlayer)[0];
			
		for (var i = 0; i < magnets.length; i++)
		{
			magnets[i].objectsToTest.push(this.magnet);
		};
		
		for (var i = 0; i < eMagnets.length; i++)
		{
			eMagnets[i].objectsToTest.push(this.magnet);
		};
		
		for (var j = 0; j < gates.length; j++)
		{
			this.magnet.objectsToTest.push(gates[j]);
		};
		
		this.magnet.objectsToTest.push(players);	
		
		this.magnet.loadObjectsToTest();
	},
	
	motorDirection: function()
	{
		/*
		if(ig.input.pressed('space'))
		{
			
			this.revolJoint.SetMotorSpeed((this.revolJoint.GetMotorSpeed() * -1));
			console.log(this.revolJoint.GetMotorSpeed());
		}*/
		/*
		if((this.revolJoint.GetJointAngle() <= this.revMinAngle + 0.3) || (this.revolJoint.GetJointAngle() >= this.revMAXAngle - 0.3)   )
		{
			this.revolJoint.SetMotorSpeed((this.revolJoint.GetMotorSpeed() * -1));
			//this.motorTimer.reset();
	 
		};
		*/
		
		if(this.motorTimer != null)
		{
			if(this.motorTimer.delta() > 0)
			{
				this.revolJoint.SetMotorSpeed((this.revolJoint.GetMotorSpeed() * -1));
				this.motorTimer.reset();
		
			}
		}else{
			this.motorTimer = new ig.Timer(2);
		};
	},

	update: function() 
	{
		this.parent();
		this.motorDirection();
		this.magnet.update();
	
	},
	

	draw: function()
	{
		this.parent();
		if( !ig.global.wm )
		{
			this.magnet.draw();
		}
		//this.board['ball'].image.draw( this.board['ball'].xpos, this.board['ball'].ypos );
		//this.board['box'].image.draw( this.board['box'].xpos, this.board['box'].ypos );
	}
	
	
});
});