ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.respawnField','game.entities.magnet','game.entities.player','game.entities.goal','game.entities.menuButton','game.entities.restartButton' )
.defines(function(){
LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityRespawnField","x":432,"y":628,"settings":{"size":{"x":160,"y":72}}},{"type":"EntityMagnet","x":492,"y":388},{"type":"EntityPlayer","x":76,"y":88},{"type":"EntityGoal","x":792,"y":472,"settings":{"levelToUnlock":2,"goToLevel":"Level2"}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0}],"layer":[{"name":"collision","width":15,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,48,48,48,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,27,28,29,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,0,1,1,1,1,1,1]]},{"name":"foreground","width":15,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,6,6,6,0,0,0,0,0,0,0,0,8],[8,0,0,7,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,10,11,12,0,0,0,0,0,0,0,0,0,0,8],[8,8,8,8,8,8,8,0,0,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/tileset/tileset-01.png')];
});