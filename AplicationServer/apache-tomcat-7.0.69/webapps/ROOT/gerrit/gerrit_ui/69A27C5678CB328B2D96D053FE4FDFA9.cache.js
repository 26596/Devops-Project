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
(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror"),require("../clike/clike")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../clike/clike"],d):d(CodeMirror)})(function(d){function f(b){for(var a={},c=0;c<b.length;++c)a[b[c]]=!0;return a}function g(b,a,c,d){function f(a,c){for(var e=!1;!a.eol();){if(!d&&!e&&"$"==a.peek()){e=c;(e.interpolationStack||(e.interpolationStack=[])).push(e.tokenize);c.tokenize=m;break}var h=a.next();if(h==
b&&!e&&(!g||a.match(b+b))){c.tokenize=null;break}e=!e&&"\\"==h}return"string"}var g=!1;if(a.eat(b))if(a.eat(b))g=!0;else return"string";c.tokenize=f;return f(a,c)}function m(b,a){b.eat("$");b.eat("{")?a.tokenize=null:a.tokenize=n;return null}function n(b,a){b.eatWhile(/[\w_]/);a.tokenize=(a.interpolationStack||(a.interpolationStack=[])).pop();return"variable"}var h="this super static final const abstract class extends external factory implements get native operator set typedef with enum throw rethrow assert break case continue default in return new deferred async await try catch finally do else for if switch while import library export part of show hide is".split(" "),
k=["true","false","null"],l="void bool num int double dynamic var String".split(" ");d.defineMIME("application/dart",{name:"clike",keywords:f(h),blockKeywords:f("try catch finally do else for if switch while".split(" ")),builtin:f(l),atoms:f(k),hooks:{"@":function(b){b.eatWhile(/[\w\$_]/);return"meta"},"'":function(b,a){return g("'",b,a,!1)},'"':function(b,a){return g('"',b,a,!1)},r:function(b,a){var c=b.peek();return"'"==c||'"'==c?g(b.next(),b,a,!0):!1},"}":function(b,a){return 0<(a.interpolationStack?
a.interpolationStack.length:0)?(a.tokenize=(a.interpolationStack||(a.interpolationStack=[])).pop(),null):!1}}});d.registerHelper("hintWords","application/dart",h.concat(k).concat(l));d.defineMode("dart",function(b){return d.getMode(b,"application/dart")},"clike")});
