var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var w="",ea,x,fa,ha;
if(ca)w=u?require("path").dirname(w)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&y("no native wasm support detected");var A,la=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=B(q);C(n,D,p,q)}return p},array:function(n){var p=B(n.length);pa.set(n,p);return p}},d=na(),f=[],k=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===k&&(k=qa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==k&&ra(k)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var F,pa,D,va,wa,G,xa,ya,H;
function za(a){F=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=ya=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var Aa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:Aa/65536});A&&(F=A.buffer);Aa=F.byteLength;za(F);G[1381900]=10770640;
function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Rb;"number"===typeof c?void 0===b.Kb?e.dynCall_v(c):e.dynCall_vi(c,b.Kb):c(void 0===b.Kb?null:b.Kb)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=e.preRun.shift();Ca.unshift(a)}var I=0,Ia=null,J=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ja(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="bombjack.wasm";if(!Ja()){var Ka=K;K=e.locateFile?e.locateFile(Ka,w):w+Ka}function La(){try{if(z)return new Uint8Array(z);if(x)return x(K);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Ma(){return z||!ba&&!u||"function"!==typeof fetch?new Promise(function(a){a(La())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return La()})}Da.push({Rb:function(){Na()}});var Oa=0,Pa=0,L=0,Qa=0,Ra=0,Sa=null,Ta=null,Ua=!1;function Va(){for(var a=M.length-1;0<=a;--a)Wa(a);M=[];Xa=[]}var Xa=[];
function Ya(){if(Za&&$a.Ib)for(var a=0;a<Xa.length;++a){var b=Xa[a];Xa.splice(a,1);--a;b.cc.apply(null,b.Wb)}}var Za=0,$a=null,M=[];function Wa(a){var b=M[a];b.target.removeEventListener(b.Bb,b.Pb,b.Cb);M.splice(a,1)}function N(a){function b(d){++Za;$a=a;Ya();a.Eb(d);Ya();--Za}if(a.Db)a.Pb=b,a.target.addEventListener(a.Bb,b,a.Cb),M.push(a),Ua||(Fa.push(Va),Ua=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Bb==a.Bb&&Wa(c--)}function ab(a){return a===a+0?E(a):a}
var bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){return bb[a]||("undefined"!==typeof document?document.querySelector(ab(a)):void 0)}
function cb(a,b,c,d,f,k){Oa||(Oa=P(164));a={target:O(a),Ib:!0,Bb:k,Db:d,Eb:function(g){g=g||event;var m=Oa;C(g.key?g.key:"",D,m+0,32);C(g.code?g.code:"",D,m+32,32);G[m+64>>2]=g.location;G[m+68>>2]=g.ctrlKey;G[m+72>>2]=g.shiftKey;G[m+76>>2]=g.altKey;G[m+80>>2]=g.metaKey;G[m+84>>2]=g.repeat;C(g.locale?g.locale:"",D,m+88,32);C(g.char?g.char:"",D,m+120,32);G[m+152>>2]=g.charCode;G[m+156>>2]=g.keyCode;G[m+160>>2]=g.which;Q(d,f,m,b)&&g.preventDefault()},Cb:c};N(a)}
function db(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ta;G[a+36>>2]=b.movementX||b.screenX-Sa;G[a+40>>2]=d;c=0>bb.indexOf(c)?c.getBoundingClientRect():{left:0,top:0};G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Sa=b.screenX,Ta=b.screenY)}
function R(a,b,c,d,f,k){Pa||(Pa=P(64));a=O(a);N({target:a,Ib:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Bb:k,Db:d,Eb:function(g){g=g||event;db(Pa,g,a);Q(d,f,Pa,b)&&g.preventDefault()},Cb:c})}
function eb(a,b,c,d){Qa||(Qa=P(36));a=O(a);N({target:a,Bb:"resize",Db:d,Eb:function(f){f=f||event;if(f.target==a){var k=Qa,g=document.body;G[k>>2]=f.detail;G[k+4>>2]=g.clientWidth;G[k+8>>2]=g.clientHeight;G[k+12>>2]=innerWidth;G[k+16>>2]=innerHeight;G[k+20>>2]=outerWidth;G[k+24>>2]=outerHeight;G[k+28>>2]=pageXOffset;G[k+32>>2]=pageYOffset;Q(d,10,k,b)&&f.preventDefault()}},Cb:c})}
function fb(a,b,c,d,f,k){Ra||(Ra=P(1684));a=O(a);N({target:a,Ib:"touchstart"==k||"touchend"==k,Bb:k,Db:d,Eb:function(g){g=g||event;for(var m={},n=0;n<g.touches.length;++n){var p=g.touches[n];p.Mb=!1;m[p.identifier]=p}for(n=0;n<g.changedTouches.length;++n)p=g.changedTouches[n],m[p.identifier]=p,p.Mb=!0;for(n=0;n<g.targetTouches.length;++n)p=g.targetTouches[n],m[p.identifier].Ub=!0;var q=p=Ra;G[q+4>>2]=g.ctrlKey;G[q+8>>2]=g.shiftKey;G[q+12>>2]=g.altKey;G[q+16>>2]=g.metaKey;q+=20;var gb=a.getBoundingClientRect(),
hb=0;for(n in m){var v=m[n];G[q>>2]=v.identifier;G[q+4>>2]=v.screenX;G[q+8>>2]=v.screenY;G[q+12>>2]=v.clientX;G[q+16>>2]=v.clientY;G[q+20>>2]=v.pageX;G[q+24>>2]=v.pageY;G[q+28>>2]=v.Mb;G[q+32>>2]=v.Ub;G[q+36>>2]=v.clientX-gb.left;G[q+40>>2]=v.clientY-gb.top;q+=52;if(32<=++hb)break}G[p>>2]=hb;Q(d,f,p,b)&&g.preventDefault()},Cb:c})}function ib(a,b,c,d,f,k){a={target:O(a),Bb:k,Db:d,Eb:function(g){g=g||event;Q(d,f,0,b)&&g.preventDefault()},Cb:c};N(a)}
function jb(a,b,c,d,f){function k(m){m=m||event;db(L,m,a);H[L+64>>3]=m.wheelDeltaX||0;H[L+72>>3]=-(m.wheelDeltaY||m.wheelDelta);H[L+80>>3]=0;G[L+88>>2]=0;Q(d,9,L,b)&&m.preventDefault()}function g(m){m=m||event;var n=L;db(n,m,a);H[n+64>>3]=m.deltaX;H[n+72>>3]=m.deltaY;H[n+80>>3]=m.deltaZ;G[n+88>>2]=m.deltaMode;Q(d,9,n,b)&&m.preventDefault()}L||(L=P(96));N({target:a,Ib:!0,Bb:f,Db:d,Eb:"wheel"==f?g:k,Cb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}var nb=1,ob=0,pb=[],S=[],qb=[],T=[],U=[],V=[],W=[],rb={},sb=null,X={},tb={};
function Y(a){ob||(ob=a)}function ub(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}
function vb(a){a||(a=sb);if(!a.Sb){a.Sb=!0;var b=a.Jb;2>a.version&&(kb(b),lb(b),mb(b));b.Yb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var wb,xb,yb=["default","low-power","high-performance"];function zb(a,b,c,d){for(var f=0;f<a;f++){var k=Z[c](),g=k&&ub(d);k?(k.name=g,d[g]=k):Y(1282);G[b+4*f>>2]=g}}
function Ab(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){Y(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:Y(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else Y(1281)}function Bb(a){var b=ta(a)+1,c=P(b);C(a,D,c,b);return c}
function Cb(a,b,c,d,f){a-=5120;a=1==a?D:4==a?G:6==a?ya:5==a||28922==a?xa:wa;var k=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>k,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<k)+4-1&-4)>>k)}for(var Z,Db=0;256>Db;Db++);for(Db=0;256>Db;Db++);
var Ib={V:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},X:function(a,b,c){a=O(a);if(!a)return-4;a=a.getBoundingClientRect();H[b>>3]=a.width;H[c>>3]=a.height;return 0},Sa:function(a,b,c){D.copyWithin(a,b,b+c)},Da:function(a,b){function c(d){Eb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ta:function(a){var b=D.length;if(2147418112<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-
d%65536);a:{try{A.grow(Math.min(2147418112,d)-F.byteLength+65535>>16);za(A.buffer);var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},Q:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},Na:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},La:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},Ma:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ca:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},Qa:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},Pa:function(a,
b,c,d){R(a,b,c,d,34,"mouseleave");return 0},Ra:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},Wa:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},Ia:function(a,b,c,d){eb(a,b,c,d);return 0},Ga:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},Ha:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},Ja:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},Ka:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},Fa:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},Ea:function(a,
b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},Oa:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(jb(a,b,c,d,"mousewheel"),0):-1},K:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=yb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Tb=G[b+8];c.$b=G[b+9];c.Nb=G[b+10];c.Qb=G[b+11];c.ac=
G[b+12];c.bc=G[b+13];a=O(a);if(!a||c.Qb)c=0;else if(a=a.getContext("webgl",c)){b=P(8);var d={Zb:b,attributes:c,version:c.Tb,Jb:a};a.canvas&&(a.canvas.Vb=d);rb[b]=d;("undefined"===typeof c.Nb||c.Nb)&&vb(d);c=b}else c=0;return c},ja:function(a,b){a=rb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?kb(Z):"OES_vertex_array_object"==b?lb(Z):"WEBGL_draw_buffers"==b&&mb(Z);return!!a.Jb.getExtension(b)},ta:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+
4]=G[a+8]=G[a+10]=1},la:function(a){sb=rb[a];e.Xb=Z=sb&&sb.Jb;return!a||Z?0:-5},h:function(a){Z.activeTexture(a)},N:function(a,b){Z.attachShader(S[a],W[b])},e:function(a,b){Z.bindBuffer(a,pb[b])},g:function(a,b){Z.bindFramebuffer(a,qb[b])},ya:function(a,b){Z.bindRenderbuffer(a,T[b])},a:function(a,b){Z.bindTexture(a,U[b])},F:function(a,b,c,d){Z.blendColor(a,b,c,d)},G:function(a,b){Z.blendEquationSeparate(a,b)},H:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},S:function(a,b,c,d){Z.bufferData(a,c?D.subarray(c,
c+b):b,d)},R:function(a,b,c,d){Z.bufferSubData(a,b,D.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},ma:function(a){Z.clear(a)},pa:function(a,b,c,d){Z.clearColor(a,b,c,d)},oa:function(a){Z.clearDepth(a)},na:function(a){Z.clearStencil(a)},x:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Y:function(a){Z.compileShader(W[a])},P:function(a,b,c,d,f,k,g,m){Z.compressedTexImage2D(a,b,c,d,f,k,m?D.subarray(m,m+g):null)},va:function(){var a=ub(S),b=Z.createProgram();b.name=a;S[a]=b;return a},
_:function(a){var b=ub(W);W[b]=Z.createShader(a);return b},E:function(a){Z.cullFace(a)},Aa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=pb[d];f&&(Z.deleteBuffer(f),f.name=0,pb[d]=null,d==wb&&(wb=0),d==xb&&(xb=0))}},c:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=qb[d];f&&(Z.deleteFramebuffer(f),f.name=0,qb[d]=null)}},U:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,X[a]=null):Y(1281)}},s:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=T[d];f&&(Z.deleteRenderbuffer(f),
f.name=0,T[d]=null)}},y:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):Y(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=U[d];f&&(Z.deleteTexture(f),f.name=0,U[d]=null)}},v:function(a){Z.depthFunc(a)},w:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},A:function(a){Z.disableVertexAttribArray(a)},fa:function(a,b,c){Z.drawArrays(a,b,c)},ga:function(a,b,c,d){Z.drawElements(a,b,c,d)},f:function(a){Z.enable(a)},ha:function(a){Z.enableVertexAttribArray(a)},l:function(a,
b,c,d){Z.framebufferRenderbuffer(a,b,c,T[d])},b:function(a,b,c,d,f){Z.framebufferTexture2D(a,b,c,U[d],f)},D:function(a){Z.frontFace(a)},T:function(a,b){zb(a,b,"createBuffer",pb)},n:function(a,b){zb(a,b,"createFramebuffer",qb)},za:function(a,b){zb(a,b,"createRenderbuffer",T)},wa:function(a,b){zb(a,b,"createTexture",U)},ra:function(a,b){return Z.getAttribLocation(S[a],E(b))},j:function(a,b){Ab(a,b)},sa:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):
0;c&&(G[c>>2]=b)},M:function(a,b,c){if(c)if(a>=nb)Y(1281);else{var d=X[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Lb;else if(35722==b){if(-1==d.Gb){a=S[a];var f=Z.getProgramParameter(a,35721);for(b=d.Gb=0;b<f;++b)d.Gb=Math.max(d.Gb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Gb}else if(35381==b){if(-1==d.Hb)for(a=S[a],f=Z.getProgramParameter(a,35382),b=d.Hb=0;b<f;++b)d.Hb=Math.max(d.Hb,Z.getActiveUniformBlockName(a,
b).length+1);G[c>>2]=d.Hb}else G[c>>2]=Z.getProgramParameter(S[a],b);else Y(1282)}else Y(1281)},Va:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(W[a],b):Y(1281)},Ba:function(a){if(tb[a])return tb[a];switch(a){case 7939:var b=
Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Bb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Y(1280);b=Bb(b);break;case 7938:b=Bb("OpenGL ES 2.0 ("+Z.getParameter(7938)+")");break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Bb(b);break;default:return Y(1280),0}return tb[a]=b},r:function(a,b){b=
E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1),void 0):0;b=b.slice(0,d)}return(a=X[a]&&X[a].Ob[b])&&0<=c&&c<a[0]?a[1]+c:-1},ua:function(a){Z.linkProgram(S[a]);var b=S[a];a=X[a]={Ob:{},Lb:0,Gb:-1,Hb:-1};for(var c=a.Ob,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var k=Z.getActiveUniform(b,f),g=k.name;a.Lb=Math.max(a.Lb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Z.getUniformLocation(b,g);if(m){var n=ub(V);c[g]=[k.size,n];
V[n]=m;for(var p=1;p<k.size;++p)m=Z.getUniformLocation(b,g+"["+p+"]"),n=ub(V),V[n]=m}}},C:function(a,b){Z.polygonOffset(a,b)},xa:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},qa:function(a,b,c,d){Z.scissor(a,b,c,d)},Z:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?G[d+4*k>>2]:-1;f+=E(G[c+4*k>>2],0>g?void 0:g)}Z.shaderSource(W[a],f)},aa:function(a,b,c){Z.stencilFunc(a,b,c)},J:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},u:function(a){Z.stencilMask(a)},$:function(a,b,c){Z.stencilOp(a,
b,c)},I:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},O:function(a,b,c,d,f,k,g,m,n){Z.texImage2D(a,b,c,d,f,k,g,m,n?Cb(m,g,d,f,n):null)},i:function(a,b,c){Z.texParameteri(a,b,c)},k:function(a,b,c,d,f,k,g,m,n){var p=null;n&&(p=Cb(m,g,f,k,n));Z.texSubImage2D(a,b,c,d,f,k,g,m,p)},B:function(a,b){Z.uniform1i(V[a],b)},ka:function(a){Z.useProgram(S[a])},Ua:function(a,b){Z.vertexAttribDivisor(a,b)},ia:function(a,b,c,d,f,k){Z.vertexAttribPointer(a,b,c,!!d,f,k)},L:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:A,
q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Fb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Ca:function(){window.addEventListener("beforeunload",function(a){0!=Gb()&&(a.preventDefault(),a.returnValue=" ")})},Xa:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");oa([a])})},o:function(){document.getElementById("_sokol_app_input_element").blur()},
ba:function(){return e.Fb?e.Fb.bufferSize:0},ea:function(a,b,c){e.Ab=null;e.Fb=null;"undefined"!==typeof AudioContext?(e.Ab=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.Ab=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.Ab=null,console.log("sokol_audio.h: no WebAudio support"));return e.Ab?(console.log("sokol_audio.h: sample rate ",
e.Ab.sampleRate),e.Fb=e.Ab.createScriptProcessor(c,0,b),e.Fb.onaudioprocess=function(d){var f=d.outputBuffer.length,k=Hb(f);if(k)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=ya[(k>>2)+(g*p+m)]},e.Fb.connect(e.Ab.destination),a=function(){e.Ab&&"suspended"===e.Ab.state&&e.Ab.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),
1):0},da:function(){return e.Ab?e.Ab.sampleRate:0},t:function(){return performance.now()},table:la},Jb=function(){function a(f){e.asm=f.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Ia&&(clearInterval(Ia),Ia=null),J&&(f=J,J=null,f()))}function b(f){a(f.instance)}function c(f){return Ma().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){y("failed to asynchronously prepare wasm: "+k);ja(k)})}var d={a:Ib};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);
if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Jb;
var Na=e.___wasm_call_ctors=function(){return(Na=e.___wasm_call_ctors=e.asm.Ya).apply(null,arguments)};e._emsc_load_data=function(){return(e._emsc_load_data=e.asm.Za).apply(null,arguments)};e.___em_js__emsc_fs_init=function(){return(e.___em_js__emsc_fs_init=e.asm._a).apply(null,arguments)};e.___em_js__emsc_load_file=function(){return(e.___em_js__emsc_load_file=e.asm.$a).apply(null,arguments)};
var Fb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Fb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.ab).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.bb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.cb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.db).apply(null,arguments)};
e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.eb).apply(null,arguments)};var Gb=e.__sapp_html5_get_ask_leave_site=function(){return(Gb=e.__sapp_html5_get_ask_leave_site=e.asm.fb).apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return(e.___em_js__sapp_js_hook_beforeunload=e.asm.gb).apply(null,arguments)};e.___em_js__sapp_js_init_clipboard=function(){return(e.___em_js__sapp_js_init_clipboard=e.asm.hb).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.ib).apply(null,arguments)};e._main=function(){return(e._main=e.asm.jb).apply(null,arguments)};var P=e._malloc=function(){return(P=e._malloc=e.asm.kb).apply(null,arguments)};e._free=function(){return(e._free=e.asm.lb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.mb).apply(null,arguments)};
var Hb=e.__saudio_emsc_pull=function(){return(Hb=e.__saudio_emsc_pull=e.asm.nb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.ob).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.pb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.qb).apply(null,arguments)};
e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.rb).apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return(e.___em_js__sargs_js_parse_url=e.asm.sb).apply(null,arguments)};var qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.tb).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.ub).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.vb).apply(null,arguments)};
e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.wb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.xb).apply(null,arguments)};var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.yb).apply(null,arguments)},Eb=e.dynCall_idi=function(){return(Eb=e.dynCall_idi=e.asm.zb).apply(null,arguments)};e.asm=Jb;var Kb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Lb(){Kb||Mb();Kb||(J=Lb)};
function Mb(a){function b(){if(!Kb&&(Kb=!0,e.calledRun=!0,!ma)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Nb){var c=a,d=e._main;c=c||[];var f=c.length+1,k=B(4*(f+1));G[k>>2]=ua(aa);for(var g=1;g<f;g++)G[(k>>2)+g]=ua(c[g-1]);G[(k>>2)+f]=0;try{var m=d(f,k);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ga.unshift(c);Ba(Ga)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Ba(Ca);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Mb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Nb=!0;e.noInitialRun&&(Nb=!1);noExitRuntime=!0;Mb();
