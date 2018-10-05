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
	name: 'Azathoth the Eternal',
	office: 666,
	phone: '9TH-CIR-HELL'
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

  //Originally, I had a nested for loop. The first would loop through all items in the array. The second would then loop through the contents
  //of each item. However, Jacob told me that this version was more labor intensive, so I hardcoded in the object portion.
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


//Once more, a remnant of the attempt to make an easily modified list of properties so that I could apply this to whatever 
//sorts of objects I wanted. Still utilized in some respects.
const keys = ["name", "office", "phone"]

//Default Settings (View Page)

//Here is where I worked within the given toolset. I know there are dryer methods like using a switch function. However, I set out with the
//goal of doing everything with the given DOM functions, and I succeeded. The key was that the toggleFunction allowed me to turn a class on
//and off, but it didn't let me switch between two classes. Furthermore, if I added in a class (ex: .hide), I could then add on .show as well,
//but both classes would exist, and that created conflict. Finally, there was the issue of starting location. Different pages needed different
//input bars, so I structured it that for each page, the click sets exactly what should appear and what should not. Thus, no matter where you
//start or where you go, the result will be completely predictable.

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

	//This may be an example of me overthinking it, but my approach to the objects was to deal in completed objects. To do so:
	//	1. Require all inputs be filled so we can deal with complete sets of data.
	//			Note: the preventDefault function seems to clear any restrictions placed on the inputs. Thus, I can't require 
	//			users to put in complete phone numbers, limited scope of numbers, etc. Hopefully, I will be able to find a 
	//			workaround soon.
	//	2. Store the inputs as values.
	//	3. Create an object based on the list of properties defined above and add in the values.
	//	4. Push the resulting object to the array as a single, discrete package.
	//	5. Clear out and get ready to repeat.
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

//I discovered a very strange interaction here. When I tried to combine all the inputs into just three repeatedly used inputs, I also tried to hide 
//the <div> that displayed the Verify result so it only appeared on that page. However, no matter how I tried to hide it, any submission from any
//other page would trigger the text to upload and thus reveal the <div>. This, in conjunction with other errors, made me decide to keep this tried
//and true method of separate, distinct sections. Which, in retrospect, actually works really well, as it gives me the freedom to customize
//each page in a different way in the future.
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
	const newOffice = $("#newOffice").val();
	const newPhone = $("#newPhone").val();


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

