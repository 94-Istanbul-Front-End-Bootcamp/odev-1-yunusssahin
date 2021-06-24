var fName="Yunus";
var lName="Şahin"
var age = "28";
var btnfullName = document.getElementById("fullName");
btnfullName.onclick=function(){
    document.getElementById("nameSurname").innerHTML =fName + " " + lName;
    document.getElementById("age").innerHTML =age;
}
document.getElementById("linkedinUrl").setAttribute("href","https://www.linkedin.com/in/yunusssahin/");
document.getElementById("githubUrl").setAttribute("href" , "https://github.com/yunusssahin");