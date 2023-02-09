var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click", showDetails);
function template(name, gendervalue, email, website, allskills, link) {
  const tr = document.createElement("tr");
  const left = document.createElement("td");
  const right = document.createElement("td");
  right.innerHTML = `<img src=${link} />`;
  left.innerHTML =
    "<b>" +
    name +
    "</b>" +
    "<br>" +
    gendervalue +
    "<br>" +
    email +
    '<br><a href="http://' +
    website +
    '" target="_blank"> click here' +
    "</a><br>" +
    allskills;
  tr.classList.add("animate__animated");
  tr.classList.add("animate__fadeIn");
  tr.appendChild(left);
  tr.appendChild(right);
  return tr;
}
function showDetails(e) {
  e.preventDefault();
  var name = document.getElementById("InputName").value;
  var email = document.getElementById("InputEmail1").value;
  var website = document.getElementById("InputWebsite").value;
  var link = document.getElementById("exampleInputImage").value;
  var gender = document.querySelector('input[name="flexRadioDefault"]:checked');
  var skills = document.querySelectorAll('input[name="skills"]:checked');
  //validations
  if (
    validateName() == true ||
    validateEmail() == true ||
    validateWebsite() == true
  ) {
    return;
  } else {
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("websiteerror").innerHTML = "";
  }
  var display = document.getElementById("displaytable");
  var gendervalue = gender.value;
  var allskills = "";
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].checked) {
      allskills += skills[i].value + ", ";
    }
  }
  display.appendChild(
    template(name, gendervalue, email, website, allskills, link)
  );
}
var clear = document.getElementById("clear");
clear.addEventListener("click", resetAllDetails);
function resetAllDetails(e) {
  e.preventDefault();
  document.getElementById("InputName").value = "";
  document.getElementById("InputEmail1").value = "";
  document.getElementById("InputWebsite").value = "";
  document.getElementById("exampleInputImage").value = "";
  var radio = document.querySelector("input[type=radio][name=gender]:checked");
  if (radio.checked) {
    radio.checked = false;
  }
  var skills = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < skills.length; i++) {
    if (skills[i].checked) {
      skills[i].checked = false;
    }
  }
}
function validateName() {
  var name = document.getElementById("InputName").value;
  var regName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
  if (name == "") {
    document.getElementById("nameerror").innerHTML =
      "**Please fill the Name filed";
    return true;
  }
  if (!regName.test(name)) {
    document.getElementById("nameerror").innerHTML =
      "**Invalid Name! Please Enter Valid Name.";
    return true;
  }
  return false;
}
function validateEmail() {
  var email = document.getElementById("InputEmail1").value;
  var mailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email == "") {
    document.getElementById("emailerror").innerHTML =
      "**Please fill the Email Id field.";
    return true;
  }
  if (!mailFormat.test(email)) {
    document.getElementById("emailerror").innerHTML =
      "**Invalid Email Id ! Please Enter Valid Format";
    return true;
  }
  return false;
}
function validateWebsite() {
  var website = document.getElementById("InputWebsite").value;
  var webLinkRegExp =
    /([\d\w-.]+?\.(a[cdefgilmnoqrstuwz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvxyz]|d[ejkmnoz]|e[ceghrst]|f[ijkmnor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eouw]|s[abcdeghijklmnortuvyz]|t[cdfghjkmnoprtvwz]|u[augkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]|aero|arpa|biz|com|coop|edu|info|int|gov|mil|museum|name|net|org|pro|tech)(\b|\W(?<!&|=)(?!\.\s|\.{3}).*?))(\s|$)/;
  if (website == "") {
    document.getElementById("websiteerror").innerHTML =
      "**Please fill the Website field";
    return true;
  }
  if (!webLinkRegExp.test(website)) {
    document.getElementById("websiteerror").innerHTML =
      "**Invalid Website! Please Enter Valid Format";
    return true;
  }
  return false;
}
