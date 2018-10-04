//Basic Data
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
	for (let i = 0; i < bios.length; i++) {
		const info = Object.values(bios[i]);
		for (let x = 0; x < info.length; x++) {
			$("#content").append(`<p>${info[x]}</p>`);
		}
	}
}

const keys = ["name", "age", "job"]

//Default Settings (View Page)
$("#viewPage").on("click", setView)
function setView() {
	$("#addBar").addClass("hide");
	$("#addBar").removeClass("show");
	$("#verifyBar").addClass("hide");
	$("#verifyBar").removeClass("show");
	$("#modBar").addClass("hide");
	$("#modBar").removeClass("show");
	$("#deleteBar").addClass("hide");
	$("#deleteBar").removeClass("show");

	$("#title").empty();
	$("#title").text("View Page");

	render();
}

render();
setView();

//Add Page
$("#addButton").on("click", addAll)
function addAll(event) {
	event.preventDefault();
	if (document.getElementById('nameAdd').value == "" || document.getElementById('ageAdd').value == "" || document.getElementById('jobAdd').value == "") {
		return false;
	}
	else {

		const nameVal = $('#nameAdd').val();
		const ageVal = $('#ageAdd').val();
		const jobVal = $('#jobAdd').val();

		let values = [
			nameVal,
			ageVal,
			jobVal,
		];

		let result = {};
		keys.forEach((key, i) => result[key] = values[i]);
		console.log(result);

		bios.push(result);
		$('#nameAdd').val('');
		$('#ageAdd').val('');
		$('#jobAdd').val('')
		render();
	}
}

$("#addPage").on("click", setAdd)
function setAdd() {
	$("#addBar").addClass("show");
	$("#addBar").removeClass("hide");
	$("#verifyBar").addClass("hide");
	$("#verifyBar").removeClass("show");
	$("#modBar").addClass("hide");
	$("#modBar").removeClass("show");
	$("#deleteBar").addClass("hide");
	$("#deleteBar").removeClass("show");

	$("title").empty();
	$("#title").text("Add Page");

	render();
}

//Verify Page
$("#verifyButton").on("click", verifyEntry)
function verifyEntry(event) {
	event.preventDefault();
	const desiredVerify = $("#nameVerify").val();
	for (let i = 0; i < bios.length; i++) {
		if (bios[i].name === desiredVerify) {
			$("#verifyResult").html("<p> Member exists.</p>");
			return;
		}
		else {
			$("#verifyResult").html("<p> Member not found.</p>");
		}
	}
}

$("#verifyPage").on("click", setVerify)
function setVerify() {
	$("#addBar").addClass("hide");
	$("#addBar").removeClass("show");
	$("#verifyBar").addClass("show");
	$("#verifyBar").removeClass("hide");
	$("#modBar").addClass("hide");
	$("#modBar").removeClass("show");
	$("#deleteBar").addClass("hide");
	$("#deleteBar").removeClass("show");

	$("title").empty();
	$("#title").text("Verify Page");

	render();
}

//Mod Page
$("#modButton").on("click", modEntry)
function modEntry() {

	if (document.getElementById('nameID').value == "" || document.getElementById('newAge').value == "" || document.getElementById('newJob').value == "") {
		return false;
	}
	else {

	const nameID = $("#nameID").val();
	const newAge = $("#newAge").val();
	const newJob = $("#newJob").val();


	for (let i = 0; i < bios.length; i++) {
		if (bios[i].name === nameID) {
			bios[i].age = newAge;
			bios[i].job = newJob;
		}
	}

	$("#nameID").val('');
	$("#newAge").val('');
	$("#newJob").val('');
	render();
}
}


$("#modPage").on("click", setMod)
function setMod() {
	$("#addBar").addClass("hide");
	$("#addBar").removeClass("show");
	$("#verifyBar").addClass("hide");
	$("#verifyBar").removeClass("show");
	$("#modBar").addClass("show");
	$("#modBar").removeClass("hide");
	$("#deleteBar").addClass("hide");
	$("#deleteBar").removeClass("show");

	$("title").empty();
	$("#title").text("Modify Page");

	render();
}


//Delete Page
$("#deleteButton").on("click", deleteEntry)
function deleteEntry() {

	const desiredDelete = $("#nameDelete").val();
	for (let i = 0; i < bios.length; i++) {
		if (bios[i].name === desiredDelete) {
			bios.splice(i, 1);
		}
	}

	$("#nameDelete").val('');
	render();
}


$("#deletePage").on("click", setDelete)
function setDelete() {
	$("#addBar").addClass("hide");
	$("#addBar").removeClass("show");
	$("#verifyBar").addClass("hide");
	$("#verifyBar").removeClass("show");
	$("#modBar").addClass("hide");
	$("#modBar").removeClass("show");
	$("#deleteBar").addClass("show");
	$("#deleteBar").removeClass("hide");

	$("title").empty();
	$("#title").text("Delete Page");

	render();
}

