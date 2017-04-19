
function send(){
    var i=61;
    i--;
    if(i==-1)
    return null;
    document.getElementById("time").innerHTML=i;
    setTimeout("send();",1000);
}