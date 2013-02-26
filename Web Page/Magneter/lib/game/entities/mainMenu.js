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
		//font for displaying title
		font: new ig.Font( 'media/04b03.font.png' ),
		//next screen to load
		nextScreen: null,
		//size of entity
		size: {x:10, y:10},
		//array with buttons
		buttons: null,
		//button selcted in menu
		selectedButton: 0,
		//draw a color for the entity in the level editor
		_wmDrawBox: true,
		_wmDrawColor: 'rgba(255, 0, 255, 0.7)',
		//number of buttons on each row in the menu
		rowSize: 5,
		//timer to make sure 'enter' button is not pushed immediatly when loading level
		timer: new ig.Timer(),
		//title for the main menu, loaded from xml
		title: "",
		//array with text for buttons, loaded from xml
		buttonsText: null,
		//chosen language, default English(EN)
		language: "EN",
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			this.timer.set(0.5);
			//this.addAnim( 'idle', 1, [0] );
		},
		
		update: function() 
		{
			this.parent();
			//load in all the buttons into the buttons array
			if(this.buttons === null)
			{
				this.selectedButton = 0;
				
				this.buttons = ig.game.getEntitiesByType(EntityButton);

				this.buttons.sort(function(a,b) { return parseFloat(a.id) - parseFloat(b.id) } );

				this.loadTextToEntities("lib/game/xml/strings" + this.language + ".xml");
				
				if(this.buttons.length > 0)
				{
					this.buttons[this.selectedButton].highlight();
				}
			}
			
			//check for input if there are any buttons loaded in
			if(this.buttons.length > 0)
			{
				//remove highlight on button selected, will be lit again in the end, in case selected button is changed
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
				
				//check if mouse is clicked and if it clicks on a button, if yes, level is run.
				for (var i = 0; i < this.buttons.length; i++)
				{
					if(this.isMouseOnButton(i))
					{
						if(ig.input.pressed('mouse1'))
						{
							this.buttons[i].goToNextLevel();	
						}
						else
						{
							this.selectedButton = i;
						}
					}
				}
				//highlight selected button
				this.buttons[this.selectedButton].highlight();
			}
		},
		
		draw: function()
		{
			var 	x = ig.system.width / 2,
					y = ig.system.height / 4;
			this.font.draw( this.title, x, y, [ig.Font.ALIGN.CENTER] );
			this.parent();
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
			this.title = this.loadTextFromXML("title", 0, document);

			for (var i = 0; i < this.buttons.length; i++)
			{
				this.buttons[i].buttonText = this.loadTextFromXML("button", i, document);
			}
		},

		loadTextFromXML: function(label, index, document)
		{
			var xmlHTTP = new XMLHttpRequest();
			xmlHTTP.open("GET", document, false);
			xmlHTTP.send();
			var xmlDoc = xmlHTTP.responseXML; 
			var nodes = xmlDoc.querySelectorAll(label);
			return nodes[index].textContent;
		}		
	});
});