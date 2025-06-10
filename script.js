function getFormvalue() {
const form = document.getElementById("form1");
const firstName = form.fname.value.trim();
const lastName = form.lname.value.trim();

if (!firstName && !lastName) {
  alert("Please enter your First and Last Name.");
  return false;
}
if (!firstName) {
  alert("Please enter your First Name.");
  return false;
}
if (!lastName) {
  alert("Please enter your Last Name.");
  return false;
}

alert(firstName + " " + lastName);
return false;
}