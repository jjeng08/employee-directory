const bios = [
	{
		name: "Abigail",
		age: 32,
		job: "accountant"
	},
	{
		name: "Benjamin",
		age: 27,
		job: "taxidermist"
	},
	{
		name: "Orgoth the Unclean",
		age: 439,
		job: "therapist",	
	}
];

function render() {
	$("#content").empty();
	for (let i=0; i<bios.length; i++) {
		const info = Object.values(bios[i]);
		for(let x=0; x<info.length; x++) {
			$("#content").append(`<p>${info[x]}</p>`);
		}
	}
}

render();

$("#add").on("click", addAll)

function addAll() {
	if (document.getElementById('name').value=="" || document.getElementById('age').value=="" ||document.getElementById('job').value==""){
		return false;
	}
		else {
	
	let keys = ["name", "age", "job"];

	const nameVal = $('#name').val();
	const ageVal = $('#age').val();
	const jobVal = $('#job').val();

	let values = [
		nameVal,
		ageVal,
		jobVal,
	];

	let result = {};
	keys.forEach((key,i) => result[key] = values[i]);
	console.log(result);

	bios.push(result);
	$('#name').val('');
	$('#age').val('');
	$('#job').val('')
	render();
		}
}