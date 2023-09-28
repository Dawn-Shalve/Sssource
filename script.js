function article(){
    document.getElementById("homepage").style.display ="none";
    document.getElementById("articlebrowser").style.display="none";
    document.getElementById("articletemp").style.display="contents";
    disableallsites()
    document.getElementById("articletemp").style.display="contents";

}

function homepage(){
    document.getElementById("homepage").style.display ="contents";
    document.getElementById("articletemp").style.display="none";
    document.getElementById("articlebrowser").style.display="none"
    document.getElementById("homebutton").className = "active";
    document.getElementById("articlebutton").className = "none";
    disableallsites()
    document.getElementById("homepage").style.display = "contents";
}
function articlebrowser(){
    document.getElementById("homepage").style.display ="none";
    document.getElementById("articletemp").style.display="none"
    document.getElementById("articlebrowser").style.display="content"
    document.getElementById("articlebutton").className = "active";
    document.getElementById("homebutton").className = "none";
    document.getElementById("about").style.display ="none";
    document.getElementById("about").className = "none";
    disableallsites()
    document.getElementById("articlebrowser").style.display="contents";
}
function disableallsites(){
    document.getElementById("homepage").style.display="none";
    document.getElementById("articletemp").style.display="none";
    document.getElementById("articlebrowser").style.display="none";
    document.getElementById("about").style.display ="none";
    document.getElementById("aboutbutton").className = "none";
    /// Make Sure to add EVERY site template to this function \\\
}
function Start(){
    disableallsites();
    homepage();
}
function debugmode(){
    disableallsites();
}
function about(){
    disableallsites()
    document.getElementById("about").style.display="contents";
    document.getElementById("about").style.background="white";
    document.getElementById("homebutton").className = "none";
    document.getElementById("articlebutton").className = "none";
    document.getElementById("aboutbutton").className = "active";
}