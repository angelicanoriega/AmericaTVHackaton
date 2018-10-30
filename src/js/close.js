let programs = ['AMERICA NOTICIAS: PRIMERA EDICION: LOCAL', 'AMERICA NOTICIAS: PRIMERA EDICION', 'AMERICA DEPORTES', 'AMERICA NOTICIAS: PRIMERA EDICION', 'TN. EL PRIVILEGIO DE AMAR', 'TN. MARIMAR', 'LOS AMORES DE POLO', 'AMERICA NOTICIAS: EDICION DEL MEDIODIA', 'EN BOCA DE TODOS']
const close1 = document.getElementById('close');
const name = document.getElementById('name');
const hour = document.getElementById('hour');
const programName = document.getElementById('programName');
const date = document.getElementById('date');
const guardar = document.getElementById('guardar');


close1.addEventListener('click', () => {
  close()
  window.location = 'index.html'
})

window.onload = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('existe usuario');
      // if (user.emailVerified) {
      let userUid = firebase.auth().currentUser.uid;
      firebase.database().ref('Users/' + userUid).on('value', (userRef) => {
        let user = userRef.val();
        console.log(user);
        name.innerHTML += `<p>${user.displayName}</p>`
      })
    }
  })
}

guardar.addEventListener('click', () => {
  saveProgram(hour.value, hourFinal.value, programName.value, date.value)
})
