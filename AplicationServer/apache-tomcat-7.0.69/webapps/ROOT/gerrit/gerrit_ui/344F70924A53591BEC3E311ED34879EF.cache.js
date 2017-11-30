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
(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("haskell",function(e,s){function h(a,c,b){c(b);return b(a,c)}function f(a,c){if(a.eatWhile(m))return null;var b=a.next();if(t.test(b)){if("{"==b&&a.eat("-")){var d="comment";a.eat("#")&&(d="meta");return h(a,c,n(d,1))}return null}if("'"==b)return a.eat("\\"),a.next(),a.eat("'")?"string":"error";
if('"'==b)return h(a,c,p);if(u.test(b))return a.eatWhile(q),a.eat(".")?"qualifier":"variable-2";if(v.test(b))return a.eatWhile(q),"variable";if(k.test(b)){if("0"==b){if(a.eat(/[xX]/))return a.eatWhile(w),"integer";if(a.eat(/[oO]/))return a.eatWhile(x),"number"}a.eatWhile(k);d="number";a.match(/^\.\d+/)&&(d="number");a.eat(/[eE]/)&&(d="number",a.eat(/[-+]/),a.eatWhile(k));return d}if("."==b&&a.eat("."))return"keyword";if(l.test(b)){if("-"==b&&a.eat(/-/)&&(a.eatWhile(/-/),!a.eat(l)))return a.skipToEnd(),
"comment";d="variable";":"==b&&(d="variable-2");a.eatWhile(l);return d}return"error"}function n(a,c){return 0==c?f:function(b,d){for(var g=c;!b.eol();){var e=b.next();if("{"==e&&b.eat("-"))++g;else if("-"==e&&b.eat("}")&&(--g,0==g))return d(f),a}d(n(a,g));return a}}function p(a,c){for(;!a.eol();){var b=a.next();if('"'==b)return c(f),"string";if("\\"==b){if(a.eol()||a.eat(m))return c(y),"string";a.eat("&")||a.next()}}c(f);return"error"}function y(a,c){if(a.eat("\\"))return h(a,c,p);a.next();c(f);return"error"}
var v=/[a-z_]/,u=/[A-Z]/,k=/\d/,w=/[0-9A-Fa-f]/,x=/[0-7]/,q=/[a-z_A-Z0-9'\xa1-\uffff]/,l=/[-!#$%&*+.\/<=>?@\\^|~:]/,t=/[(),;[\]`{}]/,m=/[ \t\v\f]/,r=function(){function a(a){return function(){for(var b=0;b<arguments.length;b++)c[arguments[b]]=a}}var c={};a("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_");a("keyword")("..",":","::","=","\\",'"',"<-","->","@","~",
"=>");a("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<=","=<<","==",">",">=",">>",">>=","^","^^","||","*","**");a("builtin")("Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True");a("builtin")("abs","acos","acosh",
"all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational",
"fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn",
"readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError",
"words","writeFile","zip","zip3","zipWith","zipWith3");var b=s.overrideKeywords;if(b)for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}();return{startState:function(){return{f:f}},copyState:function(a){return{f:a.f}},token:function(a,c){var b=c.f(a,function(a){c.f=a}),d=a.current();return r.hasOwnProperty(d)?r[d]:b},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}});e.defineMIME("text/x-haskell","haskell")});
