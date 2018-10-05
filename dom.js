function $(wantedTag) {
	const tagArray = document.querySelectorAll(wantedTag);

  function text(content){
    for (let i = 0; i < tagArray.length; i++) {
      tagArray[i].innerText = content;
    }
	}

	function html(content){
    for (let i = 0; i < tagArray.length; i++) {
      tagArray[i].innerHTML = content;
    }
  }

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

// 	function findObjectByKey(array, key, value) {
// 		for (let i = 0; i < array.length; i++) {
// 			if (array[i][key] === value) {
// 				return array[i];
// 			}
//     }
//     return null;
// }
//This is legacy code from a previous attempt to make a more complicated verify page. The goal was to take in a user selected word
//("name", "office", "phone"), apply it as the object property, and then search only that portion of each object for a match. 
//Unfortunately, I found out that applying a variable to an object wasn't as intuitive as it appeared, so I opted for the standard
//approach instead.

	return {
		text: text,
		html: html,
		empty: empty,
		append: append,
		on: on,
		val: val,
		toggleClass: toggleClass,
		addClass: addClass,
		removeClass: removeClass,
		// findObjectByKey: findObjectByKey
	}
}