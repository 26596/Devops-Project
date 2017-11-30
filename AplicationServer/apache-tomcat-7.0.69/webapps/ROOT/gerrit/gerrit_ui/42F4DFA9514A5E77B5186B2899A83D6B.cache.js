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
(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){b.defineMode("lua",function(b,l){function f(a){return new RegExp("^(?:"+a.join("|")+")$","i")}function h(a){for(var d=0;a.eat("=");)++d;a.eat("[");return d}function g(a,d){var c=a.next();if("-"==c&&a.eat("-")){if(a.eat("[")&&a.eat("["))return(d.cur=k(h(a),"comment"))(a,d);a.skipToEnd();return"comment"}return'"'==
c||"'"==c?(d.cur=m(c))(a,d):"["==c&&/[\[=]/.test(a.peek())?(d.cur=k(h(a),"string"))(a,d):/\d/.test(c)?(a.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(c)?(a.eatWhile(/[\w\\\-_.]/),"variable"):null}function k(a,d){return function(c,n){for(var e=null,b;null!=(b=c.next());)if(null==e)"]"==b&&(e=0);else if("="==b)++e;else if("]"==b&&e==a){n.cur=g;break}else e=null;return d}}function m(a){return function(d,c){for(var b=!1,e;null!=(e=d.next())&&(e!=a||b);)b=!b&&"\\"==e;b||(c.cur=g);return"string"}}var p=b.indentUnit,
q=f(l.specials||[]),r=f("_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine.create coroutine.resume coroutine.running coroutine.status coroutine.wrap coroutine.yield debug.debug debug.getfenv debug.gethook debug.getinfo debug.getlocal debug.getmetatable debug.getregistry debug.getupvalue debug.setfenv debug.sethook debug.setlocal debug.setmetatable debug.setupvalue debug.traceback close flush lines read seek setvbuf write io.close io.flush io.input io.lines io.open io.output io.popen io.read io.stderr io.stdin io.stdout io.tmpfile io.type io.write math.abs math.acos math.asin math.atan math.atan2 math.ceil math.cos math.cosh math.deg math.exp math.floor math.fmod math.frexp math.huge math.ldexp math.log math.log10 math.max math.min math.modf math.pi math.pow math.rad math.random math.randomseed math.sin math.sinh math.sqrt math.tan math.tanh os.clock os.date os.difftime os.execute os.exit os.getenv os.remove os.rename os.setlocale os.time os.tmpname package.cpath package.loaded package.loaders package.loadlib package.path package.preload package.seeall string.byte string.char string.dump string.find string.format string.gmatch string.gsub string.len string.lower string.match string.rep string.reverse string.sub string.upper table.concat table.insert table.maxn table.remove table.sort".split(" ")),
s=f("and break elseif false nil not or return true function end if then else do while repeat until for in local".split(" ")),t=f("function if repeat do \\( {".split(" ")),u=f(["end","until","\\)","}"]),v=function(a){return new RegExp("^(?:"+a.join("|")+")","i")}("end until \\) } else elseif".split(" "));return{startState:function(a){return{basecol:a||0,indentDepth:0,cur:g}},token:function(a,d){if(a.eatSpace())return null;var c=d.cur(a,d),b=a.current();"variable"==c&&(s.test(b)?c="keyword":r.test(b)?
c="builtin":q.test(b)&&(c="variable-2"));"comment"!=c&&"string"!=c&&(t.test(b)?++d.indentDepth:u.test(b)&&--d.indentDepth);return c},indent:function(a,b){var c=v.test(b);return a.basecol+p*(a.indentDepth-(c?1:0))},lineComment:"--",blockCommentStart:"--[[",blockCommentEnd:"]]"}});b.defineMIME("text/x-lua","lua")});
