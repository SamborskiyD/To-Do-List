function addNewTask() {
  var elem = document.createElement('li');
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);
  elem.appendChild(text);

  if (inputValue === '') 
  {
      alert("You must write something!");
  } 
  else 
  {
      document.getElementById("myList").appendChild(elem);
  }
  document.getElementById("myInput").value = "";

  var closeBtn = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  closeBtn.className = "closeBtn";
  closeBtn.appendChild(text);
  elem.appendChild(closeBtn);
}



var listOfElements = document.getElementsByTagName("li");
var i;
for (i = 0; i < listOfElements.length; i++)
{
  var closeBtn = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  closeBtn.className = "closeBtn";
  closeBtn.appendChild(text);
  listOfElements[i].appendChild(closeBtn);
}