ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({

	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',

	//animSheet: new ig.AnimationSheet( 'media/ball/'),

	init: function( x, y, settings ) 
	{
		this.pos.x = 400;
		this.pos.y = 300;
	},

	update: function() 
	{
		// if(ig.input.pressed('right'))
		// {
		// 	this.pos.x += 5;
		// 	console.log("newpos: " + this.pos.x);
		// }


		//console.log("Velocity (x, y): " + this.vel.x + ", " + this.vel.y);
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

EntityBox = ig.Entity.extend({
    
    init: function (x, y, settings) 
    {

    },


    update: function() 
    {
    	
    },

    check: function(other) 
    {

    },
});

});