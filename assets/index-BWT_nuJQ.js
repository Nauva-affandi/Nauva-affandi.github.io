(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();function n(e){return document.getElementById(e)}function T(){return`
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
  </nav>`}function j(e){e.innerHTML+=T()}const $="modulepreload",A=function(e){return"/"+e},g={},v=function(t,a,o){let i=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.allSettled(a.map(c=>{if(c=A(c),c in g)return;g[c]=!0;const m=c.endsWith(".css"),M=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${M}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":$,m||(u.as="script"),u.crossOrigin="",u.href=c,s&&u.setAttribute("nonce",s),document.head.appendChild(u),m)return new Promise((O,I)=>{u.addEventListener("load",O),u.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return i.then(r=>{for(const s of r||[])s.status==="rejected"&&l(s.reason);return t().catch(l)})},S=(e,t,a)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((i,l)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})};async function D(e,t){return(await S(Object.assign({"../databases/KANJI/N4.json":()=>v(()=>import("./N4-Dakw687e.js"),[]),"../databases/KANJI/N5.json":()=>v(()=>import("./N5-rKq3hKfC.js"),[]),"../databases/KOTOBA/MNN-BAB-26.json":()=>v(()=>import("./MNN-BAB-26-CFVqKLiQ.js"),[])}),`../databases/${e}/${t}.json`,4)).default}function k(e,t){if(e.length>1){const a=Math.max(1,Math.floor(e.length*(t/100)));e.splice(a,0,e.shift())}}function P(e){e.length>1&&(e[0].mistakeData={soft:0,hard:0},e.push(e.shift()))}function K(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.soft++,t.mistakeData.hard=0;const a=Math.max(20,50-t.mistakeData.soft*3);k(e,a)}}function J(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),console.log(`${t.mistakeData.soft?t.mistakeData.soft:0} ${t.mistakeData.hard?t.mistakeData.hard:0}`),t.mistakeData.soft=0,t.mistakeData.hard++;const a=Math.max(45,75-t.mistakeData.hard*3);k(e,a)}}const w=260;let p,d=[],f=[];async function B(){let e=await D(n("parent").value,n("category_select").value);d=q(e),p=="KANJI"&&b()}function H(){const e=n("next_card"),t=n("lupa_satu"),a=n("lupa_semuanya"),o=n("undo");[e,t,a,o].forEach(i=>{i.disabled=!0}),e.addEventListener("click",()=>{p=="KANJI"&&x(P,e,b)}),t.addEventListener("click",()=>{p=="KANJI"&&x(K,t,b)}),a.addEventListener("click",()=>{p=="KANJI"&&x(J,a,b)}),o.addEventListener("click",()=>{E(o),R(),p=="KANJI"&&b()})}function x(e,t,a){E(t),U(),e&&e(d),L(),a&&a()}function U(){const e=Math.min(5+Math.floor(d.length/20),12);f.length<e||f.pop(),f.unshift(JSON.parse(JSON.stringify(d))),n("undo_warn").classList.add("hidden")}function R(){f.length>0&&(d=JSON.parse(JSON.stringify(f.shift())),L()),f.length===0&&n("undo_warn").classList.remove("hidden")}function L(){const e=n("card-inner");e.classList.remove("card_animation"),n("card").classList.remove("rotated"),setTimeout(()=>{e.classList.toggle("card_animation")},w)}function E(e){e.disabled=!0,setTimeout(()=>{e.disabled=!1},w)}function b(){const e=n("front").children[0],t=n("back").children[0];e.children[0].innerHTML=d[0].k,t.children[0].innerHTML=d[0].h,t.children[1].innerHTML=d[0].i}function q(e){const t=e.length;for(let o=t-1;o>0;o--){const i=Math.floor(Math.random()*(o+1));[e[o],e[i]]=[e[i],e[o]]}const a=1e5;for(let o=0;o<a;o++){const i=Math.floor(Math.random()*t),l=Math.floor(Math.random()*t);[e[i],e[l]]=[e[l],e[i]]}for(let o=0;o<t;o++){const i=(o^Math.floor(Math.random()*t))%t;[e[o],e[i]]=[e[i],e[o]]}return n("navbar_card_name").innerHTML=n("parent").value+" "+n("category_select").value,p=n("parent").value,n("jumlah_card_show").innerHTML=`${t}`,[n("next_card"),n("lupa_satu"),n("lupa_semuanya"),n("undo")].forEach(o=>{o.disabled=!1}),e}function C(){return`
	<li class="w-full h-15">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-gray-900 dark:border-white rounded-2xl" id="parent">
				<option value="undefined" disabled selected>pilih opsi</option>
				<option value="KANJI">kanji</option>
				<option value="KOTOBA">kotoba</option>
				<option value="BUNPOU">bunpou</option>
			</select>
		</div>
	</li>
	`}function V(){return`
		<li class=w-full bg-yellow-400>
			<div class="flex justify-center">
				<button id="fetch" type"button" class="bg-blue-600 px-5 py-2 rounded-2xl border font-bold">
					Submit
				</button>
			</div>
		</li>
	`}function z(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih opsi</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function Q(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih bunpou</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function F(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih opsi</option>
				<option value="MNN-BAB-26">minna no nihongo bab 26</option>
			</select>
		</div>
	</li>
	`}function G(e){e.innerHTML+=X(),Y()}let _="";function W(){h||(h=setInterval(()=>{let e=document.getElementById("parent").value;e!==_&&(_=e,e==="KANJI"?n("category").innerHTML=z():e==="BUNPOU"?n("category").innerHTML=Q():e==="KOTOBA"&&(n("category").innerHTML=F()))},650))}let h=null;function y(){h&&(clearInterval(h),h=null)}function X(){return`
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
		${C()}
		<div id="category"></div>
		${V()}
		</ul>
	</div>
	`}function Y(){[n("openSidebar"),n("closeSidebar")].forEach(e=>{e.addEventListener("click",()=>{n("sidebar").classList.toggle("-translate-x-full")})}),document.getElementById("openSidebar").addEventListener("click",()=>{W()}),document.getElementById("closeSidebar").addEventListener("click",()=>{y()}),n("fetch").addEventListener("click",()=>{y(),B(),n("sidebar").classList.toggle("-translate-x-full")})}function Z(e,t,a,o,i){return`
	<div id="card" class="relative w-full h-[184px] perspective-1000 duration-700">
		<div class="absolute inset-0 w-full h-full transform-style-preserve-3d card_animation" id="card-inner">
	    <div id="front" class="bg-blue-50 rounded-3xl w-full h-full absolute backface-hidden flex items-center justify-center">
		    <div>
		    	<p class="text-3xl">${e}</p>
	      	<p class="${o}"></p>
		    </div>
	    </div>
	    <div id="back" class="bg-blue-50 absolute w-full h-full rounded-3xl top-0 backface-hidden rotate-y-180 flex items-center justify-center">
			  <div>
				  <p class="text-3xl">
				  	${t}</p>
		      <p class="mt-${i}">
		      	${a}</p>
			  </div>
  		</div>
  	</div>
	</div>
	`}function ee(e){e.innerHTML+=ne(),te(),H()}function te(){n("card-content").innerHTML=Z("Klik icon 3 garis terlebih dahulu","- -","--","2","2");const e=n("card");n("card").addEventListener("click",()=>{e.classList.toggle("rotated")})}function ne(){return`
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
			<div class="absolute top-80">
				<p id="undo_warn" class="hidden text-black dark:text-white mb-2 animate-shake font-bold">undo max!</p>
				<button id="undo" class="bg-red-500 px-6 py-2 rounded-lg font-bold border-2 border-white text-white mx-2 hover:bg-red-700">
						undo
				</button>
			</div>
		</div>
	`}const N=n("app.fixed"),ie=n("app");j(N);G(N);ee(ie);
