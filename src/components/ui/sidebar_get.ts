export default function parent() {
	return `
	<li class="w-full h-48">
		<div class="flex flex-col">
			<p class="text-1xl font-bold my-3">Search</p>
			<select class="focus:outline-none border-2 border rounded-2xl" id="parent">
				<option value="undefined" disabled selected>pilih opsi</option>
				<option value="KANJI">kanji</option>
				<option value="KOTOBA">kotoba</option>
				<option value="BUNPOU">bunpou</option>
			</select>
		</div>
	</li>
	`
}

