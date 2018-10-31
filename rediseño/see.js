const login=document.getElementById('login');
const btnseeRegister=document.getElementById('seeRegister');
const register=document.getElementById('register');
btnseeRegister.addEventListener('click',()=>{
    register.removeAttribute('class')
    login.setAttribute('class','hidden');
})