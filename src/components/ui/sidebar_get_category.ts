import kanji from "./sidebar_get_category/kanji.ts"





export default function sectionGetCategory (){
	const result_parent = "kanji"
	const result = "";
	
	setTimeout(() => {
		document.getElementById("openSidebar").addEventListener("click", () => {
		startIntervalQuery()
		})
		document.getElementById("closeSidebar").addEventListener("click", () => {
			stopIntervalQuery()
		})
	}, 50);
	
	function startIntervalQuery() {
		let i = 0
  	if (!intervalId) {
  	 intervalId = setInterval(() => {
    	
    	i++
    	console.log(i)
    	
    	result_parent = document.getElementById("parent").value == !null ? document.getElementById("parent").value : "undefined"
    	
      
	    }, 120); 
	  }
	}
	let intervalId = null;
	function stopIntervalQuery() {
	  if (intervalId) {
	    clearInterval(intervalId); 
	    intervalId = null;
	  }
	}

	return result
}
