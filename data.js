const btn = document.getElementById('btn');
const product = document.getElementById('product');
const price = document.getElementById('price');
const extra = document.getElementById('extra');
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
        array.push(snap.val().date);
        hour.push(snap.val().inicio + ' - ' + snap.val().fin);
        see(array, fech);
    })
}
const searchHour = (program, time) => {
    const hour = [];
    firebase.database().ref('Programas').child(program).on("child_added", snap => {
        if (snap.val().date === time) {
            hour.push(snap.val().inicio + ' - ' + snap.val().fin);
            see(hour, day);
        }
    })
}
const searchPrice = (program, time, html, html2) => {
    const rank = parseInt(time.slice(0, 2)) + (parseInt(time.slice(3, 5))) / 100;
    firebase.database().ref('Programas').child(program).on("child_added", snap => {
        const rankHour = snap.val().inicio + ' - ' + snap.val().fin;
        if (rankHour === time) {
            const originlPrice = parseInt(snap.val().price);
            if (8 <= rank && rank <= 12) {
                html.innerHTML = originlPrice
                html2.innerHTML = 'No aplica';
            } else if (12.1 <= rank && rank <= 16) {
                html.innerHTML = originlPrice + (originlPrice * (5 / 100));
                html2.innerHTML = '5%';
            } else if (16 <= rank) {
                html.innerHTML = originlPrice + (originlPrice * (15 / 100));
                html2.innerHTML = '15%';
            }
        }
    })
}
firebase.database().ref().child('Marcas').on("value", snap => {
    see(Object.keys(snap.val()), product)
})
firebase.database().ref().child('Programas').on("value", snap => {
    see(Object.keys(snap.val()), programa)
})
programa.addEventListener('change', () => {
    searchDay(programa.value);
    day.innerHTML = '';
})
fech.addEventListener('change', () => {
    searchHour(programa.value, fech.value)
})
day.addEventListener('change', () => {
    searchPrice(programa.value, day.value, price, extra)
})

// enviar la data
btn.addEventListener('click', () => {
    const money = price.innerHTML;
    console.log(product.value, programa.value, fech.value, day.value, money);
})

const showData = ( nameProduct,  nameProgram, nameFech,nameday,nameMoney ) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
}
   