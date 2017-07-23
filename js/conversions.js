function transformNames(){
    var nNames = Window.NumberAuthors;
    var namesReady = [];
    for(var i=1; i<=Window.NumberAuthors; i++){
        var area = document.getElementById("authorName"+i);
        var firstNames = getFirstNames(area);
        var lastName = getLastName(area);
        var nameStyled = styleName(firstNames, lastName);
        namesReady[i-1] = nameStyled;
    }

    var namesPart ="";
    var j=0;
    for(j; j< namesReady.length -1; j++){
        namesPart += namesReady[j]+"& "
    }
    // if the number of author is bigger than 7
    if(namesReady.length > 7){
        namesPart +"... "+ namesReady[namesReady.length];
    }
    else{
        // the last names doest have & 
        namesPart += namesReady[j];
    }
    Window.aux = namesPart;
    return namesPart;
}

//get the first Name according the HTML structure
function getFirstNames (element){
    return element.childNodes[0].childNodes[0].childNodes[1].value;
}

//get the Last Name according the HTML structure
function getLastName (element){
    return element.childNodes[2].childNodes[2].value;
}

//style the names according APA rules
function styleName(firstNames, lastName){
    //separate all the first names by empty space
    var firstNamesContent = firstNames.split(" ");
    var res = lastName + ", ";
    //get first letter of each name
    for(var i=0; i<firstNamesContent.length; i++){
        res += firstNamesContent[i][0].toUpperCase() + ". ";
    }
    return res;
}

document.getElementById("buttonToGenerate").addEventListener("click", function(){
    generateAPA();
});

function generateAPA(){
    document.getElementsByClassName("ql-editor")[0].innerHTML = transformNames();
}