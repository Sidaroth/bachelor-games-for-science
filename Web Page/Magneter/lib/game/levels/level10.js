ig.module( 'game.levels.level10' )
.requires( 'impact.image','game.entities.switch','game.entities.goal','game.entities.respawnField','game.entities.spring_board','game.entities.player','game.entities.lolgate','game.entities.magnet','game.entities.electromagnet','game.entities.menuButton','game.entities.restartButton' )
.defines(function(){
LevelLevel10=/*JSON[*/{"entities":[{"type":"EntitySwitch","x":668,"y":544,"settings":{"target":{"1":"bjartmar"}}},{"type":"EntityGoal","x":1496,"y":536,"settings":{"goToLevel":"Level10End","levelToUnlock":11}},{"type":"EntityRespawnField","x":-112,"y":-168,"settings":{"size":{"x":104,"y":1008}}},{"type":"EntityRespawnField","x":1604,"y":-172,"settings":{"size":{"x":112,"y":1008}}},{"type":"EntitySpring_board","x":268,"y":392,"settings":{"revMaxAngle":0.3,"revMinAngle":-1.5,"magnetRadius":100}},{"type":"EntityPlayer","x":80,"y":108},{"type":"EntityLolgate","x":80,"y":60},{"type":"EntityMagnet","x":260,"y":464,"settings":{"fieldMagnitude":10000,"fieldRadius":400}},{"type":"EntityElectromagnet","x":1084,"y":528,"settings":{"fieldMagnitude":50000,"name":"bjartmar","playerClickable":"false","interactive":"false","isOn":"false"}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0}],"layer":[{"name":"background","width":25,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"media/backgrounds/background-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95],[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5],[11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16,17,18,19,20,11,12,13,14,15],[21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25],[31,32,33,34,35,36,37,38,39,40,31,32,33,34,35,36,37,38,39,40,31,32,33,34,35],[41,42,43,44,45,46,47,48,49,50,41,42,43,44,45,46,47,48,49,50,41,42,43,44,45],[51,52,53,54,55,56,57,58,59,60,51,52,53,54,55,56,57,58,59,60,51,52,53,54,55],[61,62,63,64,65,66,67,68,69,70,61,62,63,64,65,66,67,68,69,70,61,62,63,64,65],[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95]]},{"name":"collision","width":25,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":25,"height":13,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/PlatformsSheetWhiteBackground.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[11,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,19,0,0,0,0,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,19,0,0,0,0,21,10,38,6,7,8,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,38,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,37,37,37,38,11,11,11,11,11,6,7,8,0,0,0,0,0,0,0,0,0,0],[37,37,37,29,10,10,10,30,37,37,37,37,37,37,38,6,7,8,0,0,0,0,0,0,0],[37,37,37,19,0,0,0,28,37,37,37,37,37,37,37,37,37,38,11,11,11,11,11,11,11],[37,37,37,19,0,0,0,28,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37]]}]}/*]JSON*/;
LevelLevel10Resources=[new ig.Image('media/backgrounds/background-01.png'), new ig.Image('media/tileset/PlatformsSheetWhiteBackground.png')];
});