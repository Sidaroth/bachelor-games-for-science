ig.module(
	'game.entities.muteButton'
)
.requires(
	'impact.entity'
)
.defines(function()
{

EntityMuteButton = ig.Entity.extend(
	{
	
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 255, 0, 0.7)',

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,
	
	gravityFactor: 0,
	zIndex: 1,
	
	size: {x: 128, y: 128},

	volumeStatus: 'on',

	animSheet: new ig.AnimationSheet( 'media/menu/musicState.png', 128, 128 ),

	init: function(x, y, settings)
	{
		this.parent(x, y, settings);
		
		this.addAnim('off', .1, [0]);
		this.addAnim('on', .1, [1]);
		
		this.currentAnim = this.anims['on'];

		//REMOVE THIS BEFORE RELEASE!!!
		this.changeVolumeStatus();
	},

	changeVolumeStatus: function()
	{
		if(this.volumeStatus == 'on')
		{
			this.volumeStatus = 'off';
			this.currentAnim = this.anims['off'];

			ig.soundManager.volume = 0;
			ig.music.volume = 0;
		}
		else
		{
			this.volumeStatus = 'on';
			this.currentAnim = this.anims['on'];

			ig.soundManager.volume = ig.game.defaultSoundLevel;
			ig.music.volume = ig.game.defaultSoundLevel;
		}
	},
	
	draw: function() 
	{
		this.parent();
		//this.font.draw( this.buttonText, this.pos.x + (this.size.x / 2), this.pos.y + (this.size.y / 2), [ig.Font.ALIGN.CENTER] );
	}
});

});