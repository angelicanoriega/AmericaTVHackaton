// LOGIN
const login2 = document.getElementById('login')
const email_login = document.getElementById('email_login')
const passwordLogin = document.getElementById('passwordLogin');

window.onload = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      alert('hola')
      window.location = "calendario.html"
    }
  })
}
login.addEventListener('click', () => {
  login1(email_login.value, passwordLogin.value)
})

// let userUid = firebase.auth().currentUser;
// console.log(userUid);
