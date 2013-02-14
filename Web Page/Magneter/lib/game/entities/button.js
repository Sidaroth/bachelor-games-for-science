ig.module(
	'game.entities.button'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityButton = ig.Entity.extend({
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 255, 0, 0.7)',

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	id: 1,

	size: {x: 145, y:28},
	highlighted: false,

	animSheet: new ig.AnimationSheet( 'media/Buttons.png', 145, 28 ),

	init: function(x, y, settings){
		this.parent(x, y, settings);
	},
});

});