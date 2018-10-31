// LOGIN
const login2 = document.getElementById('login')
const email_login = document.getElementById('email_login')
const passwordLogin = document.getElementById('passwordLogin');

window.onload = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      alert('iniciando...');
      document.getElementById('userdisplay').removeAttribute('class');
      registersee.setAttribute('class', 'hidden');
      loginsee.setAttribute('class', 'hidden');
      document.getElementById('usernamedisplay').appendChild(document.createTextNode(user.email))
    }

  })
}
login.addEventListener('click', () => {
  login1(email_login.value, passwordLogin.value)
})
