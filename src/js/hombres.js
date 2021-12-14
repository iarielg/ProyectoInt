fetch('http://127.0.0.1:8080/api/productos/')
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        data.forEach(item => addItem(item,item.id));
        console.log(data[1].imagen.src);
    })

function addItem(item,id) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.imagen + ' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title" id="title-card">' + item.nombre + '</h5>\n' +
        // '<h6 class="card-title">' + 'Descripción: ' + item.descripcion + '</h6>\n' +
        '<p class="card-precio" name="'+ id +'">' + 'Precio: $' + item.precio + '</p>'+ 
        // +'<p>' + 'id: ' +'<label class="card-i">'+ id +'</label>' + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark" id="Carrito"><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
        '</div>\n' +
        '<br/>';

        //  data-bs-toggle="modal" data-bs-target="#ventanaModal" modal

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;


} // Objeto para Item

/*
let productoJSON= localStorage.getItem('product');

let myJSON= JSON.parse(productoJSON);*/
/*
for(let i=0;i<myJSON.length;i++){
  
    if(myJSON[i].categoria=="HOMBRE"){
     addItem(myJSON[i],myJSON[i].id);
    
    }
}
*/

const clickButton = document.getElementById('Carrito');
// let tbody = document.querySelector('.carrito');

clickButton.forEach(btn => {
    btn.addEventListener('click',addIdProducto)
})

function addIdProducto(e) {
    console.log(e.target)
    if(!localStorage.getItem('usuarioLogeado')){//validacion de estar logeado
        console.log("logeate");
        const alert = document.getElementById('alert')

        setTimeout( function(){
          alert.classList.add('hide')
        }, 2000)
          alert.classList.remove('hide')
    }
    else{///agregar informacion del evento y objeto
    const button = e.target;
    const item = button.closest('.card')
    const id1 = item.querySelector('.card-precio').name
    const id= id1.textContent
    console.log("id1:"+id1)
    console.log("id:"+id)
    const memoria=data// copio el arreglo de mis productos
    const nuevoProducto = memoria.find(producto=> { 
        //si son iguales retorna el objeto nuevo
        if (producto.id == id ){
            return producto;
        }
    });
    addToCarrito(nuevoProducto,id);}
}
function usuarioExistente(producto,carrito,id) {
 let valor=1;
for(let i=0;i<carrito.length;i++)///si el producto ya existe en el carrito
{
    if (id==carrito[i].id){
        valor=carrito[i].cantidad+1
        carrito.splice(i,1)
        //producto.cantidad=valor+1;
        //carrito.push(producto)
        break;
    }
}
producto.cantidad=valor;
carrito.push(producto)

localStorage.setItem('carrito',JSON.stringify(carrito))
}
function addToCarrito(nuevoProducto,id) {
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
        usuarioExistente(nuevoProducto,carrito,id)
        
    }
 
}
