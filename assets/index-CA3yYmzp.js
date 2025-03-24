(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();function n(e){return document.getElementById(e)}function $(){return`
	<nav class="fixed top-0 w-full bg-slate-600 text-white dark:bg-[#3a8cdf] dark:text-white p-4 flex justify-between items-center">
      
    <button id="openSidebar" class="dark:text-white text-3xl sm:text-4xl md:text-4xl md:mb-2">
      ☰
    </button>
      
    <div class="flex grow justify-center">
      <h1 class="text-xl font-bold mr-[31.5px]" id="navbar_card_name">
      	cihuyyyyyy
      </h1>
  	</div>
    <div class="absolute font-bold top-20 text-black dark:text-white">
    	Jumlah card : <span id="jumlah_card_show">-</span>
    </div>
  </nav>`}function N(e){e.innerHTML+=$()}const j="modulepreload",S=function(e){return"/"+e},x={},g=function(t,a,l){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(a.map(s=>{if(s=S(s),s in x)return;x[s]=!0;const u=s.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${m}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":j,u||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),u)return new Promise((E,I)=>{c.addEventListener("load",E),c.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(r){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=r,window.dispatchEvent(d),!d.defaultPrevented)throw r}return o.then(r=>{for(const d of r||[])d.status==="rejected"&&i(d.reason);return t().catch(i)})},M=(e,t,a)=>{const l=e[t];return l?typeof l=="function"?l():Promise.resolve(l):new Promise((o,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})};async function T(e,t){return(await M(Object.assign({"../databases/KANJI/N4.json":()=>g(()=>import("./N4-Dakw687e.js"),[]),"../databases/KANJI/N5.json":()=>g(()=>import("./N5-rKq3hKfC.js"),[])}),`../databases/${e}/${t}.json`,4)).default}function k(e,t){if(e.length>1){const a=Math.max(1,Math.floor(e.length*(t/100)));e.splice(a,0,e.shift())}}function D(e){e.length>1&&(e[0].mistakeData={soft:0,hard:0},e.push(e.shift()))}function P(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.soft++,t.mistakeData.hard=0;const a=Math.max(20,50-t.mistakeData.soft*3);k(e,a)}}function O(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),console.log(`${t.mistakeData.soft?t.mistakeData.soft:0} ${t.mistakeData.hard?t.mistakeData.hard:0}`),t.mistakeData.soft=0,t.mistakeData.hard++;const a=Math.max(45,75-t.mistakeData.hard*3);k(e,a)}}let f=[],b=[];async function A(){let e=await T(n("parent").value,n("category_select").value);f=J(e),w()}function w(){const e=n("front").children[0],t=n("back").children[0];e.children[0].innerHTML=f[0].k,t.children[0].innerHTML=f[0].h,t.children[1].innerHTML=f[0].i}function h(){const e=n("card-inner");e.classList.remove("card_animation"),n("card").classList.remove("rotated"),w(),setTimeout(()=>{e.classList.toggle("card_animation")},260)}function v(){b.length<7||b.pop(),b.unshift(JSON.parse(JSON.stringify(f)))}function H(){const e=n("next_card"),t=n("lupa_satu"),a=n("lupa_semuanya"),l=n("undo");[e,t,a].forEach(i=>{i.disabled=!0});function o(i){i.disabled=!0,setTimeout(()=>{i.disabled=!1},260)}e.addEventListener("click",()=>{o(e),v(),D(f),h(),console.log(b)}),t.addEventListener("click",()=>{o(t),v(),P(f),h()}),a.addEventListener("click",()=>{o(a),v(),O(f),h()}),l.addEventListener("click",()=>{})}function J(e){const t=e.length,o=Math.min(Math.max(t*1e3,1e5),1e6);for(let i=0;i<o+100;i++){i%1e3===0&&console.log(`Iterasi ke: ${i}`);const r=Array.from({length:10},()=>Math.floor(Math.random()*t)),d=new Set(r),s=Array.from(d);for(let u=0;u<s.length;u+=2){const m=s[u],c=s[u+1]||s[0];[e[m],e[c]]=[e[c],e[m]]}}return n("navbar_card_name").innerHTML=n("parent").value+" "+n("category_select").value,n("jumlah_card_show").innerHTML=`${t}`,[n("next_card"),n("lupa_satu"),n("lupa_semuanya")].forEach(i=>{i.disabled=!1}),e}function K(){return`
	<li class="w-full h-15">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-gray-900 dark:border-white rounded-2xl" id="parent">
				<option value="undefined" disabled selected>pilih opsi</option>
				<option value="KANJI">kanji</option>
			</select>
		</div>
	</li>
	`}function B(){return`
		<li class=w-full bg-yellow-400>
			<div class="flex justify-center">
				<button id="fetch" type"button" class="bg-blue-600 px-5 py-2 rounded-2xl border font-bold">
					Submit
				</button>
			</div>
		</li>
	`}function U(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih opsi</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function q(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih bunpou</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function R(e){e.innerHTML+=z(),Q()}let y="";function C(){p||(p=setInterval(()=>{let e=document.getElementById("parent").value;e!==y&&(y=e,e==="KANJI"&&(n("category").innerHTML=U()),e==="BUNPOU"&&(n("category").innerHTML=q()))},650))}let p=null;function _(){p&&(clearInterval(p),p=null)}function z(){return`
	<div id="sidebar" class="group fixed top-0 w-72 h-full bg-gray-200 dark:bg-[var(--my-light-gray)] shadow-lg transform -translate-x-full transition-transform duration-300 p-4 z-[99999]">
	
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
		${K()}
		<div id="category"></div>
		${B()}
		</ul>
	</div>
	`}function Q(){[n("openSidebar"),n("closeSidebar")].forEach(e=>{e.addEventListener("click",()=>{n("sidebar").classList.toggle("-translate-x-full")})}),document.getElementById("openSidebar").addEventListener("click",()=>{C()}),document.getElementById("closeSidebar").addEventListener("click",()=>{_()}),n("fetch").addEventListener("click",()=>{_(),A(),n("sidebar").classList.toggle("-translate-x-full")})}function V(e,t,a,l,o){return`
	<div id="card" class="relative w-full h-[184px] perspective-1000 duration-700">
		<div class="absolute inset-0 w-full h-full transform-style-preserve-3d card_animation" id="card-inner">
	    <div id="front" class="bg-blue-50 rounded-3xl w-full h-full absolute backface-hidden flex items-center justify-center">
		    <div>
		    	<p class="text-3xl">${e}</p>
	      	<p class="${l}"></p>
		    </div>
	    </div>
	    <div id="back" class="bg-blue-50 absolute w-full h-full rounded-3xl top-0 backface-hidden rotate-y-180 flex items-center justify-center">
			  <div>
				  <p class="text-3xl">
				  	${t}</p>
		      <p class="mt-${o}">
		      	${a}</p>
			  </div>
  		</div>
  	</div>
	</div>
	`}function F(e){e.innerHTML+=W(),G(),H()}function G(){n("card-content").innerHTML=V("Klik icon 3 garis terlebih dahulu","- -","--","2","2");const e=n("card");n("card").addEventListener("click",()=>{e.classList.toggle("rotated")})}function W(){return`
		<div id="container" class="w-full flex justify-center mt-32 relative">
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
			<div class="absolute top-96">
				<button id="undo" class="bg-red-500 px-6 py-2 rounded-lg font-bold border-2 border-white text-white mx-2 hover:bg-red-700">
						undo
					</button>
			</div>
		</div>
	`}const L=n("app.fixed"),X=n("app");N(L);R(L);F(X);
