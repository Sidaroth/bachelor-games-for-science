ig.module( 'game.levels.level9' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.pendulum','game.entities.spring_board','game.entities.basket','game.entities.menuButton','game.entities.restartButton','game.entities.magnet' )
.defines(function(){
LevelLevel9=/*JSON[*/{"entities":[{"type":"EntityGoal","x":1744,"y":464,"settings":{"goToLevel":"Level9","levelToUnlock":9}},{"type":"EntityPlayer","x":76,"y":136},{"type":"EntityPendulum","x":1456,"y":184,"settings":{"revMinAngle":-1,"revMaxAngle":1,"magnetPower":30000,"magnetRadius":300}},{"type":"EntitySpring_board","x":460,"y":388,"settings":{"magnetRadius":100,"magnetPower":10000}},{"type":"EntityBasket","x":896,"y":524},{"type":"EntityBasket","x":472,"y":588},{"type":"EntityBasket","x":1412,"y":652},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0},{"type":"EntityMagnet","x":488,"y":472,"settings":{"polarity":-1,"fieldRadius":120}}],"layer":[{"name":"collision","width":30,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0,0,0,0,46,0,0,0,46,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,46,46,46,0,46,46,0,0,0,0,0,0,0,0,0,0,0,1],[1,27,28,29,0,0,0,0,0,0,0,0,46,46,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,27,28,29,0,0,0,0,0,0,0,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,0,0,47,27,28,29,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,0,47,0,0,0,1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,46,1],[1,1,1,1,1,1,1,0,0,0,27,28,29,46,46,0,0,1,1,1,1,1,0,0,27,28,29,48,48,1],[1,1,1,1,1,1,1,46,46,46,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":30,"height":13,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,7,0,0,0,7,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,0,0,0,0,0,0,6,6,6,0,0,7,0,0,0,0,0,0,0,0,0,0,0,8],[8,10,11,12,0,0,0,0,0,0,0,0,0,7,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,8,8,8,10,11,12,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,8,8,8,8,8,8,0,0,0,14,10,11,12,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8],[8,8,8,8,8,8,8,0,0,13,0,0,0,8,8,8,8,10,11,12,0,0,0,0,0,0,0,0,7,8],[8,8,8,8,8,8,8,0,0,0,10,11,12,7,6,0,0,8,8,8,8,8,0,0,10,11,12,6,6,8],[8,8,8,8,8,8,8,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,0,0,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel9Resources=[new ig.Image('media/tileset/tileset-01.png')];
});