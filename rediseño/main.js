const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const register2 = document.getElementById('register');


window.onload = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
      document.getElementById('userdisplay').removeAttribute('class');
      registersee.setAttribute('class', 'hidden');
      loginsee.setAttribute('class', 'hidden');
      document.getElementById('usernamedisplay').appendChild(document.createTextNode(user.email))
    }
  })
}
register.addEventListener('click', () => {
  register1(email.value, password.value)
})
