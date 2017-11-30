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
(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],f):f(CodeMirror)})(function(f){f.defineMode("smalltalk",function(f){var k=/[+\-\/\\*~<>=@%|&?!.,:;^]/,r=/true|false|nil|self|super|thisContext/,g=function(a,b){this.next=a;this.parent=b},h=function(a,b,c){this.name=a;this.context=b;this.eos=c},m=function(){this.context=new g(l,null);this.expectVariable=!0;this.userIndentationDelta=
this.indentation=0};m.prototype.userIndent=function(a){this.userIndentationDelta=0<a?a/f.indentUnit-this.indentation:0};var l=function(a,b,c){var d=new h(null,b,!1),e=a.next();'"'===e?d=n(a,new g(n,b)):"'"===e?d=p(a,new g(p,b)):"#"===e?"'"===a.peek()?(a.next(),d=q(a,new g(q,b))):a.eatWhile(/[^\s.{}\[\]()]/)?d.name="string-2":d.name="meta":"$"===e?("<"===a.next()&&(a.eatWhile(/[^\s>]/),a.next()),d.name="string-2"):"|"===e&&c.expectVariable?d.context=new g(s,b):/[\[\]{}()]/.test(e)?(d.name="bracket",
d.eos=/[\[{(]/.test(e),"["===e?c.indentation++:"]"===e&&(c.indentation=Math.max(0,c.indentation-1))):k.test(e)?(a.eatWhile(k),d.name="operator",d.eos=";"!==e):/\d/.test(e)?(a.eatWhile(/[\w\d]/),d.name="number"):/[\w_]/.test(e)?(a.eatWhile(/[\w\d_]/),d.name=c.expectVariable?r.test(a.current())?"keyword":"variable":null):d.eos=c.expectVariable;return d},n=function(a,b){a.eatWhile(/[^"]/);return new h("comment",a.eat('"')?b.parent:b,!0)},p=function(a,b){a.eatWhile(/[^']/);return new h("string",a.eat("'")?
b.parent:b,!1)},q=function(a,b){a.eatWhile(/[^']/);return new h("string-2",a.eat("'")?b.parent:b,!1)},s=function(a,b){var c=new h(null,b,!1);"|"===a.next()?(c.context=b.parent,c.eos=!0):(a.eatWhile(/[^|]/),c.name="variable");return c};return{startState:function(){return new m},token:function(a,b){b.userIndent(a.indentation());if(a.eatSpace())return null;var c=b.context.next(a,b.context,b);b.context=c.context;b.expectVariable=c.eos;return c.name},blankLine:function(a){a.userIndent(0)},indent:function(a,
b){var c=a.context.next===l&&b&&"]"===b.charAt(0)?-1:a.userIndentationDelta;return(a.indentation+c)*f.indentUnit},electricChars:"]"}});f.defineMIME("text/x-stsrc",{name:"smalltalk"})});
