ig.module(
	'game.xml.getXmlString'
)
.requires(
	'impact.entity'
)
.defines(function()
{
	getXmlString = ig.Entity.extend(
	{
		loadTextFromXML: function(label, index, document)
		{
			var xmlHTTP = new XMLHttpRequest();
			xmlHTTP.open("GET", document, false);
			xmlHTTP.send();
			var xmlDoc = xmlHTTP.responseXML; 
			var nodes = xmlDoc.querySelectorAll(label);
			return nodes[index].textContent;
		}
	});
});