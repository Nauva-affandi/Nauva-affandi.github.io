(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();function o(e){return document.getElementById(e)}function E(){return`
	<nav class="fixed top-0 w-full bg-slate-600 text-white dark:bg-[#3a8cdf] dark:text-white p-4 flex justify-between items-center">
      
    <button id="openSidebar" class="dark:text-white text-3xl sm:text-4xl md:text-4xl md:mb-2">
      ☰
    </button>
      
    <div class="flex grow justify-center">
      <h1 class="text-xl font-bold mr-[31.5px]">
      	cihuyyyyyy
      </h1>
  	</div>
  </nav>`}function I(e){e.innerHTML+=E()}const $="modulepreload",j=function(e){return"/"+e},h={},v=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(r.map(l=>{if(l=j(l),l in h)return;h[l]=!0;const u=l.endsWith(".css"),b=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${b}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":$,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((_,L)=>{d.addEventListener("load",_),d.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return n.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},N=(e,t,r)=>{const s=e[t];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==r?". Note that variables only represent file names one level deep.":""))))})};async function D(e,t){return(await N(Object.assign({"../databases/KANJI/N4.json":()=>v(()=>import("./N4-DSHcZg--.js"),[]),"../databases/KANJI/N5.json":()=>v(()=>import("./N5-rKq3hKfC.js"),[])}),`../databases/${e}/${t}.json`,4)).default}function y(e,t){if(e.length>1){const r=Math.max(1,Math.floor(e.length*(t/100)));e.splice(r,0,e.shift())}}function M(e){e.length>1&&(e[0].mistakeData={soft:0,hard:0},e.push(e.shift()))}function S(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.soft++,t.mistakeData.hard=0;const r=Math.max(20,50-t.mistakeData.soft*3);y(e,r)}}function P(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),console.log(`${t.mistakeData.soft?t.mistakeData.soft:0} ${t.mistakeData.hard?t.mistakeData.hard:0}`),t.mistakeData.soft=0,t.mistakeData.hard++;const r=Math.max(45,75-t.mistakeData.hard*3);y(e,r)}}let f=[];async function T(){let e=await D(o("parent").value,o("category_select").value);f=O(e),k()}function k(){const e=o("front").children[0],t=o("back").children[0];e.children[0].innerHTML=f[0].k,t.children[0].innerHTML=f[0].h,t.children[1].innerHTML=f[0].i}function m(){const e=o("card-inner");e.classList.remove("card_animation"),o("card").classList.remove("rotated"),k(),setTimeout(()=>{e.classList.toggle("card_animation")},350)}function A(){const e=o("next_card"),t=o("lupa_satu"),r=o("lupa_semuanya");e.addEventListener("click",()=>{M(f),m()}),t.addEventListener("click",()=>{S(f),m()}),r.addEventListener("click",()=>{P(f),m()})}function O(e){const t=e.length,n=Math.min(Math.max(t*1e3,1e5),1e6);for(let i=0;i<n+100;i++){i%1e3===0&&console.log(`Iterasi ke: ${i}`);const a=Array.from({length:10},()=>Math.floor(Math.random()*t)),c=new Set(a),l=Array.from(c);for(let u=0;u<l.length;u+=2){const b=l[u],d=l[u+1]||l[0];[e[b],e[d]]=[e[d],e[b]]}}return e}function H(){return`
	<li class="w-full h-15">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-gray-900 dark:border-white rounded-2xl" id="parent">
				<option value="undefined" disabled selected>pilih opsi</option>
				<option value="KANJI">kanji</option>
			</select>
		</div>
	</li>
	`}function K(){return`
		<li class=w-full bg-yellow-400>
			<div class="flex justify-center">
				<button id="fetch" type"button" class="bg-blue-600 px-5 py-2 rounded-2xl border font-bold">
					Submit
				</button>
			</div>
		</li>
	`}function B(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih opsi</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function U(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih bunpou</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function q(e){e.innerHTML+=C(),J()}let x="";function R(){p||(p=setInterval(()=>{let e=document.getElementById("parent").value;e!==x&&(x=e,e==="KANJI"&&(o("category").innerHTML=B()),e==="BUNPOU"&&(o("category").innerHTML=U()))},650))}let p=null;function g(){p&&(clearInterval(p),p=null)}function C(){return`
	<div id="sidebar" class="group fixed top-0 w-72 h-full bg-gray-200 dark:bg-[var(--my-light-gray)] shadow-lg transform -translate-x-full transition-transform duration-300 p-4 z-[99]">
	
		<div class="flex">
	  	<div class="flex-grow flex justify-center">
		    <h1 class="font-bold text-xl">Search</h1>
		  </div>
		  
		  <button id="closeSidebar" class="text-black-700 text-4xl px-3">
		    ×
		  </button>
		</div>

		<ul
		  class="mt-4 space-y-3 z-[88] duration-400 transition-all ease-in-out opacity-100"
		  id="sidebar_contain"
		>
		${H()}
		<div id="category"></div>
		${K()}
		</ul>
	</div>
	`}function J(){[o("openSidebar"),o("closeSidebar")].forEach(e=>{e.addEventListener("click",()=>{o("sidebar").classList.toggle("-translate-x-full")})}),document.getElementById("openSidebar").addEventListener("click",()=>{R()}),document.getElementById("closeSidebar").addEventListener("click",()=>{g()}),o("fetch").addEventListener("click",()=>{g(),T(),o("sidebar").classList.toggle("-translate-x-full")})}function z(e,t,r,s,n){return`
	<div id="card" class="relative w-full h-[184px] perspective-1000 duration-700">
		<div class="absolute inset-0 w-full h-full transform-style-preserve-3d card_animation" id="card-inner">
	    <div id="front" class="bg-blue-50 rounded-3xl w-full h-full absolute backface-hidden flex items-center justify-center">
		    <div>
		    	<p class="text-3xl">${e}</p>
	      	<p class="${s}"></p>
		    </div>
	    </div>
	    <div id="back" class="bg-blue-50 absolute w-full h-full rounded-3xl top-0 backface-hidden rotate-y-180 flex items-center justify-center">
			  <div>
				  <p class="text-3xl">
				  	${t}</p>
		      <p class="mt-${n}">
		      	${r}</p>
			  </div>
  		</div>
  	</div>
	</div>
	`}function Q(e){e.innerHTML+=F(),V(),A()}function V(){o("card-content").innerHTML=z("Klik icon 3 garis terlebih dahulu","- -","--","2","2");const e=o("card");o("card").addEventListener("click",()=>{e.classList.toggle("rotated")})}function F(){return`
		<div id="container" class="w-full flex justify-center mt-32">
				<div class="md:w-[75%]">
					<div id="card-content" class="dark:bg-[#f2f2f2] bg-gray-500 md:w-sm:w-full h-48 p-1 rounded-3xl text-black font-bold text-1xl">
					</div>
					<div id="control_btn" class="flex flex-wrap justify-start gap-y-3 mt-5">
						<button id="next_card" class="bg-blue-600 py-2 px-4 rounded-lg font-bold sm:text-sm border-2 border-white hover:bg-blue-700 text-white mx-2">
							Next
						</button>
						<button id="lupa_satu" class="bg-blue-600 px-2 rounded-lg font-bold border-2 border-white text-white mx-2 hover:bg-blue-700">
							lupa kanji / hiragana
						</button>
						<button id="lupa_semuanya" class="bg-blue-600 px-2 py-2 rounded-lg font-bold border-2 border-white text-white mx-2 hover:bg-blue-700">
							lupa kanji & hiragana
						</button>
					</div>
				</div>
		</div>
	`}const w=o("app.fixed"),G=o("app");I(w);q(w);Q(G);
