// LOGIN
const login2 = document.getElementById('login')
const email_login = document.getElementById('email_login')
const passwordLogin = document.getElementById('passwordLogin');

login.addEventListener('click', () => {
  login1(email_login.value, passwordLogin.value)
})
