(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function i(e){return document.getElementById(e)}function E(){return`
	<nav class="fixed top-0 w-full bg-slate-600 text-white dark:bg-[#3a8cdf] dark:text-white p-4 flex justify-between items-center">
      
    <button id="openSidebar" class="dark:text-white text-3xl sm:text-4xl md:text-4xl md:mb-2">
      ☰
    </button>
      
    <div class="flex grow justify-center">
      <h1 class="text-xl font-bold mr-[31.5px]">
      	cihuyyyyyy
      </h1>
  	</div>
  </nav>`}function j(e){e.innerHTML+=E()}const N="modulepreload",$=function(e){return"/"+e},h={},v=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),s=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=$(c),c in h)return;h[c]=!0;const p=c.endsWith(".css"),k=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${k}`))return;const d=document.createElement("link");if(d.rel=p?"stylesheet":N,p||(d.as="script"),d.crossOrigin="",d.href=c,s&&d.setAttribute("nonce",s),document.head.appendChild(d),p)return new Promise((_,L)=>{d.addEventListener("load",_),d.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&r(s.reason);return t().catch(r)})},I=(e,t,n)=>{const a=e[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((o,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};async function P(e,t){return(await I(Object.assign({"../databases/KANJI/N4.json":()=>v(()=>import("./N4-BH1kir6Q.js"),[]),"../databases/KANJI/N5.json":()=>v(()=>import("./N5-DTF1LKmo.js"),[])}),`../databases/${e}/${t}.json`,4)).default}function y(e,t){if(e.length>1){const n=Math.max(1,Math.floor(e.length*(t/100)));e.splice(n,0,e.shift())}}function M(e){e.length>1&&(e[0].mistakeData={soft:0,hard:0},e.push(e.shift()))}function S(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.soft++,t.mistakeData.hard=0;const n=Math.max(20,50-t.mistakeData.soft*3);y(e,n)}}function T(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.soft=0,t.mistakeData.hard++;const n=Math.max(45,75-t.mistakeData.hard*3);y(e,n)}}let u=[];async function D(){let e=await P(i("parent").value,i("category_select").value);u=A(e),b()}function b(){const e=i("front"),t=i("back");e.children[0].innerHTML=u[0].k,t.children[0].children[0].innerHTML=u[0].h,t.children[0].children[1].innerHTML=u[0].i}function m(){const e=i("card-inner");e.classList.remove("card_animation"),i("card").classList.remove("rotated"),setTimeout(()=>{e.classList.toggle("card_animation")},350)}function O(){const e=i("next_card"),t=i("lupa_satu"),n=i("lupa_semuanya");e.addEventListener("click",()=>{M(u),b(),m()}),t.addEventListener("click",()=>{S(u),b(),m()}),n.addEventListener("click",()=>{T(u),b(),m()})}function A(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function H(){return`
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
	`}function q(e){e.innerHTML+=C(),J()}let x="";function R(){f||(f=setInterval(()=>{let e=document.getElementById("parent").value;e!==x&&(x=e,e==="KANJI"&&(i("category").innerHTML=B()),e==="BUNPOU"&&(i("category").innerHTML=U()))},650))}let f=null;function g(){f&&(clearInterval(f),f=null)}function C(){return`
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
	`}function J(){[i("openSidebar"),i("closeSidebar")].forEach(e=>{e.addEventListener("click",()=>{i("sidebar").classList.toggle("-translate-x-full")})}),document.getElementById("openSidebar").addEventListener("click",()=>{R()}),document.getElementById("closeSidebar").addEventListener("click",()=>{g()}),i("fetch").addEventListener("click",()=>{g(),D(),i("sidebar").classList.toggle("-translate-x-full")})}function z(e,t,n,a){return`
	<div id="card" class="relative w-full h-[184px] perspective-1000 duration-700">
		<div class="absolute inset-0 w-full h-full transform-style-preserve-3d card_animation" id="card-inner">
	    <div id="front" class="bg-blue-50 rounded-3xl w-full h-full absolute backface-hidden flex items-center justify-center">
	      <p class="text-3xl">${e}</p>
	    </div>
	    <div id="back" class="bg-blue-50 absolute w-full h-full rounded-3xl top-0 backface-hidden rotate-y-180 flex items-center justify-center">
			  <div>
			  <p class="text-3xl">
			  	${t}</p>
	      <p class="mt-${a}">
	      	${n}
	      </p>
			  </div>
  		</div>
  	</div>
	</div>
	`}function Q(e){e.innerHTML+=F(),V(),O()}function V(){i("card-content").innerHTML=z("--","- -","--","2"),i("card").addEventListener("click",()=>{i("card").classList.toggle("rotated")})}function F(){return`
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
	`}const w=i("app.fixed"),G=i("app");j(w);q(w);Q(G);
