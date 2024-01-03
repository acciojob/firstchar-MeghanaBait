function firstChar(text) {
  // your code here
	for(let ch of text){
		if(ch !== ' '){
			return ch;
		}
	}
	return '';
}

// Do not change the code below

// const text = prompt("Enter text:");
// alert(firstChar(text));
