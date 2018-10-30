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

const close = () => {
    firebase.auth().signOut()
    .then(() => alert('Saliendo...'))
    .catch((error) => console.log(error))
  };
const register1 = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
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
