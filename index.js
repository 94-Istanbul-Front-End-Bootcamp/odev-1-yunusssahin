var btnfullName = document.getElementById("fullName");
var fName="Yunus";
var lName="Şahin"
var age = "28";
btnfullName.onclick=function(){
    document.getElementById("nameSurname").innerHTML =fName + " " + lName;
    document.getElementById("age").innerHTML =age;
}