import"./style.37eb60b7.js";import{$ as e,w as t}from"./vendor.95b11423.js";const n=new e("spline",(e=>e)).addPoint(0,0).addPoint(1,1);d("Simple [0, 0] -> [1, 1]",0,1,(e=>n.apply(e)));const o=new e("spline2",(e=>e)).addPoint(0,0).addPoint(.4,new e("spline3",(e=>2*e-e*e)).addPoint(.2,-1).addPoint(1,1));d("Nested with different mapper",0,1,(e=>o.apply(e))),d("Offset from continentalness [-1.1, 1]",-1.1,1,(e=>t.offset(t.point(e,-.45,0)))),d("Factor from continentalness [-0.3, 0.3]",-.3,.3,(e=>t.factor(t.point(e,-.45,0)))),d("Peaks from continentalness [-0.3, 0.3]",-.3,.3,(e=>t.peaks(t.point(e,-.8,.6)))),d("Peaks from ridges [0, 1]",0,1,(e=>t.peaks({continents:.11,erosion:-.45,weirdness:0,ridges:e})));const a=s(-.25,.35,.35,.35,.42,.5);d("Wide plateau from ridges [-1, 1]",-1,1,(e=>a.apply(e)));const i=s(-.1,.01,.01,.03,.1,.5);function s(t,n,o,a,i,s){const d=Math.max(.5*(n-t),s),r=5*(o-n);return new e("ridge",(e=>e)).addPoint(-1,t,d).addPoint(-.4,n,Math.min(d,r)).addPoint(0,o,r).addPoint(.4,a,2*(a-o)).addPoint(1,i,.7*(i-a))}function d(e,t,n,o){var a;const i=document.createElement("div");i.classList.add("plot");const s=document.createElement("span");s.textContent=e,i.append(s);const d=document.createElement("canvas");d.width=300,d.height=200,i.append(d),null==(a=document.querySelector("main"))||a.append(i);const r=d.getContext("2d"),p=[];for(let f=t;f<n;f+=(n-t)/300)p.push(o(f));const l=Math.min(0,...p),c=-180/(Math.max(0,...p)-l),m=e=>190+c*(e-l);r.strokeStyle="#555",r.beginPath(),r.moveTo(0,m(0)),r.lineTo(300,m(0)),r.stroke(),r.strokeStyle="white",r.beginPath(),r.moveTo(0,m(p[0]));for(let f=1;f<p.length;f+=1)r.lineTo(f,m(p[f]));r.stroke()}d("Plains ridges from ridges [-1, 1]",-1,1,(e=>i.apply(e)));