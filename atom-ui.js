var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in f)f.hasOwnProperty(k)&&(h[k]=f[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var x="",ea,y;
if(ba){x=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",z);t=function(a){process.exit(a)};
f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in h)h.hasOwnProperty(k)&&(f[k]=h[k]);h=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var C;f.noExitRuntime&&(C=f.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");var D,ka=new WebAssembly.Table({initial:63,maximum:63,element:"anyfunc"}),la=!1;function assert(a,b){a||z("Assertion failed: "+b)}
function ma(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c,d){var e={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=oa(c);E(a,F,b,c)}return b},array:function(a){var b=oa(a.length);pa.set(a,b);return b}},g=ma(a),l=[];a=0;if(d)for(var m=0;m<d.length;m++){var q=e[c[m]];q?(0===a&&(a=qa()),l[m]=q(d[m])):l[m]=d[m]}c=g.apply(null,l);c=function(a){return"string"===b?G(a):"boolean"===b?!!a:a}(c);0!==a&&ra(a);return c}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function G(a,b){return a?ta(F,a,b):""}
function E(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var m=a.charCodeAt(++g);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function va(a){var b=ua(a)+1,c=oa(b);E(a,pa,c,b);return c}function wa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,pa,F,xa,ya,H,za,I,J;
function Aa(a){buffer=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=H=new Int32Array(a);f.HEAPU8=F=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var Ba=f.TOTAL_MEMORY||33554432;f.wasmMemory?D=f.wasmMemory:D=new WebAssembly.Memory({initial:Ba/65536});D&&(buffer=D.buffer);Ba=buffer.byteLength;Aa(buffer);H[1709820]=12082320;
function Ca(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ub;"number"===typeof c?void 0===b.Mb?f.dynCall_v(c):f.dynCall_vi(c,b.Mb):c(void 0===b.Mb?null:b.Mb)}}}var Da=[],Ea=[],Fa=[],Ga=[],Ha=[];function Ia(){var a=f.preRun.shift();Da.unshift(a)}var K=0,Ja=null,L=null;f.preloadedImages={};f.preloadedAudios={};function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);la=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}
function Ka(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="atom-ui.wasm";if(!Ka()){var La=M;M=f.locateFile?f.locateFile(La,x):x+La}function Ma(){try{if(B)return new Uint8Array(B);if(y)return y(M);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Na(){return B||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ma())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ma()})}Ea.push({Ub:function(){Oa()}});var Pa=[null,[],[]],Qa=0;function Ra(){Qa+=4;return H[Qa-4>>2]}var Sa={},Ta=0,Ua=0,N=0,Va=0,Wa=0,Xa=null,Ya=null,Za=!1;function $a(){for(var a=O.length-1;0<=a;--a)ab(a);O=[];bb=[]}var bb=[];
function cb(){if(db&&eb.Eb)for(var a=0;a<bb.length;++a){var b=bb[a];bb.splice(a,1);--a;b.hc.apply(this,b.Zb)}}var db=0,eb=null,O=[];function fb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function ab(a){var b=O[a];b.target.removeEventListener(b.Db,b.Sb,b.Fb);O.splice(a,1)}
function Q(a){function b(b){++db;eb=a;cb();a.Hb(b);cb();--db}if(a.Gb)a.Sb=b,a.target.addEventListener(a.Db,b,a.Fb),O.push(a),Za||(Ga.push($a),Za=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Db==a.Db&&ab(c--)}var gb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function R(a){try{if(!a)return window;"number"===typeof a&&(a=gb[a]||G(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function hb(a){"number"===typeof a&&(a=G(a));return a&&"#canvas"!==a?"undefined"!==typeof ib&&jb[a]?jb[a]:R(a):"undefined"!==typeof ib&&jb.canvas?jb.canvas:f.canvas}
function kb(a,b,c,d,e,g){Ta||(Ta=S(164));a={target:R(a),Eb:fb()?!1:!0,Db:g,Gb:d,Hb:function(a){a=a||event;var c=Ta;E(a.key?a.key:"",F,c+0,32);E(a.code?a.code:"",F,c+32,32);H[c+64>>2]=a.location;H[c+68>>2]=a.ctrlKey;H[c+72>>2]=a.shiftKey;H[c+76>>2]=a.altKey;H[c+80>>2]=a.metaKey;H[c+84>>2]=a.repeat;E(a.locale?a.locale:"",F,c+88,32);E(a.char?a.char:"",F,c+120,32);H[c+152>>2]=a.charCode;H[c+156>>2]=a.keyCode;H[c+160>>2]=a.which;T(d,e,c,b)&&a.preventDefault()},Fb:c};Q(a)}
function lb(a,b,c){J[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();H[a+8>>2]=b.screenX;H[a+12>>2]=b.screenY;H[a+16>>2]=b.clientX;H[a+20>>2]=b.clientY;H[a+24>>2]=b.ctrlKey;H[a+28>>2]=b.shiftKey;H[a+32>>2]=b.altKey;H[a+36>>2]=b.metaKey;xa[a+40>>1]=b.button;xa[a+42>>1]=b.buttons;H[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Xa;H[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ya;if(f.canvas){var d=f.canvas.getBoundingClientRect();
H[a+60>>2]=b.clientX-d.left;H[a+64>>2]=b.clientY-d.top}else H[a+60>>2]=0,H[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},H[a+52>>2]=b.clientX-d.left,H[a+56>>2]=b.clientY-d.top):(H[a+52>>2]=0,H[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Xa=b.screenX,Ya=b.screenY)}
function mb(a,b,c,d,e,g){Ua||(Ua=S(72));a=R(a);c={target:a,Eb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Db:g,Gb:d,Hb:function(c){c=c||event;lb(Ua,c,a);T(d,e,Ua,b)&&c.preventDefault()},Fb:c};fb()&&"mousedown"==g&&(c.Eb=!1);Q(c)}
function nb(a,b,c,d){Va||(Va=S(36));a=R(a);Q({target:a,Eb:!1,Db:"resize",Gb:d,Hb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Va;H[l>>2]=c.detail;H[l+4>>2]=document.body.clientWidth;H[l+8>>2]=document.body.clientHeight;
H[l+12>>2]=innerWidth;H[l+16>>2]=innerHeight;H[l+20>>2]=outerWidth;H[l+24>>2]=outerHeight;H[l+28>>2]=e[0];H[l+32>>2]=e[1];T(d,10,l,b)&&c.preventDefault()}},Fb:c})}
function ob(a,b,c,d,e,g){Wa||(Wa=S(1684));a=R(a);Q({target:a,Eb:"touchstart"==g||"touchend"==g,Db:g,Gb:d,Hb:function(c){c=c||event;for(var g={},l=0;l<c.touches.length;++l){var p=c.touches[l];p.Ob=!1;g[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],g[p.identifier]=p,p.Ob=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],g[p.identifier].Xb=!0;var r=p=Wa;H[r+4>>2]=c.ctrlKey;H[r+8>>2]=c.shiftKey;H[r+12>>2]=c.altKey;H[r+16>>2]=c.metaKey;r+=20;var P=f.canvas?f.canvas.getBoundingClientRect():
void 0,pb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},qb=0;for(l in g){var w=g[l];H[r>>2]=w.identifier;H[r+4>>2]=w.screenX;H[r+8>>2]=w.screenY;H[r+12>>2]=w.clientX;H[r+16>>2]=w.clientY;H[r+20>>2]=w.pageX;H[r+24>>2]=w.pageY;H[r+28>>2]=w.Ob;H[r+32>>2]=w.Xb;P?(H[r+44>>2]=w.clientX-P.left,H[r+48>>2]=w.clientY-P.top):(H[r+44>>2]=0,H[r+48>>2]=0);H[r+36>>2]=w.clientX-pb.left;H[r+40>>2]=w.clientY-pb.top;r+=52;if(32<=++qb)break}H[p>>2]=qb;T(d,e,p,b)&&c.preventDefault()},Fb:c})}
function rb(a,b,c,d,e,g){a||(a=f.canvas);a={target:R(a),Eb:!1,Db:g,Gb:d,Hb:function(a){a=a||event;T(d,e,0,b)&&a.preventDefault()},Fb:c};Q(a)}
function sb(a,b,c,d,e){function g(c){c=c||event;lb(N,c,a);J[N+72>>3]=c.wheelDeltaX||0;J[N+80>>3]=-(c.wheelDeltaY||c.wheelDelta);J[N+88>>3]=0;H[N+96>>2]=0;T(d,9,N,b)&&c.preventDefault()}function l(c){c=c||event;var e=N;lb(e,c,a);J[e+72>>3]=c.deltaX;J[e+80>>3]=c.deltaY;J[e+88>>3]=c.deltaZ;H[e+96>>2]=c.deltaMode;T(d,9,e,b)&&c.preventDefault()}N||(N=S(104));Q({target:a,Eb:!0,Db:e,Gb:d,Hb:"wheel"==e?l:g,Fb:c})}var tb=1,ub=0,vb=[],U=[],wb=[],xb=[],yb=[],V=[],W=[],zb={},Ab=null,jb={},Bb={},Cb={};
function X(a){ub||(ub=a)}function Db(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}var Eb=null,Y=[0];function Fb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,g){b.drawArraysInstancedANGLE(a,d,e,g)},a.drawElementsInstanced=function(a,d,e,g,l){b.drawElementsInstancedANGLE(a,d,e,g,l)})}
function Gb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Hb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Ib(a){a||(a=Ab);if(!a.Vb){a.Vb=!0;var b=a.Lb;2>a.version&&(Fb(b),Gb(b),Hb(b));b.ac=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var ib={},Jb,Kb,Lb=["default","low-power","high-performance"];function Mb(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&Db(d);g?(g.name=l,d[l]=g):X(1282);H[b+4*e>>2]=l}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else X(1281)}function Ob(a){var b=ua(a)+1,c=S(b);E(a,F,c,b);return c}
var Pb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Qb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};function Rb(a,b,c,d,e){if(b=Pb[b]*Qb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5121:return F.subarray(e,c);case 5126:return I.subarray(e>>2,c>>2);case 5125:case 34042:return za.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return ya.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}var Z;Eb=new Float32Array(256);
for(var Sb=0;256>Sb;Sb++)Y[Sb]=Eb.subarray(0,Sb+1);
var Xb={$a:function(){},_:function(a,b){Qa=b;return 0},eb:function(a,b){Qa=b;try{var c=G(Ra()),d=Ra(),e=Ra();return(void 0).open(c,d,e).fd}catch(g){return z(g),-g.Qb}},cb:function(a,b){Qa=b;return 0},A:function(){},kb:function(){console.log("fs.h: registering Module['ccall']");f.ccall=na},lb:function(a){var b=G(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);na("emsc_load_data","int",["string","array","number"],[b,a,a.length])};
c.send()},T:function(){return devicePixelRatio||1},Y:function(a,b,c){a=a?R(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),J[b>>3]=a.right-a.left,J[c>>3]=a.bottom-a.top):(J[b>>3]=a.clientWidth,J[c>>3]=a.clientHeight);return 0},Ya:function(a,b,c){F.set(F.subarray(b,b+c),a)},Ja:function(a,b){function c(d){Tb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){if(2147418112<a)return!1;for(var b=Math.max(pa.length,16777216);b<a;)536870912>=
b?b=wa(2*b):b=Math.min(wa((3*b+2147483648)/4),2147418112);a:{try{D.grow(b-buffer.byteLength+65535>>16);Aa(D.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},P:function(a,b,c){a=hb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Sa:function(a,b,c,d){kb(a,b,c,d,2,"keydown");return 0},Qa:function(a,b,c,d){kb(a,b,c,d,1,"keypress");return 0},Ra:function(a,b,c,d){kb(a,b,c,d,3,"keyup");return 0},jb:function(a,b,c,d){mb(a,b,c,d,5,"mousedown");return 0},Va:function(a,b,c,d){mb(a,b,c,d,33,"mouseenter");
return 0},Ua:function(a,b,c,d){mb(a,b,c,d,34,"mouseleave");return 0},Xa:function(a,b,c,d){mb(a,b,c,d,8,"mousemove");return 0},db:function(a,b,c,d){mb(a,b,c,d,6,"mouseup");return 0},Fa:function(a,b,c,d){nb(a,b,c,d);return 0},Ma:function(a,b,c,d){ob(a,b,c,d,25,"touchcancel");return 0},Na:function(a,b,c,d){ob(a,b,c,d,23,"touchend");return 0},Oa:function(a,b,c,d){ob(a,b,c,d,24,"touchmove");return 0},Pa:function(a,b,c,d){ob(a,b,c,d,22,"touchstart");return 0},La:function(a,b,c,d){rb(a,b,c,d,31,"webglcontextlost");
return 0},Ka:function(a,b,c,d){rb(a,b,c,d,32,"webglcontextrestored");return 0},Ta:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(sb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(sb(a,b,c,d,"mousewheel"),0):-1},L:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Lb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.Wb=H[b+8];c.dc=H[b+9];c.Pb=
H[b+10];c.Tb=H[b+11];c.ec=H[b+12];c.fc=H[b+13];a=hb(a);if(!a||c.Tb)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=S(8);var d={handle:b,attributes:c,version:c.Wb,Lb:a};a.canvas&&(a.canvas.Yb=d);zb[b]=d;("undefined"===typeof c.Pb||c.Pb)&&Ib(d);c=b}else c=0;return c},ia:function(a,b){a=zb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Fb(Z):"OES_vertex_array_object"==b?Gb(Z):"WEBGL_draw_buffers"==b&&Hb(Z);return!!a.Lb.getExtension(b)},wa:function(a){a>>=
2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},ra:function(a){Ab=zb[a];f.$b=Z=Ab&&Ab.Lb;return!a||Z?0:-5},Z:function(){return 0},ab:function(a,b,c,d){try{var e=Sa.cc(a),g=Sa.bc(e,b,c);H[d>>2]=g;return 0}catch(l){return z(l),l.Qb}},Wa:function(){return 0},bb:function(a,b,c,d){try{for(var e=0,g=0;g<c;g++){for(var l=H[b+8*g>>2],m=H[b+(8*g+4)>>2],q=0;q<m;q++){var p=F[l+q],r=Pa[a];0===p||10===p?((1===a?ja:A)(ta(r,0)),r.length=0):r.push(p)}e+=m}H[d>>2]=e;return 0}catch(P){return z(P),
P.Qb}},g:function(a){Z.activeTexture(a)},Q:function(a,b){Z.attachShader(U[a],W[b])},b:function(a,b){Z.bindBuffer(a,vb[b])},f:function(a,b){Z.bindFramebuffer(a,wb[b])},Da:function(a,b){Z.bindRenderbuffer(a,xb[b])},a:function(a,b){Z.bindTexture(a,yb[b])},G:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,b){Z.blendEquationSeparate(a,b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},U:function(a,b,c,d){Z.bufferData(a,c?F.subarray(c,c+b):b,d)},q:function(a,b,c,d){Z.bufferSubData(a,b,F.subarray(d,
d+c))},m:function(a){return Z.checkFramebufferStatus(a)},sa:function(a){Z.clear(a)},va:function(a,b,c,d){Z.clearColor(a,b,c,d)},ua:function(a){Z.clearDepth(a)},ta:function(a){Z.clearStencil(a)},y:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},gb:function(a){Z.compileShader(W[a])},S:function(a,b,c,d,e,g,l,m){Z.compressedTexImage2D(a,b,c,d,e,g,m?F.subarray(m,m+l):null)},Aa:function(){var a=Db(U),b=Z.createProgram();b.name=a;U[a]=b;return a},ib:function(a){var b=Db(W);W[b]=Z.createShader(a);return b},
F:function(a){Z.cullFace(a)},Ga:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=vb[d];e&&(Z.deleteBuffer(e),e.name=0,vb[d]=null,d==Jb&&(Jb=0),d==Kb&&(Kb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=wb[d];e&&(Z.deleteFramebuffer(e),e.name=0,wb[d]=null)}},W:function(a){if(a){var b=U[a];b?(Z.deleteProgram(b),b.name=0,U[a]=null,Bb[a]=null):X(1281)}},r:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=xb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,xb[d]=null)}},z:function(a){if(a){var b=
W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=yb[d];e&&(Z.deleteTexture(e),e.name=0,yb[d]=null)}},w:function(a){Z.depthFunc(a)},x:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},B:function(a){Z.disableVertexAttribArray(a)},ga:function(a,b,c){Z.drawArrays(a,b,c)},ha:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},oa:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,
xb[d])},c:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,yb[d],e)},E:function(a){Z.frontFace(a)},V:function(a,b){Mb(a,b,"createBuffer",vb)},n:function(a,b){Mb(a,b,"createFramebuffer",wb)},Ea:function(a,b){Mb(a,b,"createRenderbuffer",xb)},Ba:function(a,b){Mb(a,b,"createTexture",yb)},xa:function(a,b){return Z.getAttribLocation(U[a],G(b))},i:function(a,b){Nb(a,b)},ya:function(a,b,c,d){a=Z.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},O:function(a,b,c){if(c)if(a>=
tb)X(1281);else{var d=Bb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Nb;else if(35722==b){if(-1==d.Jb){a=U[a];var e=Z.getProgramParameter(a,35721);for(b=d.Jb=0;b<e;++b)d.Jb=Math.max(d.Jb,Z.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Jb}else if(35381==b){if(-1==d.Kb)for(a=U[a],e=Z.getProgramParameter(a,35382),b=d.Kb=0;b<e;++b)d.Kb=Math.max(d.Kb,Z.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Kb}else H[c>>2]=Z.getProgramParameter(U[a],
b);else X(1282)}else X(1281)},fb:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},$:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},Ha:function(a){if(Cb[a])return Cb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+
a}));b=Ob(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Ob(b);break;case 7938:b=Ob("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ob(b);break;default:return X(1280),0}return Cb[a]=b},l:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");
c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Bb[a]&&Bb[a].Rb[b])&&0<=c&&c<a[0]?a[1]+c:-1},za:function(a){Z.linkProgram(U[a]);var b=U[a];a=Bb[a]={Rb:{},Nb:0,Jb:-1,Kb:-1};for(var c=a.Rb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Nb=Math.max(a.Nb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var q=Db(V);c[l]=[g.size,q];V[q]=m;for(var p=1;p<g.size;++p)m=Z.getUniformLocation(b,l+"["+p+
"]"),q=Db(V),V[q]=m}}},D:function(a,b){Z.polygonOffset(a,b)},Ca:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},M:function(a,b,c,d){Z.scissor(a,b,c,d)},hb:function(a,b,c,d){for(var e="",g=0;g<b;++g){var l=d?H[d+4*g>>2]:-1;e+=G(H[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(W[a],e)},fa:function(a,b,c){Z.stencilFunc(a,b,c)},K:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},v:function(a){Z.stencilMask(a)},ea:function(a,b,c){Z.stencilOp(a,b,c)},J:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},R:function(a,
b,c,d,e,g,l,m,q){Z.texImage2D(a,b,c,d,e,g,l,m,q?Rb(m,l,d,e,q):null)},h:function(a,b,c){Z.texParameteri(a,b,c)},p:function(a,b,c,d,e,g,l,m,q){var p=null;q&&(p=Rb(m,l,e,g,q));Z.texSubImage2D(a,b,c,d,e,g,l,m,p)},na:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},C:function(a,b){Z.uniform1i(V[a],b)},ma:function(a,b,c){if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>
2,c+8*b>>2);Z.uniform2fv(V[a],d)},la:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},ka:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2],d[e+3]=I[c+(4*e+12)>>2];else d=I.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],d)},ja:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],g=0;g<16*b;g+=16)e[g]=
I[d+4*g>>2],e[g+1]=I[d+(4*g+4)>>2],e[g+2]=I[d+(4*g+8)>>2],e[g+3]=I[d+(4*g+12)>>2],e[g+4]=I[d+(4*g+16)>>2],e[g+5]=I[d+(4*g+20)>>2],e[g+6]=I[d+(4*g+24)>>2],e[g+7]=I[d+(4*g+28)>>2],e[g+8]=I[d+(4*g+32)>>2],e[g+9]=I[d+(4*g+36)>>2],e[g+10]=I[d+(4*g+40)>>2],e[g+11]=I[d+(4*g+44)>>2],e[g+12]=I[d+(4*g+48)>>2],e[g+13]=I[d+(4*g+52)>>2],e[g+14]=I[d+(4*g+56)>>2],e[g+15]=I[d+(4*g+60)>>2];else e=I.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],!!c,e)},qa:function(a){Z.useProgram(U[a])},_a:function(a,b){Z.vertexAttribDivisor(a,
b)},pa:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},N:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:D,u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ub()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Ia:function(){window.addEventListener("beforeunload",function(a){0!=Vb()&&(a.preventDefault(),a.returnValue=" ")})},
s:function(){document.getElementById("_sokol_app_input_element").blur()},aa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())na("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},ba:function(){return f.Ib?f.Ib.bufferSize:0},da:function(a,b,c){f.Cb=null;f.Ib=null;"undefined"!==typeof AudioContext?(f.Cb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==
typeof webkitAudioContext?(f.Cb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(f.Cb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Cb?(console.log("sokol_audio.h: sample rate ",f.Cb.sampleRate),f.Ib=f.Cb.createScriptProcessor(c,0,b),f.Ib.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Wb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var q=a.outputBuffer.getChannelData(m),p=0;p<
b;p++)q[p]=I[(c>>2)+(d*p+m)]},f.Ib.connect(f.Cb.destination),a=function(){f.Cb&&"suspended"===f.Cb.state&&f.Cb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ca:function(){return f.Cb?f.Cb.sampleRate:0},o:function(){return performance.now()},table:ka},Yb=function(){function a(a){f.asm=a.exports;K--;f.monitorRunDependencies&&f.monitorRunDependencies(K);0==K&&(null!==Ja&&(clearInterval(Ja),
Ja=null),L&&(a=L,L=null,a()))}function b(b){a(b.instance)}function c(a){return Na().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var d={env:Xb,wasi_unstable:Xb};K++;f.monitorRunDependencies&&f.monitorRunDependencies(K);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||
Ka()||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();f.asm=Yb;var Oa=f.___wasm_call_ctors=function(){return f.asm.mb.apply(null,arguments)};f._emsc_load_data=function(){return f.asm.nb.apply(null,arguments)};
var Ub=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.ob.apply(null,arguments)},Vb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.pb.apply(null,arguments)};f._main=function(){return f.asm.qb.apply(null,arguments)};var S=f._malloc=function(){return f.asm.rb.apply(null,arguments)};f._free=function(){return f.asm.sb.apply(null,arguments)};var Wb=f.__saudio_emsc_pull=function(){return f.asm.tb.apply(null,arguments)};f.__sargs_add_kvp=function(){return f.asm.ub.apply(null,arguments)};
var qa=f.stackSave=function(){return f.asm.vb.apply(null,arguments)},oa=f.stackAlloc=function(){return f.asm.wb.apply(null,arguments)},ra=f.stackRestore=function(){return f.asm.xb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.yb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.zb.apply(null,arguments)};var T=f.dynCall_iiii=function(){return f.asm.Ab.apply(null,arguments)},Tb=f.dynCall_idi=function(){return f.asm.Bb.apply(null,arguments)};f.asm=Yb;var Zb;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function $b(){Zb||ac();Zb||(L=$b)};
function ac(a){function b(){if(!Zb&&(Zb=!0,!la)){Ca(Ea);Ca(Fa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(bc){var b=a,d=f._main;b=b||[];var e=b.length+1,g=oa(4*(e+1));H[g>>2]=va(aa);for(var l=1;l<e;l++)H[(g>>2)+l]=va(b[l-1]);H[(g>>2)+e]=0;try{var m=d(e,g);if(!C||0!==m){if(!C&&(la=!0,f.onExit))f.onExit(m);t(m,new ia(m))}}catch(q){q instanceof ia||("SimulateInfiniteLoop"==q?C=!0:((b=q)&&"object"===typeof q&&q.stack&&(b=[q,q.stack]),A("exception thrown: "+b),t(1,q)))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ha.unshift(b);Ca(Ha)}}a=a||n;if(!(0<K)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ia();Ca(Da);0<K||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=ac;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var bc=!0;f.noInitialRun&&(bc=!1);C=!0;ac();
