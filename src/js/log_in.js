const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const botonEntar = document.getElementById('nuevo');
const botonNuevo= document.getElementById('entrar');

const expresiones = {
    contraseña: /^[a-zA-Z0-9\_\-]{9,36}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    contraseña: false,
    correo: false,
}

const validarFormulario = function (e) {
  
    switch (e.target.name) {
              case "correo":
            if (expresiones.correo.test(e.target.value)) {
                document.querySelector('.correo').classList.add('is-valid');
                document.querySelector('.correo').classList.remove('is-invalid');
                campos.correo = true;
                console.log('Hola '+ campos.correo)
            } else {
                document.querySelector('.correo').classList.add('is-invalid');
                document.querySelector('.correo').classList.remove('is-valid');
                campos.correo = false;
                console.log('el correo no es valido')
            }
            break;
            case "contraseña":
                if (expresiones.contraseña.test(e.target.value)) {
    
                    document.querySelector('.contraseña').classList.add('is-valid');
                    document.querySelector('.contraseña').classList.remove('is-invalid');
                    campos.contraseña = true;
                    console.log('Bienvenido')
                } else {
    
                    document.querySelector('.contraseña').classList.add('is-invalid');
                    document.querySelector('.contraseña').classList.remove('is-valid');
                    campos.contraseña = false;
                    console.log('contraseña incorrecta')
                }
                break;
    }

}

inputs.forEach(function (input) {
  input.addEventListener('keyup', validarFormulario);
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})//inputs


formulario.addEventListener('entrar', function (e) {
  e.preventDefault();
    console.log(e.target.name);
    //const terminos = document.querySelector('.recordar');
    if (campos.correo && campos.contraseña ) {//&&recordar.checked
        let welcome = document.getElementById('welcome');
        welcome.innerHTML = `
        <div class="alert alert-success d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
          <div>
            Bienvenido
          </div>
        </div>`
    } else {
        let alert = document.getElementById('alert')
        alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
        
        <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
            Debes llenar todos los campos correctamente.
        </div>
      </div>`
    }
})//listennerFormulario

     
formulario.addEventListener('nuevo', function (e) {
  e.preventDefault();
    console.log(e.target.name);
    //const terminos = document.querySelector('.recordar');
    if (campos.correo && campos.contraseña ) {//&&recordar.checked
        let welcome = document.getElementById('welcome');
        welcome.innerHTML = `
        <div class="alert alert-success d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
          <div>
            Bienvenido
          </div>
        </div>`
    } else {
        let alert = document.getElementById('alert')
        alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
        
        <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
            Debes llenar todos los campos correctamente.
        </div>
      </div>`
    }
})//listennerFormulario






