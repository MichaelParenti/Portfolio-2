var contact = document.getElementById("contact");
var home = document.getElementById("home");
var bio = document.getElementById("bio");
var form = document.querySelector("form");
var x = document.getElementById("x");

home.addEventListener("click", ()=>{
    bio.style.visibility="visible";
    form.style.visibility="hidden";
});

contact.addEventListener("click", ()=>{
    form.style.visibility="visible";
    bio.style.visibility="hidden";
});

x.addEventListener("click", ()=>{
    form.style.visibility="visible";
    bio.style.visibility="hidden";
});