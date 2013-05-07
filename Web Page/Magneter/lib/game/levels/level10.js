ig.module( 'game.levels.level10' )
.requires( 'impact.image','game.entities.goal','game.entities.player','game.entities.respawnField','game.entities.spring_board','game.entities.switch','game.entities.menuButton','game.entities.restartButton','game.entities.lolgate','game.entities.magnet','game.entities.electromagnet' )
.defines(function(){
LevelLevel10=/*JSON[*/{"entities":[{"type":"EntityGoal","x":1496,"y":536,"settings":{"goToLevel":"Level10End","levelToUnlock":11}},{"type":"EntityPlayer","x":80,"y":108},{"type":"EntityRespawnField","x":-112,"y":-168,"settings":{"size":{"x":104,"y":1008}}},{"type":"EntityRespawnField","x":1604,"y":-176,"settings":{"size":{"x":112,"y":1008}}},{"type":"EntitySpring_board","x":268,"y":392,"settings":{"revMaxAngle":0.3,"revMinAngle":-1.5,"magnetRadius":100}},{"type":"EntitySwitch","x":668,"y":544,"settings":{"target":{"1":"bjartmar"}}},{"type":"EntityMenuButton","x":0,"y":0},{"type":"EntityRestartButton","x":1316,"y":0},{"type":"EntityLolgate","x":80,"y":60},{"type":"EntityMagnet","x":260,"y":464,"settings":{"fieldMagnitude":10000,"fieldRadius":400}},{"type":"EntityElectromagnet","x":1084,"y":528,"settings":{"fieldMagnitude":50000,"name":"bjartmar","playerClickable":"false","interactive":"false","isOn":"false"}}],"layer":[{"name":"collision","width":25,"height":13,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,27,28,29,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,27,28,29,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":25,"height":13,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,0,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,0,0,0,0,10,11,12,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,10,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,8,8,8,8,8,10,11,12,0,0,0,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,10,11,12,0,0,0,0,0,0,0],[8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel10Resources=[new ig.Image('media/tileset/tileset-01.png')];
});