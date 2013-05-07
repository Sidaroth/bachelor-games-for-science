ig.module(
	'game.entities.creditsScreen'
)
.requires(
	'impact.entity'
)
.defines(function()
{
	EntityCreditsScreen = ig.Entity.extend(
	{
		font: new ig.Font( 'media/calibri-16pt.png' ),
		size: {x:800, y:640 },
		gravityFactor: 0,

		zIndex: 2,

		animSheet: new ig.AnimationSheet( 'media/infoScreen/infoScreen.png', 832, 640 ),

		pageTitle: "",
		pageContent: "",

		init: function( x, y, settings )
		{
			this.parent( x, y, settings );
			this.addAnim( 'idle', 1, [0] );

			this.xmlDocument = 'lib/game/xml/strings' + ig.game.language + '.xml';
		},

		draw: function()
		{
			this.parent();;

			var xCentered = this.pos.x + (this.size.x / 2);

			this.font.draw( this.pageTitle, xCentered, 60, [ig.Font.ALIGN.CENTER]);

			// this.pos.y + (this.size.y / 4)
			this.font.draw( this.pageContent, xCentered, 150, [ig.Font.ALIGN.CENTER]);
		},

		ready: function()
		{
			this.pageTitle = ig.game.xml.loadTextFromXML( 'game>creditsPage>title', 0, this.xmlDocument);
			this.pageContent = ig.game.xml.loadTextFromXML( 'game>creditsPage>content', 0, this.xmlDocument);
		},

		update: function()
		{
			this.parent();

			if( ig.input.pressed( 'enter' ) || ig.input.pressed( 'mouse1' ))
			{
				ig.game.loadLevel( "MainMenu", false);
			}
		}
	});
});