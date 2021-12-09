
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const select = document.querySelectorAll('.form-select');
let img=document.getElementById('img0');
let correct = document.querySelector('.correct');
let alerta = document.querySelector('.alert');

const expresiones = {
    id: /^\d{2,14}$/,// 7 a 14 numeros.
    tipo: /^[a-zA-ZÀ-ÿ\s]{4,15}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,30}$/, // Letras y espacios, pueden llevar acentos.
    precio: /^\d{2,14}$/,// 2 a 14 numeros.
    cantidad: /^\d{1,14}$/,// 2 a 14 numeros.
    descripcion: /^[a-zA-ZÀ-ÿ\s0-9]{5,70}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
    id: false,
    tipo: false,
    talla: false,
    cantidad: false,
    nombre: false,
    color: false,
    precio: false,
    categoria: false,
    imagen: false,
    descripcion: false,
    campo: false
}

const validarFormulario = function (e) {
    const noms = 'input';
    localStorage.setItem('nombresusuas',noms);
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {

                document.querySelector('.nombre').classList.add('is-valid');
                document.querySelector('.nombre').classList.remove('is-invalid');
                campos.nombre = true;
            } else {

                document.querySelector('.id').classList.add('is-invalid');
                document.querySelector('.id').classList.remove('is-valid');
                campos.id = false;
            }
            break;
        case "id":
            if (expresiones.id.test(e.target.value)) {

                document.querySelector('.id').classList.add('is-valid');
                document.querySelector('.id').classList.remove('is-invalid');
                campos.id = true;
            } else {

                document.querySelector('.id').classList.add('is-invalid');
                document.querySelector('.id').classList.remove('is-valid');
                campos.id = false;
            }
            break;
        case "tipo":
            if (expresiones.tipo.test(e.target.value)) {

                document.querySelector('.tipo').classList.add('is-valid');
                document.querySelector('.tipo').classList.remove('is-invalid');
                campos.tipo = true;
            } else {

                document.querySelector('.tipo').classList.add('is-invalid');
                document.querySelector('.tipo').classList.remove('is-valid');
                campos.tipo = false;
            }
            break;
        case "talla":
            if ((e.target.value != 0)) {
                console.log('bien')
                document.querySelector('.talla').classList.add('is-valid');
                document.querySelector('.talla').classList.remove('is-invalid');
                campos.talla = true;
            } else {
                console.log('mal')
                document.querySelector('.talla').classList.add('is-invalid');
                document.querySelector('.talla').classList.remove('is-valid');
                campos.talla = false;
            }
            break;
        case "cantidad":
            if (expresiones.cantidad.test(e.target.value)) {
    
                document.querySelector('.cantidad').classList.add('is-valid');
                document.querySelector('.cantidad').classList.remove('is-invalid');
                campos.cantidad = true;
            } else {
    
                document.querySelector('.cantidad').classList.add('is-invalid');
                document.querySelector('.cantidad').classList.remove('is-valid');
                campos.cantidad = false;
            }
            break;
  
        case "categoria":
            if ((e.target.value != 0)) {

                document.querySelector('.categoria').classList.add('is-valid');
                document.querySelector('.categoria').classList.remove('is-invalid');
                campos.categoria = true;
            } else {

                document.querySelector('.categoria').classList.add('is-invalid');
                document.querySelector('.categoria').classList.remove('is-valid');
                campos.categoria = false;
            }
            break;
        case "color":
            if ((e.target.value != 0)) {

                document.querySelector('.color').classList.add('is-valid');
                document.querySelector('.color').classList.remove('is-invalid');
                campos.color = true;
            } else {

                document.querySelector('.color').classList.add('is-invalid');
                document.querySelector('.color').classList.remove('is-valid');
                campos.color = false;
            }
            break;
        case "precio":
            if (expresiones.precio.test(e.target.value)) {

                document.querySelector('.precio').classList.add('is-valid');
                document.querySelector('.precio').classList.remove('is-invalid');
                campos.precio = true;
            } else {

                document.querySelector('.precio').classList.add('is-invalid');
                document.querySelector('.precio').classList.remove('is-valid');
                campos.precio = false;
            }
            break;
   
        case "descripcion":
            if (expresiones.descripcion.test(e.target.value)) {

                document.querySelector('.descripcion').classList.add('is-valid');
                document.querySelector('.descripcion').classList.remove('is-invalid');
                campos.descripcion = true;
            } else {

                document.querySelector('.descripcion').classList.add('is-invalid');
                document.querySelector('.descripcion').classList.remove('is-valid');
                campos.descripcion = false;
            }
            break;
    }

}

inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})//inputs

select.forEach(function(input){
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    
})
const validarImagen=function(img){
if ((img.src)) {
    document.querySelector('.imagen').classList.add('is-valid');
    document.querySelector('.imagen').classList.remove('is-invalid');
    campos.imagen = true;
} else {
    document.querySelector('.imagen').classList.add('is-invalid');
    document.querySelector('.imagen').classList.remove('is-valid');
    campos.imagen = false;
}
}
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dehvodgm2', 
    uploadPreset: 'Areli123',

    
}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        img.src = result.info.secure_url;
        validarImagen(img);
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);
  

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
   
    if (campos.id && campos.tipo && campos.nombre && campos.categoria && campos.talla && campos.precio  && campos.descripcion && campos.color && campos.imagen &&campos.cantidad) {
               
        let nombre = document.getElementById('validationCustom00').value;
        let id = document.getElementById('validationCustom01').value;
        let tipo = document.getElementById('validationCustom02').value;
        let talla = document.getElementById('validationCustom03');
        let talla1 = talla.options[talla.selectedIndex].text;
        let cantidad = document.getElementById('validationCustom04').value;
        let color = document.getElementById('validationCustom06');
        let color1= color.options[color.selectedIndex].text;//
        let precio = document.getElementById('validationCustom07').value;
        let categoria = document.getElementById('validationCustom05');
        let categoria1 = categoria.options[categoria.selectedIndex].text;
        let descripcion = document.querySelector('.descripcion').value;

        let newProducto = {
                nombre:`${nombre}`,
                id: `${id}`,
                tipo: `${tipo}`,
                talla: `${talla1}`,
                cantidad: `${cantidad}`,
                color: `${color1}`,
                precio: `${precio}`,
                categoria: `${categoria1}`,
                descripcion:`${descripcion}`,
                imagen:img.src
            }; 

        if (!(localStorage.getItem('product'))){
            let primerArreglo=[newProducto];
            let productoJSON = JSON.stringify(primerArreglo)
            localStorage.setItem('product',productoJSON);
        }
        else{
            let arregloProductos= JSON.parse(localStorage.getItem('product'));
            arregloProductos.push(newProducto)
            localStorage.setItem('product', JSON.stringify(arregloProductos))
        }
           let product ;
           product= localStorage.getItem('product');///ver si es necesario
    
        formulario.reset();
        alerta.innerHTML = ``
        correct.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
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
        
        <div class="alert alert-dark d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          Guardado.
        </div>
      </div>`

    } else {
        correct.innerHTML = ``
        let alert = document.querySelector('.alert')
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
            Debes llenar todos los campos.
        </div>
      </div>`

     
    }
})//listennerFormulario








