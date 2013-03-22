ig.module(
	'game.entities.button'
)
.requires(
	'impact.entity'
)
.defines(function()
{

EntityButton = ig.Entity.extend(
	{
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 255, 0, 0.7)',

	font: new ig.Font( 'media/calibri-16pt.png' ),

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	goToLevel: null,
	buttonText: "",

	gravityFactor: 0,
	
	size: {x: 100, y:100},
	highlighted: false,

	animSheet: new ig.AnimationSheet( 'media/menu/buttons.png', 100, 100 ),

	init: function(x, y, settings)
	{
		this.parent(x, y, settings);
		
		this.addAnim('unselected', .1, [0]);
		this.addAnim('selected', .1, [1]);
		
		this.currentAnim = this.anims['unselected'];

		//console.log(this.pos);
	},
	
	highlight: function()
	{
		if(this.highlighted === true)
		{
			this.currentAnim = this.anims['unselected'];
			this.highlighted = false;
		}
		else
		{
			this.currentAnim = this.anims['selected'];
			this.highlighted = true;
		}
	},

	draw: function() 
	{
		this.parent();
		this.font.draw( this.buttonText, this.pos.x + (this.size.x / 2), this.pos.y + (this.size.y / 2), [ig.Font.ALIGN.CENTER] );
	},
	
	goToNextLevel: function()
	{
		if(this.goToLevel !== null)
		{
			ig.game.loadLevel( this.goToLevel, true );
		}
		else
		{
			console.log("Set the variable goToLevel to the level you want it to go to");
		}
	}
});

});