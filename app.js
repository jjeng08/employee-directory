//Basic Data
const employeeList = [{
	name: 'Jan',
	office: 1,
	phone: '222-222-2222'
  },
  {
	name: 'Juan',
	office: 304,
	phone: '489-789-8789'
  },
  {
	name: 'Margie',
	office: 789,
	phone: '789-789-7897'
  },
  {
	name: 'Sara',
	office: 32,
	phone: '222-789-4654'
  },
  {
	name: 'Tyrell',
	office: 3,
	phone: '566-621-0452'
  },
  {
	name: 'Tasha',
	office: 213,
	phone: '789-766-5675'
  },
  {
	name: 'Ty',
	office: 211,
	phone: '789-766-7865'
  },
  {
	name: 'Sarah',
	office: 345,
	phone: '222-789-5231'
  }
  ];

  function render() {
	$("#content").empty();

	for (let i = 0; i < employeeList.length; i++) {
		let info = employeeList[i];

		let nameData = info.name;
		let officeData = info.office;
		let phoneData = info.phone;

		$("#content").append(`<p>Employee: ${nameData}</p>`);
		$("#content").append(`<p>Office: ${officeData}</p>`);
		$("#content").append(`<p>Phone Number: ${phoneData}</p> <br/>`);
	}
}

const keys = ["name", "office", "phone"]

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

	$(".pageTitle").text("View Page");

	render();
}

render();
setView();

//Add Page
$("#addButton").on("click", addAll)
function addAll(event) {
	event.preventDefault();
	if (document.getElementById('nameAdd').value == "" || document.getElementById('officeAdd').value == "" || document.getElementById('phoneAdd').value == "") {
		return false;
	}
	else {

		const nameVal = $('#nameAdd').val();
		const officeVal = $('#officeAdd').val();
		const phoneVal = $('#phoneAdd').val();

		let values = [
			nameVal,
			officeVal,
			phoneVal,
		];

		let result = {};
		keys.forEach((key, i) => result[key] = values[i]);
		console.log(result);

		employeeList.push(result);
		$('#nameAdd').val('');
		$('#officeAdd').val('');
		$('#phoneAdd').val('')
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

	$(".pageTitle").text("Add Page");

	render();
}

//Verify Page
$("#verifyButton").on("click", verifyEntry)
function verifyEntry(event) {
	event.preventDefault();
	const desiredVerify = $("#nameVerify").val();
	for (let i = 0; i < employeeList.length; i++) {
		if (employeeList[i].name === desiredVerify) {
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

	$(".pageTitle").text("Verify Page");

	render();
}

//Mod Page
$("#modButton").on("click", modEntry)
function modEntry(event) {
	event.preventDefault();

	if (document.getElementById('nameID').value == "" || document.getElementById('newOffice').value == "" || document.getElementById('newPhone').value == "") {
		return false;
	}
	else {

	const nameID = $("#nameID").val();
	console.log(nameID);
	const newOffice = $("#newOffice").val();
	console.log(newOffice);
	const newPhone = $("#newPhone").val();
	console.log(newPhone);


	for (let i = 0; i < employeeList.length; i++) {
		if (employeeList[i].name === nameID) {
			employeeList[i].office = newOffice;
			employeeList[i].phone = newPhone;
		}
	}

	$("#nameID").val('');
	$("#newOffice").val('');
	$("#newPhone").val('');
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

	$(".pageTitle").text("Modify Page");

	render();
}


//Delete Page
$("#deleteButton").on("click", deleteEntry)
function deleteEntry() {

	const desiredDelete = $("#nameDelete").val();
	for (let i = 0; i < employeeList.length; i++) {
		if (employeeList[i].name === desiredDelete) {
			employeeList.splice(i, 1);
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

	$(".pageTitle").text("Delete Page");

	render();
}

