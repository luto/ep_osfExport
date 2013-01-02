var eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_exportColumn = function(hook, context)
{
	var osfExports = eejs.require("ep_osfExport/templates/osfExports.html");
	context.content = context.content + osfExports;
}
