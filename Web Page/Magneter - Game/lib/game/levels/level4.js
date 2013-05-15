ig.module( 'game.levels.level4' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.respawnField','game.entities.electromagnet','game.entities.lolgate','game.entities.menuButton','game.entities.restartButton' )
.defines(function(){
LevelLevel4=/*JSON[*/{"entities":[{"type":"EntityGoal","x":792,"y":408,"settings":{"goToLevel":"Level4End","levelToUnlock":5}},{"type":"EntityPlayer","x":76,"y":160},{"type":"EntityRespawnField","x":-60,"y":-92,"settings":{"size":{"x":1076,"y":88}}},{"type":"EntityRespawnField","x":968,"y":-24,"settings":{"size":{"x":16,"y":516}}},{"type":"EntityRespawnField","x":-12,"y":-12,"settings":{"size":{"x":16,"y":516}}},{"type":"EntityElectromagnet","x":544,"y":432,"settings":{"interactive":"false","fieldMagnitude":30000}},{"type":"EntityLolgate","x":76,"y":108},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0}],"layer":[{"name":"background","width":15,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/backgrounds/background-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5],[11,12,13,14,15,16,17,18,19,20,11,12,13,14,15],[21,22,23,24,25,26,27,28,29,30,21,22,23,24,25],[31,32,33,34,35,36,37,38,39,40,31,32,33,34,35],[41,42,43,44,45,46,47,48,49,50,41,42,43,44,45],[51,52,53,54,55,56,57,58,59,60,51,52,53,54,55],[61,62,63,64,65,66,67,68,69,70,61,62,63,64,65],[71,72,73,74,75,76,77,78,79,80,71,72,73,74,75],[81,82,83,84,85,86,87,88,89,90,81,82,83,84,85],[91,92,93,94,95,96,97,98,99,100,91,92,93,94,95]]},{"name":"collision","width":15,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[27,28,29,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,27,28,29,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,27,28,29,5,6,7,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":15,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/PlatformsSheetWhiteBackground.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,12],[6,7,8,0,0,0,0,0,0,0,0,0,0,0,28],[37,37,38,6,7,8,0,0,0,0,0,0,0,0,28],[37,37,37,37,37,38,6,7,8,3,4,5,11,11,39],[37,37,37,37,37,37,37,37,38,39,37,37,37,37,37]]}]}/*]JSON*/;
LevelLevel4Resources=[new ig.Image('media/backgrounds/background-01.png'), new ig.Image('media/tileset/PlatformsSheetWhiteBackground.png')];
});