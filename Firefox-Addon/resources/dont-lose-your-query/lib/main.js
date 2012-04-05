
exports.main = function() {};

var { MatchPattern } = require("match-pattern");
var pattern = new MatchPattern(/.*phpminiadmin.*/);
var pattern2 = new MatchPattern(/.*phpmyadmin.*/);

var pageMod = require("page-mod");
var data = require("self").data;

pageMod.PageMod({
    include: [/.*phpminiadmin.*/, /.*phpmyadmin.*/],
    contentScriptWhen: 'ready',
    contentScriptFile: [data.url('jquery-1.7.1.min.js'),data.url('jquery-ui.js'),data.url('querysaver.js')]

});
