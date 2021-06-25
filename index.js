var fName="Yunus";
var lName="Şahin"
var age = "28";
var btnfullName = document.getElementById("fullName");
document.getElementById("fullName").style.backgroundColor = "blue";
document.getElementById("fullName").style.color = "white";
document.getElementById("fullName").style.padding= "10px 50px";
document.getElementById("fullName").style.fontSize = "16px";

btnfullName.onclick=function(){
    document.getElementById("nameSurname").innerHTML =fName + " " + lName;
    document.getElementById("age").innerHTML =age;
    document.getElementById("fullName").style.backgroundColor = "red";
    document.getElementById("fullName").innerHTML = "İsmim ve Yaşım";
}
document.getElementById("linkedinUrl").setAttribute("href","https://www.linkedin.com/in/yunusssahin/");
document.getElementById("githubUrl").setAttribute("href" , "https://github.com/yunusssahin");