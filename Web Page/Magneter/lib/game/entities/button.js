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

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	goToLevel: null,

	size: {x: 100, y:100},
	highlighted: false,

	animSheet: new ig.AnimationSheet( 'media/menu/buttons.png', 100, 100 ),

	init: function(x, y, settings)
	{
		this.parent(x, y, settings);
		
		this.addAnim('unselected', .1, [0]);
		this.addAnim('selected', .1, [1]);
		
		this.currentAnim = this.anims['unselected'];
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