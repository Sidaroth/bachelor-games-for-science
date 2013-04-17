ig.module(
	'game.entities.popUpMessage'
)
.requires(
	'game.entities.infoScreen'
	)
.defines(function()
{
	EntityPopUpMessage = EntityInfoScreen.extend(
	{

		soundDB: 
		{
			'popUpSound': new ig.Sound( 'media/sound/popUpSound.*' )
		},

		size: {x:400, y:100},
		infoScreen: false,
		closeButton: new ig.Image('media/popUpMessage/popUpMessageCloseButton.png'),
		
		animSheet: new ig.AnimationSheet( 'media/popUpMessage/popUpMessageBackground.png', 400, 100 ),
		
		lastPos: {x: 0, y: 0},

		yOffset: 0,

		zIndex: 7,

		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			this.pos.x = ig.system.width/2- this.size.x/2 + ig.game.screen.x;
			this.pos.y = ig.system.height + ig.game.screen.y;

			if( !ig.global.wm )
			{
				this.soundDB['popUpSound'].volume = ig.game.defaultSoundLevel;
				this.soundDB['popUpSound'].play();
			}
			
		},
		
		draw: function() 
		{
			this.parent();
			//console.log(this.pos.y);
			this.closeButton.draw(ig.system.width/2 + this.size.x/2 - this.closeButton.width, ig.system.height + this.yOffset);
			//console.log();
			this.font.draw( this.message, ig.system.width/2, ig.system.height + this.yOffset + this.size.y/3, [ig.Font.ALIGN.CENTER] );
			if(this.image != null)
			{
				this.image.draw(ig.system.width/2 - this.size.x/2, ig.system.height + this.yOffset);
			}
		},

		update: function() 
		{
			this.parent();
			if(this.pos.y > ig.system.height - this.size.y + ig.game.screen.y)
			{
				this.yOffset -= 4;
			}
			if((this.yOffset * - 1) > this.size.y)
			{
				this.yOffset = this.size.y;
				this.yOffset *= -1;
			}
			
			if(ig.input.pressed('mouse1'))
			{
				if(ig.input.mouse.y >= ig.system.height + this.yOffset && ig.input.mouse.y <= ig.system.height + this.yOffset + this.closeButton.height)
				{
					if(ig.input.mouse.x >= (ig.system.width/2 + this.size.x/2 - this.closeButton.width) && ig.input.mouse.x <= ig.system.width/2 + this.size.x/2)
					{
						this.kill();
					}
				}
			}

			if(ig.game.screen.x != this.lastPos.x)
			{
				this.pos.x = ig.system.width / 2 - this.size.x / 2 + ig.game.screen.x;

				this.lastPos.x = ig.game.screen.x;

			}
			
			this.pos.y = ig.system.height + ig.game.screen.y + this.yOffset;
			this.lastPos.y = ig.game.screen.y;
		}
	});
});