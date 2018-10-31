const modal= document.querySelector(".Modal");
const content = document.querySelector("#contenedor");
const bodyTable=document.querySelector("#bodyTable")
const arrayHour= ["5:16","5:30","6:00","6:10","6:25","6:30","6:50","7:00","7:30","8:00","8:20","8:30","8:35","9:00","9:30","10:00","10:15","11:00","11:15","11:30","11:58","12:00","12:30","13:00","13:10","13:35","13:45","13:55","14:00","14:20","14:30","14:35","14:45","15:00","15:10","15:50","16:00","16:20","16:40","16:45","17:00","17:10","17:30","17:45","18:00","18:20","18:25","18:30","18:55","19:00","20:00","20:30","21:00","21:30","22:00","22:30","22:55","23:00","23:25","23:30","23:40","0:00","0:20","0:30","0:32","0:55","1:00","1:20","1:30","2:00","2:15","2:30","3:00","3:25","3:30","3:45","4:00","4:10","4:20","4:30","4:45","5:00","5:16"]
const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

const getData2 = () =>{
    firebase.database().ref().child('Programas').on("value", snap => {
        const arrayHoras=Object.values(snap.val());
        arrayHoras.forEach(horaPrograma =>{
            
            Object.values(horaPrograma).forEach(horaO=>{
                console.log(horaO);
                
                paintTable(horaO.fin,horaO.programName)
            })
            
        })
    
    })
}


const paintTable= (horaO,programName) =>{
content.innerHTML = '';
diasSemana.forEach(dia=>{
    
    content.innerHTML += `

     <th scope="col">${dia}</th>

    `
})

arrayHour.forEach(hora=>{
    bodyTable.innerHTML += 
    `<tr>
        <th>${hora}</th>
        <td>${programName}</td>
    </tr>

    `
})




// var datos = [];
// for(var d=0; d < data.length; d++){
//  for(var e = 0; e < rowH.length; e++){
//    var controlchange += data[d][rowH[e]];
//    datos.push(data[d][rowH[e]]);
//  }
// }

// tableBody = '<tr>';
// for(var g in datos){
//  table += '<td>'+datos[g]+'</td>'+
//           '</tr>;    
// }
}


getData2()

paintTable()






// const paintModal = () =>{
//     html
// }
// const see = (element) => {
//     console.log(element);
    
//     // let option = '';
//     for (let index = 0; index < element.length; index++) {
//         modal = lemento[index];
//         console.log(option);
        
//     }
// }
// see()
// console.log(see() );

// const searchDay = (program) => {
//     const array = [];
//     const hour = [];
//     firebase.database().ref('Programas').child(program).on("child_added", snap => {
//         array.push(snap.val().date);
//         hour.push(snap.val().inicio + ' - ' + snap.val().fin);
//         see(array, fech);
//     })
// }
