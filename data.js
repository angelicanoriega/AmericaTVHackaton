const btn = document.getElementById('btn');
const btnReserv = document.getElementById('btnReserv');
const product = document.getElementById('product');
const table = document.getElementById('table');
const price = document.getElementById('price');
const extra = document.getElementById('extra');
const programa = document.getElementById('pro');
const fech = document.getElementById('date');
const day = document.getElementById('day');

const see = (element, html) => {
    let option = '';
    element
    let SinDuplicados = [];
    SinDuplicados = element.filter((elem, pos) => {
        return element.indexOf(elem) == pos;
    });

    for (let index = 0; index < SinDuplicados.length; index++) {
        option += '<option >' + SinDuplicados[index] + '</option>';
        html.innerHTML = option
    }
}
const searchDay = (program) => {
    const array = [];
    firebase.database().ref('Programas').child(program).on("child_added", snap => {
        array.push(snap.val().date);
        see(array, fech);
    })
}
const searchHour = (program, time) => {
    const hour = [];
    firebase.database().ref('Programas').child(program).on("child_added", snap => {
        console.log(snap.val());
        
        if (snap.val().date === time) {
            if (snap.val().state==='true') {
            hour.push(snap.val().inicio + ' - ' + snap.val().fin);
            see(hour, day);
            } else {

            }
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
programa.addEventListener('click', () => {
    searchDay(programa.value);
    day.innerHTML = '';
})
fech.addEventListener('click', () => {
    searchHour(programa.value, fech.value)
})
day.addEventListener('click', () => {
    searchPrice(programa.value, day.value, price, extra)
})

// enviar la data
let acum = [];

btn.addEventListener('click', () => {
    // firebase.database().ref().child('usuario').set(acum);

    firebase.database().ref('Programas').child(programa.value).on("value", snap => {
        const keys = Object.keys(snap.val());
        keys.forEach(element => {
            if (snap.val()[element].inicio === day.value.slice(0, 5)) {
                console.log(element);
                firebase.database().ref().child(`/Programas/${programa.value}/${element}`).update({
                    "state": "false"
                });

            }
        });


    })
    const money = price.innerHTML;
    showData(product.value, programa.value, fech.value, day.value, money, acum);
    document.getElementById('calcul').addEventListener('click', () => {
        let contador = 0
        acum.forEach(element => {
            contador = contador + parseInt(element.precio);
        });
        document.getElementById('total').innerHTML = contador;
    })
    btnReserv.addEventListener('click', () => {
        firebase.database().ref().child('usuario').set(acum);
        console.log(acum);

    })

})

const showData = (nameProduct, nameProgram, nameFech, nameday, nameMoney, array) => {
    if (6 > array.length) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const text = document.createTextNode(nameProduct);
        const text2 = document.createTextNode(nameProgram);
        const text3 = document.createTextNode(nameFech);
        const text4 = document.createTextNode(nameday);
        const text5 = document.createTextNode(nameMoney);
        const btn = document.createElement("button");
        const text6 = document.createTextNode('Retirar');
        btn.appendChild(text6)
        td6.appendChild(btn);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        td.appendChild(text);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        table.appendChild(tr);
        const obj = {
            producto: nameProduct,
            programa: nameProgram,
            fecha: nameFech,
            hora: nameday,
            precio: nameMoney
        };
        array.push(obj)
        btn.addEventListener('click', () => {
            tr.remove();
            array.splice(array.indexOf(array), 1);
            firebase.database().ref('Programas').child(nameProgram).on("value", snap => {
                const keys = Object.keys(snap.val());
                keys.forEach(element => {
                    if (snap.val()[element].inicio === nameday.slice(0, 5)) {
                        console.log(element);
                        firebase.database().ref().child(`/Programas/${nameProgram}/${element}`).update({
                            "state": "true"
                        });
                    }
                });
            })
        })
    } else {
        alert('hola')
    }
}