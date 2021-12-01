<<<<<<< HEAD
//funcion validar formulario
function validacionDeFormulario(e) {
=======
const form1 = document.getElementById('form_nc');
const nameLength = 25;
const emailLength = 16;
const phoneLength = 10;
const pass0Length = 16;
// constants for each field

let onlyN = new Boolean(false);
let phoneCont = 0;
let onlyLetters = new Boolean(false);
let nameCont = 0;
//traemos el form 

    
 // function tel 

form1.addEventListener('submit', function(e){
>>>>>>> 421039298dc3d73e8eb2b9dfd90b76fbfb1c6cfe
    e.preventDefault();
    console.log(e.target.value);
   //window.location.href="./../pages/login.html"
    //hay que prevenir el evento por default 
    if(e.target.name=='nuevac'){
    let fieldName = document.getElementById("name").value;
    let fieldEmail = document.getElementById("email").value;
    let fieldPhone = document.getElementById("phone").value;
    let fieldPass0 = document.getElementById("pass0").value;
    let fieldPass1 = document.getElementById("pass1").value;
    phoneCont = 0;
    onlyN = false;
    nameCont = 0;
    onlyLetters = false;

    for (let i = 0; i <= fieldPhone.length; i++){
        if ((fieldPhone.charAt(i) >= '0') && (fieldPhone.charAt(i) <= '9')){
            phoneCont += 1;
<<<<<<< HEAD
        }//if
    }//for
    for (let i = 0; i <= fieldName.length; i++) {
        if (((fieldName.charAt(i) >= 'A') && (fieldName.charAt(i) <= 'Z')) || ((fieldName.charAt(i) >= 'a') && (fieldName.charAt(i) <= 'z')) || (fieldName.charAt(i) === ' ')) {
            nameCont += 1;
        }//if
    }//for
    for (let i = 0; i <= fieldPass0.length; i++) {
        if (((fieldPass0.charAt(i) >= 'A') && (fieldPass0.charAt(i) <= 'Z')) || ((fieldPass0.charAt(i) >= 'a') && (fieldPass0.charAt(i) <= 'z')) || ((fieldPass0.charAt(i) >= '0') && (fieldPass0.charAt(i) <= '9'))) {
            passCont += 1;
        }//if
    }//for

    if ((fieldName.length >= 2) && (fieldName.length === nameCont)) {
        addUserCont += 1;
        //console.log(`Nombre válido: ${fieldName}`);
        document.querySelector('.name').classList.remove('is-invalid');
        document.querySelector('.name').classList.add('is-valid');
        } else {
            //console.log(`Nombre invalido: ${fieldName}`);
            document.querySelector('.name').classList.remove('is-valid');
            document.querySelector('.name').classList.add('is-invalid');
    } // === validación nombre

    if ((fieldEmail.length > 8) && (fieldEmail.indexOf('@') >= 0) && ((fieldEmail.indexOf(".com") >= 0) || (fieldEmail.indexOf(".edu") >= 0))) {
        addUserCont += 1;
        //console.log(`Correo válido: ${fieldEmail}`);
        document.querySelector('.email').classList.remove('is-invalid');
        document.querySelector('.email').classList.add('is-valid');
        } else {
        //console.log(`Correo invalido: ${fieldEmail}`); 
        document.querySelector('.email').classList.remove('is-valid');
        document.querySelector('.email').classList.add('is-invalid');
    } // === validación email

    if ((fieldPhone.length == 10) && (fieldPhone.length === phoneCont)) {
        addUserCont += 1;
        //console.log(`Teléfono válido: ${fieldPhone}`);
        document.querySelector('.phone').classList.remove('is-invalid');
        document.querySelector('.phone').classList.add('is-valid');
        } else {
        //console.log(`Teléfono invalido: ${fieldPhone}`);
        document.querySelector('.phone').classList.remove('is-valid');
        document.querySelector('.phone').classList.add('is-invalid');
    } // === validación teéfono

    if ((fieldPass0.length >= 10) && (fieldPass0.length === passCont)) {
        addUserCont += 1;
        //console.log(`Contraseña válida: ${fieldPass0}`);
        document.querySelector('.pass0').classList.remove('is-invalid');
        document.querySelector('.pass0').classList.add('is-valid');
    } else {
        //console.log(`Contraseña invalida: ${fieldPass0}`);
        document.querySelector('.pass0').classList.remove('is-valid');
        document.querySelector('.pass0').classList.add('is-invalid');
    } // === validación contraseña

    if (fieldPass0 === fieldPass1) {
        addUserCont += 1;
        //console.log(`Contraseña válida: ${fieldPass1}`);
        document.querySelector('.pass1').classList.remove('is-invalid');
        document.querySelector('.pass1').classList.add('is-valid');
        } else {
        //console.log(`Contraseña invalida: ${fieldPass1}`);
        document.querySelector('.pass1').classList.remove('is-valid');
        document.querySelector('.pass1').classList.add('is-invalid');
    } // === validación contraseña
=======
        }
    }
    if (fieldPhone.length === phoneCont){
        onlyN = true;
    } else{
        onlyN = false;
    } // ===================== esto solo acepta números

    for (let i = 0; i <= fieldName.length; i++){
        if (((fieldName.charAt(i) >= 'A') && (fieldName.charAt(i) <= 'Z')) || ((fieldName.charAt(i) >= 'a') && (fieldName.charAt(i) <= 'z')) || (fieldName.charAt(i) === ' ')){
                nameCont += 1;                            
        }
    }
    if (fieldName.length === nameCont){
        onlyLetters = true;
    } else{
        onlyLetters = false;
    } // ===================== esto solo acepta letras

    if((fieldName.length >= 10) && (onlyLetters == true)){
        console.log(`Nombre válido: ${fieldName}`);

    } else{
        console.log(`Nombre invalido: ${fieldName}`);

    } // ====================== validación nombre

    if((fieldEmail.length > 8) && (fieldEmail.indexOf('@') >= 0) && ((fieldEmail.indexOf(".com") >= 0) || (fieldEmail.indexOf(".edu") >= 0))){
        console.log(`Correo válido: ${fieldEmail}`);

    } else{
        console.log(`Correo invalido: ${fieldEmail}`); 

    } // ====================== validación email

    if((fieldPhone.length == 10) && (onlyN == true)){
        console.log(`Teléfono válido: ${fieldPhone}`);
    //    //agrega la clase invalida
        //alert("Error, introduce tu número a 10 dígitos"); 
    //     //agrega la clase invalida
    //     fieldPhone.classList.add("is-invalid");

    } else{
        console.log(`Teléfono invalido: ${fieldPhone}`);
    //  //remover la clase
    fieldPhone.classList.add("is-invalid");
    //  //agregar la clase is-valid
    fieldPhone.classList.remove("is-valid");
    } // ====================== validación teéfono

    if(fieldPass0.length >= 10){
        console.log(`Contraseña válida: ${fieldPass0}`);

    } else{
        console.log(`Contraseña invalida: ${fieldPass0}`);

    } // ====================== validación contraseña
>>>>>>> 421039298dc3d73e8eb2b9dfd90b76fbfb1c6cfe

    if(fieldPass1.length >= 10){
        console.log(`Contraseña válida: ${fieldPass1}`);

<<<<<<< HEAD
    if (addUserCont == 5) { //se crea objeto usuario
        let newUser = {
            "name": `${fieldName}`,
            "email": `${fieldEmail}`,
            "phone": `${fieldPhone}`,
            "pass0": `${fieldPass0}`,
        }
        //se trae de localStorage el objeto creado
        let usuarios = window.localStorage.getItem('usuarios'); //se traé todo lo del localStorage
            let storeList;
            //si usuarios esta vacío crear el objeto del administrador
            if (!usuarios ) {
            storeList = [
                {"nombre":"yaki", "email":"zeltzin@gmail.com", "pass0":"yakiromerotrejo"} //Default
            ];
            //stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON
            //transformar a string el objeto del admin
            localStorage.setItem('usuarios', JSON.stringify(storeList)) //Aquí añadimos al localStorage
        } else {
            //si existen objetos usuario convertirlos a JSON
            storeList = JSON.parse(usuarios);
            console.log(storeList);
        }
        //a la funcion usuarioExistente se le asigan los parametros de storelist y newUser(objetoAdmin, objetoNuevo)
        usuarioExistente(storeList, newUser)
        
    }
}//function validacionDeFormulario
//se crea la funcion que valida si el usuario ya existe o no 
function usuarioExistente(arregloUsuario, objUsuario) {
   console.log(arregloUsuario) 
    //al arreglo de objetos existentes en localstorage se busca si el email y contraseña son iguales al objeto que se esta creando
    const newArreglo = arregloUsuario.find(usuario => { 
        console.log(usuario)
        console.log(objUsuario)
        //si son iguales retorna el objeto nuevo
        if (usuario.email == objUsuario.email || usuario.phone ==  objUsuario.phone){
            return objUsuario
            console.log('el usuario ya existe');
        }
    })
console.log(newArreglo)
//si nuevo arreglo es diferente agregar el objUsuario
    if(!newArreglo ){
        arregloUsuario.push(objUsuario)

        // convierte arreglousuario  a string
        localStorage.setItem('usuarios', JSON.stringify(arregloUsuario))
        window.location.href="./../pages/login.html"
    }else{
        // alert('El usuario ya existe')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Esta cuenta ya existe!',
            // footer: '<a href="./../pages/login.html">¿Intenta iniciar sesión?</a>'
            confirmButtonColor: "black",
            width: '40%',
            Height: '40%'
          })
          
=======
    } else{
        console.log(`Contraseña invalida: ${fieldPass1}`);

    } // ====================== validación contraseña
if (fieldPass1.length >= 10 
    && fieldPass0.length >= 10 
    &&fieldPhone.length == 10
    && onlyN == true
    &&fieldEmail.length > 8
    && fieldEmail.indexOf('@') >= 0
    && ((fieldEmail.indexOf(".com") >= 0) || (fieldEmail.indexOf(".edu") >= 0))
    &&(fieldName.length >= 10) 
    && (onlyLetters == true)
    &&fieldName.length === nameCont)
{
    window.location.href="./../pages/login.html"
}
    // console.log(fieldName);
    // console.log(fieldEmail);
    // console.log(fieldEmail.indexOf('@'));
    // console.log(fieldPhone);
    // console.log(fieldPhone.length);
    // console.log(fieldPass0);

    console.log(fieldName.length);
    console.log(fieldName.charAt(6));
    console.log(nameCont);
    console.log(onlyLetters);


    console.log('\n');}
    else if(e.target.name=='login'){
        window.location.href="./../pages/login.html"
>>>>>>> 421039298dc3d73e8eb2b9dfd90b76fbfb1c6cfe
    }
}; //function usuarioExistente

const form1 = document.getElementById('form_nc');
form1.addEventListener('submit', validacionDeFormulario);
console.log(usuarios); 
console.log(storeList);

});