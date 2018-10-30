const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const register2 = document.getElementById('register');

register2.addEventListener('click', () => {
  register1(email.value, password.value)
})
