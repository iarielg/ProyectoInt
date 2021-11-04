const formulario = document.getElementById('formulario'),
    inputs = document.querySelectorAll('#formulario input'),
    text = document.querySelector('#formulario textarea');


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,36}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ ,// 7 a 14 numeros.
    motivo: /^[a-zA-ZÀ-ÿ\s0-9]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: /^[a-zA-ZÀ-ÿ\s0-9]{1,70}$/, // Letras y espacios, pueden llevar acentos.

}

const validarFormulario = function (e) {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                
                document.querySelector('.form-control').classList.add('is-valid');
                document.querySelector('.form-control').classList.remove('is-invalid');
                // document.querySelector('.form-control').classList.add('valid-tooltip');
                // ocument.querySelector('.form-control').classList.remove('invalid-tooltip');
                console.log('ok')
            }else{
                
                document.querySelector('.form-control').classList.add('is-invalid');
                document.querySelector('.form-control').classList.remove('is-valid');
                // document.querySelector('.form-control').classList.add('invalid-tooltip');
                // document.querySelector('.form-control').classList.remove('valid-tooltip');
                console.log('el nombre no es valido')
            }
            break;
        case "correo":
            if(expresiones.password.test(e.target.value)){
                document.querySelector('.correo').classList.add('is-valid');
                document.querySelector('.correo').classList.remove('is-invalid');
                // document.getElementById('valid').classList.add('valid-feedback');
                // document.getElementById('valid').classList.remove('invalid-feedback');
                console.log('ok')
            }else{
                document.querySelector('.correo').classList.add('is-valid');
                document.querySelector('.correo').classList.remove('is-invalid');
                // document.getElementById('valid').classList.add('valid-feedback');
                // document.getElementById('valid').classList.remove('invalid-feedback');
                console.log('ok')
            }
            break;
        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                
                document.querySelector('.telefono').classList.add('is-valid');
                document.querySelector('.telefono' ).classList.remove('is-invalid');
                // document.querySelector('.form-control').classList.add('valid-tooltip');
                // document.querySelector('.form-control').classList.remove('invalid-tooltip');
                console.log('ok')
            }else{
                
                document.querySelector('.telefono').classList.add('is-invalid');
                document.querySelector('.telefono').classList.remove('is-valid');
                // document.querySelector('.form-control').classList.add('invalid-tooltip');
                // document.querySelector('.form-control').classList.remove('valid-tooltip');
                console.log('el nombre no es valido')
            }

            break;
        case "motivo":
            if(expresiones.motivo.test(e.target.value)){
                
                document.querySelector('.motivo').classList.add('is-valid');
                document.querySelector('.motivo' ).classList.remove('is-invalid');
                // document.querySelector('.form-control').classList.add('valid-tooltip');
                // document.querySelector('.form-control').classList.remove('invalid-tooltip');
                console.log('ok')
            }else{
                
                document.querySelector('.motivo').classList.add('is-invalid');
                document.querySelector('.motivo').classList.remove('is-valid');
                // document.querySelector('.form-control').classList.add('invalid-tooltip');
                // document.querySelector('.form-control').classList.remove('valid-tooltip');
                console.log('el nombre no es valido')
            }
            break;
        case "mensaje":
            if(expresiones.mensaje.test(e.target.value)){
                
                document.querySelector('.mensaje').classList.add('is-valid');
                document.querySelector('.mensaje' ).classList.remove('is-invalid');
                // document.querySelector('.form-control').classList.add('valid-tooltip');
                // document.querySelector('.form-control').classList.remove('invalid-tooltip');
                console.log('ok')
            }else{
                
                document.querySelector('.mensaje').classList.add('is-invalid');
                document.querySelector('.mensaje').classList.remove('is-valid');
                // document.querySelector('.form-control').classList.add('invalid-tooltip');
                // document.querySelector('.form-control').classList.remove('valid-tooltip');
                console.log('el nombre no es valido')
            }
            break;
            
    }
}

inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})//inputs
text.addEventListener('keyup',validarFormulario);

formulario.addEventListener('submit', function (e) {
    // e.preventDefault();
})//listennerFormulario




/* // // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })() */


  