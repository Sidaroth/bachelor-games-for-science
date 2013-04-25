ig.module(
	'game.entities.rail'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntityRail = ig.Box2DEntity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 200, 50, 0.5)',
	//_wmScalable: true,
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 50, y: 50},
	spawn: { x: 0, y: 0},
	zIndex: -1,

	resetable: 1,
	
	rails: [],
	
	railId: 0,
	partNr: 0,
	totJoints: 0,
	
	curPart: 0,
	nextRail: null,
	
	xMove: 0,
	yMove: 0,
	xStep: 0,
	yStep: 0,
	stepFraction: 30,
	
	motorTimer: null,
	dirMove: 1,
	
	
	leader: false,
	conSide: 0, // side the next part of the rail is conected to, 0=r, 1=l, 2=top, 3=bot.
	
	magnet: null,
	magnetPower: 10000,
	magnetRadius: 200,
	
	animSheet: new ig.AnimationSheet( 'media/gate/gate_slab.png', 50, 50),
	pushedToMagnets: false,

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim( 'idle', 1, [0] );

		this.currentAnim = this.anims['idle'];

		//this.body.DestroyShape();


		if( !ig.global.wm )
		{
						console.log(this.zIndex);
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.friction = 5;
			shapeDef.density = 0;
			shapeDef.restitution = 0.5;
			
			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		}
	},	

	update: function() 
	{
		this.parent();
		if(this.leader == 'true'){
			this.railMotor();
			this.magnet.update();
				
		}
	},
	
	check: function(other)
	{
		//other.reset();
		//this.reset();	  
	},

	draw: function()
	{
		this.parent();
		if( !ig.global.wm)
		{
			if(this.leader == 'true'){				
				this.magnet.draw();
			}
		}
	},

	reset: function()
	{
//		console.log(this.body.GetPosition());
//		ig.game.spawnEntity(EntityGate, this.spawn.x, this.spawn.y, null);
		this.kill();
	},

	ready: function()
	{
		this.parent();
		
		if(this.leader == 'true'){
			var settings = {density: 0, fieldRadius: this.magnetRadius, fieldMagnitude: this.magnetPower, zIndex: 2};
			this.magnet = ig.game.spawnEntity(EntityElectromagnet, this.pos.x, this.pos.y, settings);
				
			var magnetsToPush = ig.game.getEntitiesByType(EntityMagnet);

			for (var i = 0; i < magnetsToPush.length; i++) {
				magnetsToPush[i].objectsToTest.push(this);
			}
			this.pushedToMagnets = true;
			
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
			
			//console.log('neste');
			//console.log(this.magnet.body);
			
			var tempRails = ig.game.getEntitiesByType(EntityRail);
			for(var i = 0; i < tempRails.length; i++){
				if(tempRails[i].railId == this.railId)
				{
					this.rails.push(tempRails[i]);
				}
			}
			//this.rails = ig.game.getEntitiesByType(EntityRail);
			this.rails.sort(function(a,b) { return parseFloat(a.partNr) - parseFloat(b.partNr) } );
			this.nextRail = this.rails[1];
			
			this.xMove = this.magnet.body.GetPosition().x - this.nextRail.body.GetPosition().x;
			this.yMove = this.magnet.body.GetPosition().y - this.nextRail.body.GetPosition().y;
			this.xStep = this.xMove/this.stepFraction;
			this.yStep = this.yMove/this.stepFraction;
			//this.xMove -= this.xStep;
			//this.yMove -= this.yStep;
			
			ig.game.sortEntitiesDeferred();
			//console.log(nextRail.partNr);
		//	this.magnet.body.SetXForm( new b2.Vec2((this.magnet.size.x/20) + (nextRail.pos.x / 10), (this.magnet.size.y/20) + (nextRail.pos.y / 10)), 0);
		}
	},
				
	railMotor: function(){
		
		if(this.motorTimer != null)
		{
			if(this.motorTimer.delta() > 0)
			{
				
				
				if(this.nextRail != null)
				{
					
					this.magnet.body.SetXForm( new b2.Vec2(this.magnet.body.GetPosition().x + (this.xStep * -1), this.magnet.body.GetPosition().y + (this.yStep * -1)), 0);
					this.xMove -= this.xStep;
					this.yMove -= this.yStep;
					
					if(this.xMove < 6 && this.xMove > -6)
					{
						console.log("x=" + this.xMove + ", xstep=" + this.xStep);
						console.log("y=" + this.yMove + ", ystep=" + this.yStep);
					}
					if((this.xMove > -0.01 && this.xMove < 0.01) && (this.yMove > -0.01 && this.yMove < 0.01) )
					{
						this.curPart += this.dirMove;
					
						if(this.curPart == this.totJoints)
						{
							this.dirMove *= -1;
						
						}else if(this.curPart == 0){
							this.dirMove *= -1;
						}
						
						this.nextRail = this.rails[this.curPart + this.dirMove];

						this.xMove = this.magnet.body.GetPosition().x - this.nextRail.body.GetPosition().x;
						this.yMove = this.magnet.body.GetPosition().y - this.nextRail.body.GetPosition().y;
						this.xStep = this.xMove/this.stepFraction;
						this.yStep = this.yMove/this.stepFraction;
						//this.xMove -= this.xStep;
						//this.yMove -= this.yStep;						
						
					}
					
					//console.log(this.curPart + ", " + this.magnet.body.GetPosition().x + ", " + this.magnet.body.GetPosition().y);
					//this.magnet.body.SetXForm( new b2.Vec2((this.magnet.size.x/20) + (this.nextRail.pos.x / 10), (this.magnet.size.y/20) + (this.nextRail.pos.y / 10)), 0);

					
				}
				
				this.motorTimer.reset();
			}
		}else{
			this.motorTimer = new ig.Timer(1/this.stepFraction);
		};
	}
		

	
});
});