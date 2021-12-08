
let productos = window.localStorage.getItem('productos');

let carrito;
if (!productos) {
    carrito = [];
    localStorage.setItem('productos', JSON.stringify(carrito))
} else {
    carrito = JSON.parse(productos)
    console.log(carrito)
    renderCarrito(carrito)

}


function renderCarrito(carrito) {
    let tbody = document.querySelector('.tbody');
    tbody.innerHTML = ``
    carrito.map(pedido => {
        const tr = document.createElement('tr');
        tr.classList.add('itemCarrito');

        const content = `<tr>
        <th scope="col"><img src="${pedido.image}"alt="${pedido.title}"></th>
         <td class=" fw-bold pt-5 title">${pedido.title}</td>
         <td class=" fw-bold pt-5 title">${pedido.precio} MXN</td>
         <td>
            <div class="cantidad-producto ">
            <input type="number" min="1" value=${pedido.cantidad} class="input_elemento">
             </div>
         </td>
         <td><i class="delete fas fa-trash-alt icon"></i></td>
     </tr>
     `
        tr.innerHTML = content;
        tbody.appendChild(tr);

        tr.querySelector('.delete').addEventListener('click', removeItemCarrito);
        tr.querySelector('.input_elemento').addEventListener('click', sumaCantidad);
        // tr.querySelector('.incremento').addEventListener('click', sumaCantidad);

    });
    carritoTotal()
}

function carritoTotal() {
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach(item => {
        console.log(item.precio)
        console.log(item.cantidad)

        const precio = Number(item.precio.replace("Precio: $", ''))
        Total = Total + precio * item.cantidad
    })
    itemCartTotal.innerHTML = `Total ${Total} MXN`

}

function removeItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest('.itemCarrito')
    tr.remove()
    const title = tr.querySelector('.title').textContent
    for (let index = 0; index < carrito.length; index++) {
        if (carrito[index].title.trim() === title.trim()) {
            carrito.splice(index, 1)
        }

    }

    const alert = document.querySelector('.remove')

    setTimeout(function () {
        alert.classList.add('remove')
    }, 2000)
    alert.classList.remove('remove')

    tr.remove
    carritoTotal()
}

function sumaCantidad(e) {
    const sumaInput = e.target
    const tr = sumaInput.closest('.itemCarrito')
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if (item.title.trim() === title) {
            sumaInput.value < 1 ? (sumaInput.value == 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })
}


let comprar = document.querySelector('.comprar')
comprar.addEventListener('click', removeCarrio)


function removeCarrio(e) {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: '¡Gracias por tu compra!',
        showConfirmButton: false,
        timer: 1500
      })
    localStorage.removeItem('productos');

    carrito.forEach(product=>{
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









// function objStorage() {
//     let productos = window.localStorage.getItem('productos');
//     console.log(productos)
//     //***ocultar el boton de pagar */
//     let carrito;
//     if (!productos) {
//         carrito = [];
//         localStorage.setItem('productos', JSON.stringify(carrito))
//     } else {
//         carrito = JSON.parse(productos)
//         renderCarrito(carrito)
//     }
// }

