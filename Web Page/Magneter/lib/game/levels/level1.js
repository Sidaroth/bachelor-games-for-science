ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.player','game.entities.magnet','game.entities.menuButton','game.entities.restartButton','game.entities.popUpMessage' )
.defines(function(){
LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":76,"y":68},{"type":"EntityMagnet","x":260,"y":456,"settings":{"polarity":1}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0},{"type":"EntityPopUpMessage","x":760,"y":932,"settings":{"imageName":"game>popUpMessageTemp>image","messageName":"game>popUpMessageTemp>info"}}],"layer":[{"name":"collision","width":15,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,28,29,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"foreground","width":15,"height":20,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,11,12,0,0,0,0,0,0,0,0,0,0,0,8],[8,8,8,7,7,7,0,0,0,0,0,0,0,0,8],[8,8,8,7,7,7,8,8,8,8,8,8,8,8,8],[8,8,8,7,7,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,8,0,0,8,0,8,8,8,8,0,8,0,0,0],[0,8,0,0,8,0,8,0,0,0,0,8,0,0,0],[0,8,0,0,8,0,8,0,0,0,0,8,0,0,0],[0,8,8,8,8,0,8,8,8,0,0,8,0,0,0],[0,8,0,0,8,0,8,0,0,0,0,8,0,0,0],[0,8,0,0,8,0,8,0,0,0,0,8,0,0,0],[0,8,0,0,8,0,8,8,8,8,0,8,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/tileset/tileset-01.png')];
});