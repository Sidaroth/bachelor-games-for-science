ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.player','game.entities.magnet','game.entities.gate','game.entities.goal','game.entities.basket','game.entities.slider','game.entities.popUpMessage' )
.defines(function(){
LevelLevel1=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":28,"y":56},{"type":"EntityMagnet","x":448,"y":156,"settings":{"fieldMagnitude":50000,"fieldRadius":100}},{"type":"EntityMagnet","x":228,"y":8},{"type":"EntityGate","x":448,"y":208},{"type":"EntityGoal","x":704,"y":276},{"type":"EntityBasket","x":428,"y":104,"settings":{"pointsValue":1000}},{"type":"EntitySlider","x":396,"y":460},{"type":"EntityPopUpMessage","x":760,"y":932,"settings":{"imageName":"game>popUpMessageTemp>image","messageName":"game>popUpMessageTemp>info"}}],"layer":[{"name":"collision","width":15,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[27,28,29,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,27,28,29,0,0,0,0,0,0,0,0,5],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"foreground","width":15,"height":10,"linkWithCollision":true,"visible":1,"tilesetName":"media/tileset/tileset-01.png","repeat":false,"preRender":false,"distance":"1","tilesize":64,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[10,11,12,0,0,0,0,0,0,0,0,0,0,0,0],[8,8,8,10,11,12,0,0,0,0,0,0,0,0,2],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]]}]}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/tileset/tileset-01.png')];
});