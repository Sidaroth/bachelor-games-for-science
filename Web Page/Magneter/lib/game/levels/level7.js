ig.module( 'game.levels.level7' )
.requires( 'impact.image','game.entities.rail','game.entities.respawnField','game.entities.player','game.entities.goal','game.entities.menuButton','game.entities.restartButton','game.entities.electromagnet','game.entities.lolgate' )
.defines(function(){
LevelLevel7=/*JSON[*/{"entities":[{"type":"EntityRail","x":644,"y":108,"settings":{"partNr":10}},{"type":"EntityRail","x":696,"y":160,"settings":{"partNr":8}},{"type":"EntityRail","x":280,"y":212,"settings":{"partNr":19}},{"type":"EntityRail","x":488,"y":108,"settings":{"partNr":13}},{"type":"EntityRail","x":384,"y":108,"settings":{"partNr":15}},{"type":"EntityRail","x":696,"y":264,"settings":{"partNr":6}},{"type":"EntityRail","x":696,"y":212,"settings":{"partNr":7}},{"type":"EntityRail","x":696,"y":108,"settings":{"partNr":9}},{"type":"EntityRail","x":280,"y":160,"settings":{"partNr":18}},{"type":"EntityRail","x":1008,"y":264,"settings":{"leader":"true","partNr":0,"totJoints":19}},{"type":"EntityRail","x":280,"y":108,"settings":{"partNr":17}},{"type":"EntityRail","x":436,"y":108,"settings":{"partNr":14}},{"type":"EntityRail","x":592,"y":108,"settings":{"partNr":11}},{"type":"EntityRail","x":540,"y":108,"settings":{"partNr":12}},{"type":"EntityRail","x":332,"y":108,"settings":{"partNr":16}},{"type":"EntityRail","x":748,"y":264,"settings":{"partNr":5}},{"type":"EntityRail","x":800,"y":264,"settings":{"partNr":4}},{"type":"EntityRail","x":852,"y":264,"settings":{"partNr":3}},{"type":"EntityRail","x":904,"y":264,"settings":{"partNr":2}},{"type":"EntityRail","x":956,"y":264,"settings":{"partNr":1}},{"type":"EntityRespawnField","x":-16,"y":-440,"settings":{"size":{"x":16,"y":1076}}},{"type":"EntityRespawnField","x":-20,"y":-476,"settings":{"size":{"x":1652,"y":44}}},{"type":"EntityPlayer","x":40,"y":136},{"type":"EntityRespawnField","x":1604,"y":-444,"settings":{"size":{"x":16,"y":1080}}},{"type":"EntityGoal","x":1424,"y":468,"settings":{"goToLevel":"Level7End","levelToUnlock":8}},{"type":"EntityRespawnField","x":-16,"y":644,"settings":{"size":{"x":1652,"y":44}}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0},{"type":"EntityElectromagnet","x":140,"y":332,"settings":{"isOn":"false","fieldMagnitude":30000,"fieldRadius":250,"interactive":"false","zIndex":14}}],"layer":[{"name":"collision","width":25,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,27,28,29,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":25,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,8,8,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,8,8,0,0,0,0,0,0,0,8,10,11,12,0,0,0,0,0,0,0,0],[8,8,8,8,8,8,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel7Resources=[new ig.Image('media/tileset/tileset-01.png')];
});