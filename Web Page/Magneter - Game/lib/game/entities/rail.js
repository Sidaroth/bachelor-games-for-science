ig.module(
	'game.entities.rail'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

// A rail entity that has a magnet traveling along it. 
EntityRail = ig.Box2DEntity.extend({
	
	// Weltmeister
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 200, 50, 0.5)',
	
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.A,
	collides: ig.Entity.COLLIDES.NEVER, // Collision is already handled by Box2D!
	
	size: {x: 50, y: 50},
	spawn: { x: 0, y: 0},
	zIndex: -1,
	
	settings: null,
	
	resetable: 1,
	
	rails: [],
	
	railId: 0,
	partNr: 0,
	totJoints: 0,
	
	curPart: 0,
	nextRail: null,
	
	magnetsToPush: null,
	magnets: null,
	eMagnets: null,
	gates: null,
	players: null,
	
	xMove: 0,
	yMove: 0,
	xStep: 0,
	yStep: 0,
	stepFraction: 30,
	
	motorTimer: null,
	dirMove: 1,
	
	icon: 'horizontal', //Used to deside how the rail looks
	
	leader: false,
	conSide: 0, // side the next part of the rail is conected to, 0=r, 1=l, 2=top, 3=bot.
	
	// The default values for the magnet traveling along the rail. 
	magnet: null,
	magnetPower: 10000,
	magnetRadius: 200,
	
	animSheet: new ig.AnimationSheet( 'media/rail/rail_sheet.png', 50, 50),
	pushedToMagnets: false,

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);
		
		
		// The different ways the rail can look
		this.addAnim( 'endUp', 1, [1] );
		this.addAnim( 'downRight', 1, [2] );
		this.addAnim( 'endRight', 1, [3] );
		this.addAnim( 'upRight', 1, [5] );
		this.addAnim( 'cross', 1, [6] );
		this.addAnim( 'leftDown', 1, [7] );
		this.addAnim( 'endLeft', 1, [8] );
		this.addAnim( 'horizontal', 1, [9] );
		this.addAnim( 'leftUp', 1, [10] );
		this.addAnim( 'vertical', 1, [11] );
		this.addAnim( 'endDown', 1, [15] );


		this.currentAnim = this.anims['horizontal'];

		if( !ig.global.wm ) // if not in weltmeister, create the shape and body. 
		{
			var shapeDef = new b2.PolygonDef();
			shapeDef.SetAsBox(
			 	this.size.x / 2 * b2.SCALE,
				this.size.y / 2 * b2.SCALE
			);

			shapeDef.friction = 750;
			shapeDef.density = 0;
			shapeDef.restitution = 0.5;
			
			this.body.CreateShape( shapeDef );
			this.body.SetMassFromShapes();
		}
	},	

	update: function() 
	{
		this.parent();

		if(this.leader == 'true') // If this is the lead entity for the rail it controls the magnet. 
		{
			this.railMotor();
		}
		
		//Here is were the icon on the rail-part change ingame, depending on what icon its told to have.	
		if(this.icon == 'downRight')
		{
			this.currentAnim = this.anims['downRight'];
		}
		
		if(this.icon == 'upRight')
		{
			this.currentAnim = this.anims['upRight'];
		}
		
		if(this.icon == 'cross')
		{
			this.currentAnim = this.anims['cross'];
		}
		
		if(this.icon == 'leftDown')
		{
			this.currentAnim = this.anims['leftDown'];
		}
		
		if(this.icon == 'leftUp')
		{
			this.currentAnim = this.anims['leftUp'];
		}
		
		if(this.icon == 'vertical')
		{
			this.currentAnim = this.anims['vertical'];
		}
		
		if(this.icon == 'endUp')
		{
			this.currentAnim = this.anims['endUp'];
		}
		
		if(this.icon == 'endDown')
		{
			this.currentAnim = this.anims['endDown'];
		}
		
		if(this.icon == 'endRight')
		{
			this.currentAnim = this.anims['endRight'];
		}
		
		if(this.icon == 'endLeft')
		{
			this.currentAnim = this.anims['endLeft'];
		}
		
	},

	draw: function()
	{
		this.parent();
	},

	ready: function()
	{
		this.parent();
		
		if(this.leader == 'true') // If the leader entity. Create the magnet, and add other entities into the magnets field check. 
		{
			this.settings = {density: 0, fieldRadius: this.magnetRadius, fieldMagnitude: this.magnetPower, zIndex: 2, interactive: false};
			this.magnet = ig.game.spawnEntity(EntityElectromagnet, this.pos.x, this.pos.y, this.settings);
			
			this.magnetsToPush = ig.game.getEntitiesByType(EntityMagnet);

			for (var i = 0; i < this.magnetsToPush.length; i++) 
			{
				this.magnetsToPush[i].objectsToTest.push(this);
			}

			this.pushedToMagnets = true;
			
			this.magnets = ig.game.getEntitiesByType(EntityMagnet);
			this.eMagnets = ig.game.getEntitiesByType(EntityElectromagnet);
			this.gates = ig.game.getEntitiesByType(EntityGate);
			this.players = ig.game.getEntitiesByType(EntityPlayer)[0];
				
			for (var i = 0; i < this.magnets.length; i++)
			{
				this.magnets[i].objectsToTest.push(this.magnet);
			}
			
			for (var i = 0; i < this.eMagnets.length; i++)
			{
				this.eMagnets[i].objectsToTest.push(this.magnet);
			}
			
			for (var j = 0; j < this.gates.length; j++)
			{
				this.magnet.objectsToTest.push(this.gates[j]);
			}
			
			this.magnet.objectsToTest.push(this.players);	
			
			this.magnet.loadObjectsToTest();


			// Build up the rail link. 
			var tempRails = ig.game.getEntitiesByType(EntityRail);
			for(var i = 0; i < tempRails.length; i++)
			{
				if(tempRails[i].railId == this.railId)
				{
					this.rails.push(tempRails[i]);
				}
			}

			this.rails.sort(function(a,b) { return parseFloat(a.partNr) - parseFloat(b.partNr) } );
			this.nextRail = this.rails[1];
			
			// calculate how and where to move for the next rail piece in line. 
			this.xMove = this.magnet.body.GetPosition().x - this.nextRail.body.GetPosition().x;
			this.yMove = this.magnet.body.GetPosition().y - this.nextRail.body.GetPosition().y;
			this.xStep = this.xMove/this.stepFraction;
			this.yStep = this.yMove/this.stepFraction;
			
			ig.game.sortEntitiesDeferred();
		}
	},
	
	reset: function() 
	{
		if(this.leader == 'true') // If the leader entity. Resett the magnet and start from the start again.
		{
			this.curPart = 0;
			this.nextRail = this.rails[1];
			
			this.magnet.kill();
			this.magnet = ig.game.spawnEntity(EntityElectromagnet, this.pos.x, this.pos.y, this.settings);
			
			for (var i = 0; i < this.magnets.length; i++)
			{
				this.magnets[i].objectsToTest.push(this.magnet);
			}
			
			for (var i = 0; i < this.eMagnets.length; i++)
			{
				this.eMagnets[i].objectsToTest.push(this.magnet);
			}
			
			for (var j = 0; j < this.gates.length; j++)
			{
				this.magnet.objectsToTest.push(this.gates[j]);
			}
			
			this.magnet.objectsToTest.push(this.players);	
			this.magnet.loadObjectsToTest();
			
			this.xMove = this.magnet.body.GetPosition().x - this.nextRail.body.GetPosition().x;
			this.yMove = this.magnet.body.GetPosition().y - this.nextRail.body.GetPosition().y;
			this.xStep = this.xMove/this.stepFraction;
			this.yStep = this.yMove/this.stepFraction;
			this.dirMove = 1;
			this.motorTimer.reset();
			
		};
	},
				
	railMotor: function()
	{
		if(this.motorTimer != null)
		{
			if(this.motorTimer.delta() > 0) // If enough time has passed. 
			{	
				if(this.nextRail != null) // if it has a next piece
				{
					// move the magnet and subtract a step from the total movement necessary 
					this.magnet.body.SetXForm( new b2.Vec2(this.magnet.body.GetPosition().x + (this.xStep * -1), this.magnet.body.GetPosition().y + (this.yStep * -1)), 0);
					this.xMove -= this.xStep;
					this.yMove -= this.yStep;
				
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

						// recalculate the distance and direction for the next rail piece. 
						this.xMove = this.magnet.body.GetPosition().x - this.nextRail.body.GetPosition().x;
						this.yMove = this.magnet.body.GetPosition().y - this.nextRail.body.GetPosition().y;
						this.xStep = this.xMove/this.stepFraction;
						this.yStep = this.yMove/this.stepFraction;
					}
				}

				this.motorTimer.reset();
			}
		}
		else
		{
			this.motorTimer = new ig.Timer(0.5/this.stepFraction);
		};
	}
});
});