ig.module( 'game.levels.level3' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.menuButton','game.entities.restartButton' )
.defines(function(){
LevelLevel3=/*JSON[*/{"entities":[{"type":"EntityGoal","x":784,"y":464,"settings":{"goToLevel":"Level4","levelToUnlock":4}},{"type":"EntityPlayer","x":76,"y":136},{"type":"EntityMenuButton","x":40,"y":16},{"type":"EntityRestartButton","x":1820,"y":0}],"layer":[{"name":"collision","width":15,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,27,28,29,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":15,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,10,11,12,0,0,0,0,0,0,0,0,0,0,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel3Resources=[new ig.Image('media/tileset/tileset-01.png')];
});