var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var q=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,x,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),q=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?q=scriptArgs:"undefined"!=typeof arguments&&(q=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(q=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var B,ka=new WebAssembly.Table({initial:53,maximum:53,element:"anyfunc"}),la=!1;
function assert(a,b){a||y("Assertion failed: "+b)}function ma(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c,d){var f={string:function(p){var r=0;if(null!==p&&void 0!==p&&0!==p){var X=(p.length<<2)+1;r=C(X);D(p,E,r,X)}return r},array:function(p){var r=C(p.length);oa.set(p,r);return r}},g=ma(a),h=[];a=0;if(d)for(var m=0;m<d.length;m++){var n=f[c[m]];n?(0===a&&(a=pa()),h[m]=n(d[m])):h[m]=d[m]}c=g.apply(null,h);c=function(p){return"string"===b?F(p):"boolean"===b?!!p:p}(c);0!==a&&qa(a);return c}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function F(a,b){return a?sa(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var m=a.charCodeAt(++g);h=65536+((h&1023)<<10)|m&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){var b=ta(a)+1,c=C(b);D(a,oa,c,b);return c}var G,oa,E,va,wa,H,xa,I,J;
function ya(a){G=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var za=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:za/65536});B&&(G=B.buffer);za=G.byteLength;ya(G);H[1732984]=12174976;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.fc;"number"===typeof c?void 0===b.Zb?e.dynCall_v(c):e.dynCall_vi(c,b.Zb):c(void 0===b.Zb?null:b.Zb)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=e.preRun.shift();Ba.unshift(a)}var K=0,Ha=null,Ia=null;e.preloadedImages={};e.preloadedAudios={};function y(a){if(e.onAbort)e.onAbort(a);ja(a);z(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ja(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="zx-ui.wasm";if(!Ja()){var Ka=L;L=e.locateFile?e.locateFile(Ka,v):v+Ka}function La(){try{if(A)return new Uint8Array(A);if(x)return x(L);throw"both async and sync fetching of the wasm failed";}catch(a){y(a)}}
function Ma(){return A||!ba&&!u||"function"!==typeof fetch?new Promise(function(a){a(La())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return La()})}Ca.push({fc:function(){Na()}});var Oa=0,Pa=0,M=0,Qa=0,Ra=0,Sa=null,Ta=null,Ua=!1;function Va(){for(var a=N.length-1;0<=a;--a)Wa(a);N=[];Xa=[]}var Xa=[];
function Ya(){if(Za&&$a.Xb)for(var a=0;a<Xa.length;++a){var b=Xa[a];Xa.splice(a,1);--a;b.sc.apply(null,b.lc)}}var Za=0,$a=null,N=[];function Wa(a){var b=N[a];b.target.removeEventListener(b.Qb,b.dc,b.Rb);N.splice(a,1)}function O(a){function b(d){++Za;$a=a;Ya();a.Tb(d);Ya();--Za}if(a.Sb)a.dc=b,a.target.addEventListener(a.Qb,b,a.Rb),N.push(a),Ua||(Ea.push(Va),Ua=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Qb==a.Qb&&Wa(c--)}function ab(a){return a===a+0?F(a):a}
var bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){return bb[a]||("undefined"!==typeof document?document.querySelector(ab(a)):void 0)}
function cb(a,b,c,d,f,g){Oa||(Oa=Q(164));a={target:P(a),Xb:!0,Qb:g,Sb:d,Tb:function(h){h=h||event;var m=Oa;D(h.key?h.key:"",E,m+0,32);D(h.code?h.code:"",E,m+32,32);H[m+64>>2]=h.location;H[m+68>>2]=h.ctrlKey;H[m+72>>2]=h.shiftKey;H[m+76>>2]=h.altKey;H[m+80>>2]=h.metaKey;H[m+84>>2]=h.repeat;D(h.locale?h.locale:"",E,m+88,32);D(h.char?h.char:"",E,m+120,32);H[m+152>>2]=h.charCode;H[m+156>>2]=h.keyCode;H[m+160>>2]=h.which;R(d,f,m,b)&&h.preventDefault()},Rb:c};O(a)}
function db(a,b,c){H[a>>2]=b.screenX;H[a+4>>2]=b.screenY;H[a+8>>2]=b.clientX;H[a+12>>2]=b.clientY;H[a+16>>2]=b.ctrlKey;H[a+20>>2]=b.shiftKey;H[a+24>>2]=b.altKey;H[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ta;H[a+36>>2]=b.movementX||b.screenX-Sa;H[a+40>>2]=d;c=0>bb.indexOf(c)?c.getBoundingClientRect():{left:0,top:0};H[a+44>>2]=b.clientX-c.left;H[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Sa=b.screenX,Ta=b.screenY)}
function eb(a,b,c,d,f,g){Pa||(Pa=Q(64));a=P(a);O({target:a,Xb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Qb:g,Sb:d,Tb:function(h){h=h||event;db(Pa,h,a);R(d,f,Pa,b)&&h.preventDefault()},Rb:c})}
function fb(a,b,c,d){Qa||(Qa=Q(36));a=P(a);O({target:a,Qb:"resize",Sb:d,Tb:function(f){f=f||event;if(f.target==a){var g=Qa,h=document.body;H[g>>2]=f.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;R(d,10,g,b)&&f.preventDefault()}},Rb:c})}
function gb(a,b,c,d,f,g){Ra||(Ra=Q(1684));a=P(a);O({target:a,Xb:"touchstart"==g||"touchend"==g,Qb:g,Sb:d,Tb:function(h){h=h||event;for(var m={},n=0;n<h.touches.length;++n){var p=h.touches[n];p.ac=!1;m[p.identifier]=p}for(n=0;n<h.changedTouches.length;++n)p=h.changedTouches[n],m[p.identifier]=p,p.ac=!0;for(n=0;n<h.targetTouches.length;++n)p=h.targetTouches[n],m[p.identifier].jc=!0;var r=p=Ra;H[r+4>>2]=h.ctrlKey;H[r+8>>2]=h.shiftKey;H[r+12>>2]=h.altKey;H[r+16>>2]=h.metaKey;r+=20;var X=a.getBoundingClientRect(),
lb=0;for(n in m){var w=m[n];H[r>>2]=w.identifier;H[r+4>>2]=w.screenX;H[r+8>>2]=w.screenY;H[r+12>>2]=w.clientX;H[r+16>>2]=w.clientY;H[r+20>>2]=w.pageX;H[r+24>>2]=w.pageY;H[r+28>>2]=w.ac;H[r+32>>2]=w.jc;H[r+36>>2]=w.clientX-X.left;H[r+40>>2]=w.clientY-X.top;r+=52;if(32<=++lb)break}H[p>>2]=lb;R(d,f,p,b)&&h.preventDefault()},Rb:c})}function hb(a,b,c,d,f,g){a={target:P(a),Qb:g,Sb:d,Tb:function(h){h=h||event;R(d,f,0,b)&&h.preventDefault()},Rb:c};O(a)}
function ib(a,b,c,d,f){function g(m){m=m||event;db(M,m,a);J[M+64>>3]=m.wheelDeltaX||0;J[M+72>>3]=-(m.wheelDeltaY||m.wheelDelta);J[M+80>>3]=0;H[M+88>>2]=0;R(d,9,M,b)&&m.preventDefault()}function h(m){m=m||event;var n=M;db(n,m,a);J[n+64>>3]=m.deltaX;J[n+72>>3]=m.deltaY;J[n+80>>3]=m.deltaZ;H[n+88>>2]=m.deltaMode;R(d,9,n,b)&&m.preventDefault()}M||(M=Q(96));O({target:a,Xb:!0,Qb:f,Sb:d,Tb:"wheel"==f?h:g,Rb:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,g){b.drawArraysInstancedANGLE(c,d,f,g)},a.drawElementsInstanced=function(c,d,f,g,h){b.drawElementsInstancedANGLE(c,d,f,g,h)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}var nb=1,ob=0,pb=[],S=[],qb=[],rb=[],sb=[],T=[],U=[],tb={},ub=null,vb={},wb={};
function V(a){ob||(ob=a)}function xb(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}var W=[0];
function yb(a){a||(a=ub);if(!a.hc){a.hc=!0;var b=a.Yb;2>a.version&&(jb(b),kb(b),mb(b));b.nc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var zb,Ab,Bb=["default","low-power","high-performance"],Cb=[null,[],[]];function Db(a,b,c,d){for(var f=0;f<a;f++){var g=Y[c](),h=g&&xb(d);g?(g.name=h,d[h]=g):V(1282);H[b+4*f>>2]=h}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}function Fb(a){var b=ta(a)+1,c=Q(b);D(a,E,c,b);return c}
function Gb(a,b,c,d,f){a-=5120;a=1==a?E:4==a?H:6==a?I:5==a||28922==a?xa:wa;var g=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>g,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}for(var Y,Hb=new Float32Array(256),Z=0;256>Z;Z++)W[Z]=Hb.subarray(0,Z+1);for(Z=0;256>Z;Z++);
var Mb={$a:function(){y()},ib:function(){console.log("fs.h: registering Module['ccall']");e.ccall=na},jb:function(a){var b=F(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var d=new Uint8Array(c.response);na("emsc_load_data","int",["string","array","number"],[b,d,d.length])};c.send()},Q:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},X:function(a,b,c){a=P(a);if(!a)return-4;a=a.getBoundingClientRect();J[b>>3]=a.width;J[c>>3]=a.height;
return 0},Xa:function(a,b,c){E.copyWithin(a,b,b+c)},Ga:function(a,b){function c(d){Ib(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){var b=E.length;if(2147418112<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147418112,d)-G.byteLength+65535>>16);ya(B.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},N:function(a,b,c){a=P(a);if(!a)return-4;
a.width=b;a.height=c;return 0},Qa:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},Oa:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},Pa:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ab:function(a,b,c,d){eb(a,b,c,d,5,"mousedown");return 0},Ta:function(a,b,c,d){eb(a,b,c,d,33,"mouseenter");return 0},Sa:function(a,b,c,d){eb(a,b,c,d,34,"mouseleave");return 0},Ua:function(a,b,c,d){eb(a,b,c,d,8,"mousemove");return 0},Va:function(a,b,c,d){eb(a,b,c,d,6,"mouseup");return 0},Ba:function(a,b,c,d){fb(a,
b,c,d);return 0},Ja:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},Ka:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},La:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},Ma:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},Ia:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},Ha:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},Ra:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?
(ib(a,b,c,d,"mousewheel"),0):-1},E:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Bb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.ic=H[b+8];c.pc=H[b+9];c.bc=H[b+10];c.ec=H[b+11];c.qc=H[b+12];c.rc=H[b+13];a=P(a);if(!a||c.ec)c=0;else if(a=a.getContext("webgl",c)){b=Q(8);var d={oc:b,attributes:c,version:c.ic,Yb:a};a.canvas&&(a.canvas.kc=d);tb[b]=d;("undefined"===
typeof c.bc||c.bc)&&yb(d);c=b}else c=0;return c},hb:function(a,b){a=tb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?jb(Y):"OES_vertex_array_object"==b?kb(Y):"WEBGL_draw_buffers"==b&&mb(Y);return!!a.Yb.getExtension(b)},qa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},ha:function(a){ub=tb[a];e.mc=Y=ub&&ub.Yb;return!a||Y?0:-5},_a:function(){return 0},Wa:function(){},Y:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var h=H[b+
8*g>>2],m=H[b+(8*g+4)>>2],n=0;n<m;n++){var p=E[h+n],r=Cb[a];0===p||10===p?((1===a?ja:z)(sa(r,0)),r.length=0):r.push(p)}f+=m}H[d>>2]=f;return 0},h:function(a){Y.activeTexture(a)},P:function(a,b){Y.attachShader(S[a],U[b])},b:function(a,b){Y.bindBuffer(a,pb[b])},g:function(a,b){Y.bindFramebuffer(a,qb[b])},za:function(a,b){Y.bindRenderbuffer(a,rb[b])},a:function(a,b){Y.bindTexture(a,sb[b])},G:function(a,b,c,d){Y.blendColor(a,b,c,d)},H:function(a,b){Y.blendEquationSeparate(a,b)},I:function(a,b,c,d){Y.blendFuncSeparate(a,
b,c,d)},T:function(a,b,c,d){Y.bufferData(a,c?E.subarray(c,c+b):b,d)},q:function(a,b,c,d){Y.bufferSubData(a,b,E.subarray(d,d+c))},m:function(a){return Y.checkFramebufferStatus(a)},oa:function(a){Y.clear(a)},sa:function(a,b,c,d){Y.clearColor(a,b,c,d)},ra:function(a){Y.clearDepth(a)},pa:function(a){Y.clearStencil(a)},y:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},cb:function(a){Y.compileShader(U[a])},S:function(a,b,c,d,f,g,h,m){Y.compressedTexImage2D(a,b,c,d,f,g,m?E.subarray(m,m+h):null)},wa:function(){var a=
xb(S),b=Y.createProgram();b.name=a;S[a]=b;return a},eb:function(a){var b=xb(U);U[b]=Y.createShader(a);return b},F:function(a){Y.cullFace(a)},Ca:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=pb[d];f&&(Y.deleteBuffer(f),f.name=0,pb[d]=null,d==zb&&(zb=0),d==Ab&&(Ab=0))}},d:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=qb[d];f&&(Y.deleteFramebuffer(f),f.name=0,qb[d]=null)}},V:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,vb[a]=null):V(1281)}},r:function(a,b){for(var c=
0;c<a;c++){var d=H[b+4*c>>2],f=rb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,rb[d]=null)}},z:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=sb[d];f&&(Y.deleteTexture(f),f.name=0,sb[d]=null)}},w:function(a){Y.depthFunc(a)},x:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},A:function(a){Y.disableVertexAttribArray(a)},da:function(a,b,c){Y.drawArrays(a,b,c)},ea:function(a,b,c,d){Y.drawElements(a,b,c,d)},f:function(a){Y.enable(a)},
la:function(a){Y.enableVertexAttribArray(a)},l:function(a,b,c,d){Y.framebufferRenderbuffer(a,b,c,rb[d])},c:function(a,b,c,d,f){Y.framebufferTexture2D(a,b,c,sb[d],f)},D:function(a){Y.frontFace(a)},U:function(a,b){Db(a,b,"createBuffer",pb)},n:function(a,b){Db(a,b,"createFramebuffer",qb)},Aa:function(a,b){Db(a,b,"createRenderbuffer",rb)},xa:function(a,b){Db(a,b,"createTexture",sb)},ta:function(a,b){return Y.getAttribLocation(S[a],F(b))},j:function(a,b){Eb(a,b)},ua:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);
null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},O:function(a,b,c){if(c)if(a>=nb)V(1281);else{var d=vb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.$b;else if(35722==b){if(-1==d.Vb){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.Vb=0;b<f;++b)d.Vb=Math.max(d.Vb,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Vb}else if(35381==b){if(-1==d.Wb)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.Wb=0;b<
f;++b)d.Wb=Math.max(d.Wb,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Wb}else H[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},bb:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},_:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},
Da:function(a){if(wb[a])return wb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+Y.getParameter(7938)+")");break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;
default:return V(1280),0}return wb[a]=b},p:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1),void 0):0;b=b.slice(0,d)}return(a=vb[a]&&vb[a].cc[b])&&0<=c&&c<a[0]?a[1]+c:-1},va:function(a){Y.linkProgram(S[a]);var b=S[a];a=vb[a]={cc:{},$b:0,Vb:-1,Wb:-1};for(var c=a.cc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var g=Y.getActiveUniform(b,f),h=g.name;a.$b=Math.max(a.$b,h.length+1);"]"==h.slice(-1)&&(h=h.slice(0,h.lastIndexOf("[")));var m=
Y.getUniformLocation(b,h);if(m){var n=xb(T);c[h]=[g.size,n];T[n]=m;for(var p=1;p<g.size;++p)m=Y.getUniformLocation(b,h+"["+p+"]"),n=xb(T),T[n]=m}}},C:function(a,b){Y.polygonOffset(a,b)},ya:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d){Y.scissor(a,b,c,d)},db:function(a,b,c,d){for(var f="",g=0;g<b;++g){var h=d?H[d+4*g>>2]:-1;f+=F(H[c+4*g>>2],0>h?void 0:h)}Y.shaderSource(U[a],f)},gb:function(a,b,c){Y.stencilFunc(a,b,c)},K:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},v:function(a){Y.stencilMask(a)},
fb:function(a,b,c){Y.stencilOp(a,b,c)},J:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},R:function(a,b,c,d,f,g,h,m,n){Y.texImage2D(a,b,c,d,f,g,h,m,n?Gb(m,h,d,f,n):null)},i:function(a,b,c){Y.texParameteri(a,b,c)},k:function(a,b,c,d,f,g,h,m,n){var p=null;n&&(p=Gb(m,h,f,g,n));Y.texSubImage2D(a,b,c,d,f,g,h,m,p)},ka:function(a,b,c){if(256>=b)for(var d=W[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)},B:function(a,b){Y.uniform1i(T[a],b)},ja:function(a,b,c){if(256>=
2*b)for(var d=W[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)},ia:function(a,b,c){if(256>=3*b)for(var d=W[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)},ga:function(a,b,c){if(256>=4*b)for(var d=W[4*b-1],f=0;f<4*b;f+=4)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2],d[f+3]=I[c+(4*f+12)>>2];else d=I.subarray(c>>2,c+16*b>>2);
Y.uniform4fv(T[a],d)},fa:function(a,b,c,d){if(256>=16*b)for(var f=W[16*b-1],g=0;g<16*b;g+=16)f[g]=I[d+4*g>>2],f[g+1]=I[d+(4*g+4)>>2],f[g+2]=I[d+(4*g+8)>>2],f[g+3]=I[d+(4*g+12)>>2],f[g+4]=I[d+(4*g+16)>>2],f[g+5]=I[d+(4*g+20)>>2],f[g+6]=I[d+(4*g+24)>>2],f[g+7]=I[d+(4*g+28)>>2],f[g+8]=I[d+(4*g+32)>>2],f[g+9]=I[d+(4*g+36)>>2],f[g+10]=I[d+(4*g+40)>>2],f[g+11]=I[d+(4*g+44)>>2],f[g+12]=I[d+(4*g+48)>>2],f[g+13]=I[d+(4*g+52)>>2],f[g+14]=I[d+(4*g+56)>>2],f[g+15]=I[d+(4*g+60)>>2];else f=I.subarray(d>>2,d+64*
b>>2);Y.uniformMatrix4fv(T[a],!!c,f)},na:function(a){Y.useProgram(S[a])},Za:function(a,b){Y.vertexAttribDivisor(a,b)},ma:function(a,b,c,d,f,g){Y.vertexAttribPointer(a,b,c,!!d,f,g)},M:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:B,u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Jb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Fa:function(){window.addEventListener("beforeunload",
function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")})},Na:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste","void",["string"],[a])})},s:function(){document.getElementById("_sokol_app_input_element").blur()},Ea:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left=
"-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},$:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())na("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},aa:function(){return e.Ub?e.Ub.bufferSize:0},ca:function(a,b,c){e.Pb=null;e.Ub=null;"undefined"!==typeof AudioContext?(e.Pb=new AudioContext({sampleRate:a,
latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.Pb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.Pb=null,console.log("sokol_audio.h: no WebAudio support"));return e.Pb?(console.log("sokol_audio.h: sample rate ",e.Pb.sampleRate),e.Ub=e.Pb.createScriptProcessor(c,0,b),e.Ub.onaudioprocess=function(d){var f=d.outputBuffer.length,g=Lb(f);if(g)for(var h=
d.outputBuffer.numberOfChannels,m=0;m<h;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=I[(g>>2)+(h*p+m)]},e.Ub.connect(e.Pb.destination),a=function(){e.Pb&&"suspended"===e.Pb.state&&e.Pb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ba:function(){return e.Pb?e.Pb.sampleRate:0},Z:function(){return navigator.userAgent.includes("Macintosh")?1:0},o:function(){return performance.now()},
table:ka},Nb=function(){function a(f){e.asm=f.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(f=Ia,Ia=null,f()))}function b(f){a(f.instance)}function c(f){return Ma().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){z("failed to asynchronously prepare wasm: "+g);y(g)})}var d={a:Mb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){z("wasm streaming compile failed: "+g);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Nb;var Na=e.___wasm_call_ctors=function(){return(Na=e.___wasm_call_ctors=e.asm.kb).apply(null,arguments)};
e._emsc_load_data=function(){return(e._emsc_load_data=e.asm.lb).apply(null,arguments)};e.___em_js__emsc_fs_init=function(){return(e.___em_js__emsc_fs_init=e.asm.mb).apply(null,arguments)};e.___em_js__emsc_load_file=function(){return(e.___em_js__emsc_load_file=e.asm.nb).apply(null,arguments)};var Jb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Jb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.ob).apply(null,arguments)};
e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.pb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.qb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.rb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.sb).apply(null,arguments)};
var Kb=e.__sapp_html5_get_ask_leave_site=function(){return(Kb=e.__sapp_html5_get_ask_leave_site=e.asm.tb).apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return(e.___em_js__sapp_js_hook_beforeunload=e.asm.ub).apply(null,arguments)};e.___em_js__sapp_js_init_clipboard=function(){return(e.___em_js__sapp_js_init_clipboard=e.asm.vb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.wb).apply(null,arguments)};
e._main=function(){return(e._main=e.asm.xb).apply(null,arguments)};var Q=e._malloc=function(){return(Q=e._malloc=e.asm.yb).apply(null,arguments)};e._free=function(){return(e._free=e.asm.zb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Ab).apply(null,arguments)};var Lb=e.__saudio_emsc_pull=function(){return(Lb=e.__saudio_emsc_pull=e.asm.Bb).apply(null,arguments)};
e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Cb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Db).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Eb).apply(null,arguments)};e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.Fb).apply(null,arguments)};
e.___em_js__sargs_js_parse_url=function(){return(e.___em_js__sargs_js_parse_url=e.asm.Gb).apply(null,arguments)};e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Hb).apply(null,arguments)};var pa=e.stackSave=function(){return(pa=e.stackSave=e.asm.Ib).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Jb).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.Kb).apply(null,arguments)};
e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Lb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Mb).apply(null,arguments)};var R=e.dynCall_iiii=function(){return(R=e.dynCall_iiii=e.asm.Nb).apply(null,arguments)},Ib=e.dynCall_idi=function(){return(Ib=e.dynCall_idi=e.asm.Ob).apply(null,arguments)};e.asm=Nb;var Ob;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ia=function Pb(){Ob||Qb();Ob||(Ia=Pb)};
function Qb(a){function b(){if(!Ob&&(Ob=!0,e.calledRun=!0,!la)){Aa(Ca);Aa(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Rb){var c=a,d=e._main;c=c||[];var f=c.length+1,g=C(4*(f+1));H[g>>2]=ua(aa);for(var h=1;h<f;h++)H[(g>>2)+h]=ua(c[h-1]);H[(g>>2)+f]=0;try{var m=d(f,g);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(la=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Fa.unshift(c);Aa(Fa)}}a=a||q;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();Aa(Ba);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Qb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Rb=!0;e.noInitialRun&&(Rb=!1);noExitRuntime=!0;Qb();
