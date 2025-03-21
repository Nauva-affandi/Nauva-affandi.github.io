function template() {
	return `
	<nav class="fixed top-0 w-full dark:bg-[#00ADB5] dark:text-white p-4 flex justify-between items-center">
      
    <button id="openSidebar" class="dark:text-white text-2xl md:text-4xl md:mb-2 pr-4">
      \u2630
    </button>
      
    <div class="flex grow justify-center">
      <h1 class="text-xl font-bold">
      	Lorem ipsum dolor
      </h1>
  	</div>
  </nav>`;
}

export default function navbar(element) {
	element.innerHTML += template();
}
