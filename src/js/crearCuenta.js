inputs=document.querySelectorAll('#form_nc input')
//funcion validar formulario
function validacionDeFormulario(e) {
    e.preventDefault();
   

    const nameLength = 25;
    const emailLength = 16;
    const phoneLength = 10;
    const pass0Length = 16;
    // constants for each field

    let phoneCont = 0;
    let nameCont = 0;
    let passCont = 0;
    let addUserCont = 0;

    let fieldName = document.getElementById("name").value;
    let fieldEmail = document.getElementById("email").value;
    let fieldPhone = document.getElementById("phone").value;
    let fieldPass0 = document.getElementById("pass0").value;
    let fieldPass1 = document.getElementById("pass1").value;
    phoneCont = 0;
    nameCont = 0;
    passCont = 0;
    addUserCont = 0;

    for (let i = 0; i <= fieldPhone.length; i++) {
        if ((fieldPhone.charAt(i) >= '0') && (fieldPhone.charAt(i) <= '9')) {
            phoneCont += 1;
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

        document.querySelector('.name').classList.remove('is-invalid');
        document.querySelector('.name').classList.add('is-valid');
        } else {

            document.querySelector('.name').classList.remove('is-valid');
            document.querySelector('.name').classList.add('is-invalid');
    } // === validación nombre

    if ((fieldEmail.length > 8) && (fieldEmail.indexOf('@') >= 0) && ((fieldEmail.indexOf(".com") >= 0) || (fieldEmail.indexOf(".edu") >= 0))) {
        addUserCont += 1;

        document.querySelector('.email').classList.remove('is-invalid');
        document.querySelector('.email').classList.add('is-valid');
        } else {
   
        document.querySelector('.email').classList.remove('is-valid');
        document.querySelector('.email').classList.add('is-invalid');
    } // === validación email

    if ((fieldPhone.length == 10) && (fieldPhone.length === phoneCont)) {
        addUserCont += 1;
        
        document.querySelector('.phone').classList.remove('is-invalid');
        document.querySelector('.phone').classList.add('is-valid');
        } else {
        
        document.querySelector('.phone').classList.remove('is-valid');
        document.querySelector('.phone').classList.add('is-invalid');
    } // === validación teéfono

    if ((fieldPass0.length >= 10) && (fieldPass0.length === passCont)) {
        addUserCont += 1;
        
        document.querySelector('.pass0').classList.remove('is-invalid');
        document.querySelector('.pass0').classList.add('is-valid');
    } else {
        
        document.querySelector('.pass0').classList.remove('is-valid');
        document.querySelector('.pass0').classList.add('is-invalid');
    } // === validación contraseña

    if (fieldPass0 === fieldPass1) {
        addUserCont += 1;
        
        document.querySelector('.pass1').classList.remove('is-invalid');
        document.querySelector('.pass1').classList.add('is-valid');
        } else {
        
        document.querySelector('.pass1').classList.remove('is-valid');
        document.querySelector('.pass1').classList.add('is-invalid');
    } // === validación contraseña

 
    if ((addUserCont == 5)){ //se crea objeto usuario
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
           
        }
        //a la funcion usuarioExistente se le asigan los parametros de storelist y newUser(objetoAdmin, objetoNuevo)
        usuarioExistente(storeList, newUser)
        
    }
}//function validacionDeFormulario
//se crea la funcion que valida si el usuario ya existe o no 
function usuarioExistente(arregloUsuario, objUsuario) {
  
    //al arreglo de objetos existentes en localstorage se busca si el email y contraseña son iguales al objeto que se esta creando
    const newArreglo = arregloUsuario.find(usuario => { 
   
        //si son iguales retorna el objeto nuevo
        if (usuario.email == objUsuario.email || usuario.phone ==  objUsuario.phone){
            return objUsuario;
        }
    })
  
//si nuevo arreglo es diferente agregar el objUsuario
    if(!newArreglo ){
        arregloUsuario.push(objUsuario)

        // convierte arreglousuario  a string
        localStorage.setItem('usuarios', JSON.stringify(arregloUsuario))
        window.location.href="./../pages/login.html" //Me reedirecciona a HOME
    }else{
        // alert('El usuario ya existe')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Esta cuenta ya existe!',
            confirmButtonColor: "black",
            width: '40%',
            Height: '40%'
          })
          
    }
}; //function usuarioExistente

const form1 = document.getElementById('form_nc');
form1.addEventListener('submit', validacionDeFormulario);
/*inputs.forEach(function (input) {
    input.addEventListener('keyup', validacionDeFormulario);
    input.addEventListener('blur', validacionDeFormulario);

})//inputs*/

