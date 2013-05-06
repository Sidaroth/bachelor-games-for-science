ig.module( 'game.levels.level6' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.respawnField','game.entities.menuButton','game.entities.restartButton','game.entities.electromagnet','game.entities.lolgate' )
.defines(function(){
LevelLevel6=/*JSON[*/{"entities":[{"type":"EntityGoal","x":1424,"y":468,"settings":{"goToLevel":"Level6End","levelToUnlock":7}},{"type":"EntityPlayer","x":40,"y":188},{"type":"EntityRespawnField","x":-16,"y":-440,"settings":{"size":{"x":16,"y":1076}}},{"type":"EntityRespawnField","x":-24,"y":-476,"settings":{"size":{"x":1652,"y":44}}},{"type":"EntityRespawnField","x":1604,"y":-444,"settings":{"size":{"x":16,"y":1080}}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1316,"y":0},{"type":"EntityElectromagnet","x":512,"y":0,"settings":{"fieldRadius":300,"fieldMagnitude":25000,"interactive":"false"}},{"type":"EntityElectromagnet","x":516,"y":448,"settings":{"fieldRadius":300,"fieldMagnitude":25000,"interactive":"false"}},{"type":"EntityElectromagnet","x":512,"y":320,"settings":{"fieldRadius":300,"fieldMagnitude":25000,"interactive":"false"}},{"type":"EntityElectromagnet","x":356,"y":136,"settings":{"fieldRadius":300,"fieldMagnitude":25000,"interactive":"false"}},{"type":"EntityLolgate","x":32,"y":124}],"layer":[{"name":"collision","width":25,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,27,28,29,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,27,28,29,0,0,1],[1,27,28,29,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":25,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,8,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,8,8,8,8,10,11,12,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,10,11,12,0,0,0,0,0,8],[0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,10,11,12,0,0,8],[8,10,11,12,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel6Resources=[new ig.Image('media/tileset/tileset-01.png')];
});