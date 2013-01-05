var settings = require('ep_etherpad-lite/node/utils/Settings.js');
var eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_exportColumn = function(hook, context)
{
  context.content = eejs.require("ep_osfExport/templates/osfExports.ejs");
}

exports.eejsBlock_importColumn = function(hook, context)
{
  context.content = "";
}

exports.eejsBlock_styles = function (hook, context)
{
  context.content = context.content + eejs.require("ep_osfExport/templates/styles.ejs");
}

// since you can't hook the method that puts togehter the clientVars which
// are sent to the client, I have to hack the variables in this way..
exports.eejsBlock_scripts = function (hook, context)
{
  var settingVars = '<script type="text/javascript">\n';
  settingVars += 'osfExportSettings = ' + JSON.stringify(settings.ep_osfExport);
  settingVars += '</script>\n';
  
  context.content = context.content + settingVars;
}
