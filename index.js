var eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_exportColumn = function(hook, context)
{
  context.content = eejs.require("ep_osfExport/templates/osfExports.ejs");
}

exports.eejsBlock_styles = function (hook, context)
{
  context.content = context.content + eejs.require("ep_osfExport/templates/styles.ejs");
}