(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();function i(e){return document.getElementById(e)}function j(){return`
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
  </nav>`}function $(e){e.innerHTML+=j()}const D="modulepreload",K=function(e){return"/"+e},y={},g=function(t,a,n){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=Promise.allSettled(a.map(u=>{if(u=K(u),u in y)return;y[u]=!0;const x=u.endsWith(".css"),M=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${M}`))return;const f=document.createElement("link");if(f.rel=x?"stylesheet":D,x||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),x)return new Promise((A,I)=>{f.addEventListener("load",A),f.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return o.then(l=>{for(const c of l||[])c.status==="rejected"&&r(c.reason);return t().catch(r)})},S=(e,t,a)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((o,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})};async function B(e,t){try{return(await S(Object.assign({"../databases/BUNPOU/N5.json":()=>g(()=>import("./N5-pRG6OHOv.js"),[]),"../databases/KANJI/N4.json":()=>g(()=>import("./N4-Dakw687e.js"),[]),"../databases/KANJI/N5.json":()=>g(()=>import("./N5-rKq3hKfC.js"),[]),"../databases/KOTOBA/MNN-BAB-26.json":()=>g(()=>import("./MNN-BAB-26-CFVqKLiQ.js"),[])}),`../databases/${e}/${t}.json`,4)).default}catch(a){console.error(a.message)}}const E=(e,t)=>{if(e.length>1){const a=Math.max(1,Math.floor(e.length*(t/100)));e.splice(a,0,e.shift())}},_=e=>{e.length>1&&(e[0].mistakeData={soft:0,hard:0},e.push(e.shift()))},k=e=>{let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.soft++;let a=Math.max(20,50-t.mistakeData.soft*3);if(t.mistakeData.hard>0)for(let n=1;n<t.mistakeData.hard&&t.mistakeData.hard>1;n++)t.mistakeData.hard-=2,a++;E(e,a)}},w=e=>{let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.hard++;let a=Math.max(45,75-t.mistakeData.hard*3);if(t.mistakeData.soft>0)for(let n=1;n<t.mistakeData.soft&&t.mistakeData.soft>1;n++)t.mistakeData.soft-=2,a+=10;E(e,a)}},P=260;let d,s=[],b=[];async function H(){let e=await B(i("parent").value,i("category_select").value);s=q(e),d=i("parent").value,d=="KANJI"&&h(),d=="KOTOBA"&&m()}function J(){const e=i("next_card"),t=i("lupa_satu"),a=i("lupa_semuanya"),n=i("undo");[e,t,a,n].forEach(o=>{o.disabled=!0}),e.addEventListener("click",()=>{d=="KANJI"&&p(_,e,h),d=="KOTOBA"&&p(_,e,m)}),t.addEventListener("click",()=>{d=="KANJI"&&p(k,t,h),d=="KOTOBA"&&p(k,t,m)}),a.addEventListener("click",()=>{d=="KANJI"&&p(w,a,h),d=="KOTOBA"&&p(w,a,m)}),n.addEventListener("click",()=>{N(n),R(),d=="KANJI"&&h(),d=="KOTOBA"&&m()})}function p(e,t,a){N(t),U(),e&&e(s),a&&a()}function U(){const e=Math.min(5+Math.floor(s.length/20),12);b.length<e||b.pop(),b.unshift(JSON.parse(JSON.stringify(s))),i("undo_warn").classList.add("hidden")}function R(){b.length>0&&(s=JSON.parse(JSON.stringify(b.shift()))),b.length===0&&i("undo_warn").classList.remove("hidden")}function N(e){e.disabled=!0,setTimeout(()=>{e.disabled=!1},P)}function h(){const e=i("front").children[0],t=i("back").children[0];e.children[0].innerHTML=s[0].k,t.children[0].innerHTML=s[0].h,t.children[1].innerHTML=s[0].i}function m(){const e=i("front").children[0],t=i("back").children[0];e.children[0].innerHTML=s[0].k,e.children[1].innerHTML=s[0].h,t.children[0].innerHTML=s[0].i,t.children[1].innerHTML=""}function q(e){const t=e.length;for(let n=t-1;n>0;n--){const o=Math.floor(Math.random()*(n+1));[e[n],e[o]]=[e[o],e[n]]}const a=1e5;for(let n=0;n<a;n++){const o=Math.floor(Math.random()*t),r=Math.floor(Math.random()*t);[e[o],e[r]]=[e[r],e[o]]}for(let n=0;n<t;n++){const o=(n^Math.floor(Math.random()*t))%t;[e[n],e[o]]=[e[o],e[n]]}return i("navbar_card_name").innerHTML=i("parent").value+" "+i("category_select").value,i("jumlah_card_show").innerHTML=`${t}`,[i("next_card"),i("lupa_satu"),i("lupa_semuanya"),i("undo")].forEach(n=>{n.disabled=!1}),e}function C(){return`
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
				<option value="N5">N5</option
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
	`}function G(e){e.innerHTML+=X(),Y()}let L="";function W(){v||(v=setInterval(()=>{let e=document.getElementById("parent").value;e!==L&&(L=e,e==="KANJI"?i("category").innerHTML=z():e==="BUNPOU"?i("category").innerHTML=Q():e==="KOTOBA"&&(i("category").innerHTML=F()))},650))}let v=null;function O(){v&&(clearInterval(v),v=null)}function X(){return`
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
	`}function Y(){[i("openSidebar"),i("closeSidebar")].forEach(e=>{e.addEventListener("click",()=>{i("sidebar").classList.toggle("-translate-x-full")})}),document.getElementById("openSidebar").addEventListener("click",()=>{W()}),document.getElementById("closeSidebar").addEventListener("click",()=>{O()}),i("fetch").addEventListener("click",()=>{O(),H(),i("sidebar").classList.toggle("-translate-x-full")})}function Z(e,t,a,n,o,r){return`
	<div id="card" class="relative w-full h-[184px] perspective-1000 duration-700">
		<div class="absolute inset-0 w-full h-full transform-style-preserve-3d card_animation" id="card-inner">
	    <div id="front" class="bg-blue-50 rounded-3xl w-full h-full absolute backface-hidden flex items-center justify-center">
		    <div>
		    	<p class="text-3xl">${e}</p>
	      	<p class="${o}">${t}</p>
		    </div>
	    </div>
	    <div id="back" class="bg-blue-50 absolute w-full h-full rounded-3xl top-0 backface-hidden rotate-y-180 flex items-center justify-center">
			  <div>
				  <p class="text-3xl">
				  	${a}</p>
		      <p class="mt-${r}">
		      	${n}</p>
			  </div>
  		</div>
  	</div>
	</div>
	`}function ee(e){e.innerHTML+=ne(),te(),J()}function te(){i("card-content").innerHTML=Z("Klik icon 3 garis terlebih dahulu","","--","--","2","2");const e=i("card");i("card").addEventListener("click",()=>{e.classList.toggle("rotated")})}function ne(){return`
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
	`}const T=i("app.fixed"),ie=i("app");$(T);G(T);ee(ie);
