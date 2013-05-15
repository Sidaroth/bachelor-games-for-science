ig.module( 'game.levels.level7' )
.requires( 'impact.image','game.entities.rail','game.entities.respawnField','game.entities.player','game.entities.goal','game.entities.lolgate','game.entities.electromagnet','game.entities.menuButton','game.entities.restartButton' )
.defines(function(){
LevelLevel7=/*JSON[*/{"entities":[{"type":"EntityRail","x":252,"y":200,"settings":{"partNr":17,"icon":"endLeft"}},{"type":"EntityRail","x":348,"y":152,"settings":{"partNr":14,"icon":"vertical"}},{"type":"EntityRail","x":348,"y":104,"settings":{"partNr":13,"icon":"downRight"}},{"type":"EntityRail","x":348,"y":200,"settings":{"partNr":15,"icon":"leftUp"}},{"type":"EntityRail","x":684,"y":152,"settings":{"partNr":5,"icon":"vertical"}},{"type":"EntityRail","x":300,"y":200,"settings":{"partNr":16}},{"type":"EntityRail","x":444,"y":104,"settings":{"partNr":11}},{"type":"EntityRail","x":588,"y":104,"settings":{"partNr":8}},{"type":"EntityRail","x":396,"y":104,"settings":{"partNr":12}},{"type":"EntityRail","x":684,"y":104,"settings":{"partNr":6,"icon":"leftDown"}},{"type":"EntityRail","x":492,"y":104,"settings":{"partNr":10}},{"type":"EntityRail","x":636,"y":104,"settings":{"partNr":7}},{"type":"EntityRail","x":540,"y":104,"settings":{"partNr":9}},{"type":"EntityRail","x":828,"y":248,"settings":{"leader":"true","partNr":0,"totJoints":17,"icon":"endRight","magnetRadius":300}},{"type":"EntityRail","x":684,"y":200,"settings":{"partNr":4,"icon":"vertical"}},{"type":"EntityRail","x":684,"y":248,"settings":{"partNr":3,"icon":"upRight"}},{"type":"EntityRail","x":732,"y":248,"settings":{"partNr":2}},{"type":"EntityRail","x":780,"y":248,"settings":{"partNr":1}},{"type":"EntityRespawnField","x":-16,"y":-440,"settings":{"size":{"x":16,"y":1076}}},{"type":"EntityPlayer","x":36,"y":136},{"type":"EntityRespawnField","x":1344,"y":-428,"settings":{"size":{"x":16,"y":1080}}},{"type":"EntityGoal","x":1180,"y":476,"settings":{"goToLevel":"Level7End","levelToUnlock":8}},{"type":"EntityRespawnField","x":-20,"y":-476,"settings":{"size":{"x":1652,"y":44}}},{"type":"EntityRespawnField","x":-16,"y":644,"settings":{"size":{"x":1376,"y":44}}},{"type":"EntityLolgate","x":36,"y":84},{"type":"EntityElectromagnet","x":136,"y":328,"settings":{"isOn":"false","fieldMagnitude":30000,"fieldRadius":250,"interactive":"false","zIndex":14}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1316,"y":0}],"layer":[{"name":"background","width":21,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/backgrounds/background-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1],[11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16,17,18,19,20,11],[21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,21],[31,32,33,34,35,36,37,38,39,40,31,32,33,34,35,36,37,38,39,40,31],[41,42,43,44,45,46,47,48,49,50,41,42,43,44,45,46,47,48,49,50,41],[51,52,53,54,55,56,57,58,59,60,51,52,53,54,55,56,57,58,59,60,51],[61,62,63,64,65,66,67,68,69,70,61,62,63,64,65,66,67,68,69,70,61],[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91]]},{"name":"collision","width":25,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,27,28,29,0,0,0,1,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0]]},{"name":"foreground","width":21,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/PlatformsSheetWhiteBackground.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[37,37,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[39,37,38,11,11,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[39,37,37,37,37,19,0,0,0,0,0,0,0,14,0,0,0,0,0,0,14],[37,37,37,37,37,19,0,0,0,0,0,0,0,28,6,7,8,0,0,0,23],[37,37,37,37,37,19,0,0,0,0,0,0,0,28,37,37,38,11,11,11,19]]}]}/*]JSON*/;
LevelLevel7Resources=[new ig.Image('media/backgrounds/background-01.png'), new ig.Image('media/tileset/PlatformsSheetWhiteBackground.png')];
});