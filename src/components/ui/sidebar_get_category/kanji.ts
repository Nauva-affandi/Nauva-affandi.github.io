export default function templateKanji() {
	return `
	<li class="w-full h-48">
		<div class="flex flex-col">
			<select class="focus:outline-none border-2 border rounded-2xl" id="parent">
				<option disabled selected>pilih opsi</option>
				<option value="N5">N5</option>
				<option value="N4">N4</option>
			</select>
		</div>
	</li>
	`
}