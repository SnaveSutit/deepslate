"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,c=k["".concat(d,".").concat(u)]||k[u]||s[u]||o;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="NbtChunk",l={unversionedId:"nbt/chunk",id:"nbt/chunk",title:"NbtChunk",description:"Creating an NbtChunk",source:"@site/docs/nbt/chunk.md",sourceDirName:"nbt",slug:"/nbt/chunk",permalink:"/deepslate/nbt/chunk",draft:!1,editUrl:"https://github.com/misode/deepslate/edit/main/website/docs/nbt/chunk.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"NbtRegion",permalink:"/deepslate/nbt/region"},next:{title:"NbtTag",permalink:"/deepslate/nbt/tag"}},d={},p=[{value:"Creating an NbtChunk",id:"creating-an-nbtchunk",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>getCompression()</code>",id:"getCompression",level:3},{value:"<code>setCompression(compression)</code>",id:"setCompression",level:3},{value:"<code>getFile()</code>",id:"getFile",level:3},{value:"<code>getRoot()</code>",id:"getRoot",level:3},{value:"<code>setRoot(root)</code>",id:"setRoot",level:3},{value:"<code>markDirty()</code>",id:"markDirty",level:3},{value:"<code>getRaw()</code>",id:"getRaw",level:3},{value:"<code>toJson()</code>",id:"toJson",level:3},{value:"<code>NbtChunk.Ref</code>",id:"Ref",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Methods",id:"methods-1",level:3},{value:"<code>getFile()</code>",id:"Ref.getFile",level:4},{value:"<code>getRoot()</code>",id:"Ref.getRoot",level:4},{value:"<code>getFileAsync()</code>",id:"Ref.getFileAsync",level:4},{value:"<code>getRootAsync()</code>",id:"Ref.getRootAsync",level:4},{value:"<code>isResolved()</code>",id:"Ref.isResolved",level:4}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nbtchunk"},"NbtChunk"),(0,r.kt)("h2",{id:"creating-an-nbtchunk"},"Creating an NbtChunk"),(0,r.kt)("p",null,"Most like you will be getting chunks through an ",(0,r.kt)("a",{parentName:"p",href:"../region"},(0,r.kt)("inlineCode",{parentName:"a"},"NbtRegion")),", but you can also create them separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const file = NbtFile.create()\nconst chunk = NbtChunk.create(3, 4, file)\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"compression")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getCompression"},(0,r.kt)("inlineCode",{parentName:"h3"},"getCompression()")),(0,r.kt)("p",null,"Returns the string representation of the compression. Throws if the chunk has an invalid compression mode."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"String"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gzip"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zlib"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"none"))))),(0,r.kt)("h3",{id:"setCompression"},(0,r.kt)("inlineCode",{parentName:"h3"},"setCompression(compression)")),(0,r.kt)("p",null,"Sets this chunk's compression number corresponding to the the passed string. See the table above for the conversion. Throws if compression is an invalid compression mode."),(0,r.kt)("h3",{id:"getFile"},(0,r.kt)("inlineCode",{parentName:"h3"},"getFile()")),(0,r.kt)("p",null,"Returns the ",(0,r.kt)("a",{parentName:"p",href:"../file"},(0,r.kt)("inlineCode",{parentName:"a"},"NbtFile")),". If this is the first time, it reads it from the raw data."),(0,r.kt)("h3",{id:"getRoot"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRoot()")),(0,r.kt)("p",null,"Returns the root ",(0,r.kt)("a",{parentName:"p",href:"../type/compound"},(0,r.kt)("inlineCode",{parentName:"a"},"NbtCompound"))," from the file. Equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"chunk.getFile().root"),"."),(0,r.kt)("h3",{id:"setRoot"},(0,r.kt)("inlineCode",{parentName:"h3"},"setRoot(root)")),(0,r.kt)("p",null,"Sets the file's root and marks this chunk as dirty."),(0,r.kt)("h3",{id:"markDirty"},(0,r.kt)("inlineCode",{parentName:"h3"},"markDirty()")),(0,r.kt)("p",null,"Marks this chunk as dirty. You need to call this whenever you make changes to the chunk's ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),"."),(0,r.kt)("h3",{id:"getRaw"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRaw()")),(0,r.kt)("p",null,"Returns the raw ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array")," data of the chunk. If the chunk is dirt, the file will be written first, and then the file will be marked as not dirty."),(0,r.kt)("h3",{id:"toJson"},(0,r.kt)("inlineCode",{parentName:"h3"},"toJson()")),(0,r.kt)("p",null,"Serializes the chunk to a format which can be represented by JSON. This can be necessary when using workers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const json = chunk.toJson()\n// send the data to a different worker\nconst chunk2 = NbtChunk.fromJson(json, chunkResolver)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For performance reasons, the serialized data does not contain the raw chunk data. The chunk obtained from ",(0,r.kt)("inlineCode",{parentName:"p"},"NbtChunk.fromJson")," returns an ",(0,r.kt)("a",{parentName:"p",href:"#Ref"},(0,r.kt)("inlineCode",{parentName:"a"},"NbtChunk.Ref")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"chunkResolver")," is necessary to asynchronously request the data of a chunk.")),(0,r.kt)("h2",{id:"Ref"},(0,r.kt)("inlineCode",{parentName:"h2"},"NbtChunk.Ref")),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"compression")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resolver")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(x: number, z: number) => Promise<NbtFile>"))))),(0,r.kt)("h3",{id:"methods-1"},"Methods"),(0,r.kt)("h4",{id:"Ref.getFile"},(0,r.kt)("inlineCode",{parentName:"h4"},"getFile()")),(0,r.kt)("p",null,"Returns the ",(0,r.kt)("a",{parentName:"p",href:"../file"},(0,r.kt)("inlineCode",{parentName:"a"},"NbtFile"))," or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if the chunk hasn't been resolved yet."),(0,r.kt)("h4",{id:"Ref.getRoot"},(0,r.kt)("inlineCode",{parentName:"h4"},"getRoot()")),(0,r.kt)("p",null,"Returns the root ",(0,r.kt)("a",{parentName:"p",href:"../type/compound"},(0,r.kt)("inlineCode",{parentName:"a"},"NbtCompound"))," of the file or ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if the chunk hasn't been resolved yet."),(0,r.kt)("h4",{id:"Ref.getFileAsync"},(0,r.kt)("inlineCode",{parentName:"h4"},"getFileAsync()")),(0,r.kt)("p",null,"Returns a promise to the ",(0,r.kt)("a",{parentName:"p",href:"../file"},(0,r.kt)("inlineCode",{parentName:"a"},"NbtFile")),"."),(0,r.kt)("h4",{id:"Ref.getRootAsync"},(0,r.kt)("inlineCode",{parentName:"h4"},"getRootAsync()")),(0,r.kt)("p",null,"Returns a promise to the root ",(0,r.kt)("a",{parentName:"p",href:"../type/compound"},(0,r.kt)("inlineCode",{parentName:"a"},"NbtCompound"))," of the file."),(0,r.kt)("h4",{id:"Ref.isResolved"},(0,r.kt)("inlineCode",{parentName:"h4"},"isResolved()")),(0,r.kt)("p",null,"Returns a boolean indicating whether the ref is resolved yet."))}s.isMDXComponent=!0}}]);