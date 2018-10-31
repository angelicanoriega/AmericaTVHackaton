const modal= document.querySelector(".Modal");
const content = document.querySelector("#contenedor");
const bodyTable=document.querySelector("#bodyTable")
const th = document.querySelector("#th")
const dayWeekend = [
  {date: "#"},
  {date: "Lunes", day: '2018-10-29'},
  {date: "Martes", day: '2018-10-30'},
  {date: "Miercoles", day: '2018-10-31'},
  {date: "Jueves", day: '2018-11-01'},
  {date: "Viernes", day: '2018-11-02'},
  {date: "Sabado", day: '2018-11-03'},
  {date: "Domingo", day: '2018-11-04'},
]
const getData2 = () =>{
    firebase.database().ref().child('Programas').on("value", snap => {
        const arrayHoras = Object.values(snap.val());
        catchData(arrayHoras)
    })
}

const dayWeekend1 = () => {
  content.innerHTML = ''
  dayWeekend.forEach(day => {
        // console.log(day.day);
  content.innerHTML +=
  `
    <th>${day.date}</th>
  `
  })
}

const removeDuplicates = arr => {
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}
const catchData = (programName1) => {
  let dateDeHora = []
  programName1.forEach(hora => {
    // console.log(hora);
    let data = Object.values(hora)
    data.forEach(data1 => {
      const obj={
        number:parseInt(data1.inicio.slice(0,2)),
        string:`${data1.inicio} - ${data1.fin}`
      }
    // console.log(obj);
      dateDeHora.push(obj)

      })
  })
  dateDeHora.sort((a,b)=> a.number-b.number);
  // console.log(dateDeHora);
  let nonDuplicates = removeDuplicates(dateDeHora).forEach(data => {
    bodyTable.innerHTML +=
    `<tr>
        <th>${data.string}</th>
    </tr>
      `
  })
}

getData2()
dayWeekend1()

// paintTable()
