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
		size: {x:400, y:100},
		infoScreen: false,
		closeButton: new ig.Image('media/popUpMessage/popUpMessageCloseButton.png'),
		
		animSheet: new ig.AnimationSheet( 'media/popUpMessage/popUpMessageBackground.png', 400, 100 ),
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			this.pos.x = ig.system.width/2- this.size.x/2;
			this.pos.y = ig.system.height;// - this.size.y;
		},
		
		draw: function() 
		{
			this.parent();
			this.closeButton.draw(this.pos.x + this.size.x - this.closeButton.width, this.pos.y);
			this.font.draw( this.message, this.pos.x + (this.size.x / 2), this.pos.y + (this.size.y / 4), [ig.Font.ALIGN.CENTER] );
			if(this.image != null)
			{
				this.image.draw(this.pos.x, this.pos.y);
			}
		},

		update: function() 
		{
			this.parent();
			if(this.pos.y > ig.system.height - this.size.y)
			{
				this.pos.y -= 4;
			}
			
			if(ig.input.pressed('mouse1'))
			{
				if(ig.input.mouse.y >= this.pos.y && ig.input.mouse.y <= this.pos.y + this.closeButton.height)
				{
					if(ig.input.mouse.x >= (this.pos.x + this.size.x - this.closeButton.width) && ig.input.mouse.x <= this.pos.x + this.size.x)
					{
						this.kill();
					}
				}
			}
		}
	});
});