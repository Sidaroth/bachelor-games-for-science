ig.module(
	'game.entities.player'
)
.requires(
	'plugins.box2d.entity'
)
.defines(function(){

EntityPlayer = ig.Box2DEntity.extend({

	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',

	//animSheet: new ig.AnimationSheet( 'media/ball/'),

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);
	},

	handleEvents: function()
	{
		if(ig.input.state('right'))
		{
			this.pos.x += 10;
		}

		if(ig.input.state('left'))
		{
			this.pos.x -= 10;
		}

		if(ig.input.state('up'))
		{
			this.pos.y -= 10;
		}

		if(ig.input.state('down'))
		{
			this.pos.y += 10;
		}
	},

	update: function() 
	{
		this.handleEvents();

		this.parent();
	}, 

	setSpawnPoint: function(x, y, nick)
	{

	},

	check: function (other) 
	{

	},

	die: function() 
	{
	
	},

	draw: function()
	{
		this.parent();
		var context = ig.system.context;

		context.fillStyle = 'rgba(0, 255, 0, 1)'; 
		context.beginPath();
		context.arc( ig.system.getDrawPos( this.pos.x - ig.game.screen.x ),
					ig.system.getDrawPos( this.pos.y - ig.game.screen.y ),
					25 * ig.system.scale,
					0, Math.PI * 2);
		context.fill();

		// border
		context.lineWidth = 5;
		context.strokeStyle = '#00CC00';
		context.stroke();
	}

});

// EntityBox = ig.Entity.extend({
    
//     init: function (x, y, settings) 
//     {

//     },


//     update: function() 
//     {
    	
//     },

//     check: function(other) 
//     {

//     },
// });

});