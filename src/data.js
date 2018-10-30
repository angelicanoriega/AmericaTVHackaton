

 fetch('./data.json')
.then((response)=>{
  return response.json();
})
.then((myJson)=> {
    console.log(myJson);
    let tabla = '';
    myJson.forEach(element => {
        const tm=document.createElement('tr')
        tabla += '<tr>';
        tabla += '<td id= "nombrestabla">' + element.hora + '</td>';
        tabla += '<td>' + element.programa.l + '</td>';

        tabla += '</tr>';

        document.getElementById('see').innerHTML = tabla
      })  

  });

