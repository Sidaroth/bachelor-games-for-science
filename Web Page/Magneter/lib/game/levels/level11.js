ig.module( 'game.levels.level11' )
.requires( 'impact.image','game.entities.player','game.entities.respawnField','game.entities.switch','game.entities.gate','game.entities.goal','game.entities.spring_board','game.entities.magnet','game.entities.lolgate','game.entities.electromagnet','game.entities.menuButton','game.entities.restartButton' )
.defines(function(){
LevelLevel11=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":76,"y":128},{"type":"EntityRespawnField","x":-12,"y":-16,"settings":{"size":{"x":16,"y":596}}},{"type":"EntitySwitch","x":640,"y":416,"settings":{"target":{"1":"Oddvar"}}},{"type":"EntityGate","x":1032,"y":368},{"type":"EntityGoal","x":1432,"y":540,"settings":{"levelToUnlock":12,"goToLevel":"Level11End"}},{"type":"EntitySpring_board","x":452,"y":380,"settings":{"magnetPower":40000,"magnetRadius":50}},{"type":"EntityRespawnField","x":1600,"y":-40,"settings":{"size":{"x":16,"y":596}}},{"type":"EntityRespawnField","x":0,"y":-88,"settings":{"size":{"x":1616,"y":92}}},{"type":"EntityRespawnField","x":436,"y":692,"settings":{"size":{"x":244,"y":92}}},{"type":"EntityMagnet","x":484,"y":488,"settings":{"fieldRadius":100,"fieldMagnitude":60000,"polarity":-1}},{"type":"EntityLolgate","x":76,"y":76},{"type":"EntityElectromagnet","x":1032,"y":316,"settings":{"fieldRadius":120,"fieldMagnitude":500000,"name":"Oddvar","interactive":"false","playerClickable":"false"}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0}],"layer":[{"name":"background","width":25,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"media/backgrounds/background-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95],[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5],[11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16,17,18,19,20,11,12,13,14,15],[21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25],[31,32,33,34,35,36,37,38,39,40,31,32,33,34,35,36,37,38,39,40,31,32,33,34,35],[41,42,43,44,45,46,47,48,49,50,41,42,43,44,45,46,47,48,49,50,41,42,43,44,45],[51,52,53,54,55,56,57,58,59,60,51,52,53,54,55,56,57,58,59,60,51,52,53,54,55],[61,62,63,64,65,66,67,68,69,70,61,62,63,64,65,66,67,68,69,70,61,62,63,64,65],[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95]]},{"name":"collision","width":25,"height":11,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,0,0,0,1,27,28,29,46,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,0,0,1,1,1,1,27,28,29,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,27,28,29,0,0,0,0,1],[1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":25,"height":11,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/PlatformsSheetWhiteBackground.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[38,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,38,6,7,8,0,0,0,0,0,0,0,0,14,0,14,0,0,0,0,0,0,0],[37,37,37,37,37,37,19,0,0,0,0,0,0,0,0,32,0,32,0,0,0,0,0,0,0],[37,37,37,37,37,37,19,0,0,0,12,6,7,8,0,0,0,0,0,0,0,0,0,0,12],[37,37,37,37,37,37,19,0,0,0,28,37,37,38,6,7,8,0,0,0,0,0,0,0,28],[37,37,37,37,37,37,19,0,0,0,28,37,37,37,37,37,38,6,7,8,0,0,0,0,28],[37,37,37,37,37,37,19,0,0,0,28,37,37,37,37,37,37,37,37,38,11,11,11,11,39]]}]}/*]JSON*/;
LevelLevel11Resources=[new ig.Image('media/backgrounds/background-01.png'), new ig.Image('media/tileset/PlatformsSheetWhiteBackground.png')];
});