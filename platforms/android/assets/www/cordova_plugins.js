cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.admob.AdmobPlugin/www/AdmobPlugin.js",
        "id": "com.admob.AdmobPlugin.AdmobAd",
        "clobbers": [
            "window.admobAd"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.admob.AdmobPlugin": "1.0.0"
}
// BOTTOM OF METADATA
});