import {$} from "../../helper/sm-function.js"

import sectionGetParent from "./sidebar_get.ts";
import sectionGetCategory from "./sidebar_get_category.ts"

const section1 = sectionGetParent();
const section2 = sectionGetCategory();


function main_template(){
	return `
	<div id="sidebar" class="group fixed top-0 w-72 h-full dark:bg-[var(--my-light-gray)] shadow-lg transform -translate-x-full transition-transform duration-300 p-4 z-[99]">
	
		<div class="flex">
		  <button id="closeSidebar" class="text-black-700 text-4xl">
		    \u00D7
		  </button>
	  
		  <div class="flex-grow flex justify-center">
		    <h1 class="font-bold text-xl"></h1>
		  </div>
		</div>

		<ul
		  class="mt-4 space-y-3 z-[88] duration-400 transition-all ease-in-out opacity-100"
		  id="sidebar_contain"
		>
		${section1}
		${section2}
		</ul>
	</div>
	`
} 

function script(){
	[$("openSidebar"), $("closeSidebar")].forEach(btn => {
		btn.addEventListener("click", () => {
			$("sidebar").classList.toggle("-translate-x-full")
			document.body.classList.toggle("sidebar-aktif")
		});
	});
}

export default function sidebar(element){
	element.innerHTML += main_template();
	script();
}