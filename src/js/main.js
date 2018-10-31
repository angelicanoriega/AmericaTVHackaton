const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const register2 = document.getElementById('register');


window.onload = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      alert('hola')
      window.location = "calendario.html"
    }
  })
}
register.addEventListener('click', () => {
  register1(email.value, password.value)
})
