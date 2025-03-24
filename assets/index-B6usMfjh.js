(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=l(n);fetch(n.href,a)}})();function o(e){return document.getElementById(e)}function j(){return`
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
  </nav>`}function I(e){e.innerHTML+=j()}const $="modulepreload",A=function(e){return"/"+e},x={},v=function(t,l,i){let n=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.allSettled(l.map(c=>{if(c=A(c),c in x)return;x[c]=!0;const h=c.endsWith(".css"),M=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${M}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":$,h||(u.as="script"),u.crossOrigin="",u.href=c,d&&u.setAttribute("nonce",d),document.head.appendChild(u),h)return new Promise((O,T)=>{u.addEventListener("load",O),u.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(r){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=r,window.dispatchEvent(d),!d.defaultPrevented)throw r}return n.then(r=>{for(const d of r||[])d.status==="rejected"&&a(d.reason);return t().catch(a)})},S=(e,t,l)=>{const i=e[t];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((n,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==l?". Note that variables only represent file names one level deep.":""))))})};async function D(e,t){return(await S(Object.assign({"../databases/KANJI/N4.json":()=>v(()=>import("./N4-Dakw687e.js"),[]),"../databases/KANJI/N5.json":()=>v(()=>import("./N5-rKq3hKfC.js"),[]),"../databases/KOTOBA/MNN-BAB-26.json":()=>v(()=>import("./MNN-BAB-26-CFVqKLiQ.js"),[])}),`../databases/${e}/${t}.json`,4)).default}function k(e,t){if(e.length>1){const l=Math.max(1,Math.floor(e.length*(t/100)));e.splice(l,0,e.shift())}}function P(e){e.length>1&&(e[0].mistakeData={soft:0,hard:0},e.push(e.shift()))}function K(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),t.mistakeData.soft++,t.mistakeData.hard=0;const l=Math.max(20,50-t.mistakeData.soft*3);k(e,l)}}function B(e){let t=e[0];if(e.length>1){t.mistakeData||(t.mistakeData={soft:0,hard:0}),console.log(`${t.mistakeData.soft?t.mistakeData.soft:0} ${t.mistakeData.hard?t.mistakeData.hard:0}`),t.mistakeData.soft=0,t.mistakeData.hard++;const l=Math.max(45,75-t.mistakeData.hard*3);k(e,l)}}const w=260;let p,s=[],f=[];async function J(){let e=await D(o("parent").value,o("category_select").value);s=R(e),p=="KANJI"&&m()}function H(){const e=o("next_card"),t=o("lupa_satu"),l=o("lupa_semuanya"),i=o("undo");[e,t,l,i].forEach(n=>{n.disabled=!0}),e.addEventListener("click",()=>{p=="KANJI"&&g(P,e,m),console.log(s)}),t.addEventListener("click",()=>{p=="KANJI"&&g(K,t,m),console.log(s)}),l.addEventListener("click",()=>{p=="KANJIA"&&g(B,l,m),console.log(s)}),i.addEventListener("click",()=>{E(i),f.length>0&&(s=JSON.parse(JSON.stringify(f.shift())),L())})}function g(e,t,l){E(t),console.log("non aktif btn berhasil"),U(),console.log("berhasil add history"),e&&e(s),console.log("reshuffle berhasil"),L(),l&&l(),console.log("show card ulang")}function U(){f.length<7||f.pop(),f.unshift(JSON.parse(JSON.stringify(s)))}function L(){const e=o("card-inner");e.classList.remove("card_animation"),o("card").classList.remove("rotated"),setTimeout(()=>{e.classList.toggle("card_animation")},w)}function E(e){e.disabled=!0,setTimeout(()=>{e.disabled=!1},w)}function m(){const e=o("front").children[0],t=o("back").children[0];e.children[0].innerHTML=s[0].k,t.children[0].innerHTML=s[0].h,t.children[1].innerHTML=s[0].i}function R(e){const t=e.length;for(let i=t-1;i>0;i--){const n=Math.floor(Math.random()*(i+1));[e[i],e[n]]=[e[n],e[i]]}const l=1e5;for(let i=0;i<l;i++){const n=Math.floor(Math.random()*t),a=Math.floor(Math.random()*t);[e[n],e[a]]=[e[a],e[n]]}for(let i=0;i<t;i++){const n=(i^Math.floor(Math.random()*t))%t;[e[i],e[n]]=[e[n],e[i]]}return o("navbar_card_name").innerHTML=o("parent").value+" "+o("category_select").value,p=o("parent").value,o("jumlah_card_show").innerHTML=`${t}`,[o("next_card"),o("lupa_satu"),o("lupa_semuanya"),o("undo")].forEach(i=>{i.disabled=!1}),e}function q(){return`
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
	`}function C(){return`
		<li class=w-full bg-yellow-400>
			<div class="flex justify-center">
				<button id="fetch" type"button" class="bg-blue-600 px-5 py-2 rounded-2xl border font-bold">
					Submit
				</button>
			</div>
		</li>
	`}function V(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih opsi</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function z(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih bunpou</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`}function Q(){return`
	<li class="w-full">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border border-black dark:border-white rounded-2xl" id="category_select">
				<option disabled selected>pilih opsi</option>
				<option value="MNN-BAB-26">minna no nihongo bab 26</option>
			</select>
		</div>
	</li>
	`}function F(e){e.innerHTML+=W(),X()}let _="";function G(){b||(b=setInterval(()=>{let e=document.getElementById("parent").value;e!==_&&(_=e,e==="KANJI"?o("category").innerHTML=V():e==="BUNPOU"?o("category").innerHTML=z():e==="KOTOBA"&&(o("category").innerHTML=Q()))},650))}let b=null;function y(){b&&(clearInterval(b),b=null)}function W(){return`
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
		${q()}
		<div id="category"></div>
		${C()}
		</ul>
	</div>
	`}function X(){[o("openSidebar"),o("closeSidebar")].forEach(e=>{e.addEventListener("click",()=>{o("sidebar").classList.toggle("-translate-x-full")})}),document.getElementById("openSidebar").addEventListener("click",()=>{G()}),document.getElementById("closeSidebar").addEventListener("click",()=>{y()}),o("fetch").addEventListener("click",()=>{y(),J(),o("sidebar").classList.toggle("-translate-x-full")})}function Y(e,t,l,i,n){return`
	<div id="card" class="relative w-full h-[184px] perspective-1000 duration-700">
		<div class="absolute inset-0 w-full h-full transform-style-preserve-3d card_animation" id="card-inner">
	    <div id="front" class="bg-blue-50 rounded-3xl w-full h-full absolute backface-hidden flex items-center justify-center">
		    <div>
		    	<p class="text-3xl">${e}</p>
	      	<p class="${i}"></p>
		    </div>
	    </div>
	    <div id="back" class="bg-blue-50 absolute w-full h-full rounded-3xl top-0 backface-hidden rotate-y-180 flex items-center justify-center">
			  <div>
				  <p class="text-3xl">
				  	${t}</p>
		      <p class="mt-${n}">
		      	${l}</p>
			  </div>
  		</div>
  	</div>
	</div>
	`}function Z(e){e.innerHTML+=te(),ee(),H()}function ee(){o("card-content").innerHTML=Y("Klik icon 3 garis terlebih dahulu","- -","--","2","2");const e=o("card");o("card").addEventListener("click",()=>{e.classList.toggle("rotated")})}function te(){return`
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
	`}const N=o("app.fixed"),ne=o("app");I(N);F(N);Z(ne);
