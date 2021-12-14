let i=0;
var boton=[];
var dato1;
async function promesaFetch(){
    await fetch('http://127.0.0.1:8080/api/mujeres/')
    .then(Response => Response.json())
       .then(data => { 
        datos(data)
         dato1 = data;
       // console.log("holo10")
        console.log(boton)
       }).catch(console.log("error"))
       console.log("1")
    return
}

window.addEventListener("load",promesaFetch);

window.addEventListener("click",addIdProducto);


function addItem(item) {
        const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.imagen + ' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title" id="title-card">' + item.nombre + '</h5>\n' +
        // '<h6 class="card-title">' + 'Descripción: ' + item.descripcion + '</h6>\n' +
        '<p class="card-precio">' + 'Precio: $' + item.precio + '</p>' + 
        //'<p>' + 'id: ' +'<label class="card-i">'+ id +'</label>' + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark boton1" id="'+item.nombre +'" name="boton"><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
        '</div>\n' +
        '<br/>';

        //  data-bs-toggle="modal" data-bs-target="#ventanaModal" modal

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
 


} // Objeto para Item

function datos(myJSON){

//let myJSON= JSON.parse(datos);

    myJSON.forEach(item => {
        addItem(item);
        var buton1=document.getElementById(item.nombre)
        
         if(boton.length>0){
         boton.push(buton1)}
          else{
        boton= [buton1]
    }  
   // console.log(buton1)
    });
  //  console.log(boton)
//return boton;
}
///////////AGREGAR A CARRITO
function addIdProducto(e) {
    if(e.target.type=="button"){
        if(!localStorage.getItem('usuarioLogeado')){
            console.log("logeate");
            const alert = document.getElementById('alert')

            setTimeout( function(){
            alert.classList.add('hide')
            }, 2000)
            alert.classList.remove('hide')
        }
        else{
        const button = e.target;
        console.log(e.target)
       // const item = button.closest('.card')
        //const id= item.querySelector('.card-i').textContent
        const nombre= button.id
        console.log(nombre)
        const memoria=dato1
        const nuevoProducto = memoria.find(producto=> { 
            //si son iguales retorna el objeto nuevo
            if (producto.nombre == nombre ){
                console.log(producto)
                return producto;
            }
        });
        addToCarrito(nuevoProducto,nombre);}
}}
function productoExistente(producto,carrito,nombre) {
 let valor=1;
for(let i=0;i<carrito.length;i++)///si el producto ya existe en el carrito
{
    if (nombre==carrito[i].nombre){
        valor=carrito[i].cantidad+1
        carrito.splice(i,1)
        console.log(carrito)
       // producto.cantidad=valor+1;
       // carrito.push(producto)

        break;
    }
}
producto.cantidad=valor;
carrito.push(producto)

localStorage.setItem('carrito',JSON.stringify(carrito))
}
function addToCarrito(nuevoProducto,nombre) {
    const alert = document.getElementById('correct')

    setTimeout( function(){
      alert.classList.add('hide')
    }, 2000)
      alert.classList.remove('hide')
    
  if (!(localStorage.getItem('carrito'))){
        nuevoProducto.cantidad=Number(1);
        let carrito=[];
       carrito=[nuevoProducto];
        localStorage.setItem('carrito',JSON.stringify(carrito))
    }
    else{
        let carrito= JSON.parse(localStorage.getItem('carrito'));
        productoExistente(nuevoProducto,carrito,nombre)
        
    }
 
}