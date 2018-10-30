let login = document.getElementById('login')
let email = document.getElementById('email_login')
let password = document.getElementById('password')

const guardaDatos = (user) => {
  let usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL,
  }
  firebase.firestore().ref('Users/' + user.uid)
  .set(usuario)
}

const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .ther(result => {
      const user = {
        uid: result.user.uid,
        displayName: email_login.value,
        email: result.user.email,
        photoURL: 'http:subirimagen.me/uploads/20180725011911.png',
        // type:
      }
      guardaDatos(user)
  })
}

const login1 = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      alert('hola mundo')
    })
}
