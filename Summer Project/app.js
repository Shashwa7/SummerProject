var inputItem = document.getElementById("enterItm"); //for input 
var ul = document.querySelector("ul"); // for the parent list
var item = document.getElementsByTagName("li");
var enterButton = document.getElementById("enter");

function inputLength(){
    return inputItem.value.length;
    //length method is used to determine the legth of the string.
  };
  
function createList(){
    var li = document.createElement("li");
    // to create/decalre an element.
    //everytime the function is called, a new var is created.
  
    li.appendChild(document.createTextNode(inputItem.value));
    ul.appendChild(li);  
    inputItem.value = ""; // to avoid entering same string again and again 

    //START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
  //END STRIKETHROUGH
  

  	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
  //END ADD CLASS DELETE


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON

}


  function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
      //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
      createList();
    } 
  }
  

  function addListAfterClick(){
    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
      createList();
    }
  }


  enterButton.addEventListener("click",addListAfterClick);

  inputItem.addEventListener("keypress", addListAfterKeypress);