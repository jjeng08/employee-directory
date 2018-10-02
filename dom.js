function $(wantedTag) {
	const tagArray = document.querySelectorAll(wantedTag);

	function empty() {
		for (let i=0; i<tagArray.length; i++){
			tagArray[i].innerHTML = "";
		}
	}

	function append(content) {
		for (let i=0; i<tagArray.length; i++){
			tagArray[i].innerHTML +=content;
		}
	}

	function  addClass(className) {
		for (let i = 0; i < tagArray.length; i++) {
		 tagArray[i].classList.add(className);
		}
	}
	
	function removeClass(className){
    for (let i = 0; i < tagArray.length; i++) {
     tagArray[i].classList.remove(className);
    }
  }

	function on(action, aFunction) {
		for (let i=0; i<tagArray.length; i++){
			tagArray[i].addEventListener(action, aFunction);
		}
	}

	function val (content) {
		if(content === undefined){
		  return tagArray[0].value; 
		} else {
		  tagArray[0].value = content;
		}     
	}

	function toggleClass (content) {
		for (let i=0; i<tagArray.length; i++){
			tagArray[i].classList.toggle(content);
		}
	}

	return {
		empty: empty,
		append: append,
		on: on,
		val: val,
		toggleClass: toggleClass,
		addClass: addClass,
		removeClass: removeClass
	}
}