﻿var killErrors=function(value){return true};window.onerror=null;window.onerror=killErrors;
var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F)}return out}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c2==-1);if(c2==-1)break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return out;c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1)break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return out;c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1)break;out+=String.fromCharCode(((c3&0x03)<<6)|c4)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i)}else if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break}}return out}

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('y 6={\'F\':5(s,n){2s 3.1a.p(\'{18}\',s).p(\'{18}\',s).p(\'{15}\',n).p(\'{15}\',n)},\'1Z\':5(s,n){1Y.1V=3.F(s,n)},\'1R\':5(){$(\'#d\').w(\'c\',3.T);1t(5(){6.Q()},3.O*1j);$("#A").B(0).1i=3.1h+\'\';y a=q.2q(\'M\');a.1y=\'1x/1q\';a.1Q=X;a.1n=\'1z-8\';a.c=\'//1P.W.1S/1U/2i.G\';y b=q.1s(\'M\')[0];b.1u.1v(a,b)},\'1w\':5(){e($("#d").w(\'c\')!=3.C){$("#d").w(\'c\',3.C)}$("#d").H()},\'Q\':5(){$(\'#d\').1A()},\'1B\':5(){3.I=1O;$(\'#J\').H()},\'K\':5(){q.L(\'<i>.6{1W: #1X;20-21:22;23:#26;2h:N;2p:N;r:2u;1f:1g;o:9%;u:9%;1k-1l:1m;}.6 x{o:9%;u:9%;}.6 #A{r:1o;!1p;}</i><P 1r="6">\'+\'<j v="d" c="" R="0" S="D" o="9%" u="9%" i="r:U;z-V:E;"></j><j v="J" c="" R="0" S="D" o="9%" u="9%" i="r:U;z-V:E;1e:1C;"></j>\'+\'<x 1D="0" 1E="0" 1F="0"><1G><Y v="A" 1H="1I" i="">&1J;</Y></x></P>\');3.1K=$(\'.6\').B(0).1L;3.1M=$(\'.6\').B(0).1N;q.L(\'<Z\'+\'10 c="\'+3.11+3.f+\'.G"></Z\'+\'10>\')},\'12\':5(){},\'1T\':5(){3.I=X;3.13=\'\';e(4.14==\'1\'){4.h=m(4.h);4.g=m(4.g)}16 e(4.14==\'2\'){4.h=m(17(4.h));4.g=m(17(4.g))}3.T=7.24;3.C=7.d;3.O=7.25;3.19=4.27;3.28=4.29;3.2a=4.2b;3.1a=2c(4.2d);3.f=4.2e;3.2f=4.2g;3.t=4.1b==\'D\'?\'\':4.1b;3.2j=4.h;3.2k=4.g;3.2l=4.2m;3.2n=4.2o;e(7.1c[3.t]!=1d){3.t=7.1c[3.t].2r}e(7.k[3.f]!=1d){e(7.k[3.f].2t=="1"){3.13=7.k[3.f].l==\'\'?7.l:7.k[3.f].l;3.f=\'l\'}}3.11=W.2v+\'/2w/2x/\';e(3.19=="2y"){6.12()}16{6.K()}}};',62,159,'|||this|player_data|function|MacPlayer|MacPlayerConfig||100|||src|buffer|if|PlayFrom|url_next|url|style|iframe|player_list|parse|unescape||width|replace|document|position||PlayServer|height|id|attr|table|var||playleft|get|Buffer|no|99998|GetUrl|js|show|Status|install|Play|write|script|0px|Second|div|AdsEnd|frameBorder|scrolling|Prestrain|absolute|index|maccms|true|td|scr|ipt|Path|Down|Parse|encrypt|nid|else|base64decode|sid|Flag|Link|server|server_list|undefined|display|overflow|hidden|Html|innerHTML|1000|min|heigh|300px|charset|inherit|important|javascript|class|getElementsByTagName|setTimeout|parentNode|insertBefore|AdsStart|text|type|utf|hide|Install|none|border|cellpadding|cellspacing|tr|valign|top|nbsp|Height|offsetHeight|Width|offsetWidth|false|union|async|Show|com|Init|html|href|background|000000|location|Go|font|size|14px|color|prestrain|second|F6F6F6|flag|Trysee|trysee|Points|points|decodeURIComponent|link|from|PlayNote|note|margin|top10|PlayUrl|PlayUrlNext|PlayLinkNext|link_next|PlayLinkPre|link_pre|padding|createElement|des|return|ps|relative|path|static|player|down'.split('|'),0,{}));

MacPlayer.Init();