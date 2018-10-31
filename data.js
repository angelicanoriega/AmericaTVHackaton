const btn=document.getElementById('btn');
const product=document.getElementById('product');
const programa = document.getElementById('pro');
const fech = document.getElementById('date');
const day = document.getElementById('day');

const see = (element, html) => {
    let option = '';
    for (let index = 0; index < element.length; index++) {
        option += '<option >' + element[index] + '</option>';
        html.innerHTML = option
    }
}
const searchDay = (program) => {
    const array = [];
    const hour = [];
    firebase.database().ref('Programas').child(program).on("child_added", snap => {
        console.log(snap.val());

        array.push(snap.val().date);
        hour.push(snap.val().inicio + ' - ' + snap.val().fin);
        see(array, fech);
    })
}
const searchHour = (program, time) => {
    console.log('tiempo',time);
    const hour = [];
    firebase.database().ref('Programas').child(program).on("child_added", snap => {
        if (snap.val().date === time) {
            hour.push(snap.val().inicio + ' - ' + snap.val().fin);
            see(hour, day);
        }
    })
}
firebase.database().ref().child('Marcas').on("value", snap => {
    console.log(snap.val());
    
    see(Object.keys(snap.val()), product)
})
firebase.database().ref().child('Programas').on("value", snap => {
    see(Object.keys(snap.val()), programa)
})
programa.addEventListener('change', () => {
    searchDay(programa.value)
})
fech.addEventListener('change', () => {
    searchHour(programa.value, fech.value)
})
// enviar la data
btn.addEventListener('click',()=>{
    console.log(product.value,programa.value,fech.value,day.value);
})