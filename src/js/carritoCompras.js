
    let productos = window.localStorage.getItem('carrito');
console.log(productos)
let carrito;
if (!productos) {
    carrito = [];
    //localStorage.setItem('productos', JSON.stringify(carrito))
} else {
    carrito = JSON.parse(productos)
    console.log(carrito)
    for(let i=0; i<carrito.length;i++){
    renderCarrito(carrito[i],carrito)
    }

}



function renderCarrito(carrito,carritoCompleto) {
    let tbody = document.querySelector('.tbody');
    //tbody.innerHTML = ``
        const tr = document.createElement('tr');
        tr.classList.add('itemCarrito');
        let precio=Number(carrito.precio);
        var sumaPrecio =precio*carrito.cantidad;
        console.log(sumaPrecio)
        const content = `<tr>
        <th scope="col"><img src="`+ carrito.imagen +`"alt="<`+ carrito.nombre +`"></th>
         <td class=" fw-bold pt-5 title">${carrito.nombre}</td>
         <td class=" fw-bold pt-5 title">${precio}</td>
         <td>
            <div class="cantidad-producto ">
            <input type="number" min="1" value=${carrito.cantidad} id="${carrito.nombre}"  class="input_elemento">
            <td class=" fw-bold pt-5 title">${sumaPrecio}</td>
             </div>
         </td>
         <td><i class="delete fas fa-trash-alt icon" title="${carrito.nombre}"></i></td>
     </tr>
     `
        tr.innerHTML = content;
        tbody.appendChild(tr);

        tr.querySelector('.delete').addEventListener('click', removeItemCarrito);
        tr.querySelector('.input_elemento').addEventListener('change', sumaCantidad);
        // tr.querySelector('.incremento').addEventListener('click', sumaCantidad);

    
    carritoTotal(carritoCompleto)
}

function carritoTotal(carritoCompleto) {
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carritoCompleto.forEach(item => {
        let precio=Number(item.precio);
        console.log(item.precio)
        console.log(item.cantidad)

       Total = Total + precio * item.cantidad
        console.log(Total)
    })
    itemCartTotal.innerHTML = `Total $ ${Total} MXN`
    console.log(itemCartTotal)

}

function removeItemCarrito(e) {
    const buttonDelete = e.target
    console.log(buttonDelete.title);
    let nombre= buttonDelete.title;
    let carrito=JSON.parse(localStorage.getItem('carrito'));
    for(let i=0;i<carrito.length;i++)///si el producto ya existe en el carrito
    {
        if (nombre==carrito[i].nombre){
            carrito.splice(i,1)
            //producto.cantidad=valor+1;
            //carrito.push(producto)
            break;
        }
    }
    localStorage.setItem('carrito',JSON.stringify(carrito))
    location.reload();
}

function sumaCantidad(e) {

    const sumaInput = e.target
    const nombre = sumaInput.id
    let memoria=JSON.parse(localStorage.getItem('carrito'));
    const productoActualizado = memoria.find(producto=> { 
        //si son iguales retorna el objeto nuevo
        if (producto.nombre == nombre ){
            producto.cantidad=sumaInput.value;
            return producto;
        }
    });
    usuarioExistente(productoActualizado,memoria,nombre)
    carritoTotal(memoria)
    location.reload();

}


function usuarioExistente(producto,carrito,nombre) {
   for(let i=0;i<carrito.length;i++)///si el producto ya existe en el carrito
   {
       if (nombre==carrito[i].nombre){
           carrito.splice(i,1)
           //producto.cantidad=valor+1;
           //carrito.push(producto)
           break;
       }
   }
   carrito.push(producto)
   
   localStorage.setItem('carrito',JSON.stringify(carrito))
   }


let comprar = document.querySelector('.comprar')
comprar.addEventListener('click', removeCarrio)


function removeCarrio(e) {
    // Swal.fire({
    //     position: 'top-center',
    //     icon: 'success',
    //     title: '¡Gracias por tu compra!',
    //     showConfirmButton: false,
    //     timer: 2500
    //   })
      
    localStorage.removeItem('productos');

    carrito.forEach(product=>{
        localStorage.removeItem('carrito')
        product.remove
    }) 

    if(carrito.length == 0){
        console.log('no tienes producto')
    }
}


    let seguirComparndo = document.querySelector('.seguir-comprando')
    seguirComparndo.addEventListener('click', function(){
        window.location.href="./../index.html"
    })
