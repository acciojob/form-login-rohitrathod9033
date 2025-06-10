function getFormvalue(event) {
      event.preventDefault();
      const form = event.target;
      const firstName = form.fname.value.trim();
      const lastName = form.lname.value.trim();
      if (!firstName && !lastName) {
        alert("Please enter your First and Last Name.");
        return;
      }
      if (!firstName) {
        alert("Please enter your First Name.");
        return;
      }
      if (!lastName) {
        alert("Please enter your Last Name.");
        return;
      }
  alert(`${firstName} ${lastName}`);
}