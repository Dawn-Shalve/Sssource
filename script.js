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
    disableallsites()
    document.getElementById("homepage").style.display = "contents";
}
function articlebrowser(){
    document.getElementById("homepage").style.display ="none";
    document.getElementById("articletemp").style.display="none"
    document.getElementById("articlebrowser").style.display="content"
    document.getElementById("about").style.display ="none";
    disableallsites()
    document.getElementById("articlebrowser").style.display="contents";
}
function disableallsites(){
    document.getElementById("homepage").style.display="none";
    document.getElementById("articletemp").style.display="none";
    document.getElementById("articlebrowser").style.display="none";
    document.getElementById("about").style.display ="none";
    document.getElementById("Community-Daily-Announcements").style.display="none";
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
}
function Daily(){
    disableallsites()
    document.getElementById("Community-Daily-Announcements").style.display="contents"
}