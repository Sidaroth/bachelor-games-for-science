ig.module( 'game.levels.level13' )
.requires( 'impact.image','game.entities.rail','game.entities.switch','game.entities.gate','game.entities.respawnField','game.entities.player','game.entities.goal','game.entities.menuButton','game.entities.restartButton','game.entities.lolgate','game.entities.electromagnet' )
.defines(function(){
LevelLevel13=/*JSON[*/{"entities":[{"type":"EntityRail","x":708,"y":496,"settings":{"partNr":3}},{"type":"EntityRail","x":708,"y":340,"settings":{"partNr":6}},{"type":"EntityRail","x":812,"y":292,"settings":{"partNr":8}},{"type":"EntityRail","x":708,"y":392,"settings":{"partNr":5}},{"type":"EntityRail","x":708,"y":600,"settings":{"partNr":1}},{"type":"EntityRail","x":864,"y":268,"settings":{"partNr":9}},{"type":"EntityRail","x":760,"y":316,"settings":{"partNr":7}},{"type":"EntityRail","x":708,"y":444,"settings":{"partNr":4}},{"type":"EntityRail","x":708,"y":652,"settings":{"leader":"true","totJoints":9}},{"type":"EntityRail","x":708,"y":548,"settings":{"partNr":2}},{"type":"EntitySwitch","x":1152,"y":416,"settings":{"target":{"1":"Valdemar"}}},{"type":"EntityGate","x":1352,"y":504},{"type":"EntityRespawnField","x":1668,"y":-460,"settings":{"size":{"x":112,"y":1380}}},{"type":"EntityPlayer","x":80,"y":112},{"type":"EntityGoal","x":1496,"y":600,"settings":{"goToLevel":"Level13End","levelToUnlock":14}},{"type":"EntityRespawnField","x":-112,"y":-168,"settings":{"size":{"x":104,"y":1008}}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0},{"type":"EntityLolgate","x":80,"y":60},{"type":"EntityElectromagnet","x":1228,"y":140,"settings":{"interactive":"false"}},{"type":"EntityElectromagnet","x":1420,"y":12,"settings":{"interactive":"false"}},{"type":"EntityElectromagnet","x":1036,"y":204,"settings":{"interactive":"false"}},{"type":"EntityElectromagnet","x":1352,"y":452,"settings":{"name":"Valdemar","interactive":"false","playerClickable":"false","fieldRadius":100,"fieldMagnitude":100000}}],"layer":[{"name":"collision","width":25,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0],[0,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,5,6,7,1,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,27,28,29,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,27,28,29,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1],[0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"foreground","width":26,"height":13,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,0,8,0,0],[0,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,0,0,8,0,0],[0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,0,0,0,0,8,0,0],[0,0,0,8,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,2,3,4,8,0,0],[0,0,0,8,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,8,8,8,8,8,8],[0,0,0,8,0,0,0,0,0,0,0,0,0,0,8,0,8,8,8,8,8,0,8,0,0,8],[0,0,0,8,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,8,0,8,0,0,8],[0,0,0,8,0,0,0,0,0,0,0,0,0,0,8,10,11,12,0,0,0,0,0,0,0,8],[0,0,0,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,10,11,12,0,0,0,0,8],[0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,0,0,8,8,8,8,8,8,8,8,8],[0,0,0,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelLevel13Resources=[new ig.Image('media/tileset/tileset-01.png')];
});