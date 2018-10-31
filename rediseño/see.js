const reservar=document.getElementById('reservar');
const misreservas=document.getElementById('misreservas');
const Progracion=document.getElementById('Progración');
const btnreservar=document.getElementById('btnreservar');
const btnMisreservar=document.getElementById('btnMisreservar');
const btnprogramacion=document.getElementById('btnprogramacion');
const loginsee = document.getElementById('logindisplay');
const btnseeLogin = document.getElementById('seeLogin');
const btnseeRegister = document.getElementById('seeRegister');
const registersee = document.getElementById('registerdisplay');
btnseeRegister.addEventListener('click', () => {
    registersee.removeAttribute('class')
    loginsee.setAttribute('class', 'hidden');
});
btnseeLogin.addEventListener('click', () => {
    loginsee.removeAttribute('class')
    registersee.setAttribute('class', 'hidden');
});
btnreservar.addEventListener('click', () => {
    reservar.removeAttribute('class')
    misreservas.setAttribute('class', 'hidden');
    Progracion.setAttribute('class', 'hidden');
});
btnMisreservar.addEventListener('click', () => {
    misreservas.removeAttribute('class')
    reservar.setAttribute('class', 'hidden');
    Progracion.setAttribute('class', 'hidden');
});
btnprogramacion.addEventListener('click', () => {
    Progracion.removeAttribute('class')
    reservar.setAttribute('class', 'hidden');
    misreservas.setAttribute('class', 'hidden');
});
