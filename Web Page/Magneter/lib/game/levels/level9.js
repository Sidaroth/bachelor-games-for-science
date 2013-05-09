ig.module( 'game.levels.level9' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.respawnField','game.entities.switch','game.entities.gate','game.entities.menuButton','game.entities.restartButton','game.entities.electromagnet','game.entities.lolgate' )
.defines(function(){
LevelLevel9=/*JSON[*/{"entities":[{"type":"EntityGoal","x":1812,"y":532,"settings":{"goToLevel":"Level9End","levelToUnlock":10}},{"type":"EntityPlayer","x":64,"y":112},{"type":"EntityRespawnField","x":-112,"y":-168,"settings":{"size":{"x":104,"y":1008}}},{"type":"EntityRespawnField","x":1924,"y":-164,"settings":{"size":{"x":112,"y":1008}}},{"type":"EntitySwitch","x":512,"y":412,"settings":{"target":{"1":"bjarne"}}},{"type":"EntityGate","x":1096,"y":316},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0},{"type":"EntityElectromagnet","x":725,"y":235},{"type":"EntityElectromagnet","x":300,"y":235,"settings":{"isOn":"false"}},{"type":"EntityElectromagnet","x":440,"y":150},{"type":"EntityElectromagnet","x":600,"y":150},{"type":"EntityElectromagnet","x":1096,"y":264,"settings":{"fieldRadius":150,"fieldMagnitude":100000,"name":"bjarne"}},{"type":"EntityLolgate","x":64,"y":60}],"layer":[{"name":"background","width":30,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"media/backgrounds/background-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100],[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16,17,18,19,20,11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30],[31,32,33,34,35,36,37,38,39,40,31,32,33,34,35,36,37,38,39,40,31,32,33,34,35,36,37,38,39,40],[41,42,43,44,45,46,47,48,49,50,41,42,43,44,45,46,47,48,49,50,41,42,43,44,45,46,47,48,49,50],[51,52,53,54,55,56,57,58,59,60,51,52,53,54,55,56,57,58,59,60,51,52,53,54,55,56,57,58,59,60],[61,62,63,64,65,66,67,68,69,70,61,62,63,64,65,66,67,68,69,70,61,62,63,64,65,66,67,68,69,70],[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80,71,72,73,74,75,76,77,78,79,80],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90,81,82,83,84,85,86,87,88,89,90],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100,91,92,93,94,95,96,97,98,99,100]]},{"name":"collision","width":30,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":30,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"media/tileset/PlatformsSheetWhiteBackground.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,16,13,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,23,0,0,0,0,0,0,0,0,0,0,0],[11,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,32,0,32,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,37,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,37,37,37,37,11,11,11,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,37,37,37,37,37,37,37,37,37,37,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,11,11,11,6,7,8,0,0,0,0,0,0,0,0],[37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,11,11,11,11,11,11,11,11],[37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37],[37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37]]}]}/*]JSON*/;
LevelLevel9Resources=[new ig.Image('media/backgrounds/background-01.png'), new ig.Image('media/tileset/PlatformsSheetWhiteBackground.png')];
});