/*

Copyright (C) 2015 by Marijn Haverbeke <marijnh@gmail.com> and others

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(g){"object"==typeof exports&&"object"==typeof module?g(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],g):g(CodeMirror)})(function(g){function q(d){var a=l[d];return a?a:l[d]=new RegExp("\\s+"+d+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*")}function r(d,a){for(var e=d.pos,f;0<=e&&"<"!==d.string.charAt(e);)e--;
return 0>e?e:(f=d.string.slice(e,d.pos).match(q(a)))?f[2]:""}function n(d,a){for(var e in d)for(var f=a[e]||(a[e]=[]),g=d[e],b=g.length-1;0<=b;b--)f.unshift(g[b])}function s(d,a){for(var e=0;e<d.length;e++){var f=d[e];if(!f[0]||f[1].test(r(a,f[0])))return f[2]}}var t={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,
"css"],["type",/./,"text/plain"],[null,null,"css"]]},l={};g.defineMode("htmlmixed",function(d,a){function e(c,h){var a=h.htmlState.tagName&&h.htmlState.tagName.toLowerCase(),b=a&&m.hasOwnProperty(a)&&m[a],k=f.token(c,h.htmlState),l;if(b&&/\btag\b/.test(k)&&">"===c.current()&&(l=s(b,c))){var b=g.getMode(d,l),n=new RegExp("^</s*"+a+"s*>","i"),p=new RegExp("</s*"+a+"s*>","i");h.token=function(c,a){if(c.match(n,!1))return a.token=e,a.localState=a.localMode=null;var d=a.localMode.token(c,a.localState),
b=c.current(),h=b.search(p);-1<h?c.backUp(b.length-h):b.match(/<\/?$/)&&(c.backUp(b.length),c.match(p,!1)||c.match(b));return d};h.localMode=b;h.localState=g.startState(b,f.indent(h.htmlState,""))}return k}var f=g.getMode(d,{name:"xml",htmlMode:!0,multilineTagIndentFactor:a.multilineTagIndentFactor,multilineTagIndentPastTag:a.multilineTagIndentPastTag}),m={},b=a&&a.tags,k=a&&a.scriptTypes;n(t,m);b&&n(b,m);if(k)for(b=k.length-1;0<=b;b--)m.script.unshift(["type",k[b].matches,k[b].mode]);return{startState:function(){var c=
f.startState();return{token:e,localMode:null,localState:null,htmlState:c}},copyState:function(c){var a;c.localState&&(a=g.copyState(c.localMode,c.localState));return{token:c.token,localMode:c.localMode,localState:a,htmlState:g.copyState(f,c.htmlState)}},token:function(c,a){return a.token(c,a)},indent:function(a,b){return!a.localMode||/^\s*<\//.test(b)?f.indent(a.htmlState,b):a.localMode.indent?a.localMode.indent(a.localState,b):g.Pass},innerMode:function(a){return{state:a.localState||a.htmlState,
mode:a.localMode||f}}}},"xml","javascript","css");g.defineMIME("text/html","htmlmixed")});
