var ace = null;

exports.documentReady = function(hook, context)
{
  $("#exportOsfChapter").click(function() { export_to_osf('chapter') });
  $("#exportOsfHTML").click(function() { export_to_osf('anycast-full') });
  $("#exportOsfParser").click(function() { post_to_url('http://tools.shownot.es/parser/', {'padcontent':ace.exportText()}) });
}

exports.postAceInit = function(hook, context)
{
  ace = context.ace;
}

// Original code by simonwaldherr, http://shownotes.github.com/EtherpadBookmarklets/
function post_to_url(path,params)
{
  var cpWindow = window.open('about:blank');
  var form = cpWindow.document.createElement('form');
  form.setAttribute('method','post');
  form.setAttribute('action',path);
  for(var key in params)
  {
    if(params.hasOwnProperty(key))
    {
      var hiddenField = document.createElement('input');
      hiddenField.setAttribute('type','hidden');
      hiddenField.setAttribute('name',key);
      hiddenField.setAttribute('value',params[key]);
      form.appendChild(hiddenField);
    }
  }
  cpWindow.document.body.appendChild(form);
  form.submit();
}

function export_to_osf(exportmode)
{
  var padcontent = ace.exportText();
  post_to_url('http://cdn.simon.waldherr.eu/projects/osf-parser-suite/api/',
    {
      'amazon':'shownot.es-21',
      'thomann':'93439',
      'fullmode':1,
      'pad':padcontent,
      'download':1,
      'exportmode':exportmode
    });
}