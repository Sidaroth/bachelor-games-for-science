ig.module(
	'game.entities.slider'
)
.requires(
	'impact.entity'
)
.defines(function()
{

EntitySlider = ig.Entity.extend(
{
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(123, 255, 34, 0.7)',

	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.NEVER,


	gravityFactor: 0,
	size: {x: 128, y: 32},

	magnets: null,

	sliderPercent: 0,
	sliderLength: 0, 

	sliderTarget: null, 
	targetVar: null,

	drag: false,

	sliders: null,

	slider: 
	{
		'bar': { image: new ig.Image( 'media/slider/bar.png' ), xpos: 100, ypos: 100},
		'box': { image: new ig.Image( 'media/slider/box.png' ), xpos: 100, ypos: 100}
	},
	
	init: function( x, y, settings )
	{
		this.parent( x, y, settings );

		this.slider['bar'].xpos = this.pos.x;
		this.slider['bar'].ypos = this.pos.y;

		this.slider['box'].xpos = this.pos.x - 16 + (this.slider['bar'].image.width / 2);
		this.slider['box'].ypos = this.pos.y;


		this.sliderLength = this.slider['bar'].image.width - this.slider['box'].image.width;
	},

	update: function()
	{
		if(this.magnets === null)
		{
			this.magnets = ig.game.getEntitiesByType( EntityMagnet );
			this.sliderTarget = this.magnets[0];

			// in case of several sliders. 
			if(this.sliderTarget.targetted === false)
			{
				this.sliderTarget.updateTargetStatus();
			}

			//console.log(this.sliderTarget);
		}

		if(this.sliders === null)
		{
			this.sliders = ig.game.getEntitiesByType ( EntitySlider );
		}

		// if mouse1 down
		if( ig.input.state( 'mouse1' ))
		{
			// console.log(ig.input.state ( 'mouse1'));
			// on the box
			if( ig.input.mouse.x >= this.slider['box'].xpos && ig.input.mouse.x <= (this.slider['box'].xpos + this.slider['box'].image.width)
			&&  ig.input.mouse.y >= this.slider['box'].ypos && ig.input.mouse.y <= (this.slider['box'].ypos + this.slider['box'].image.height))
			{
				var noOtherDrag = true;
				for(var i = 0; i < this.sliders.length; i++ )
				{
					if(this.sliders[i].drag === true)
					{
						noOtherDrag = false;
					}
				}

				if(noOtherDrag)
				{
					this.drag = true;
				}
			}

			if(this.drag)
			{
				this.slider['box'].xpos = ig.input.mouse.x - (this.slider['box'].image.width / 2);

				if(this.slider['box'].xpos < this.slider['bar'].xpos)
				{
					this.slider['box'].xpos = this.slider['bar'].xpos;
				} 
				else if (this.slider['box'].xpos > (this.slider['bar'].xpos + this.sliderLength)) 
				{
					this.slider['box'].xpos = (this.slider['bar'].xpos + this.sliderLength);
				}
			}
		}

		if( ig.input.released ( 'mouse1' ))
		{
			this.drag = false;
		}

		// If pressed, not held down as state is used to check. 
		if( ig.input.pressed( 'mouse1' ))
		{
			var tempTarget;
			// if targetting a magnet
			for(var i = 0;  i < this.magnets.length; i++)
			{
				tempTarget = this.magnets[i];

				if( ig.input.mouse.x >= tempTarget.pos.x && ig.input.mouse.x <= tempTarget.pos.x + tempTarget.size.x
				&&  ig.input.mouse.y >= tempTarget.pos.y && ig.input.mouse.y <= tempTarget.pos.y + tempTarget.size.y)
				{
					if(tempTarget != this.sliderTarget)
					{
						if(tempTarget.targetted === false)
						{
							this.sliderTarget.updateTargetStatus(); // Remove target highlight.
							this.sliderTarget = tempTarget;
							this.sliderTarget.updateTargetStatus(); // Set new target highlight. 	
						}
					}
				}
			}
		}

		// console.log((this.slider['box'].xpos - this.slider['bar'].xpos));
		// console.log((this.slider['box'].xpos - this.slider['bar'].xpos) / this.sliderLength * 100 + "%");
		var newPercent = (this.slider['box'].xpos - this.slider['bar'].xpos) / this.sliderLength * 100;
		if(this.sliderPercent != newPercent)
		{
			this.sliderPercent = newPercent;
			//this.target.updateForce(this.sliderPercent);
		}
	},
	
	draw: function() 
	{
		this.parent();

		this.slider['bar'].image.draw( this.slider['bar'].xpos, this.slider['bar'].ypos );
		this.slider['box'].image.draw( this.slider['box'].xpos, this.slider['box'].ypos );

		// this.bar.draw(this.pos.x, this.pos.y);
		// this.box.draw(this.pos.x - 16 + (this.bar.width / 2), this.pos.y);
	}

});

});