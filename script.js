function addusers(){
    u1name=document.getElementById("u1input").value;
    u2name=document.getElementById("u2input").value;

    localStorage.setItem("u1name",u1name);
    localStorage.setItem("u2name",u2name);
}