var isHidden = true;
function toggleMain() {
    var display;
    if (isHidden) {
        isHidden = false;
        display = "block";
    } else {
        isHidden = true;
        display = "none";
    }
    /*The toggleMain function uses the boolean on line 1 to not display content 
    until the event handler occurs, which, attributed in our HTML, is clicking the h1 heading.*/
    var content = document.getElementById("content");
    content.style.display = display;
}
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i <sections.length; i++) {
        sections[i].style.borderColor = "red";
    }
    /*Line 16 establishes we'll be using sections in this script.  Line 17 says starting at 
    section zero, loop through and give me all sections in this DOM.  Line 18 says 
    make the border color of all these returned sections red.*/ 