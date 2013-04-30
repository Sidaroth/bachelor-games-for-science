ig.module( 'game.levels.level10' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.respawnField','game.entities.spring_board','game.entities.switch','game.entities.menuButton','game.entities.restartButton','game.entities.lolgate','game.entities.magnet','game.entities.electromagnet' )
.defines(function(){
LevelLevel10=/*JSON[*/{"entities":[{"type":"EntityGoal","x":1496,"y":536,"settings":{"goToLevel":"Level9End","levelToUnlock":10}},{"type":"EntityPlayer","x":80,"y":112},{"type":"EntityRespawnField","x":-112,"y":-168,"settings":{"size":{"x":104,"y":1008}}},{"type":"EntityRespawnField","x":1604,"y":-176,"settings":{"size":{"x":112,"y":1008}}},{"type":"EntitySpring_board","x":264,"y":388},{"type":"EntitySwitch","x":664,"y":480,"settings":{"target":{"1":"bjartmar"}}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1500,"y":0},{"type":"EntityLolgate","x":80,"y":60},{"type":"EntityMagnet","x":300,"y":480,"settings":{"fieldMagnitude":70000}},{"type":"EntityElectromagnet","x":1052,"y":464,"settings":{"fieldMagnitude":50000,"name":"bjartmar"}}],"layer":[{"name":"collision","width":25,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":25,"height":13,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,8,8,8,8,8,10,11,12,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,10,11,12,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel10Resources=[new ig.Image('media/tileset/tileset-01.png')];
});