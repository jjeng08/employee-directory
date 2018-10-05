function $(wantedTag) {
	const tagArray = document.querySelectorAll(wantedTag);

	function render() {
		$("#content").empty();

		for (let i = 0; i < employeeList.length; i++) {
			let info = employeeList[i];

			let nameData = info.name;
			let officeData = info.office;
			let phoneData = info.phone;

			$("#content").append(`<p>Employee: ${nameData}</p>`);
			$("#content").append(`<p>Office: ${officeData}</p>`);
			$("#content").append(`<p>Office Number: ${phoneData}</p> <br/>`);
		}
	}

	function text(content) {
		for (let i = 0; i < tagArray.length; i++) {
			tagArray[i].innerText = content;
		}
	}

	function html(content) {
		for (let i = 0; i < tagArray.length; i++) {
			tagArray[i].innerHTML = content;
		}
	}

	function empty() {
		for (let i = 0; i < tagArray.length; i++) {
			tagArray[i].innerHTML = "";
		}
	}

	function append(content) {
		for (let i = 0; i < tagArray.length; i++) {
			tagArray[i].innerHTML += content;
		}
	}

	function addClass(className) {
		for (let i = 0; i < tagArray.length; i++) {
			tagArray[i].classList.add(className);
		}
	}

	function removeClass(className) {
		for (let i = 0; i < tagArray.length; i++) {
			tagArray[i].classList.remove(className);
		}
	}

	function on(action, aFunction) {
		for (let i = 0; i < tagArray.length; i++) {
			tagArray[i].addEventListener(action, aFunction);
		}
	}

	function val(content) {
		if (content === undefined) {
			return tagArray[0].value;
		} else {
			tagArray[0].value=content;
		}
	}

	function toggleClass(content) {
		for (let i = 0; i < tagArray.length; i++) {
			tagArray[i].classList.toggle(content);
		}
	}

	function findObjectByKey(array, key, value) {
		for (let i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return array[i];
			}
		}
		return null;
	}

	function hide(item) {
		$(item).addClass("hide");
		$(item).removeClass("show");
	}

	function show(item) {
		$(item).addClass("show");
		$(item).removeClass("hide");
	}

	function showNone() {
		$().hide("#nameInput");
		$().hide("#officeInput");
		$().hide("#phoneInput");
		$().hide("#inputButton");	

		$("title").empty();
		$().render();
	}

	function showAll() {
		$().show("#nameInput");
		$().show("#officeInput");
		$().show("#phoneInput");
		$().show("#inputButton");

		$("title").empty();
		$().render();
	}

	function showName() {
		$().show("#nameInput");
		$().hide("#officeInput");
		$().hide("#phoneInput");
		$().show("#inputButton");

		$("title").empty();
		$().render();
	}

	return {
		render: render,
		text: text,
		html: html,
		empty: empty,
		append: append,
		on: on,
		val: val,
		toggleClass: toggleClass,
		addClass: addClass,
		removeClass: removeClass,
		findObjectByKey: findObjectByKey,
		hide: hide,
		show: show,
		showNone: showNone,
		showAll: showAll,
		showName: showName
	}
}