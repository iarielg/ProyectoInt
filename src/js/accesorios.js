function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.imagen + ' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title">' + item.nombre + '</h5>\n' +
        //'<h6 class="card-title">' + 'Descripción: ' + item.description + '</h6>\n' +
        '<p class="card-precio">' + 'Precio: $' + item.precio + '</p>' +
        //'<p>' + 'Color: ' + item.color + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark" id="clickButon"><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
        '</div>\n' +
        '<br/>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
} // Objeto para Item

addItem({
    'tipo': 'accesorio',
    'nombre': 'Gorro Jabalí',
    //'description': 'Anfg',
    'imagen': './../src/img/Accesorios/Accesorios1.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '120',
    'genero': 'M'
}); // item #1

addItem({
    'tipo': 'accesorio',
    'nombre': 'Stickers Never Dies',
    //'description': 'Animación 7',
    'imagen': './../src/img/Accesorios/Accesorios7.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '20',
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'accesorio',
    'nombre': 'Mochila Dark',
    //'description': 'Animación 8',
    'imagen': './../src/img/Accesorios/Accesorios8.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '280',
    'genero': 'M'
}); // item #8

addItem({
    'tipo': 'accesorio',
    'nombre': 'Lentes Neves Dies',
    //'description': 'Animación 2',
    'imagen': './../src/img/Accesorios/Accesorios.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'accesorio',
    'nombre': 'Gorra Azul NDS',
    //'description': 'Animación 3',
    'imagen': './../src/img/Accesorios/Accesorios3.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'accesorio',
    'nombre': 'Bebé Never Dies',
    //'description': 'Animación 4',
    'imagen': './../src/img/Accesorios/Accesorios4.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '160',
    'genero': 'M'
}); // item #4

addItem({
    'tipo': 'accesorio',
    'nombre': 'Gorra Negra NDS',
    //'description': 'Animación 5',
    'imagen': './../src/img/Accesorios/Accesorios5.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '180',
    'genero': 'M'
}); // item #5

addItem({
    'tipo': 'accesorio',
    'nombre': 'Gorra Beso Azul',
    //'description': 'Animación 6',
    'imagen': './../src/img/Accesorios/Accesorios6.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '140',
    'genero': 'M'
}); // item #6

let productoJSON= localStorage.getItem('product');

let myJSON= JSON.parse(productoJSON);


for(i=0;i<myJSON.length;i++){
    
    if(myJSON[i].categoria=="ACCESORIOS"){
     addItem(myJSON[i]);}
}

const clickButton = document.querySelectorAll('#clickButon');
// let tbody = document.querySelector('.carrito');

clickButton.forEach(btn => {
    btn.addEventListener('click',addToCarritoItem)
})

function addToCarritoItem(e) {

    // let agregar_carrito = document.getElementById('agregar-carrito');
    // agregar_carrito.addEventListener('click', addCarrito)


    const button = e.target;
    const item = button.closest('.card')
    const itemTittle = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.card-precio').textContent;
    const itemImage = item.querySelector('.card-img-top').src;
    
    const newItem = {
        'title': `${itemTittle}`,
        'precio': `${itemPrecio}`,
        'image': `${itemImage}`,
        'cantidad': `${1}`,    
    }

    let productos = window.localStorage.getItem('productos');
    let carrito;
    if(!productos){
        carrito = [
            // {"nombre":"tu carrito esta vacio"}
        ];
        localStorage.setItem('productos',JSON.stringify(carrito))
    }else{
        carrito = JSON.parse(productos);
        console.log(carrito)
    }
    
    console.log(carrito)

    addItemCarrito(carrito,newItem);
}

function addItemCarrito(arregloProducto, objproducto) {

    const alert = document.querySelector('.alert')

    setTimeout( function(){
      alert.classList.add('hide')
    }, 2000)
      alert.classList.remove('hide')

console.log(arregloProducto)
        if(objproducto.title && objproducto.precio && objproducto.image && objproducto.cantida){
            return objproducto
        }

       arregloProducto.push(objproducto)
       console.log(arregloProducto)
       localStorage.setItem('productos',JSON.stringify(arregloProducto))
 
}
