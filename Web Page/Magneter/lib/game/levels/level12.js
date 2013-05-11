ig.module( 'game.levels.level12' )
.requires( 'impact.image','game.entities.rail','game.entities.goal','game.entities.respawnField','game.entities.player','game.entities.electromagnet','game.entities.lolgate','game.entities.menuButton','game.entities.restartButton' )
.defines(function(){
LevelLevel12=/*JSON[*/{"entities":[{"type":"EntityRail","x":1348,"y":680,"settings":{"partNr":7,"railId":3}},{"type":"EntityRail","x":1048,"y":616,"settings":{"partNr":10,"railId":2,"icon":"leftDown"}},{"type":"EntityRail","x":264,"y":212,"settings":{"partNr":7}},{"type":"EntityRail","x":328,"y":212,"settings":{"partNr":6,"icon":"leftUp"}},{"type":"EntityRail","x":328,"y":148,"settings":{"partNr":5,"icon":"downRight"}},{"type":"EntityRail","x":200,"y":212,"settings":{"partNr":8}},{"type":"EntityRail","x":392,"y":148,"settings":{"partNr":4,"icon":"leftUp"}},{"type":"EntityRail","x":584,"y":84,"settings":{"leader":"true","totJoints":8}},{"type":"EntityRail","x":392,"y":84,"settings":{"partNr":3,"icon":"downRight"}},{"type":"EntityRail","x":456,"y":84,"settings":{"partNr":2}},{"type":"EntityRail","x":520,"y":84,"settings":{"partNr":1}},{"type":"EntityRail","x":984,"y":176,"settings":{"partNr":6,"railId":1}},{"type":"EntityRail","x":792,"y":-16,"settings":{"leader":"true","railId":1,"totJoints":6}},{"type":"EntityRail","x":856,"y":-16,"settings":{"partNr":1,"railId":1}},{"type":"EntityRail","x":920,"y":-16,"settings":{"partNr":2,"railId":1,"icon":"leftDown"}},{"type":"EntityRail","x":920,"y":48,"settings":{"partNr":3,"railId":1,"icon":"vertical"}},{"type":"EntityRail","x":920,"y":112,"settings":{"partNr":4,"railId":1,"icon":"vertical"}},{"type":"EntityRail","x":920,"y":176,"settings":{"partNr":5,"railId":1,"icon":"upRight"}},{"type":"EntityRail","x":856,"y":488,"settings":{"partNr":5,"railId":2,"icon":"vertical"}},{"type":"EntityRail","x":984,"y":296,"settings":{"leader":"true","totJoints":11,"railId":2}},{"type":"EntityRail","x":920,"y":296,"settings":{"partNr":1,"railId":2}},{"type":"EntityRail","x":856,"y":296,"settings":{"partNr":2,"railId":2,"icon":"downRight"}},{"type":"EntityRail","x":856,"y":360,"settings":{"partNr":3,"railId":2,"icon":"vertical"}},{"type":"EntityRail","x":856,"y":424,"settings":{"partNr":4,"railId":2,"icon":"vertical"}},{"type":"EntityRail","x":856,"y":616,"settings":{"partNr":7,"railId":2,"icon":"upRight"}},{"type":"EntityRail","x":856,"y":552,"settings":{"partNr":6,"railId":2,"icon":"vertical"}},{"type":"EntityRail","x":920,"y":616,"settings":{"partNr":8,"railId":2}},{"type":"EntityRail","x":984,"y":616,"settings":{"partNr":9,"railId":2}},{"type":"EntityRail","x":1048,"y":680,"settings":{"partNr":11,"railId":2,"icon":"vertical"}},{"type":"EntityRail","x":1284,"y":680,"settings":{"partNr":8,"railId":3}},{"type":"EntityRail","x":1412,"y":680,"settings":{"partNr":6,"railId":3}},{"type":"EntityRail","x":1476,"y":680,"settings":{"partNr":5,"railId":3,"icon":"leftUp"}},{"type":"EntityRail","x":1476,"y":488,"settings":{"partNr":2,"railId":3,"icon":"vertical"}},{"type":"EntityRail","x":1476,"y":616,"settings":{"partNr":4,"railId":3,"icon":"vertical"}},{"type":"EntityRail","x":1476,"y":552,"settings":{"partNr":3,"railId":3,"icon":"vertical"}},{"type":"EntityRail","x":1476,"y":424,"settings":{"partNr":1,"railId":3,"icon":"vertical"}},{"type":"EntityRail","x":1476,"y":360,"settings":{"leader":"true","totJoints":8,"railId":3,"icon":"vertical"}},{"type":"EntityRail","x":1664,"y":132,"settings":{"partNr":6,"railId":4}},{"type":"EntityRail","x":1536,"y":132,"settings":{"partNr":8,"railId":4}},{"type":"EntityRail","x":1600,"y":132,"settings":{"partNr":7,"railId":4}},{"type":"EntityRail","x":1728,"y":132,"settings":{"partNr":5,"railId":4}},{"type":"EntityRail","x":1984,"y":132,"settings":{"partNr":1,"railId":4}},{"type":"EntityRail","x":1792,"y":132,"settings":{"partNr":4,"railId":4}},{"type":"EntityRail","x":1856,"y":132,"settings":{"partNr":3,"railId":4}},{"type":"EntityRail","x":1920,"y":132,"settings":{"partNr":2,"railId":4}},{"type":"EntityRail","x":2048,"y":132,"settings":{"leader":"true","totJoints":8,"railId":4}},{"type":"EntityGoal","x":2200,"y":280,"settings":{"goToLevel":"Level12End","levelToUnlock":13}},{"type":"EntityRespawnField","x":2304,"y":-176,"settings":{"size":{"x":112,"y":1008}}},{"type":"EntityRespawnField","x":-108,"y":-148,"settings":{"size":{"x":104,"y":1008}}},{"type":"EntityPlayer","x":76,"y":112},{"type":"EntityRespawnField","x":240,"y":824,"settings":{"size":{"x":1708,"y":52}}},{"type":"EntityElectromagnet","x":1172,"y":700},{"type":"EntityElectromagnet","x":1568,"y":264},{"type":"EntityElectromagnet","x":1080,"y":244},{"type":"EntityLolgate","x":76,"y":60},{"type":"EntityElectromagnet","x":708,"y":76},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0}],"layer":[{"name":"background","width":36,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"media/backgrounds/background-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96],[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6],[11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16],[21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26],[31,32,33,34,35,36,37,38,39,40,31,32,33,34,35,36,37,38,39,40,31,32,33,34,35,36,37,38,39,40,31,32,33,34,35,36],[41,42,43,44,45,46,47,48,49,50,41,42,43,44,45,46,47,48,49,50,41,42,43,44,45,46,47,48,49,50,41,42,43,44,45,46],[51,52,53,54,55,56,57,58,59,60,51,52,53,54,55,56,57,58,59,60,51,52,53,54,55,56,57,58,59,60,51,52,53,54,55,56],[61,62,63,64,65,66,67,68,69,70,61,62,63,64,65,66,67,68,69,70,61,62,63,64,65,66,67,68,69,70,61,62,63,64,65,66],[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96]]},{"name":"collision","width":36,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,27,28,29,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]]},{"name":"foreground","width":36,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"media/tileset/PlatformsSheetWhiteBackground.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[11,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,6,7,8,0,0],[37,37,37,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,37,37,38,11,11],[37,37,37,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,37,37,37,37,37],[37,37,37,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,37,37,37,37,37],[37,37,37,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,37,37,37,37,37],[37,37,37,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,37,37,37,37,37],[37,37,37,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,37,37,37,37,37],[37,37,37,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,37,37,37,37,37]]}]}/*]JSON*/;
LevelLevel12Resources=[new ig.Image('media/backgrounds/background-01.png'), new ig.Image('media/tileset/PlatformsSheetWhiteBackground.png')];
});