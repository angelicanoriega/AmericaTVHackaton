const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const register = document.getElementById('register1111');

// LOGIN
const login = document.getElementById('login')
const email_login = document.getElementById('email_login')
const passwordLogin = document.getElementById('passwordLogin');


window.onload = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.location = "calendario.html"
    }
  })
}

register.addEventListener('click', () => {
  register1(email.value, password.value)
})

