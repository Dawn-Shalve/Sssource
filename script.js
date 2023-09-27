function article(){
    document.getElementById("homepage").style.display ="none";
    document.getElementById("articlebrowser").style.display="none";
    document.getElementById("articletemp").style.display="contents";
}

function homepage(){
    document.getElementById("homepage").style.display ="contents";
    document.getElementById("articletemp").style.display="none";
    document.getElementById("articlebrowser").style.display="none"
    document.getElementById("homebutton").className = "active";
    document.getElementById("articlebutton").className = "none";
}
function articlebrowser(){
    document.getElementById("homepage").style.display ="none";
    document.getElementById("articletemp").style.display="none"
    document.getElementById("articlebrowser").style.display="content"
    document.getElementById("articlebutton").className = "active";
    document.getElementById("homebutton").className = "none"
}
function disableallsites(){
    document.getElementById("homepage").style.display="none";
    document.getElementById("articletemp").style.display="none";
    document.getElementById("articlebrowser").style.display="none";
    /// Make Sure to add EVERY site template to this function \\\
}
function Start(){
    disableallsites();
    homepage();
}