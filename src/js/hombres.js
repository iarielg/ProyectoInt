function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.imagen + ' " class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title" id="title-card">' + item.nombre + '</h5>\n' +
        //'<h6 class="card-title">' + 'Descripción: ' + item.description + '</h6>\n' +
        '<p class="card-precio">' + 'Precio: $' + item.precio + '</p>' +
        //'<p>' + 'Color: ' + item.color + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark" id="clickButon" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
        '</div>\n' +
        '<br/>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
} // Objeto para Item


let productoJSON= localStorage.getItem('product');

let myJSON= JSON.parse(productoJSON);


addItem({
    nombre:'Estilo gris',
    tipo: 'playera',
    talla: 'M',
    precio:  '290',
    imagen: 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975550/neverdiesco/hombres/Playera12_vw2hjm.jpg'
}); // item #1

addItem({
    'tipo': 'playera',
    'nombre': 'Cráneo',
    //'description': 'Animación 2',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975550/neverdiesco/hombres/Playera23_lefgrv.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '290',
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'playera',
    'nombre': 'Navidad',
    //'description': 'Animación 3',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975550/neverdiesco/hombres/Playera100_texmez.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '390',
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'playera',
    'nombre': 'Iluminación',
    //'description': 'Animación 4',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975548/neverdiesco/hombres/Playera15_hylfok.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '410',
    'genero': 'M'
}); // item #4


// for(i=0;i<myJSON.length;i++){
//     console.log(myJSON[i])

//     //let categoria= JSON.parse(localStorage.getItem('categoria'));
//     if(myJSON[i].categoria=="HOMBRE"){
//     addItem(myJSON[i]);}
// }
/*
addItem({
    'tipo': 'playera',
    'name': 'Gran Elfo',
    //'description': 'Animación 6',
    'img': './../src/img/Hombres/Playera6.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '380',
    'genero': 'M'
}); // item #6

addItem({
    'tipo': 'playera',
    'name': 'Clásico Never Dies',
    //'description': 'Animación 7',
    'img': './../src/img/Hombres/Playera7.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '230',
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'playera',
    'name': 'Rosas Dark',
    //'description': 'Animación 8',
    'img': './../src/img/Hombres/Playera8.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '250',
    'genero': 'M'
}); // item #8

addItem({
    'tipo': 'playera',
    'name': 'Día de Muertos',
    //'description': 'Animación 9',
    'img': './../src/img/Hombres/Playera9.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '360',
    'genero': 'M'
}); // item #9

addItem({
    'tipo': 'playera',
    'name': 'Alien',
    //'description': 'Animación 10',
    'img': './../src/img/Hombres/Playera10.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '370',
    'genero': 'M'
}); // item #10

addItem({
    'tipo': 'playera',
    'name': 'Buda',
    //'description': 'Animación 11',
    'img': './../src/img/Hombres/Playera11.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #11

addItem({
    'tipo': 'playera',
    'name': 'Tentáculos',
    //'description': 'Animación 12',
    'img': './../src/img/Hombres/Playera12.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '380',
    'genero': 'M'
}); // item #12
/*
addItem({
    'tipo': 'playera',
    'name': 'MODELO 12',
    //'description': 'Animación 12',
    'img': './../src/img/Hombres/Playera13.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '350',
    'genero': 'M'
}); // item #12
*//*
addItem({
    'tipo': 'playera',
    'name': 'Inspiración',
    //'description': 'Animación 12',
    'img': './../src/img/Hombres/Playera14.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '220',
    'genero': 'M'
}); // item #12

addItem({
    'tipo': 'playera',
    'name': 'Doble Serpiente',
    //'description': 'Animación 12',
    'img': './../src/img/Hombres/Playera15.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #12*/


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
