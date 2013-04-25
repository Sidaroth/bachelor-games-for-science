ig.module(
	'game.entities.arrow'
)
.requires(
	'impact.entity'
)
.defines(function()
{

EntityArrow = ig.Entity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 255, 0, 0.5)',
	seed: null,
	
	size: {x: 128, y: 128},
	firstAnim: "rightUnselected",

	animSheet: new ig.AnimationSheet( 'media/arrow/arrows.png', 128, 128 ),
	lastPos: {x:-1, y:-1},
	zIndex: 40,

	init: function( x, y, settings ) 
	{
		this.parent(x, y, settings);

		this.addAnim('rightSelected', .1, [0]);
		this.addAnim('rightUnselected', .1, [1]);
		this.addAnim('leftSelected', .1, [2]);
		this.addAnim('leftUnselected', .1, [3]);
		this.addAnim('upSelected', .1, [4]);
		this.addAnim('upUnselected', .1, [5]);
		this.addAnim('downSelected', .1, [6]);
		this.addAnim('downUnselected', .1, [7]);

		this.currentAnim = this.anims[this.firstAnim];
	},

	draw: function()
	{
		this.parent();
	},

	update: function() 
	{
		this.parent();

		// if(	ig.input.mouse.x >= this.pos.x - ig.game.screen.x && ig.input.mouse.x <= (this.pos.x + this.size.x - ig.game.screen.x)
		//  && ig.input.mouse.y >= this.pos.y - ig.game.screen.y && ig.input.mouse.y <= (this.pos.y + this.size.y - ig.game.screen.y))
		// {
		// 	if(this.firstAnim == "rightUnselected")
		// 	{
		// 		this.currentAnim = this.anims["rightSelected"];
		// 	}
		// 	if(this.firstAnim == "leftUnselected")
		// 	{
		// 		this.currentAnim = this.anims["leftSelected"];
		// 	}
		// 	if(this.firstAnim == "upUnselected")
		// 	{
		// 		this.currentAnim = this.anims["upSelected"];
		// 	}
		// 	if(this.firstAnim == "downUnselected")
		// 	{
		// 		this.currentAnim = this.anims["downSelected"];
		// 	}
		// }
		// else
		// {
		// 	if(this.firstAnim == "rightUnselected")
		// 	{
		// 		this.currentAnim = this.anims["rightUnselected"];
		// 	}
		// 	if(this.firstAnim == "leftUnselected")
		// 	{
		// 		this.currentAnim = this.anims["leftUnselected"];
		// 	}
		// 	if(this.firstAnim == "upUnselected")
		// 	{
		// 		this.currentAnim = this.anims["upUnselected"];
		// 	}
		// 	if(this.firstAnim == "downUnselected")
		// 	{
		// 		this.currentAnim = this.anims["downUnselected"];
		// 	}
		// }

		if(this.firstAnim == "rightUnselected")
		{
			this.pos.x = ig.game.screen.x + ig.system.width - this.size.x;
			this.pos.y = ig.game.screen.y + ig.system.height/2 - this.size.y/2;
		}
		if(this.firstAnim == "leftUnselected")
		{
			this.pos.x = ig.game.screen.x;
			this.pos.y = ig.game.screen.y + ig.system.height/2 - this.size.y/2;
		}
		if(this.firstAnim == "upUnselected")
		{
			this.pos.x = ig.game.screen.x + ig.system.width/2 - this.size.x/2;
			this.pos.y = ig.game.screen.y;
		}
		if(this.firstAnim == "downUnselected")
		{
			this.pos.x = ig.game.screen.x + ig.system.width/2 - this.size.x/2;
			this.pos.y = ig.game.screen.y + ig.system.height - this.size.y;
		}
	},
});
});