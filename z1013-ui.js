var aa,f;var h;h||(h=typeof Module !== 'undefined' ? Module : {});var k={},n;for(n in h)h.hasOwnProperty(n)&&(k[n]=h[n]);h.arguments=[];h.thisProgram="./this.program";h.quit=function(a,b){throw b;};h.preRun=[];h.postRun=[];var q=!1,t=!1,ba=!1,ca=!1;q="object"===typeof window;t="function"===typeof importScripts;ba="object"===typeof process&&"function"===typeof require&&!q&&!t;ca=!q&&!ba&&!t;var v="";
if(ba){v=__dirname+"/";var da,ea;h.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};h.readBinary=function(a){a=h.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(h.thisProgram=process.argv[1].replace(/\\/g,"/"));h.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=h);process.on("uncaughtException",function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",
x);h.quit=function(a){process.exit(a)};h.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(h.read=function(a){return read(a)}),h.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?h.arguments=scriptArgs:"undefined"!=typeof arguments&&(h.arguments=arguments),"function"===typeof quit&&(h.quit=function(a){quit(a)});else if(q||t)t?
v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",h.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(h.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),h.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},h.setWindowTitle=function(a){document.title=a};var fa=h.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),z=h.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(n in k)k.hasOwnProperty(n)&&(h[n]=k[n]);k=void 0;var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};
"object"!==typeof WebAssembly&&z("no native wasm support detected");var ia,ja=!1;function assert(a,b){a||x("Assertion failed: "+b)}function ka(a){var b=h["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function la(a,b,c,d){var e={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=ma(c);A(a,B,b,c)}return b},array:function(a){var b=ma(a.length);C.set(a,b);return b}},g=ka(a),l=[];a=0;if(d)for(var m=0;m<d.length;m++){var u=e[c[m]];u?(0===a&&(a=na()),l[m]=u(d[m])):l[m]=d[m]}c=g.apply(null,l);c=function(a){return"string"===b?D(a):"boolean"===b?!!a:a}(c);0!==a&&oa(a);return c}var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var g=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var m=a.charCodeAt(++g);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ra(a){var b=qa(a)+1,c=ma(b);A(a,C,c,b);return c}var buffer,C,B,sa,ta,E,ua,F,G,H=h.TOTAL_MEMORY||33554432;5242880>H&&z("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+H+"! (TOTAL_STACK=5242880)");
h.buffer?buffer=h.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(ia=new WebAssembly.Memory({initial:H/65536,maximum:H/65536}),buffer=ia.buffer):buffer=new ArrayBuffer(H);h.HEAP8=C=new Int8Array(buffer);h.HEAP16=sa=new Int16Array(buffer);h.HEAP32=E=new Int32Array(buffer);h.HEAPU8=B=new Uint8Array(buffer);h.HEAPU16=ta=new Uint16Array(buffer);h.HEAPU32=ua=new Uint32Array(buffer);h.HEAPF32=F=new Float32Array(buffer);h.HEAPF64=G=new Float64Array(buffer);E[1687180]=11991632;
function I(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.jc;"number"===typeof c?void 0===b.Sb?h.dynCall_v(c):h.dynCall_vi(c,b.Sb):c(void 0===b.Sb?null:b.Sb)}}}var va=[],wa=[],xa=[],ya=[],za=[],Aa=!1;function Ca(){var a=h.preRun.shift();va.unshift(a)}var Da=Math.abs,Ea=Math.ceil,Fa=Math.floor,Ga=Math.min,J=0,Ha=null,Ia=null;h.preloadedImages={};h.preloadedAudios={};
function Ja(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="z1013-ui.wasm";if(!Ja()){var Ka=K;K=h.locateFile?h.locateFile(Ka,v):v+Ka}function La(){try{if(h.wasmBinary)return new Uint8Array(h.wasmBinary);if(h.readBinary)return h.readBinary(K);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ma(){return h.wasmBinary||!q&&!t||"function"!==typeof fetch?new Promise(function(a){a(La())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return La()})}
function Na(a){function b(a){h.asm=a.exports;J--;h.monitorRunDependencies&&h.monitorRunDependencies(J);0==J&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(a=Ia,Ia=null,a()))}function c(a){b(a.instance)}function d(a){Ma().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);x(a)})}var e={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};J++;h.monitorRunDependencies&&h.monitorRunDependencies(J);if(h.instantiateWasm)try{return h.instantiateWasm(e,
b)}catch(g){return z("Module.instantiateWasm callback failed with error: "+g),!1}h.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(K,{credentials:"same-origin"}),e).then(c,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");d(c)});return{}}
h.asm=function(a,b){b.memory=ia;b.table=new WebAssembly.Table({initial:73,maximum:73,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Na(b)};var L=0;function M(){L+=4;return E[L-4>>2]}function N(){var a=(void 0).kc(M());if(!a)throw new (void 0).dc(9);return a}function Oa(a){h.___errno_location&&(E[h.___errno_location()>>2]=a);return a}var Pa=0,Qa=0,O=0,Ra=0,Sa=0,Ta=null,Ua=null,Va=!1;function Wa(){for(var a=P.length-1;0<=a;--a)Xa(a);P=[];Ya=[]}var Ya=[];
function Za(){if($a&&ab.Lb)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.qc.apply(this,b.fc)}}var $a=0,ab=null,P=[];function bb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Xa(a){var b=P[a];b.target.removeEventListener(b.Kb,b.Yb,b.Mb);P.splice(a,1)}
function Q(a){function b(b){++$a;ab=a;Za();a.Pb(b);Za();--$a}if(a.Nb)a.Yb=b,a.target.addEventListener(a.Kb,b,a.Mb),P.push(a),Va||(ya.push(Wa),Va=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Kb==a.Kb&&Xa(c--)}var cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function R(a){try{if(!a)return window;"number"===typeof a&&(a=cb[a]||D(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?h.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function db(){x("OOM")}function eb(a){"number"===typeof a&&(a=D(a));return a&&"#canvas"!==a?"undefined"!==typeof fb&&gb[a]?gb[a]:R(a):"undefined"!==typeof fb&&gb.canvas?gb.canvas:h.canvas}
function hb(a,b,c,d,e,g){Pa||(Pa=S(164));a={target:R(a),Lb:bb()?!1:!0,Kb:g,Nb:d,Pb:function(a){a=a||window.event;var c=Pa;A(a.key?a.key:"",B,c+0,32);A(a.code?a.code:"",B,c+32,32);E[c+64>>2]=a.location;E[c+68>>2]=a.ctrlKey;E[c+72>>2]=a.shiftKey;E[c+76>>2]=a.altKey;E[c+80>>2]=a.metaKey;E[c+84>>2]=a.repeat;A(a.locale?a.locale:"",B,c+88,32);A(a.char?a.char:"",B,c+120,32);E[c+152>>2]=a.charCode;E[c+156>>2]=a.keyCode;E[c+160>>2]=a.which;T(d,e,c,b)&&a.preventDefault()},Mb:c};Q(a)}
function kb(a,b,c){G[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();E[a+8>>2]=b.screenX;E[a+12>>2]=b.screenY;E[a+16>>2]=b.clientX;E[a+20>>2]=b.clientY;E[a+24>>2]=b.ctrlKey;E[a+28>>2]=b.shiftKey;E[a+32>>2]=b.altKey;E[a+36>>2]=b.metaKey;sa[a+40>>1]=b.button;sa[a+42>>1]=b.buttons;E[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ta;E[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ua;if(h.canvas){var d=h.canvas.getBoundingClientRect();
E[a+60>>2]=b.clientX-d.left;E[a+64>>2]=b.clientY-d.top}else E[a+60>>2]=0,E[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},E[a+52>>2]=b.clientX-d.left,E[a+56>>2]=b.clientY-d.top):(E[a+52>>2]=0,E[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ta=b.screenX,Ua=b.screenY)}
function lb(a,b,c,d,e,g){Qa||(Qa=S(72));a=R(a);c={target:a,Lb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Kb:g,Nb:d,Pb:function(c){c=c||window.event;kb(Qa,c,a);T(d,e,Qa,b)&&c.preventDefault()},Mb:c};bb()&&"mousedown"==g&&(c.Lb=!1);Q(c)}
function mb(a,b,c,d){Ra||(Ra=S(36));a=R(a);Q({target:a,Lb:!1,Kb:"resize",Nb:d,Pb:function(c){c=c||window.event;if(c.target==a){var e=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ra;E[l>>2]=c.detail;E[l+4>>2]=document.body.clientWidth;
E[l+8>>2]=document.body.clientHeight;E[l+12>>2]=window.innerWidth;E[l+16>>2]=window.innerHeight;E[l+20>>2]=window.outerWidth;E[l+24>>2]=window.outerHeight;E[l+28>>2]=e[0];E[l+32>>2]=e[1];T(d,10,l,b)&&c.preventDefault()}},Mb:c})}
function nb(a,b,c,d,e,g){Sa||(Sa=S(1684));a=R(a);Q({target:a,Lb:"touchstart"==g||"touchend"==g,Kb:g,Nb:d,Pb:function(c){c=c||window.event;for(var g={},l=0;l<c.touches.length;++l){var r=c.touches[l];g[r.identifier]=r}for(l=0;l<c.changedTouches.length;++l)r=c.changedTouches[l],g[r.identifier]=r,r.Xb=!0;for(l=0;l<c.targetTouches.length;++l)r=c.targetTouches[l],g[r.identifier].cc=!0;var p=r=Sa;E[p+4>>2]=c.ctrlKey;E[p+8>>2]=c.shiftKey;E[p+12>>2]=c.altKey;E[p+16>>2]=c.metaKey;p+=20;var Ba=h.canvas?h.canvas.getBoundingClientRect():
void 0,ib=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},jb=0;for(l in g){var y=g[l];E[p>>2]=y.identifier;E[p+4>>2]=y.screenX;E[p+8>>2]=y.screenY;E[p+12>>2]=y.clientX;E[p+16>>2]=y.clientY;E[p+20>>2]=y.pageX;E[p+24>>2]=y.pageY;E[p+28>>2]=y.Xb;E[p+32>>2]=y.cc;Ba?(E[p+44>>2]=y.clientX-Ba.left,E[p+48>>2]=y.clientY-Ba.top):(E[p+44>>2]=0,E[p+48>>2]=0);E[p+36>>2]=y.clientX-ib.left;E[p+40>>2]=y.clientY-ib.top;p+=52;if(32<=++jb)break}E[r>>2]=jb;T(d,e,r,b)&&c.preventDefault()},Mb:c})}
function ob(a,b,c,d,e,g){a||(a=h.canvas);a={target:R(a),Lb:!1,Kb:g,Nb:d,Pb:function(a){a=a||window.event;T(d,e,0,b)&&a.preventDefault()},Mb:c};Q(a)}
function pb(a,b,c,d,e){function g(c){c=c||window.event;kb(O,c,a);G[O+72>>3]=c.wheelDeltaX||0;G[O+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);G[O+88>>3]=0;E[O+96>>2]=0;T(d,9,O,b)&&c.preventDefault()}function l(c){c=c||window.event;var e=O;kb(e,c,a);G[e+72>>3]=c.deltaX;G[e+80>>3]=c.deltaY;G[e+88>>3]=c.deltaZ;E[e+96>>2]=c.deltaMode;T(d,9,e,b)&&c.preventDefault()}O||(O=S(104));Q({target:a,Lb:!0,Kb:e,Nb:d,Pb:"wheel"==e?l:g,Mb:c})}
var qb=1,rb=0,sb=[],U=[],tb=[],ub=[],vb=[],V=[],W=[],wb={},xb=null,gb={},yb={},zb={};function X(a){rb||(rb=a)}function Ab(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}var Bb=null,Y=[0];
function Cb(a){a||(a=xb);if(!a.ac){a.ac=!0;var b=a.Ub;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,e){c.drawArraysInstancedANGLE(a,b,d,e)},b.drawElementsInstanced=function(a,b,d,e,g){c.drawElementsInstancedANGLE(a,b,d,e,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var e=b.getExtension("WEBGL_draw_buffers");e&&(b.drawBuffers=function(a,b){e.drawBuffersWEBGL(a,b)})}b.ic=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}var fb={},Db,Eb,Fb=["default","low-power","high-performance"];function Gb(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&Ab(d);g?(g.name=l,d[l]=g):X(1282);E[b+4*e>>2]=l}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);z("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);return}E[b>>2]=c}else X(1281)}function Ib(a){var b=qa(a)+1,c=S(b);A(a,B,c,b);return c}var Jb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Kb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};
function Lb(a,b,c,d,e){if(b=Jb[b]*Kb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5121:return B.subarray(e,c);case 5126:return F.subarray(e>>2,c>>2);case 5125:case 34042:return ua.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return ta.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}var Z;Bb=new Float32Array(256);for(var Mb=0;256>Mb;Mb++)Y[Mb]=Bb.subarray(0,Mb+1);
var Pb=h.asm({},{d:x,I:function(){},ba:Oa,Qa:function(a,b){L=b;try{var c=N(),d=M(),e=M(),g=M(),l=M();if(!(-1==d&&0>e||0==d&&0<=e))return-75;(void 0).mc(c,e,l);aa=[c.position>>>0,(f=c.position,1<=+Da(f)?0<f?(Ga(+Fa(f/4294967296),4294967295)|0)>>>0:~~+Ea((f-+(~~f>>>0))/4294967296)>>>0:0)];E[g>>2]=aa[0];E[g+4>>2]=aa[1];c.$b&&0===e&&0===l&&(c.$b=null);return 0}catch(m){return x(m),-m.Ob}},Fa:function(a,b){L=b;try{var c=N(),d=M();a:{var e=M();for(b=a=0;b<e;b++){var g=E[d+(8*b+4)>>2],l=(void 0).read(c,
C,E[d+8*b>>2],g,void 0);if(0>l){var m=-1;break a}a+=l;if(l<g)break}m=a}return m}catch(u){return x(u),-u.Ob}},Y:function(a,b){L=b;try{var c=N(),d=M();a:{var e=M();for(b=a=0;b<e;b++){var g=(void 0).write(c,C,E[d+8*b>>2],E[d+(8*b+4)>>2],void 0);if(0>g){var l=-1;break a}a+=g}l=a}return l}catch(m){return x(m),-m.Ob}},q:function(a,b){L=b;try{var c=N();switch(M()){case 0:var d=M();return 0>d?-22:(void 0).open(c.path,c.flags,0,d).fd;case 1:case 2:return 0;case 3:return c.flags;case 4:return d=M(),c.flags|=
d,0;case 12:return d=M(),sa[d+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-22;case 9:return Oa(22),-1;default:return-22}}catch(e){return x(e),-e.Ob}},ta:function(a,b){L=b;try{var c=D(M()),d=M(),e=M();return(void 0).open(c,d,e).fd}catch(g){return x(g),-g.Ob}},Q:function(a,b){L=b;try{var c=N(),d=M();switch(d){case 21509:case 21505:return c.tty?0:-25;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return c.tty?0:-25;case 21519:if(!c.tty)return-25;var e=M();return E[e>>2]=
0;case 21520:return c.tty?-22:-25;case 21531:return e=M(),(void 0).lc(c,d,e);case 21523:return c.tty?0:-25;case 21524:return c.tty?0:-25;default:x("bad ioctl syscall "+d)}}catch(g){return x(g),-g.Ob}},M:function(a,b){L=b;try{var c=N();(void 0).close(c);return 0}catch(d){return x(d),-d.Ob}},H:function(){},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},
s:function(){document.getElementById("_sokol_app_input_element").blur()},m:function(){return performance.now()},ab:function(){console.log("fs.h: registering Module['ccall']");h.ccall=la},$a:function(a){var b=D(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);la("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},da:function(){return window.devicePixelRatio||1},ca:function(a,b,c){a=a?R(a):h.canvas;if(!a)return-4;
a.getBoundingClientRect?(a=a.getBoundingClientRect(),G[b>>3]=a.right-a.left,G[c>>3]=a.bottom-a.top):(G[b>>3]=a.clientWidth,G[c>>3]=a.clientHeight);return 0},_a:function(){return C.length},Za:function(a,b,c){B.set(B.subarray(b,b+c),a)},Ya:function(a,b){function c(d){Ob(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Xa:function(a){db(a)},aa:function(a,b,c){a=eb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Wa:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},Va:function(a,b,
c,d){hb(a,b,c,d,1,"keypress");return 0},Ua:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},Ta:function(a,b,c,d){lb(a,b,c,d,5,"mousedown");return 0},Sa:function(a,b,c,d){lb(a,b,c,d,33,"mouseenter");return 0},Ra:function(a,b,c,d){lb(a,b,c,d,34,"mouseleave");return 0},Pa:function(a,b,c,d){lb(a,b,c,d,8,"mousemove");return 0},Oa:function(a,b,c,d){lb(a,b,c,d,6,"mouseup");return 0},Na:function(a,b,c,d){mb(a,b,c,d);return 0},Ma:function(a,b,c,d){nb(a,b,c,d,25,"touchcancel");return 0},La:function(a,b,c,
d){nb(a,b,c,d,23,"touchend");return 0},Ka:function(a,b,c,d){nb(a,b,c,d,24,"touchmove");return 0},Ja:function(a,b,c,d){nb(a,b,c,d,22,"touchstart");return 0},Ia:function(a,b,c,d){ob(a,b,c,d,31,"webglcontextlost");return 0},Ha:function(a,b,c,d){ob(a,b,c,d,32,"webglcontextrestored");return 0},Ga:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(pb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(pb(a,b,c,d,"mousewheel"),0):-1},$:function(a,b){var c={};b>>=2;c.alpha=!!E[b];c.depth=
!!E[b+1];c.stencil=!!E[b+2];c.antialias=!!E[b+3];c.premultipliedAlpha=!!E[b+4];c.preserveDrawingBuffer=!!E[b+5];c.powerPreference=Fb[E[b+6]];c.failIfMajorPerformanceCaveat=!!E[b+7];c.bc=E[b+8];c.nc=E[b+9];c.Vb=E[b+10];c.Zb=E[b+11];c.oc=E[b+12];c.pc=E[b+13];a=eb(a);if(!a||c.Zb)c=0;else{if(b=a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=S(8);var d={handle:b,attributes:c,version:c.bc,Ub:a};a.canvas&&(a.canvas.ec=d);wb[b]=d;("undefined"===typeof c.Vb||c.Vb)&&Cb(d)}c=b}return c},Ea:function(a){a>>=
2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Da:function(a){xb=wb[a];h.hc=Z=xb&&xb.Ub;return!a||Z?0:-5},E:function(a){Z.activeTexture(a)},_:function(a,b){Z.attachShader(U[a],W[b])},h:function(a,b){Z.bindBuffer(a,sb[b])},f:function(a,b){Z.bindFramebuffer(a,tb[b])},Ca:function(a,b){Z.bindRenderbuffer(a,ub[b])},r:function(a,b){Z.bindTexture(a,vb[b])},Z:function(a,b,c,d){Z.blendColor(a,b,c,d)},X:function(a,b){Z.blendEquationSeparate(a,b)},W:function(a,b,c,d){Z.blendFuncSeparate(a,
b,c,d)},V:function(a,b,c,d){Z.bufferData(a,c?B.subarray(c,c+b):b,d)},D:function(a,b,c,d){Z.bufferSubData(a,b,B.subarray(d,d+c))},o:function(a){return Z.checkFramebufferStatus(a)},Ba:function(a){Z.clear(a)},Aa:function(a,b,c,d){Z.clearColor(a,b,c,d)},za:function(a){Z.clearDepth(a)},ya:function(a){Z.clearStencil(a)},C:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},xa:function(a){Z.compileShader(W[a])},U:function(a,b,c,d,e,g,l,m){Z.compressedTexImage2D(a,b,c,d,e,g,m?B.subarray(m,m+l):null)},wa:function(){var a=
Ab(U),b=Z.createProgram();b.name=a;U[a]=b;return a},va:function(a){var b=Ab(W);W[b]=Z.createShader(a);return b},T:function(a){Z.cullFace(a)},ua:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=sb[d];e&&(Z.deleteBuffer(e),e.name=0,sb[d]=null,d==Db&&(Db=0),d==Eb&&(Eb=0))}},l:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=tb[d];e&&(Z.deleteFramebuffer(e),e.name=0,tb[d]=null)}},S:function(a){if(a){var b=U[a];b?(Z.deleteProgram(b),b.name=0,U[a]=null,yb[a]=null):X(1281)}},p:function(a,b){for(var c=
0;c<a;c++){var d=E[b+4*c>>2],e=ub[d];e&&(Z.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},B:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=vb[d];e&&(Z.deleteTexture(e),e.name=0,vb[d]=null)}},A:function(a){Z.depthFunc(a)},z:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},y:function(a,b,c){Z.drawArrays(a,b,c)},x:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},
sa:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,ub[d])},c:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,vb[d],e)},P:function(a){Z.frontFace(a)},O:function(a,b){Gb(a,b,"createBuffer",sb)},n:function(a,b){Gb(a,b,"createFramebuffer",tb)},ra:function(a,b){Gb(a,b,"createRenderbuffer",ub)},qa:function(a,b){Gb(a,b,"createTexture",vb)},pa:function(a,b){return Z.getAttribLocation(U[a],D(b))},w:function(a,b){Hb(a,b)},oa:function(a,b,c,d){a=Z.getProgramInfoLog(U[a]);
null===a&&(a="(unknown error)");0<b&&d?(b=A(a,B,d,b),c&&(E[c>>2]=b)):c&&(E[c>>2]=0)},N:function(a,b,c){if(c)if(a>=qb)X(1281);else{var d=yb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(U[a]),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b)E[c>>2]=d.Tb;else if(35722==b){if(-1==d.Qb){a=U[a];var e=Z.getProgramParameter(a,35721);for(b=d.Qb=0;b<e;++b)d.Qb=Math.max(d.Qb,Z.getActiveAttrib(a,b).name.length+1)}E[c>>2]=d.Qb}else if(35381==b){if(-1==d.Rb)for(a=U[a],e=Z.getProgramParameter(a,
35382),b=d.Rb=0;b<e;++b)d.Rb=Math.max(d.Rb,Z.getActiveUniformBlockName(a,b).length+1);E[c>>2]=d.Rb}else E[c>>2]=Z.getProgramParameter(U[a],b);else X(1282)}else X(1281)},na:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,B,d,b),c&&(E[c>>2]=b)):c&&(E[c>>2]=0)},L:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),E[c>>2]=null===a||0==a.length?0:a.length+1):E[c>>2]=Z.getShaderParameter(W[a],
b):X(1281)},ma:function(a){if(zb[a])return zb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Ib(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Ib(b);break;case 7938:b=Ib("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b=
"OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:return X(1280),0}return zb[a]=b},j:function(a,b){b=D(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=yb[a]&&yb[a].Wb[b])&&0<=c&&c<a[0]?a[1]+c:-1},la:function(a){Z.linkProgram(U[a]);var b=U[a];a=yb[a]={Wb:{},Tb:0,Qb:-1,Rb:-1};for(var c=a.Wb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Tb=Math.max(a.Tb,l.length+1);"]"==l.slice(-1)&&
(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var u=Ab(V);c[l]=[g.size,u];V[u]=m;for(var r=1;r<g.size;++r)m=Z.getUniformLocation(b,l+"["+r+"]"),u=Ab(V),V[u]=m}}},K:function(a,b){Z.polygonOffset(a,b)},ka:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},J:function(a,b,c,d){Z.scissor(a,b,c,d)},ja:function(a,b,c,d){for(var e="",g=0;g<b;++g){var l=d?E[d+4*g>>2]:-1;e+=D(E[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(W[a],e)},ia:function(a,b,c){Z.stencilFunc(a,b,c)},ha:function(a,b,
c,d){Z.stencilFuncSeparate(a,b,c,d)},G:function(a){Z.stencilMask(a)},lb:function(a,b,c){Z.stencilOp(a,b,c)},ga:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},fa:function(a,b,c,d,e,g,l,m,u){Z.texImage2D(a,b,c,d,e,g,l,m,u?Lb(m,l,d,e,u):null)},i:function(a,b,c){Z.texParameteri(a,b,c)},v:function(a,b,c,d,e,g,l,m,u){var r=null;u&&(r=Lb(m,l,e,g,u));Z.texSubImage2D(a,b,c,d,e,g,l,m,r)},kb:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],
d)},ea:function(a,b){Z.uniform1i(V[a],b)},jb:function(a,b,c){if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},ib:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},hb:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+
(4*e+8)>>2],d[e+3]=F[c+(4*e+12)>>2];else d=F.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],d)},gb:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],g=0;g<16*b;g+=16)e[g]=F[d+4*g>>2],e[g+1]=F[d+(4*g+4)>>2],e[g+2]=F[d+(4*g+8)>>2],e[g+3]=F[d+(4*g+12)>>2],e[g+4]=F[d+(4*g+16)>>2],e[g+5]=F[d+(4*g+20)>>2],e[g+6]=F[d+(4*g+24)>>2],e[g+7]=F[d+(4*g+28)>>2],e[g+8]=F[d+(4*g+32)>>2],e[g+9]=F[d+(4*g+36)>>2],e[g+10]=F[d+(4*g+40)>>2],e[g+11]=F[d+(4*g+44)>>2],e[g+12]=F[d+(4*g+48)>>2],e[g+13]=F[d+(4*g+52)>>2],e[g+14]=
F[d+(4*g+56)>>2],e[g+15]=F[d+(4*g+60)>>2];else e=F.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],!!c,e)},fb:function(a){Z.useProgram(U[a])},eb:function(a,b){Z.vertexAttribDivisor(a,b)},db:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},F:function(a,b,c,d){Z.viewport(a,b,c,d)},cb:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())la("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},bb:db,a:6748720},buffer);
h.asm=Pb;h.___em_js___sapp_js_create_textfield=function(){return h.asm.mb.apply(null,arguments)};h.___em_js___sapp_js_focus_textfield=function(){return h.asm.nb.apply(null,arguments)};h.___em_js___sapp_js_unfocus_textfield=function(){return h.asm.ob.apply(null,arguments)};h.___em_js___saudio_js_buffer_frames=function(){return h.asm.pb.apply(null,arguments)};h.___em_js___saudio_js_init=function(){return h.asm.qb.apply(null,arguments)};
h.___em_js___saudio_js_sample_rate=function(){return h.asm.rb.apply(null,arguments)};h.___em_js___stm_js_perfnow=function(){return h.asm.sb.apply(null,arguments)};h.___em_js__emsc_fs_init=function(){return h.asm.tb.apply(null,arguments)};h.___em_js__emsc_load_file=function(){return h.asm.ub.apply(null,arguments)};h.___em_js__sargs_js_parse_url=function(){return h.asm.vb.apply(null,arguments)};var Nb=h.__sapp_emsc_notify_keyboard_hidden=function(){return h.asm.wb.apply(null,arguments)};
h.__sargs_add_kvp=function(){return h.asm.xb.apply(null,arguments)};h.__saudio_emsc_pull=function(){return h.asm.yb.apply(null,arguments)};h._emsc_load_data=function(){return h.asm.zb.apply(null,arguments)};h._free=function(){return h.asm.Ab.apply(null,arguments)};h._main=function(){return h.asm.Bb.apply(null,arguments)};
var S=h._malloc=function(){return h.asm.Cb.apply(null,arguments)},ma=h.stackAlloc=function(){return h.asm.Hb.apply(null,arguments)},oa=h.stackRestore=function(){return h.asm.Ib.apply(null,arguments)},na=h.stackSave=function(){return h.asm.Jb.apply(null,arguments)},Ob=h.dynCall_idi=function(){return h.asm.Db.apply(null,arguments)},T=h.dynCall_iiii=function(){return h.asm.Eb.apply(null,arguments)};h.dynCall_v=function(){return h.asm.Fb.apply(null,arguments)};
h.dynCall_vi=function(){return h.asm.Gb.apply(null,arguments)};h.asm=Pb;function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;Ia=function Qb(){h.calledRun||Rb();h.calledRun||(Ia=Qb)};
h.callMain=function(a){a=a||[];Aa||(Aa=!0,I(wa));var b=a.length+1,c=ma(4*(b+1));E[c>>2]=ra(h.thisProgram);for(var d=1;d<b;d++)E[(c>>2)+d]=ra(a[d-1]);E[(c>>2)+b]=0;try{var e=h._main(b,c,0);if(!h.noExitRuntime||0!==e){if(!h.noExitRuntime&&(ja=!0,h.onExit))h.onExit(e);h.quit(e,new w(e))}}catch(g){g instanceof w||("SimulateInfiniteLoop"==g?h.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),z("exception thrown: "+a),h.quit(1,g)))}finally{}};
function Rb(a){function b(){if(!h.calledRun&&(h.calledRun=!0,!ja)){Aa||(Aa=!0,I(wa));I(xa);if(h.onRuntimeInitialized)h.onRuntimeInitialized();h._main&&Sb&&h.callMain(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var b=h.postRun.shift();za.unshift(b)}I(za)}}a=a||h.arguments;if(!(0<J)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Ca();I(va);0<J||h.calledRun||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},
1);b()},1)):b())}}h.run=Rb;function x(a){if(h.onAbort)h.onAbort(a);void 0!==a?(fa(a),z(a),a=JSON.stringify(a)):a="";ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}h.abort=x;if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var Sb=!0;h.noInitialRun&&(Sb=!1);h.noExitRuntime=!0;Rb();
