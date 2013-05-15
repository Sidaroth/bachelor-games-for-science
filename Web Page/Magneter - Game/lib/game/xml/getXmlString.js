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
		// Retrieves a text string from an XML file. 
		// Parameters
		// - label: the path within the xml (i.e game>menu>title) 
		// - index: the index on the path, usually 0.
		// - document: Which XML document to parse.
		loadTextFromXML: function(label, index, document)
		{
			var xmlHTTP = new XMLHttpRequest();
			xmlHTTP.open("GET", document, false);
			xmlHTTP.send();
			var xmlDoc = xmlHTTP.responseXML; 
			var nodes = xmlDoc.querySelectorAll(label);
			//console.log(nodes);
			return nodes[index].textContent;
		}
	});
});