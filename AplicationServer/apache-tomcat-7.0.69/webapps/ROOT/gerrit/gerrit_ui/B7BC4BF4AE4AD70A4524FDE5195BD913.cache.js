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
(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("../../addon/mode/simple")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/simple"],a):a(CodeMirror)})(function(a){a.defineSimpleMode("dockerfile",{start:[{regex:/#.*$/,token:"comment"},{regex:/(from|maintainer|run|cmd|expose|env|add|copy|entrypoint|volume|user|workdir|onbuild)\s*$/i,token:"variable-2"},{regex:/(from|maintainer|run|cmd|expose|env|add|copy|entrypoint|volume|user|workdir|onbuild)(\s+)/i,
token:["variable-2",null],next:"arguments"},{regex:/./,token:null}],arguments:[{regex:/#.*$/,token:"error",next:"start"},{regex:/[^#]+\\$/,token:null},{regex:/[^#]+/,token:null,next:"start"},{regex:/$/,token:null,next:"start"},{token:null,next:"start"}],meta:{lineComment:"#"}});a.defineMIME("text/x-dockerfile","dockerfile")});
