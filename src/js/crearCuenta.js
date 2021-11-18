const form1 = document.getElementById('form_nc');
const nameLength = 25;
const emailLength = 16;
const phoneLength = 10;
const pass0Length = 16;
// constants for each field

let phoneCont = 0;
let nameCont = 0;
let passCont = 0;
let addUserCont = 0;
//traemos el form 

    
 // function tel 

form1.addEventListener('submit', function(e){
    e.preventDefault();
    //hay que prevenir el evento por default 
    let fieldName = document.getElementById("name").value;
    let fieldEmail = document.getElementById("email").value;
    let fieldPhone = document.getElementById("phone").value;
    let fieldPass0 = document.getElementById("pass0").value;
    let fieldPass1 = document.getElementById("pass1").value;
    phoneCont = 0;
    nameCont = 0;
    passCont = 0;
    addUserCont = 0;

    for (let i = 0; i <= fieldPhone.length; i++){
        if ((fieldPhone.charAt(i) >= '0') && (fieldPhone.charAt(i) <= '9')){
            phoneCont += 1;
        }
    }
    for (let i = 0; i <= fieldName.length; i++){
        if (((fieldName.charAt(i) >= 'A') && (fieldName.charAt(i) <= 'Z')) || ((fieldName.charAt(i) >= 'a') && (fieldName.charAt(i) <= 'z')) || (fieldName.charAt(i) === ' ')){
                nameCont += 1;                            
        }
    }
    for (let i = 0; i <= fieldPass0.length; i++){
        if (((fieldPass0.charAt(i) >= 'A') && (fieldPass0.charAt(i) <= 'Z')) || ((fieldPass0.charAt(i) >= 'a') && (fieldPass0.charAt(i) <= 'z')) || ((fieldPass0.charAt(i) >= '0') && (fieldPass0.charAt(i) <= '9'))){
                passCont += 1;                            
        }
    }

    if((fieldName.length >= 10) && (fieldName.length === nameCont)){
        addUserCont += 1;
        console.log(`Nombre válido: ${fieldName}`);
        document.querySelector('.name').classList.remove('is-invalid');
        document.querySelector('.name').classList.add('is-valid');
    } else{
        console.log(`Nombre invalido: ${fieldName}`);
        document.querySelector('.name').classList.remove('is-valid');
        document.querySelector('.name').classList.add('is-invalid');
    } // ====================== validación nombre

    if((fieldEmail.length > 8) && (fieldEmail.indexOf('@') >= 0) && ((fieldEmail.indexOf(".com") >= 0) || (fieldEmail.indexOf(".edu") >= 0))){
        addUserCont += 1;
        console.log(`Correo válido: ${fieldEmail}`);
        document.querySelector('.email').classList.remove('is-invalid');
        document.querySelector('.email').classList.add('is-valid');
    } else{
        console.log(`Correo invalido: ${fieldEmail}`); 
        document.querySelector('.email').classList.remove('is-valid');
        document.querySelector('.email').classList.add('is-invalid');
    } // ====================== validación email

    if((fieldPhone.length == 10) && (fieldPhone.length === phoneCont)){
        addUserCont += 1;
        console.log(`Teléfono válido: ${fieldPhone}`);
        document.querySelector('.phone').classList.remove('is-invalid');
        document.querySelector('.phone').classList.add('is-valid');
    } else{
        console.log(`Teléfono invalido: ${fieldPhone}`);
        document.querySelector('.phone').classList.remove('is-valid');
        document.querySelector('.phone').classList.add('is-invalid');
    
    } // ====================== validación teéfono

    if((fieldPass0.length >= 10) && (fieldPass0.length === passCont)){
        addUserCont += 1;
        console.log(`Contraseña válida: ${fieldPass0}`);
        document.querySelector('.pass0').classList.remove('is-invalid');
        document.querySelector('.pass0').classList.add('is-valid');
    } else{
        console.log(`Contraseña invalida: ${fieldPass0}`);
        document.querySelector('.pass0').classList.remove('is-valid');
        document.querySelector('.pass0').classList.add('is-invalid');
    } // ====================== validación contraseña

    if(fieldPass0 === fieldPass1){
        addUserCont += 1;
        console.log(`Contraseña válida: ${fieldPass1}`);
        document.querySelector('.pass1').classList.remove('is-invalid');
        document.querySelector('.pass1').classList.add('is-valid');
    } else{
        console.log(`Contraseña invalida: ${fieldPass1}`);
        document.querySelector('.pass1').classList.remove('is-valid');
        document.querySelector('.pass1').classList.add('is-invalid');
    } // ====================== validación contraseña

    if (addUserCont == 5){
        window.location.href="./../pages/login.html"

        let newUser = {
            name: `${fieldName}`,
            email: `${fieldEmail}`,
            phone: `${fieldPhone}`,
            pass0: `${fieldPass0}`,
        }
        const user0_JSON = JSON.stringify(newUser)
        localStorage.setItem('user0',user0_JSON);
        localStorage.setItem('user0',user0_JSON);
    
        let example_JSON = localStorage.getItem('user0');
        example_JSON = JSON.parse(example_JSON);
        
        addUserCont == 0;
    } // ============================================

    // console.log(fieldName.length);
    // console.log(fieldName.charAt(6));
    // console.log(nameCont);
    // console.log(onlyLetters);
    // console.log('\n');

});



