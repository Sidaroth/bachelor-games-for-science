ig.module( 'game.levels.level6' )
.requires( 'impact.image','game.entities.goal','game.entities.respawnField','game.entities.player','game.entities.menuButton','game.entities.restartButton','game.entities.electromagnet' )
.defines(function(){
LevelLevel6=/*JSON[*/{"entities":[{"type":"EntityGoal","x":1424,"y":468,"settings":{"goToLevel":"Level7","levelToUnlock":7}},{"type":"EntityRespawnField","x":-24,"y":-476,"settings":{"size":{"x":1652,"y":44}}},{"type":"EntityRespawnField","x":1604,"y":-444,"settings":{"size":{"x":16,"y":1080}}},{"type":"EntityPlayer","x":76,"y":136},{"type":"EntityRespawnField","x":-16,"y":-440,"settings":{"size":{"x":16,"y":1076}}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0},{"type":"EntityElectromagnet","x":520,"y":8,"settings":{"fieldRadius":300,"fieldMagnitude":25000,"interactive":"false"}},{"type":"EntityElectromagnet","x":520,"y":456,"settings":{"fieldRadius":300,"fieldMagnitude":25000,"interactive":"false"}},{"type":"EntityElectromagnet","x":524,"y":328,"settings":{"fieldRadius":300,"fieldMagnitude":25000,"interactive":"false"}},{"type":"EntityElectromagnet","x":372,"y":124,"settings":{"fieldRadius":300,"fieldMagnitude":25000,"interactive":"false"}}],"layer":[{"name":"collision","width":25,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,27,28,29,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,27,28,29,0,0,1],[1,27,28,29,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":25,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,8,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,8,8,8,8,10,11,12,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,10,11,12,0,0,0,0,0,8],[0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,10,11,12,0,0,8],[8,10,11,12,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel6Resources=[new ig.Image('media/tileset/tileset-01.png')];
});