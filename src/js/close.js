import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler'

const close1 = document.getElementById('close');
const name = document.getElementById('name');

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


$('#calendar').fullCalendar({
  header: {
    center: 'month,timelineFourDays'
  },
  views: {
    timelineFourDays: {
      type: 'timeline',
      duration: { days: 4 }
    }
  }
});
