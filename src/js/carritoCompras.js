
    let productos = window.localStorage.getItem('carrito');
    console.log(productos)///////////CARRITO.JS
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
            let precio=Number(carrito.precio.replace("Precio: $", ''));
            var sumaPrecio =precio*carrito.cantidad;
            console.log(sumaPrecio)
            const content = `<tr>
            <th scope="col"><img src="`+ carrito.imagen +`"alt="<`+ carrito.nombre +`"></th>
             <td class=" fw-bold pt-5 title">${carrito.nombre}</td>
             <td class=" fw-bold pt-5 title">${precio}</td>
             <td>
                <div class="cantidad-producto ">
                <input type="number" min="1" value=${carrito.cantidad} id="${carrito.id}"  class="input_elemento">
                <td class=" fw-bold pt-5 title">${sumaPrecio}</td>
                 </div>
             </td>
             <td><i class="delete fas fa-trash-alt icon" title="${carrito.id}"></i></td>
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
            let precio=Number(item.precio.replace("Precio: $", ''));
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
        let id= buttonDelete.title;
        let carrito=JSON.parse(localStorage.getItem('carrito'));
        for(let i=0;i<carrito.length;i++)///si el producto ya existe en el carrito
        {
            if (id==carrito[i].id){
                carrito.splice(i,1)
                //producto.cantidad=valor+1;
                //carrito.push(producto)
                break;
            }
        }
        localStorage.setItem('carrito',JSON.stringify(carrito))
        location.reload();
        /*tr.remove()
        const title = tr.querySelector('.title').textContent
        for (let index = 0; index < carrito.length; index++) {
            if (carrito[index].title.trim() === title.trim()) {
                carrito.splice(index, 1)
                localStorage.removeItem('productos' [index])
            }
    
        }
    
        const alert = document.querySelector('.remove')
    
        setTimeout(function () {
            alert.classList.add('remove')
        }, 2000)
        alert.classList.remove('remove')
    
        tr.remove
        carritoTotal()*/
    }
    
    function sumaCantidad(e) {
    
        const sumaInput = e.target
        const id = sumaInput.id
        let memoria=JSON.parse(localStorage.getItem('carrito'));
        const productoActualizado = memoria.find(producto=> { 
            //si son iguales retorna el objeto nuevo
            if (producto.id == id ){
                producto.cantidad=sumaInput.value;
                return producto;
            }
        });
        usuarioExistente(productoActualizado,memoria,id)
        carritoTotal(memoria)
        location.reload();
        /*const tr = sumaInput.closest('.itemCarrito')
        const title = tr.querySelector('.title').textContent;
        carrito.forEach(item => {
            if (item.title.trim() === title) {
                sumaInput.value < 1 ? (sumaInput.value == 1) : sumaInput.value;
                item.cantidad = sumaInput.value;
                carritoTotal()
            }
        })*/
    }
    
    
    function usuarioExistente(producto,carrito,id) {
       for(let i=0;i<carrito.length;i++)///si el producto ya existe en el carrito
       {
           if (id==carrito[i].id){
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
    
    /*
    
    let productos = window.localStorage.getItem('carrito');
    
    console.log(productos)
    let carrito;
    carrito = JSON.parse(productos)
        console.log(carrito)
    
    for(let i=0;i<carrito.length;i++){
        var item=carrito[i];
        let sumaPrecio =(Number(item.precio.replace("Precio: $", '')))*cantidad;
         renderCarrito(carrito[i],sumaPrecio);
        
        }
    }
    
    function renderCarrito(carrito,precio) {
        let tbody = document.querySelector('.tbody');
        tbody.innerHTML = ``
        carrito.map(pedido => {
            const tr = document.createElement('tr');
            tr.classList.add('itemCarrito');
            const content = `<tr>
            <th scope="col"><img src="${pedido.image}"alt="${pedido.title}"></th>
             <td class=" fw-bold pt-5 title">${pedido.title}</td>
             <td class=" fw-bold pt-5 title">${sumaPrecio}</td>
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
    
            const precio = sumaPrecio
           Total = Total + precio * item.cantidad
            console.log(Total)
        })
        itemCartTotal.innerHTML = `Total ${Total} MXN`
        console.log(itemCartTotal)
    
    }
    
    function removeItemCarrito(e) {
        const buttonDelete = e.target
        const tr = buttonDelete.closest('.itemCarrito')
        tr.remove()
        const title = tr.querySelector('.title').textContent
        for (let index = 0; index < carrito.length; index++) {
            if (carrito[index].title.trim() === title.trim()) {
                carrito.splice(index, 1)
                localStorage.removeItem('productos' [index])
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
        // Swal.fire({
        //     position: 'top-center',
        //     icon: 'success',
        //     title: '¡Gracias por tu compra!',
        //     showConfirmButton: false,
        //     timer: 2500
        //   })
          
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
    
    
    
    
    