"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[817,279],{3987:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return u},overworldSettings:function(){return d},overworldOctaves:function(){return p},netherSettings:function(){return h},netherOctaves:function(){return _},NetherPlot:function(){return g},default:function(){return w}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(69),s=n(9594),c=["components"],l={title:"Noise Sampler"},m=void 0,f={unversionedId:"noisesampler",id:"noisesampler",isDocsHomePage:!1,title:"Noise Sampler",description:"export const overworldSettings = {",source:"@site/examples/noisesampler.mdx",sourceDirName:".",slug:"/noisesampler",permalink:"/deepslate/examples/noisesampler",tags:[],version:"current",frontMatter:{title:"Noise Sampler"},sidebar:"defaultSidebar",previous:{title:"Noise",permalink:"/deepslate/examples/noise"},next:{title:"Splines",permalink:"/deepslate/examples/splines"}},u=[],d={minY:-64,height:384,densityFactor:1,densityOffset:0,xzSize:1,ySize:2,sampling:{xzScale:1,yScale:1,xzFactor:80,yFactor:160},bottomSlide:{offset:0,size:0,target:0},topSlide:{offset:0,size:0,target:0},terrainShaper:o.bg.overworld()},p={temperature:{firstOctave:-9,amplitudes:[1.5,0,1,0,0,0]},humidity:{firstOctave:-7,amplitudes:[1,1,0,0,0,0]},continentalness:{firstOctave:-9,amplitudes:[1,1,2,2,2,1,1,1,1]},erosion:{firstOctave:-9,amplitudes:[1,1,0,1,1]},weirdness:{firstOctave:-7,amplitudes:[1,2,1,0,0,0]},shift:{firstOctave:-3,amplitudes:[1,1,1,0]}},h={minY:0,height:128,densityFactor:0,densityOffset:-.03,xzSize:1,ySize:2,sampling:{xzScale:1,yScale:3,xzFactor:80,yFactor:60},bottomSlide:{offset:-1,size:4,target:2.5},topSlide:{offset:0,size:3,target:.9375},terrainShaper:new o.bg((function(){return 0}),(function(){return 1}),(function(){return 0}))},_={temperature:{firstOctave:-7,amplitudes:[1,1]},humidity:{firstOctave:-7,amplitudes:[1,1]},continentalness:{firstOctave:-7,amplitudes:[1,1]},erosion:{firstOctave:-7,amplitudes:[1,1]},weirdness:{firstOctave:-7,amplitudes:[1,1]},shift:{firstOctave:0,amplitudes:[0]}};function g(e){var t=e.z;return(0,i.kt)(s.Z,{name:"Nether z="+t,width:32,height:17,scale:6,initializer:function(){return new o.HP(4,8,16,h,_,BigInt(40162))},sampler:function(e){return function(n,r){return e.calculateBaseNoise(4*n,128-8*r,4*t)}},colorizer:function(e){return-64*e+128},mdxType:"Plot"})}var v={toc:u,overworldSettings:d,netherSettings:h,netherOctaves:_,NetherPlot:g};function w(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const sampler = new NoiseSampler(4, 8, 48, noiseSettings, noiseOctaves, BigInt(40162))\nconst terrainInfo = { offset: 0, factor: 1, jaggedness: 0 }\nsampler.calculateBaseNoise(x, y, z, terrainInfo)\n")),(0,i.kt)(s.Z,{name:"Overworld",width:96,height:48,scale:6,initializer:function(){return new o.HP(4,8,48,d,p,BigInt(40162))},sampler:function(e){return function(t,n){return e.calculateBaseNoise(4*t,256-8*n,0,{offset:0,factor:1,jaggedness:0})}},colorizer:function(e){return-64*e+128},mdxType:"Plot"}),(0,i.kt)(s.Z,{name:"Overworld jaggedness",width:96,height:49,scale:6,initializer:function(){return new o.HP(4,8,48,d,p,BigInt(40162))},sampler:function(e){return function(t,n){return e.calculateBaseNoise(4*t,256-8*n,0,{offset:.3,factor:6,jaggedness:1})}},colorizer:function(e){return-64*e+128},mdxType:"Plot"}),(0,i.kt)(g,{z:0,mdxType:"NetherPlot"}),(0,i.kt)(g,{z:1,mdxType:"NetherPlot"}),(0,i.kt)(g,{z:2,mdxType:"NetherPlot"}),(0,i.kt)(g,{z:3,mdxType:"NetherPlot"}),(0,i.kt)(g,{z:4,mdxType:"NetherPlot"}),(0,i.kt)(g,{z:5,mdxType:"NetherPlot"}),(0,i.kt)(s.Z,{name:"Nether top-down y=64",width:64,height:64,scale:6,initializer:function(){return new o.HP(4,8,16,h,_,BigInt(40162))},sampler:function(e){return function(t,n){return e.calculateBaseNoise(4*t,64,4*n)}},colorizer:function(e){return-64*e+128},mdxType:"Plot"}))}w.isMDXComponent=!0},3844:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},gray:function(){return h},OverworldPlot:function(){return _},default:function(){return v}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(69),s=n(9594),c=n(756),l=n(3987),m=["components"],f={title:"Terrain Shaper"},u=void 0,d={unversionedId:"terrainshaper",id:"terrainshaper",isDocsHomePage:!1,title:"Terrain Shaper",description:"export const gray = (min, max) => value => (value - min) / (max - min) * 256",source:"@site/examples/terrainshaper.mdx",sourceDirName:".",slug:"/terrainshaper",permalink:"/deepslate/examples/terrainshaper",tags:[],version:"current",frontMatter:{title:"Terrain Shaper"},sidebar:"defaultSidebar",previous:{title:"Structure Renderer",permalink:"/deepslate/examples/structurerenderer"}},p=[],h=function(e,t){return function(n){return(n-e)/(t-e)*256}};function _(e){var t=e.property,n=e.colorizer;return(0,i.kt)(s.Z,{name:"Overworld "+t,width:160,scale:2,initializer:function(){return{shaper:o.bg.overworld(),sampler:new o.HP(4,4,32,o.n1.fromJson(null),l.overworldOctaves,BigInt(200))}},sampler:function(e){var n=e.shaper,r=e.sampler;return function(e,a){var i=o.bg.point(r.getContinentalness(6*e,6*a),r.getErosion(6*e,6*a),r.getWeirdness(6*e,6*a));return n[t](i)}},colorizer:n,mdxType:"Plot"})}var g={toc:p,gray:h,OverworldPlot:_};function v(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const shaper = TerrainShaper.overworld()\nconst sampler = new NoiseSampler(4, 4, 32, NoiseSettings.fromJson(null), overworldOctaves, BigInt(200))\n\nconst continentalness = sampler.getContinentalness(x, y)\nconst erosion = sampler.getErosion(x, y)\nconst weirdness = sampler.getWeirdness(x, y)\nshaper.offset(TerrainShaper.point(continentalness, erosion, weirdness))\n")),(0,i.kt)(_,{property:"offset",colorizer:h(-1,1),mdxType:"OverworldPlot"}),(0,i.kt)(_,{property:"factor",colorizer:h(0,16),mdxType:"OverworldPlot"}),(0,i.kt)(_,{property:"jaggedness",colorizer:h(0,1),mdxType:"OverworldPlot"}),(0,i.kt)(s.Z,{name:"Overworld biomes",width:160,scale:2,fetcher:function(){return fetch("https://raw.githubusercontent.com/misode/vanilla-worldgen/master/dimension/overworld.json").then((function(e){return e.json()}))},initializer:function(e){var t=o.iD.fromJson(e.generator.biome_source),n=new o.HP(4,4,32,o.n1.fromJson(null),l.overworldOctaves,BigInt(200));return{source:t,climate:function(e,t,r){return n.sample(e,t,r)}}},sampler:function(e){var t=e.source,n=e.climate;return function(e,r){return t.getBiome(6*e,64,6*r,n)}},colorizer:function(e){var t;return null!=(t=c[e])?t:[0,0,0]},mdxType:"Plot"}))}v.isMDXComponent=!0},9594:function(e,t,n){n.d(t,{Z:function(){return a},p:function(){return i}});var r=n(7294);function a(e){var t,n=e.name,a=e.width,i=e.height,o=e.scale,s=e.fetcher,c=e.initializer,l=e.column,m=e.sampler,f=e.colorizer;i=null!=(t=i)?t:a;var u=(0,r.useRef)(),d=(0,r.useState)(void 0),p=d[0],h=d[1];return(0,r.useEffect)((function(){Promise.resolve(null==s?void 0:s()).then((function(e){var t=null==c?void 0:c(e),n=performance.now(),r=m(t),o=u.current.getContext("2d"),s=o.createImageData(a,i);requestAnimationFrame((function(){for(var e=0;e<a;e+=1){null==l||l(t,e);for(var c=0;c<i;c+=1){var m=4*e+4*c*s.width,u=r(e,c),d=f(u),p="number"==typeof d?[d,d,d]:d,_=p[0],g=p[1],v=p[2];s.data[m]=_,s.data[m+1]=g,s.data[m+2]=v,s.data[m+3]=255}}o.putImageData(s,0,0),h(performance.now()-n)}))}))}),[]),r.createElement("div",{className:"plot pixelated"},r.createElement("span",null,n," (",p?p.toFixed(0)+"ms":"loading",")"),r.createElement("canvas",{ref:u,width:a,height:i,style:o?{width:a*o+"px",height:i*o+"px"}:void 0}))}function i(e){var t,n,a,i=e.name,o=e.width,s=e.height,c=e.scale,l=e.range,m=e.spline;s=null!=(t=s)?t:o;var f=l[0],u=l[1],d=(0,r.useRef)();return(0,r.useEffect)((function(){for(var e=d.current.getContext("2d"),t="function"==typeof m?m:function(e){return m.apply(e)},n=[],r=f;r<u;r+=(u-f)/o)n.push(t(r));var a=Math.min.apply(Math,[0].concat(n)),i=Math.max.apply(Math,[0].concat(n)),c=(20-s)/(i-a),l=function(e){return s-10+c*(e-a)};e.strokeStyle="#555",e.beginPath(),e.moveTo(0,l(0)),e.lineTo(o,l(0)),e.stroke(),e.strokeStyle="white",e.beginPath(),e.moveTo(0,l(n[0]));for(var p=1;p<n.length;p+=1)e.lineTo(p,l(n[p]));e.stroke()}),[]),r.createElement("div",{className:"plot"},r.createElement("span",null,i),r.createElement("canvas",{ref:d,width:o,height:null!=(n=s)?n:o,style:c?{width:o*c+"px",height:(null!=(a=s)?a:o)*c+"px"}:void 0}))}},756:function(e){e.exports=JSON.parse('{"minecraft:badlands":[217,69,21],"minecraft:badlands_plateau":[202,140,101],"minecraft:bamboo_jungle":[118,142,20],"minecraft:bamboo_jungle_hills":[59,71,10],"minecraft:basalt_deltas":[64,54,54],"minecraft:beach":[250,222,85],"minecraft:birch_forest":[48,116,68],"minecraft:birch_forest_hills":[31,95,50],"minecraft:cold_ocean":[32,32,112],"minecraft:crimson_forest":[221,8,8],"minecraft:dark_forest":[64,81,26],"minecraft:dark_forest_hills":[104,121,66],"minecraft:deep_cold_ocean":[32,32,56],"minecraft:deep_frozen_ocean":[64,64,144],"minecraft:deep_lukewarm_ocean":[0,0,64],"minecraft:deep_ocean":[0,0,48],"minecraft:deep_warm_ocean":[0,0,80],"minecraft:desert":[250,148,24],"minecraft:desert_hills":[210,95,18],"minecraft:desert_lakes":[255,188,64],"minecraft:end_barrens":[128,128,255],"minecraft:end_highlands":[128,128,255],"minecraft:end_midlands":[128,128,255],"minecraft:eroded_badlands":[255,109,61],"minecraft:flower_forest":[45,142,73],"minecraft:forest":[5,102,33],"minecraft:frozen_ocean":[112,112,214],"minecraft:frozen_river":[160,160,255],"minecraft:giant_spruce_taiga":[129,142,121],"minecraft:old_growth_spruce_taiga":[129,142,121],"minecraft:giant_spruce_taiga_hills":[109,119,102],"minecraft:giant_tree_taiga":[89,102,81],"minecraft:old_growth_pine_taiga":[89,102,81],"minecraft:giant_tree_taiga_hills":[69,79,62],"minecraft:gravelly_hills":[136,136,136],"minecraft:gravelly_mountains":[136,136,136],"minecraft:windswept_gravelly_hills":[136,136,136],"minecraft:ice_spikes":[180,220,220],"minecraft:jungle":[83,123,9],"minecraft:jungle_edge":[98,139,23],"minecraft:sparse_jungle":[98,139,23],"minecraft:jungle_hills":[44,66,5],"minecraft:lukewarm_ocean":[0,0,144],"minecraft:modified_badlands_plateau":[242,180,141],"minecraft:modified_gravelly_mountains":[120,152,120],"minecraft:modified_jungle":[123,163,49],"minecraft:modified_jungle_edge":[138,179,63],"minecraft:modified_wooded_badlands_plateau":[216,191,141],"minecraft:mountain_edge":[114,120,154],"minecraft:extreme_hills":[96,96,96],"minecraft:mountains":[96,96,96],"minecraft:windswept_hills":[96,96,96],"minecraft:mushroom_field_shore":[160,0,255],"minecraft:mushroom_fields":[255,0,255],"minecraft:nether_wastes":[191,59,59],"minecraft:ocean":[0,0,112],"minecraft:plains":[141,179,96],"minecraft:river":[0,0,255],"minecraft:savanna":[189,178,95],"minecraft:savanna_plateau":[167,157,100],"minecraft:shattered_savanna":[229,218,135],"minecraft:windswept_savanna":[229,218,135],"minecraft:shattered_savanna_plateau":[207,197,140],"minecraft:small_end_islands":[128,128,255],"minecraft:snowy_beach":[250,240,192],"minecraft:snowy_mountains":[160,160,160],"minecraft:snowy_taiga":[49,85,74],"minecraft:snowy_taiga_hills":[36,63,54],"minecraft:snowy_taiga_mountains":[89,125,114],"minecraft:snowy_tundra":[255,255,255],"minecraft:snowy_plains":[255,255,255],"minecraft:soul_sand_valley":[94,56,48],"minecraft:stone_shore":[162,162,132],"minecraft:stony_shore":[162,162,132],"minecraft:sunflower_plains":[181,219,136],"minecraft:swamp":[7,249,178],"minecraft:swamp_hills":[47,255,218],"minecraft:taiga":[11,102,89],"minecraft:taiga_hills":[22,57,51],"minecraft:taiga_mountains":[51,142,129],"minecraft:tall_birch_forest":[88,156,108],"minecraft:old_growth_birch_forest":[88,156,108],"minecraft:tall_birch_hills":[71,135,90],"minecraft:the_end":[128,128,255],"minecraft:the_void":[0,0,0],"minecraft:warm_ocean":[0,0,172],"minecraft:warped_forest":[73,144,123],"minecraft:wooded_badlands_plateau":[176,151,101],"minecraft:wooded_badlands":[176,151,101],"minecraft:wooded_hills":[34,85,28],"minecraft:wooded_mountains":[80,112,80],"minecraft:windswept_forest":[80,112,80],"minecraft:snowy_slopes":[140,195,222],"minecraft:lofty_peaks":[196,168,193],"minecraft:jagged_peaks":[196,168,193],"minecraft:snowcapped_peaks":[200,198,200],"minecraft:frozen_peaks":[200,198,200],"minecraft:stony_peaks":[82,92,103],"minecraft:grove":[150,150,189],"minecraft:meadow":[169,197,80],"minecraft:lush_caves":[112,255,79],"minecraft:dripstone_caves":[140,124,0]}')}}]);