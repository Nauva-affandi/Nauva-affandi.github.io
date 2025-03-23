(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();function i(e){return document.getElementById(e)}function E(){return`
	<nav class="fixed top-0 w-full bg-slate-600 text-white dark:bg-[#3a8cdf] dark:text-white p-4 flex justify-between items-center">
      
    <button id="openSidebar" class="dark:text-white text-3xl sm:text-4xl md:text-4xl md:mb-2">
      ☰
    </button>
      
    <div class="flex grow justify-center">
      <h1 class="text-xl font-bold mr-[31.5px]">
      	cihuyyyyyy
      </h1>
  	</div>
  </nav>`}function $(e){e.innerHTML+=E()}const I="modulepreload",j=function(e){return"/"+e},v={},x=function(t,o,l){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(o.map(c=>{if(c=j(c),c in v)return;v[c]=!0;const u=c.endsWith(".css"),b=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${b}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":I,u||(d.as="script"),d.crossOrigin="",d.href=c,s&&d.setAttribute("nonce",s),document.head.appendChild(d),u)return new Promise((_,L)=>{d.addEventListener("load",_),d.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return t().catch(r)})},N=(e,t,o)=>{const l=e[t];return l?typeof l=="function"?l():Promise.resolve(l):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})};async function D(e,t){return(await N(Object.assign({"../databases/KANJI/N4.json":()=>x(()=>import("./N4-Dn1jJ6Zf.js"),[]),"../databases/KANJI/N5.json":()=>x(()=>import("./N5-rKq3hKfC.js"),[])}),`../databases/${e}/${t}.json`,4)).default}function k(e,t){if(e.length>1){const o=Math.max(1,Math.floor(e.length*(t/100)));e.splice(o,0,e.shift())}}function M(e){e.length>1&&(e[0].mistakeData={soft:0,hard:0},e.push(e.shift()))}function S(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.soft++,t.mistakeData.hard=0;const o=Math.max(20,50-t.mistakeData.soft*3);k(e,o)}}function P(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),console.log(`${t.mistakeData.soft?t.mistakeData.soft:0} ${t.mistakeData.hard?t.mistakeData.hard:0}`),t.mistakeData.soft=0,t.mistakeData.hard++;const o=Math.max(45,75-t.mistakeData.hard*3);k(e,o)}}let f=[];async function T(){let e=await D(i("parent").value,i("category_select").value);f=O(e),m()}function m(){const e=i("front"),t=i("back");e.children[0].innerHTML=f[0].k,t.children[0].children[0].innerHTML=f[0].h,t.children[0].children[1].innerHTML=f[0].i}function h(){const e=i("card-inner");e.classList.remove("card_animation"),i("card").classList.remove("rotated"),setTimeout(()=>{e.classList.toggle("card_animation")},350)}function A(){const e=i("next_card"),t=i("lupa_satu"),o=i("lupa_semuanya");e.addEventListener("click",()=>{M(f),m(),h()}),t.addEventListener("click",()=>{S(f),m(),h()}),o.addEventListener("click",()=>{P(f),m(),h()})}function O(e){const t=e.length,o=Math.floor(t*500);for(let l=0;l<o;l++){l%1e3===0&&console.log(`Iterasi ke: ${l}`);const n=Math.min(50,t),r=Array.from({length:n},()=>Math.floor(Math.random()*t)),a=new Set(r),s=Array.from(a);for(let c=0;c<s.length;c++){const u=s[c],b=s[(c+1)%s.length];[e[u],e[b]]=[e[b],e[u]]}}return e}function H(){return`
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
	`}function C(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih bunpou</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function U(e){e.innerHTML+=R(),J()}let g="";function q(){p||(p=setInterval(()=>{let e=document.getElementById("parent").value;e!==g&&(g=e,e==="KANJI"&&(i("category").innerHTML=B()),e==="BUNPOU"&&(i("category").innerHTML=C()))},650))}let p=null;function y(){p&&(clearInterval(p),p=null)}function R(){return`
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
	`}function J(){[i("openSidebar"),i("closeSidebar")].forEach(e=>{e.addEventListener("click",()=>{i("sidebar").classList.toggle("-translate-x-full")})}),document.getElementById("openSidebar").addEventListener("click",()=>{q()}),document.getElementById("closeSidebar").addEventListener("click",()=>{y()}),i("fetch").addEventListener("click",()=>{y(),T(),i("sidebar").classList.toggle("-translate-x-full")})}function z(e,t,o,l){return`
	<div id="card" class="relative w-full h-[184px] perspective-1000 duration-700">
		<div class="absolute inset-0 w-full h-full transform-style-preserve-3d card_animation" id="card-inner">
	    <div id="front" class="bg-blue-50 rounded-3xl w-full h-full absolute backface-hidden flex items-center justify-center">
	      <p class="text-3xl">${e}</p>
	    </div>
	    <div id="back" class="bg-blue-50 absolute w-full h-full rounded-3xl top-0 backface-hidden rotate-y-180 flex items-center justify-center">
			  <div>
			  <p class="text-3xl">
			  	${t}</p>
	      <p class="mt-${l}">
	      	${o}
	      </p>
			  </div>
  		</div>
  	</div>
	</div>
	`}function Q(e){e.innerHTML+=F(),V(),A()}function V(){i("card-content").innerHTML=z("--","- -","--","2"),i("card").addEventListener("click",()=>{i("card").classList.toggle("rotated")})}function F(){return`
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
	`}const w=i("app.fixed"),G=i("app");$(w);U(w);Q(G);
