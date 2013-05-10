ig.module(
	'game.entities.mainMenu'
)
.requires(
	'impact.entity',
	'game.entities.button'
)
.defines(function()
{
	// The main menu controller entity. This entity handles all the interaction and build up of the main menu. 
	EntityMainMenu = ig.Entity.extend(
	{
		// Sounds used for sound effectss
		soundDB: 
		{
			'buttonClick': new ig.Sound( ' media/sound/buttonClick.*' ),
			'errorSound': new ig.Sound( 'media/sound/errorSound.*' )
		},

		muteButton: null,

		font: new ig.Font( 'media/calibri-32pt-white.png' ),
		nextScreen: null,
		size: {x:800, y:640},
		animSheet: new ig.AnimationSheet( 'media/menu/mainMenuBackground.png', 832, 640 ),
		buttons: null,
		//button selcted in menu
		selectedButton: 0,
		_wmDrawBox: true,
		_wmDrawColor: 'rgba(255, 0, 255, 0.7)',
		//number of buttons on each row in the menu
		rowSize: 5,
		//timer to make sure 'enter' button is not pushed immediatly when loading level
		timer: new ig.Timer(),
		title: "",
		buttonsText: null,
		gravityFactor: 0,
		//chosen language, if this is not equal to ig.game.language, it will reload the strings
		language: "NO",
		lock: new ig.Image('media/menu/lock.png'),

		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			this.timer.set(0.5);
			this.addAnim( 'idle', 1, [0] );

			this.soundDB['buttonClick'].volume = ig.game.defaultSoundLevel;
			this.soundDB['errorSound'].volume = ig.game.defaultSoundLevel;
		},
		
		ready: function()
		{
			//load in all the buttons into the buttons array
			this.selectedButton = 0;
			
			this.buttons = ig.game.getEntitiesByType(EntityButton);

			//console.log(this.buttons);

			this.buttons.sort(function(a,b) { return parseFloat(a.id) - parseFloat(b.id) } );

			this.loadTextToEntities("lib/game/xml/strings" + ig.game.language + ".xml");

			if(this.buttons.length > 0)
			{
				this.buttons[this.selectedButton].highlight();
			}

			this.muteButton = ig.game.getEntitiesByType(EntityMuteButton)[0];
		},

		update: function() 
		{			
			// Highlighting of buttons was changed by Christian H because buttons were highlighted on and off every frame
			// which caused buttons to spam play the sound effects. This is why they are now dehighlighted and highlighted when
			// an input is taken. 

			//check for input if there are any buttons loaded in
			if(this.buttons.length > 0)
			{
				if(this.language != ig.game.language)
				{
					this.language = ig.game.language;
					this.loadTextToEntities("lib/game/xml/strings" + ig.game.language + ".xml");
				}
				
				if( ig.input.pressed('left') ) 
				{
					this.buttons[this.selectedButton].highlight();
					if(this.selectedButton > 0)
					{
						this.selectedButton -= 1;
					}
					else
					{
						this.selectedButton = this.buttons.length - 1;
					}
					this.buttons[this.selectedButton].highlight();
				}
				else if( ig.input.pressed('right') ) 
				{
					this.buttons[this.selectedButton].highlight();
					if(this.selectedButton < this.buttons.length - 1)
					{
						this.selectedButton += 1;
					}
					else
					{
						this.selectedButton = 0;
					}
					this.buttons[this.selectedButton].highlight();
				}
				else if( ig.input.pressed('up') ) 
				{
					this.buttons[this.selectedButton].highlight();
					if(this.selectedButton > this.rowSize - 1)
					{
						this.selectedButton -= this.rowSize;
					}
					else
					{
						this.selectedButton = this.buttons.length - this.rowSize + this.selectedButton;
					}
					this.buttons[this.selectedButton].highlight();
				}
				else if( ig.input.pressed('down') ) 
				{
					this.buttons[this.selectedButton].highlight();
					if(this.selectedButton < this.buttons.length - this.rowSize)
					{
						this.selectedButton += this.rowSize;
					}
					else
					{
						this.selectedButton %= this.rowSize;
					}
					this.buttons[this.selectedButton].highlight();
				}
				else if( ig.input.pressed('enter') && this.timer.delta() > 0 ) 
				{
					if(ig.game.unlockedLevels[this.selectedButton])
					{
						this.soundDB['buttonClick'].play();
						this.buttons[this.selectedButton].goToNextLevel();
					}
					else
					{
						this.soundDB['errorSound'].play();
					}
				}
				
				//check if mouse is clicked and if it clicks on a button, if yes, level is run.
				for (var i = 0; i < this.buttons.length; i++)
				{
					if(this.isMouseOnButton(i))
					{
						if(ig.input.pressed('mouse1'))
						{
							if(ig.game.unlockedLevels[i])
							{	
								this.soundDB['buttonClick'].play();
								this.buttons[i].goToNextLevel();	
							}
							else
							{
								this.soundDB['errorSound'].play();
								console.log("Set the variable goToLevel to the level you want it to go to");
							}
						}
						else
						{
							// This if has to be here or the Highlight will keep spamming when the mouse is still
							// on the same button. 
							if(this.selectedButton != i)
							{
								this.buttons[this.selectedButton].highlight();
								this.selectedButton = i;
								this.buttons[this.selectedButton].highlight();
							}
						}
					}
				}

				if( ig.input.mouse.x >= this.muteButton.pos.x && ig.input.mouse.x <= (this.muteButton.pos.x + this.muteButton.size.x)
				&&  ig.input.mouse.y >= this.muteButton.pos.y && ig.input.mouse.y <= (this.muteButton.pos.y + this.muteButton.size.y))
				{
					if(ig.input.pressed( 'mouse1' ))
					{
						this.muteButton.changeVolumeStatus();
					}
				}
			}
		},
		
		draw: function()
		{
			this.parent();
			
			var x = ig.system.width / 2;
			var y = ig.system.height / 4;

			this.font.draw( this.title, x, y, [ig.Font.ALIGN.CENTER] );

		},

		isMouseOnButton: function(i)
		{
			if(	ig.input.mouse.x >= this.buttons[i].pos.x && ig.input.mouse.x <= (this.buttons[i].pos.x + this.buttons[i].size.x)
			 && ig.input.mouse.y >= this.buttons[i].pos.y && ig.input.mouse.y <= (this.buttons[i].pos.y + this.buttons[i].size.y))
			{
				return true;
			}
			else
			{
				return false;
			}
		},

		loadTextToEntities: function(document)
		{
			this.title =  ig.game.xml.loadTextFromXML("title", 0, document);

			for (var i = 0; i < this.buttons.length; i++)
			{
				this.buttons[i].buttonText = ig.game.xml.loadTextFromXML("button", i, document);
			}
		}
	});
});