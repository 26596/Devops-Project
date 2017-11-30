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
(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){b.defineMode("properties",function(){return{token:function(d,a){var b=d.sol()||a.afterSection,c=d.eol();a.afterSection=!1;b&&(a.nextMultiline?(a.inMultiline=!0,a.nextMultiline=!1):a.position="def");c&&!a.nextMultiline&&(a.inMultiline=!1,a.position="def");if(b)for(;d.eatSpace(););c=d.next();if(!b||"#"!==
c&&"!"!==c&&";"!==c){if(b&&"["===c)return a.afterSection=!0,d.skipTo("]"),d.eat("]"),"header";if("="===c||":"===c)return a.position="quote",null;"\\"===c&&"quote"===a.position&&d.eol()&&(a.nextMultiline=!0)}else return a.position="comment",d.skipToEnd(),"comment";return a.position},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}});b.defineMIME("text/x-properties","properties");b.defineMIME("text/x-ini","properties")});
