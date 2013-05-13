ig.module(
	'game.entities.spring_board'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

// A springboard entity that holds a magnet on one end and utilizes box2D joints.
EntitySpring_board = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 150, 0.5)',
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 170, y: 10},
	
	magnet: null,
	magnetPower: 10000,
	magnetRadius: 200,
	
	revLimit: true,
	refAngle: 0,
	revMinAngle: -1,
	revMaxAngle: 1.5,
	
	resistance: 20,
	
	
	animSheet: new ig.AnimationSheet( 'media/spring_board/spring_board.png', 170, 10),
	

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];
		
		if( !ig.global.wm ) // If not in weltmeister (level editor).
		{
			
			// Building a circle for the Joint
			var shapeDef = new b2.CircleDef();
			shapeDef.radius = 0.1;
			shapeDef.friction = 0;
			shapeDef.density = 0;
			shapeDef.restitution = 0.5;
			
			var circleBd = new b2.BodyDef();
			circleBd.position.Set(this.pos.x / 10, this.pos.y / 10);
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
    		var revolDef = new b2.RevoluteJointDef();
    		revolDef.body1 = this.body;
    		revolDef.body2 = circleBody;
    		
    		revolDef.collideConnected = false;
     		
     		revolDef.enableLimit = this.revLimit;
     		revolDef.referenceAngle = this.refAngle;
     		revolDef.lowerAngle = this.revMinAngle;
    		revolDef.upperAngle = this.revMaxAngle;
    		
    		revolDef.enableMotor = true;
    		revolDef.motorSpeed = 0;
    		revolDef.maxMotorTorque = this.resistance;
     		
		    revolDef.localAnchor1 = new b2.Vec2(-8.5, -0.5);
		    revolDef.localAnchor2 = new b2.Vec2(0, 0);
    		
    		//add the joint to the world
    		ig.world.CreateJoint(revolDef);
			
			// A weld joint to "weld" the manget onto the springboard body. 
			var weldDef = new b2.RevoluteJointDef();
			var settings = {density: 1, fieldRadius: this.magnetRadius, fieldMagnitude: this.magnetPower};
			
			this.magnet = new EntityMagnet( this.pos.x + this.size.x - 50, this.pos.y + 10, settings ); // Creates the magnet
    		weldDef.body1 = this.body;
    		weldDef.body2 = this.magnet.body;
    		
    		weldDef.collideConnected = true;
    		weldDef.lowerAngle = 0;
    		weldDef.upperAngle = 0;
    		weldDef.enableLimit = true;
     
		    weldDef.localAnchor1 = new b2.Vec2(8.5, 0.5);
		    weldDef.localAnchor2 = new b2.Vec2(2.5, -2.5);
		    weldDef.lengt = 0;
   
    		//add the joint to the world
    		ig.world.CreateJoint(weldDef);
    	}
    	

	},	
	
	// This function is called when everything in the level has finished loading. 
	// Sets up magnetism effect arrays. 
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
	
		for (var j = 0; j < gates.length; j++)
		{
			this.magnet.objectsToTest.push(gates[j]);
		};
		
		this.magnet.objectsToTest.push(players);	
		
		this.magnet.loadObjectsToTest();
	},

	update: function() 
	{
		this.parent();
		this.magnet.update();
	},
	

	draw: function()
	{
		this.parent();
		
		if( !ig.global.wm )
		{
			this.magnet.draw();
		}
	}
});
});