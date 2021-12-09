/*function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.imagen + ' " class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title">' + item.nombre + '</h5>\n' +
        //'<h6 class="card-title">' + 'Descripción: ' + item.description + '</h6>\n' +
        '<p>' + 'Precio: $' + item.precio + '</p>' +
        //'<p>' + 'Color: ' + item.color + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark" data-bs-toggle="modal" data-bs-target="#ventanaModal"><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
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
    imagen: 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975631/neverdiesco/mujeres/MPlayera110_ddtybt.jpg'
}); // item #1

addItem({
    'tipo': 'playera',
    'nombre': 'Cráneo',
    //'description': 'Animación 2',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975630/neverdiesco/mujeres/MPlayera108_vjcey7.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '290',
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'playera',
    'nombre': 'Navidad',
    //'description': 'Animación 3',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975630/neverdiesco/mujeres/MPlayera27_pwqxoa.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '390',
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'playera',
    'nombre': 'Iluminación',
    //'description': 'Animación 4',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975629/neverdiesco/mujeres/MPlayera111_hretfe.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '410',
    'genero': 'M'
}); // item #4


for(i=0;i<myJSON.length;i++){
    console.log(myJSON[i])
    if(myJSON[i].categoria=="MUJER"){
    addItem(myJSON[i]);}
}
*/function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.img + ' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title" id="title-card">' + item.name + '</h5>\n' +
        //'<h6 class="card-title">' + 'Descripción: ' + item.description + '</h6>\n' +
        '<p class="card-precio">' + 'Precio: $' + item.precio  + '</p>' +
        //'<p>' + 'Color: ' + item.color + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark" id="clickButon"><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
        '</div>\n' +
        '<br/>';

        //  data-bs-toggle="modal" data-bs-target="#ventanaModal" modal

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;


} // Objeto para Item

addItem({
    'tipo': 'playera',
    'name': 'Gran Navidad',
    //'description': 'Anfg',
    'img': './../src/img/Mujeres/MPlayera100.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 360,
    'genero': 'M'
}); // item #1

addItem({
    'tipo': 'playera',
    'name': 'Estilo Never',
    //'description': 'Animación 2',
    'img': './../src/img/Mujeres/MPlayera109.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 340,
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'playera',
    'name': 'Lobo',
    //'description': 'Animación 3',
    'img': './../src/img/Mujeres/MPlayera102.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 320,
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'playera',
    'name': 'Lobo Anillado',
    //'description': 'Animación 4',
    'img': './../src/img/Mujeres/MPlayera103.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 320,
    'genero': 'M'
}); // item #4

addItem({
    'tipo': 'playera',
    'name': 'Mishi Negro',
    //'description': 'Animación 5',
    'img': './../src/img/Mujeres/MPlayera104.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 420,
    'genero': 'M'
}); // item #5

addItem({
    'tipo': 'playera',
    'name': 'Cráneos Blancos',
    //'description': 'Animación 6',
    'img': './../src/img/Mujeres/MPlayera105.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 290,
    'genero': 'M'
}); // item #6

addItem({
    'tipo': 'playera',
    'name': 'Vestido Inverso',
    //'description': 'Animación 7',
    'img': './../src/img/Mujeres/MPlayera106.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 480,
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'playera',
    'name': 'Bastardo Rosa',
    //'description': 'Animación 8',
    'img': './../src/img/Mujeres/MPlayera107.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 360,
    'genero': 'M'
}); // item #8

addItem({
    'tipo': 'playera',
    'name': 'Defensor',
    //'description': 'Animación 9',
    'img': './../src/img/Mujeres/MPlayera108.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 370,
    'genero': 'M'
}); // item #9

addItem({
    'tipo': 'playera',
    'name': 'Navidad Roja',
    //'description': 'Animación 10',
    'img': './../src/img/Mujeres/MPlayera112.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 360,
    'genero': 'M'
}); // item #10

addItem({
    'tipo': 'playera',
    'name': 'Bosque negro',
    //'description': 'Animación 11',
    'img': './../src/img/Mujeres/MPlayera110.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 320,
    'genero': 'M'
}); // item #11

addItem({
    'tipo': 'playera',
    'name': 'Bastardo Rosa/Manga corta',
    //'description': 'Animación 12',
    'img': './../src/img/Mujeres/MPlayera111.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 360,
    'genero': 'M'
}); // item #12

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


