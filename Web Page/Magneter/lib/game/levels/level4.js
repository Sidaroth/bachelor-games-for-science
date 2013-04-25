ig.module( 'game.levels.level4' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.menuButton','game.entities.restartButton','game.entities.electromagnet' )
.defines(function(){
LevelLevel4=/*JSON[*/{"entities":[{"type":"EntityGoal","x":788,"y":384,"settings":{"goToLevel":"Level5","levelToUnlock":5}},{"type":"EntityPlayer","x":76,"y":136},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0},{"type":"EntityElectromagnet","x":552,"y":452,"settings":{"interactive":"false"}}],"layer":[{"name":"collision","width":15,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,28,29,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,27,28,29,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,27,28,29,5,6,7,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":15,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,11,12,0,0,0,0,0,0,0,0,0,0,0,8],[8,8,8,10,11,12,0,0,0,0,0,0,0,0,8],[8,8,8,8,8,8,10,11,12,2,3,4,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel4Resources=[new ig.Image('media/tileset/tileset-01.png')];
});