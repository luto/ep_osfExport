# ep_osfExport

## Function
Replaces the standard export-options with new options using the [OpenShownotesFormat](https://github.com/shownotes/OpenShownotesFormat).

New Options:
* Chapter-List
* Shownotes-HTML
* OSF-Parser
* Plaintext (standard-option)

## Settings
In order for this plugin to work you have to add the new section `ep_osfExport` to your `settings.json`.
```JSON
"ep_osfExport" : {
                   "osfParser": "http://tools.shownot.es/parser/",
                   "osfApi": "http://cdn.simon.waldherr.eu/projects/osf-parser-suite/api/",
                   "affiliates": {
                                   "amazon":"shownot.es-21",
                                   "thomann":"93439"
                                 }
                 }
```
Sub-Settings:

* `osfParser`, the URL of the OSF-Online-Editor, see [OpenShownotesFormat](https://github.com/shownotes/OpenShownotesFormat)
* `osfApi`, the URL of the OSF-Api, see [OpenShownotesFormat](https://github.com/shownotes/OpenShownotesFormat)
* `affiliates`, affiliate-ids, they will be added as POST-Parameters to every API-call