ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.respawnField','game.entities.menuButton','game.entities.restartButton','game.entities.magnet','game.entities.lolgate' )
.defines(function(){
LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityGoal","x":576,"y":472,"settings":{"goToLevel":"Level1End","levelToUnlock":2}},{"type":"EntityPlayer","x":64,"y":160},{"type":"EntityRespawnField","x":-228,"y":16,"settings":{"size":{"x":220,"y":624}}},{"type":"EntityRespawnField","x":836,"y":16,"settings":{"size":{"x":220,"y":624}}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":2732,"y":0},{"type":"EntityMagnet","x":508,"y":380,"settings":{"fieldRadiusMin":200}},{"type":"EntityLolgate","x":56,"y":96}],"layer":[{"name":"collision","width":13,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1],[28,29,0,0,0,0,0,0,1,0,0,0,1],[1,1,27,28,29,0,0,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":13,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,8],[11,12,0,0,0,0,0,0,8,0,0,0,8],[8,8,10,11,12,0,0,0,8,0,0,0,8],[8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/tileset/tileset-01.png')];
});