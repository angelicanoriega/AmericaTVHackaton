const loginAdmin=document.getElementById("login");
const getEmail=document.getElementById("email_login");
const getPassword=document.getElementById("password_login")

loginAdmin.addEventListener('click', () => {
    signInUser(getEmail.value, getPassword.value);
  })