// const guardaDatos = (user) => {
//   let usuario = {
//     uid: user.uid,
//     nombre: user.displayName,
//     email: user.email,
//     foto: user.photoURL,
//     // company: user.company,
//     type: user.type
//   }
//   firebase.database().ref('Users/' + user.uid)
//   .set(usuario)
// }

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
        displayName: email,
        email: result.user.email,
        photoURL: 'http:subirimagen.me/uploads/20180725011911.png',
        type: 'agency',
        // company: company
      }
      firebase.database().ref('Users/' + result.user.uid)
      .set(user)
  })
}

const login1 = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
    })
}

const saveProgram = (hour, hourFinal, programName, date, price, select, type) => {
  const programas = {
    inicio: hour,
    fin: hourFinal,
    programName: programName,
    date: date,
    price: price,
    select: select,
    type: type
  }
  firebase.database().ref('Programas/' + programName).push(programas)
}
