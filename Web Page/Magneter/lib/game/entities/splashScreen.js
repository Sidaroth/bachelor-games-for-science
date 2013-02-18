ig.module(
	'game.entities.splashScreen'
)
.requires(
	'impact.entity'
)
.defines(function()
{
	EntitySplashScreen = ig.Entity.extend(
	{
		size: {x:800, y:640},
		// _wmDrawBox: true,
		// _wmDrawColor: 'rgba(255, 0, 255, 0.7)',
		// _wmScalable: true,
		
		animSheet: new ig.AnimationSheet( 'media/menu/splashScreen.png', 800, 640 ),
		
		init: function( x, y, settings ) 
		{
			this.parent( x, y, settings );
			
			this.addAnim( 'idle', 1, [0] );
		},
		
		update: function() 
		{
			if( ig.input.pressed('enter') ) 
			{
				ig.game.loadNextLevel( 'SplashScreen', false );
			}
		}
	});
});