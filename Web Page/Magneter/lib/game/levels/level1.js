ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.respawnField','game.entities.menuButton','game.entities.restartButton','game.entities.magnet','game.entities.lolgate' )
.defines(function(){
LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityGoal","x":576,"y":472,"settings":{"goToLevel":"Level1End","levelToUnlock":2}},{"type":"EntityPlayer","x":56,"y":148},{"type":"EntityRespawnField","x":-228,"y":16,"settings":{"size":{"x":220,"y":624}}},{"type":"EntityRespawnField","x":836,"y":16,"settings":{"size":{"x":220,"y":624}}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1820,"y":0},{"type":"EntityMagnet","x":520,"y":396,"settings":{"fieldRadiusMin":200}},{"type":"EntityLolgate","x":56,"y":96}],"layer":[{"name":"background","width":13,"height":10,"linkWithCollision":false,"visible":0,"tilesetName":"media/backgrounds/background-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[1,2,3,4,5,6,7,8,9,10,1,2,3],[11,12,13,14,15,16,17,18,19,20,11,12,13],[21,22,23,24,25,26,27,28,29,30,21,22,23],[31,32,33,34,35,36,37,38,39,40,31,32,33],[41,42,43,44,45,46,47,48,49,50,41,42,43],[51,52,53,54,55,56,57,58,59,60,51,52,53],[61,62,63,64,65,66,67,68,69,70,61,62,63],[71,72,73,74,75,76,77,78,79,80,71,72,73],[81,82,83,84,85,86,87,88,89,90,81,82,83],[91,92,93,94,95,96,97,98,99,100,91,92,93]]},{"name":"collision","width":13,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1],[28,29,0,0,0,0,0,0,1,0,0,0,1],[1,1,27,28,29,0,0,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":13,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/PlatformsSheetNoBackground.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,12],[7,8,0,0,0,0,0,0,14,0,0,0,28],[29,19,6,7,8,0,0,0,23,0,0,0,28],[29,29,29,29,29,11,11,11,29,11,11,11,39]]}]}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/backgrounds/background-01.png'), new ig.Image('media/tileset/PlatformsSheetNoBackground.png')];
});