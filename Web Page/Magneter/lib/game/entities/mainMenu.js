ig.module(
	'game.entities.mainMenu'
)
.requires(
	'impact.entity',
	'game.entities.button'
)
.defines(function()
{
	EntityMainMenu = ig.Entity.extend(
	{
		nextScreen: null,
		size: {x:10, y:10},
		buttons: null,
		selectedButton: 0,
		_wmDrawBox: true,
		_wmDrawColor: 'rgba(255, 0, 255, 0.7)',
		rowSize: 5,
		timer: new ig.Timer(),
		// _wmScalable: true,
		
		//animSheet: new ig.AnimationSheet( 'media/menu/splashScreen.png', 10, 10 ),
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			this.timer.set(0.5);
			//this.addAnim( 'idle', 1, [0] );
		},
		
		update: function() 
		{
			console.log(this.timer.delta());
			//load in all the buttons into the buttons array
			if(this.buttons === null)
			{
				//console.log(this.buttons.length);
				this.selectedButton = 0;
				
				this.buttons = ig.game.getEntitiesByType(EntityButton);
				
				if(this.buttons.length > 0)
				{
					this.buttons[this.selectedButton].highlight();
				}
			}
			
			//check for input
			if(this.buttons.length > 0)
			{
				this.buttons[this.selectedButton].highlight();
				
				if( ig.input.pressed('left') ) 
				{
					if(this.selectedButton > 0)
					{
						this.selectedButton -= 1;
					}
					else
					{
						this.selectedButton = this.buttons.length - 1;
					}
				}
				else if( ig.input.pressed('right') ) 
				{
					if(this.selectedButton < this.buttons.length - 1)
					{
						this.selectedButton += 1;
					}
					else
					{
						this.selectedButton = 0;
					}
				}
				else if( ig.input.pressed('up') ) 
				{
					if(this.selectedButton > this.rowSize - 1)
					{
						this.selectedButton -= this.rowSize;
					}
					else
					{
						this.selectedButton = this.buttons.length - this.rowSize + this.selectedButton;
					}
				}
				else if( ig.input.pressed('down') ) 
				{
					if(this.selectedButton < this.buttons.length - this.rowSize)
					{
						this.selectedButton += this.rowSize;
					}
					else
					{
						this.selectedButton %= this.rowSize;
					}
				}
				else if( ig.input.pressed('enter') && this.timer.delta() > 0 ) 
				{
					this.buttons[this.selectedButton].goToNextLevel();
				}
				
				this.buttons[this.selectedButton].highlight();
			}
		}
	});
});