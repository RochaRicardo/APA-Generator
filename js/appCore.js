var localToAppend = name1;
var NumberAuthors=0;
function myFunction(){
    var x = document.createElement("INPUT"); //texbox
    var button = document.createElement("button");
    var label = document.createElement("label");
    var row = document.createElement("div");
    var col = document.createElement("div");
    var col2 = document.createElement("div");
    
    var col3 = document.createElement("div");
    var col4 = document.createElement("div");
    var col5 = document.createElement("div");
    
    //label
    label.setAttribute("class", "labelStyle");
    label.setAttribute("for", "insert");
    
    // divs
    row.setAttribute("class", "row delete-this");
    col.setAttribute("class", "col-xs-11");
    col5.setAttribute("class", "col-xs-1");
    col5.setAttribute("id","removeButton")
    col2.setAttribute("class", "form-group has-feedback");
    col.appendChild(col2);
    row.appendChild(col);
    
    col3.setAttribute("class", "col-xs-12");
    col3.appendChild(col4);
    row.appendChild(col5);
    row.appendChild(col3);
    
  // Textbox attributes
    x.setAttribute("type", "text");
    x.setAttribute("name", "insert[]");
    x.setAttribute("class", "form-control");
    x.setAttribute("placeholder","");
    
  // Button attributes (to delete textbox)
    button.setAttribute("type","button")
    button.setAttribute("class", "button removeSign");
    button.setAttribute("onclick", "deleteField(this)");
    
    // Append row to #option div
    NumberAuthors++;
    row.setAttribute("id",NumberAuthors);
    document.getElementById("name1").appendChild(row);
    col2.appendChild(label);
    col2.appendChild(x);
    col5.appendChild(button);
    label.appendChild(document.createTextNode("First Names"));
    
    var x_eng = document.createElement("INPUT"); //texbox
    var label_eng = document.createElement("label");
    
    //label
    label_eng.setAttribute("class", "labelStyle");
    label_eng.setAttribute("for", "insert_eng");
  
  // Textbox attributes
    x_eng.setAttribute("type", "text");
    x_eng.setAttribute("name", "insert_eng[]");
    x_eng.setAttribute("class", "form-control");
    x_eng.setAttribute("placeholder","");
    
    // Append row to #option div
    col3.appendChild(label_eng);
    col3.appendChild(x_eng);
    label_eng.appendChild(document.createTextNode("Last Name"));
}

function deleteField(e)
{
 e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}

myFunction();

//add title input box
var title = drawInputBox("Title", "title",null,"col-xs-12")
document.getElementById("optionsByType").appendChild(title);

//add year input box
var year = drawInputBox("Year", "year",null,"col-xs-3")
document.getElementById("optionsByType").appendChild(year);

//add publishier input box
var publishier = drawInputBox("Publishier", "publishier",null,"col-xs-5")
document.getElementById("optionsByType").appendChild(publishier);

//add location input box
var locationElm = drawInputBox("Location", "location",null,"col-xs-4")
document.getElementById("optionsByType").appendChild(locationElm);

/*add edition number input box
var year = drawInputBox("Year", "year",null,"col-xs-6")
document.getElementById("optionsByType").appendChild(year);
*/

function drawInputBox(labelText, id, placeholderText, classSize){
  
  //creation of the HTML elements
  var container = document.createElement("div");
  var label = document.createElement("label");
  var input = document.createElement("input");

  //set the given attributes
  container.setAttribute("class", "form-group has-feedback");
  if(classSize)
    container.classList.add(classSize);
  label.setAttribute("class", "labelStyle");
  label.setAttribute("for","insert");
  label.innerHTML = labelText;
  input.setAttribute("name", "insert");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", id);
  if(placeholderText)
    input.setAttribute("placeholder",placeholderText);
  input.setAttribute("type","text");

  //mount the container and return it;
  container.appendChild(label);
  container.appendChild(input);

  return container;

}

