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

	init: function( x, y, settings ) 
	{

	},

	update: function() 
	{
		if(ig.input.pressed('right'))
		{
			this.pos.x += 5;
			console.log("newpos: " + this.pos.x);
		}
	}, 

	setSpawnPoint: function(x, y, nick)
	{

	},

	check: function (other) 
	{

	},

	die: function() 
	{
	
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