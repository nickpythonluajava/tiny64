var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in e)e.hasOwnProperty(h)&&(g[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var q=!1,r=!1,aa=!1,ba=!1;q="object"===typeof window;r="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!q&&!r;ba=!q&&!aa&&!r;var u="";
if(aa){u=__dirname+"/";var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",
x);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(q||r)r?
u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var ea=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(h in g)g.hasOwnProperty(h)&&(e[h]=g[h]);g=void 0;var fa={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};
"object"!==typeof WebAssembly&&y("no native wasm support detected");var ha,ia=!1;function assert(a,b){a||x("Assertion failed: "+b)}function ja(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function z(a,b,c,d){var f={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=ka(c);A(a,B,b,c)}return b},array:function(a){var b=ka(a.length);la.set(a,b);return b}},k=ja(a),l=[];a=0;if(d)for(var m=0;m<d.length;m++){var t=f[c[m]];t?(0===a&&(a=ma()),l[m]=t(d[m])):l[m]=d[m]}c=k.apply(null,l);c=function(a){return"string"===b?C(a):"boolean"===b?!!a:a}(c);0!==a&&na(a);return c}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function C(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&oa)a=oa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|l:(f&7)<<18|k<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var m=a.charCodeAt(++k);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-f}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function qa(a){var b=pa(a)+1,c=ka(b);A(a,la,c,b);return c}var buffer,la,B,sa,ta,D,ua,va,E,F=e.TOTAL_MEMORY||33554432;5242880>F&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+F+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(ha=new WebAssembly.Memory({initial:F/65536,maximum:F/65536}),buffer=ha.buffer):buffer=new ArrayBuffer(F),e.buffer=buffer);e.HEAP8=la=new Int8Array(buffer);e.HEAP16=sa=new Int16Array(buffer);e.HEAP32=D=new Int32Array(buffer);e.HEAPU8=B=new Uint8Array(buffer);e.HEAPU16=ta=new Uint16Array(buffer);e.HEAPU32=ua=new Uint32Array(buffer);e.HEAPF32=va=new Float32Array(buffer);e.HEAPF64=E=new Float64Array(buffer);
D[1689300]=12000336;function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ub;"number"===typeof c?void 0===b.Fb?e.dynCall_v(c):e.dynCall_vi(c,b.Fb):c(void 0===b.Fb?null:b.Fb)}}}var wa=[],xa=[],ya=[],za=[],Aa=[],Ba=!1;function Ca(){var a=e.preRun.shift();wa.unshift(a)}var H=0,Da=null,I=null;e.preloadedImages={};e.preloadedAudios={};
function Ea(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="cpc.wasm";if(!Ea()){var Fa=J;J=e.locateFile?e.locateFile(Fa,u):u+Fa}function Ga(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ha(){return e.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(a){a(Ga())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ga()})}
function Ia(a){function b(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Da&&(clearInterval(Da),Da=null),I&&(a=I,I=null,a()))}function c(a){b(a.instance)}function d(a){Ha().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);x(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:fa};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(f,
b)}catch(k){return y("Module.instantiateWasm callback failed with error: "+k),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(J,{credentials:"same-origin"}),f).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");d(c)});return{}}
e.asm=function(a,b){b.memory=ha;b.table=new WebAssembly.Table({initial:46,maximum:46,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ia(b)};var Ja=0,Ka=0,K=0,La=0,Ma=0,Na=null,Oa=null,Pa=!1;function Qa(){for(var a=L.length-1;0<=a;--a)Ra(a);L=[];Sa=[]}var Sa=[];function Ta(){if(Ua&&Va.yb)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Yb.apply(this,b.Rb)}}var Ua=0,Va=null,L=[];
function Wa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ra(a){var b=L[a];b.target.removeEventListener(b.xb,b.Lb,b.zb);L.splice(a,1)}function M(a){function b(b){++Ua;Va=a;Ta();a.Bb(b);Ta();--Ua}if(a.Ab)a.Lb=b,a.target.addEventListener(a.xb,b,a.zb),L.push(a),Pa||(za.push(Qa),Pa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].xb==a.xb&&Ra(c--)}
var Xa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){try{if(!a)return window;"number"===typeof a&&(a=Xa[a]||C(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ya(){x("OOM")}
function Za(a){"number"===typeof a&&(a=C(a));return a&&"#canvas"!==a?"undefined"!==typeof $a&&ab[a]?ab[a]:N(a):"undefined"!==typeof $a&&ab.canvas?ab.canvas:e.canvas}
function bb(a,b,c,d,f,k){Ja||(Ja=O(164));a={target:N(a),yb:Wa()?!1:!0,xb:k,Ab:d,Bb:function(a){a=a||window.event;var c=Ja;A(a.key?a.key:"",B,c+0,32);A(a.code?a.code:"",B,c+32,32);D[c+64>>2]=a.location;D[c+68>>2]=a.ctrlKey;D[c+72>>2]=a.shiftKey;D[c+76>>2]=a.altKey;D[c+80>>2]=a.metaKey;D[c+84>>2]=a.repeat;A(a.locale?a.locale:"",B,c+88,32);A(a.char?a.char:"",B,c+120,32);D[c+152>>2]=a.charCode;D[c+156>>2]=a.keyCode;D[c+160>>2]=a.which;P(d,f,c,b)&&a.preventDefault()},zb:c};M(a)}
function eb(a,b,c){E[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();D[a+8>>2]=b.screenX;D[a+12>>2]=b.screenY;D[a+16>>2]=b.clientX;D[a+20>>2]=b.clientY;D[a+24>>2]=b.ctrlKey;D[a+28>>2]=b.shiftKey;D[a+32>>2]=b.altKey;D[a+36>>2]=b.metaKey;sa[a+40>>1]=b.button;sa[a+42>>1]=b.buttons;D[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Na;D[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Oa;if(e.canvas){var d=e.canvas.getBoundingClientRect();
D[a+60>>2]=b.clientX-d.left;D[a+64>>2]=b.clientY-d.top}else D[a+60>>2]=0,D[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},D[a+52>>2]=b.clientX-d.left,D[a+56>>2]=b.clientY-d.top):(D[a+52>>2]=0,D[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Na=b.screenX,Oa=b.screenY)}
function Q(a,b,c,d,f,k){Ka||(Ka=O(72));a=N(a);c={target:a,yb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,xb:k,Ab:d,Bb:function(c){c=c||window.event;eb(Ka,c,a);P(d,f,Ka,b)&&c.preventDefault()},zb:c};Wa()&&"mousedown"==k&&(c.yb=!1);M(c)}
function fb(a,b,c,d){La||(La=O(36));a=N(a);M({target:a,yb:!1,xb:"resize",Ab:d,Bb:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=La;D[l>>2]=c.detail;D[l+4>>2]=document.body.clientWidth;
D[l+8>>2]=document.body.clientHeight;D[l+12>>2]=window.innerWidth;D[l+16>>2]=window.innerHeight;D[l+20>>2]=window.outerWidth;D[l+24>>2]=window.outerHeight;D[l+28>>2]=f[0];D[l+32>>2]=f[1];P(d,10,l,b)&&c.preventDefault()}},zb:c})}
function gb(a,b,c,d,f,k){Ma||(Ma=O(1684));a=N(a);M({target:a,yb:"touchstart"==k||"touchend"==k,xb:k,Ab:d,Bb:function(c){c=c||window.event;for(var l={},k=0;k<c.touches.length;++k){var n=c.touches[k];l[n.identifier]=n}for(k=0;k<c.changedTouches.length;++k)n=c.changedTouches[k],l[n.identifier]=n,n.Kb=!0;for(k=0;k<c.targetTouches.length;++k)n=c.targetTouches[k],l[n.identifier].Pb=!0;var p=n=Ma;D[p+4>>2]=c.ctrlKey;D[p+8>>2]=c.shiftKey;D[p+12>>2]=c.altKey;D[p+16>>2]=c.metaKey;p+=20;var ra=e.canvas?e.canvas.getBoundingClientRect():
void 0,cb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},db=0;for(k in l){var v=l[k];D[p>>2]=v.identifier;D[p+4>>2]=v.screenX;D[p+8>>2]=v.screenY;D[p+12>>2]=v.clientX;D[p+16>>2]=v.clientY;D[p+20>>2]=v.pageX;D[p+24>>2]=v.pageY;D[p+28>>2]=v.Kb;D[p+32>>2]=v.Pb;ra?(D[p+44>>2]=v.clientX-ra.left,D[p+48>>2]=v.clientY-ra.top):(D[p+44>>2]=0,D[p+48>>2]=0);D[p+36>>2]=v.clientX-cb.left;D[p+40>>2]=v.clientY-cb.top;p+=52;if(32<=++db)break}D[n>>2]=db;P(d,f,n,b)&&c.preventDefault()},zb:c})}
function hb(a,b,c,d,f,k){a||(a=e.canvas);a={target:N(a),yb:!1,xb:k,Ab:d,Bb:function(a){a=a||window.event;P(d,f,0,b)&&a.preventDefault()},zb:c};M(a)}
function ib(a,b,c,d,f){function k(c){c=c||window.event;eb(K,c,a);E[K+72>>3]=c.wheelDeltaX||0;E[K+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);E[K+88>>3]=0;D[K+96>>2]=0;P(d,9,K,b)&&c.preventDefault()}function l(c){c=c||window.event;var f=K;eb(f,c,a);E[f+72>>3]=c.deltaX;E[f+80>>3]=c.deltaY;E[f+88>>3]=c.deltaZ;D[f+96>>2]=c.deltaMode;P(d,9,f,b)&&c.preventDefault()}K||(K=O(104));M({target:a,yb:!0,xb:f,Ab:d,Bb:"wheel"==f?l:k,zb:c})}
var jb=1,kb=0,lb=[],R=[],mb=[],S=[],T=[],U=[],V=[],nb={},ob=null,ab={},W={},pb={};function X(a){kb||(kb=a)}function Y(a){for(var b=jb++,c=a.length;c<b;c++)a[c]=null;return b}
function qb(a){a||(a=ob);if(!a.Nb){a.Nb=!0;var b=a.Hb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,k){c.drawElementsInstancedANGLE(a,b,d,f,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.Tb=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var $a={},rb,sb,tb=["default","low-power","high-performance"];function ub(a,b,c,d){for(var f=0;f<a;f++){var k=Z[c](),l=k&&Y(d);k?(k.name=l,d[l]=k):X(1282);D[b+4*f>>2]=l}}
function vb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){X(1280);y("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:X(1280);return}D[b>>2]=c}else X(1281)}function wb(a){var b=pa(a)+1,c=O(b);A(a,B,c,b);return c}var xb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},yb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};
function zb(a,b,c,d,f){if(b=xb[b]*yb[a])switch(c=f+d*(c*b+4-1&-4),a){case 5121:return B.subarray(f,c);case 5126:return va.subarray(f>>2,c>>2);case 5125:case 34042:return ua.subarray(f>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return ta.subarray(f>>1,c>>1);default:X(1280)}else X(1280)}for(var Z,Ab=0;256>Ab;Ab++);
var Eb=e.asm({},{d:x,aa:function(a){e.___errno_location&&(D[e.___errno_location()>>2]=a);return a},s:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Bb()});document.body.append(a)},r:function(){document.getElementById("_sokol_app_input_element").focus()},ya:function(){return e.Cb?e.Cb.bufferSize:0},ua:function(a,b,c){e.wb=null;e.Cb=null;"undefined"!==typeof AudioContext?(e.wb=new AudioContext({sampleRate:a,
latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.wb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.wb=null,console.log("sokol_audio.h: no WebAudio support"));return e.wb?(console.log("sokol_audio.h: sample rate ",e.wb.sampleRate),e.Cb=e.wb.createScriptProcessor(c,0,b),e.Cb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Cb(b);if(c)for(var d=
a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var t=a.outputBuffer.getChannelData(m),n=0;n<b;n++)t[n]=va[(c>>2)+(d*n+m)]},e.Cb.connect(e.wb.destination),a=function(){e.wb&&"suspended"===e.wb.state&&e.wb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},oa:function(){return e.wb?e.wb.sampleRate:0},v:function(){return performance.now()},ka:function(a){var b=C(a),c=new XMLHttpRequest;c.open("GET",
b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);z("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},G:function(){return window.devicePixelRatio||1},$:function(a,b,c){a=a?N(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),E[b>>3]=a.right-a.left,E[c>>3]=a.bottom-a.top):(E[b>>3]=a.clientWidth,E[c>>3]=a.clientHeight);return 0},Va:function(){return F},Ua:function(a,b,c){B.set(B.subarray(b,b+c),a)},Ta:function(a,
b){function c(d){Db(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Sa:function(a){Ya(a)},_:function(a,b,c){a=Za(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ra:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},Qa:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},Pa:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},Oa:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},Na:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},Ma:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");
return 0},La:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},Ka:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Ja:function(a,b,c,d){fb(a,b,c,d);return 0},Ia:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},Ha:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},Ga:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},Fa:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},Ea:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},Da:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");
return 0},Ca:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(ib(a,b,c,d,"mousewheel"),0):-1},Z:function(a,b){var c={};b>>=2;c.alpha=!!D[b];c.depth=!!D[b+1];c.stencil=!!D[b+2];c.antialias=!!D[b+3];c.premultipliedAlpha=!!D[b+4];c.preserveDrawingBuffer=!!D[b+5];c.powerPreference=tb[D[b+6]];c.failIfMajorPerformanceCaveat=!!D[b+7];c.Ob=D[b+8];c.Vb=D[b+9];c.Ib=D[b+10];c.Mb=D[b+11];c.Wb=D[b+12];c.Xb=D[b+13];a=Za(a);if(!a||c.Mb)c=
0;else{if(b=a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=O(8);var d={handle:b,attributes:c,version:c.Ob,Hb:a};a.canvas&&(a.canvas.Qb=d);nb[b]=d;("undefined"===typeof c.Ib||c.Ib)&&qb(d)}c=b}return c},Ba:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},Aa:function(a){ob=nb[a];e.Sb=Z=ob&&ob.Hb;return!a||Z?0:-5},A:function(a){Z.activeTexture(a)},Y:function(a,b){Z.attachShader(R[a],V[b])},l:function(a,b){Z.bindBuffer(a,lb[b])},f:function(a,
b){Z.bindFramebuffer(a,mb[b])},za:function(a,b){Z.bindRenderbuffer(a,S[b])},q:function(a,b){Z.bindTexture(a,T[b])},X:function(a,b,c,d){Z.blendColor(a,b,c,d)},W:function(a,b){Z.blendEquationSeparate(a,b)},V:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},U:function(a,b,c,d){Z.bufferData(a,c?B.subarray(c,c+b):b,d)},T:function(a,b,c,d){Z.bufferSubData(a,b,B.subarray(d,d+c))},n:function(a){return Z.checkFramebufferStatus(a)},xa:function(a){Z.clear(a)},wa:function(a,b,c,d){Z.clearColor(a,b,c,d)},va:function(a){Z.clearDepth(a)},
ta:function(a){Z.clearStencil(a)},z:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){Z.compileShader(V[a])},S:function(a,b,c,d,f,k,l,m){Z.compressedTexImage2D(a,b,c,d,f,k,m?B.subarray(m,m+l):null)},ra:function(){var a=Y(R),b=Z.createProgram();b.name=a;R[a]=b;return a},qa:function(a){var b=Y(V);V[b]=Z.createShader(a);return b},R:function(a){Z.cullFace(a)},pa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=lb[d];f&&(Z.deleteBuffer(f),f.name=0,lb[d]=null,d==rb&&(rb=0),d==sb&&(sb=
0))}},k:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],f=mb[d];f&&(Z.deleteFramebuffer(f),f.name=0,mb[d]=null)}},Q:function(a){if(a){var b=R[a];b?(Z.deleteProgram(b),b.name=0,R[a]=null,W[a]=null):X(1281)}},p:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=S[d];f&&(Z.deleteRenderbuffer(f),f.name=0,S[d]=null)}},y:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},P:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=T[d];f&&(Z.deleteTexture(f),f.name=0,T[d]=null)}},
x:function(a){Z.depthFunc(a)},w:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},O:function(a,b,c){Z.drawArrays(a,b,c)},N:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},na:function(a){Z.enableVertexAttribArray(a)},j:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,S[d])},c:function(a,b,c,d,f){Z.framebufferTexture2D(a,b,c,T[d],f)},M:function(a){Z.frontFace(a)},L:function(a,b){ub(a,b,"createBuffer",lb)},m:function(a,b){ub(a,
b,"createFramebuffer",mb)},ma:function(a,b){ub(a,b,"createRenderbuffer",S)},la:function(a,b){ub(a,b,"createTexture",T)},K:function(a,b){return Z.getAttribLocation(R[a],C(b))},u:function(a,b){vb(a,b)},ja:function(a,b,c,d){a=Z.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,B,d,b),c&&(D[c>>2]=b)):c&&(D[c>>2]=0)},J:function(a,b,c){if(c)if(a>=jb)X(1281);else{var d=W[a];if(d)if(35716==b)a=Z.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==
b)D[c>>2]=d.Gb;else if(35722==b){if(-1==d.Db){a=R[a];var f=Z.getProgramParameter(a,35721);for(b=d.Db=0;b<f;++b)d.Db=Math.max(d.Db,Z.getActiveAttrib(a,b).name.length+1)}D[c>>2]=d.Db}else if(35381==b){if(-1==d.Eb)for(a=R[a],f=Z.getProgramParameter(a,35382),b=d.Eb=0;b<f;++b)d.Eb=Math.max(d.Eb,Z.getActiveUniformBlockName(a,b).length+1);D[c>>2]=d.Eb}else D[c>>2]=Z.getProgramParameter(R[a],b);else X(1282)}else X(1281)},ia:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");0<b&&
d?(b=A(a,B,d,b),c&&(D[c>>2]=b)):c&&(D[c>>2]=0)},I:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),D[c>>2]=null===a||0==a.length?0:a.length+1):D[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},ha:function(a){if(pb[a])return pb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=wb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Z.getParameter(a))||X(1280);b=wb(b);break;case 7938:b=wb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=wb(b);break;default:return X(1280),0}return pb[a]=b},i:function(a,b){b=C(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=
W[a]&&W[a].Jb[b])&&0<=c&&c<a[0]?a[1]+c:-1},ga:function(a){Z.linkProgram(R[a]);var b=R[a];a=W[a]={Jb:{},Gb:0,Db:-1,Eb:-1};for(var c=a.Jb,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var k=Z.getActiveUniform(b,f),l=k.name;a.Gb=Math.max(a.Gb,l.length+1);var m=l.lastIndexOf("[");0<m&&(l=l.slice(0,m));if(m=Z.getUniformLocation(b,l)){var t=Y(U);c[l]=[k.size,t];U[t]=m;for(var n=1;n<k.size;++n)m=Z.getUniformLocation(b,l+"["+n+"]"),t=Y(U),U[t]=m}}},H:function(a,b){Z.polygonOffset(a,b)},fa:function(a,b,c,
d){Z.renderbufferStorage(a,b,c,d)},ea:function(a,b,c,d){Z.scissor(a,b,c,d)},da:function(a,b,c,d){for(var f="",k=0;k<b;++k){var l=d?D[d+4*k>>2]:-1;f+=C(D[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(V[a],f)},ca:function(a,b,c){Z.stencilFunc(a,b,c)},F:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},t:function(a){Z.stencilMask(a)},ba:function(a,b,c){Z.stencilOp(a,b,c)},E:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},D:function(a,b,c,d,f,k,l,m,t){Z.texImage2D(a,b,c,d,f,k,l,m,t?zb(m,l,d,f,t):null)},h:function(a,
b,c){Z.texParameteri(a,b,c)},o:function(a,b,c,d,f,k,l,m,t){var n=null;t&&(n=zb(m,l,f,k,t));Z.texSubImage2D(a,b,c,d,f,k,l,m,n)},C:function(a,b){Z.uniform1i(U[a],b)},_a:function(a){Z.useProgram(R[a])},Za:function(a,b){Z.vertexAttribDivisor(a,b)},Ya:function(a,b,c,d,f,k){Z.vertexAttribPointer(a,b,c,!!d,f,k)},B:function(a,b,c,d){Z.viewport(a,b,c,d)},Xa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())z("_sargs_add_kvp","void",["string","string"],
[b.value[0],b.value[1]])},Wa:Ya,a:6757200},buffer);e.asm=Eb;e.___em_js___sapp_js_create_textfield=function(){return e.asm.$a.apply(null,arguments)};e.___em_js___sapp_js_focus_textfield=function(){return e.asm.ab.apply(null,arguments)};e.___em_js___sapp_js_unfocus_textfield=function(){return e.asm.bb.apply(null,arguments)};e.___em_js___saudio_js_buffer_frames=function(){return e.asm.cb.apply(null,arguments)};e.___em_js___saudio_js_init=function(){return e.asm.db.apply(null,arguments)};
e.___em_js___saudio_js_sample_rate=function(){return e.asm.eb.apply(null,arguments)};e.___em_js___stm_js_perfnow=function(){return e.asm.fb.apply(null,arguments)};e.___em_js__emsc_load_file=function(){return e.asm.gb.apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return e.asm.hb.apply(null,arguments)};var Bb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.ib.apply(null,arguments)};e.__sargs_add_kvp=function(){return e.asm.jb.apply(null,arguments)};
var Cb=e.__saudio_emsc_pull=function(){return e.asm.kb.apply(null,arguments)};e._emsc_load_data=function(){return e.asm.lb.apply(null,arguments)};e._free=function(){return e.asm.mb.apply(null,arguments)};e._main=function(){return e.asm.nb.apply(null,arguments)};
var O=e._malloc=function(){return e.asm.ob.apply(null,arguments)},ka=e.stackAlloc=function(){return e.asm.tb.apply(null,arguments)},na=e.stackRestore=function(){return e.asm.ub.apply(null,arguments)},ma=e.stackSave=function(){return e.asm.vb.apply(null,arguments)},Db=e.dynCall_idi=function(){return e.asm.pb.apply(null,arguments)},P=e.dynCall_iiii=function(){return e.asm.qb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.rb.apply(null,arguments)};
e.dynCall_vi=function(){return e.asm.sb.apply(null,arguments)};e.asm=Eb;e.ccall=z;e.cwrap=function(a,b,c,d){c=c||[];var f=c.every(function(a){return"number"===a});return"string"!==b&&f&&!d?ja(a):function(){return z(a,b,c,arguments,d)}};function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;I=function Fb(){e.calledRun||Gb();e.calledRun||(I=Fb)};
e.callMain=function(a){a=a||[];Ba||(Ba=!0,G(xa));var b=a.length+1,c=ka(4*(b+1));D[c>>2]=qa(e.thisProgram);for(var d=1;d<b;d++)D[(c>>2)+d]=qa(a[d-1]);D[(c>>2)+b]=0;try{var f=e._main(b,c,0);if(!e.noExitRuntime||0!==f){if(!e.noExitRuntime&&(ia=!0,G(za),e.onExit))e.onExit(f);e.quit(f,new w(f))}}catch(k){k instanceof w||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),y("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Gb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ia)){Ba||(Ba=!0,G(xa));G(ya);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Hb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Aa.unshift(b)}G(Aa)}}a=a||e.arguments;if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ca();G(wa);0<H||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Gb;function x(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ea(a),y(a),a=JSON.stringify(a)):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=x;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Hb=!0;e.noInitialRun&&(Hb=!1);e.noExitRuntime=!0;Gb();
