Window.a = function transformNames(){
    var nNames = Window.NumberAuthors;

    for(var i=1; i<=Window.NumberAuthors; i++){
        var area = document.getElementById("authorName"+i);
        var firstNames = getFirstNames(area);
        var lastName = getLastName(area);
        var nameStyled = styleName(firstNames, lastName);
        console.log(nameStyled);

    }
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