function addItem(item) {
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
    nombre:'Gran Elfo',
    tipo: 'playera',
    talla: 'M',
    precio:  '290',
    imagen: 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975542/neverdiesco/hombres/Playera6_h1f4u8.jpg'
}); // item #1

addItem({
    'tipo': 'playera',
    'nombre': 'Clásico NeverDies',
    //'description': 'Animación 2',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975543/neverdiesco/hombres/Playera7_dyoq5o.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '290',
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'playera',
    'nombre': 'Navidad',
    //'description': 'Animación 3',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975541/neverdiesco/hombres/Playera3_pk6oyp.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '390',
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'playera',
    'nombre': 'Cráneos',
    //'description': 'Animación 4',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975543/neverdiesco/hombres/Playera2_ntvlr6.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '410',
    'genero': 'M'
}); // item #4


for(i=0;i<myJSON.length;i++){
    console.log(myJSON[i])

    //let categoria= JSON.parse(localStorage.getItem('categoria'));
    if(myJSON[i].categoria=="HOMBRE"){
    addItem(myJSON[i]);}
}

addItem({
    'tipo': 'playera',
    'name': 'Gran Elfo',
    //'description': 'Animación 6',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975542/neverdiesco/hombres/Playera6_h1f4u8.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '380',
    'genero': 'M'
}); // item #6

addItem({
    'tipo': 'playera',
    'name': 'Clásico Never Dies',
    //'description': 'Animación 7',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975543/neverdiesco/hombres/Playera7_dyoq5o.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '230',
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'playera',
    'name': 'Rosas Dark',
    //'description': 'Animación 8',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975545/neverdiesco/hombres/Playera8_llucaa.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '250',
    'genero': 'M'
}); // item #8

addItem({
    'tipo': 'playera',
    'name': 'Día de Muertos',
    //'description': 'Animación 9',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975545/neverdiesco/hombres/Playera9_qmfrji.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '360',
    'genero': 'M'
}); // item #9

addItem({
    'tipo': 'playera',
    'name': 'Alien',
    //'description': 'Animación 10',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975544/neverdiesco/hombres/Playera10_wkdvdq.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '370',
    'genero': 'M'
}); // item #10

addItem({
    'tipo': 'playera',
    'name': 'Buda',
    //'description': 'Animación 11',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975544/neverdiesco/hombres/Playera11_j6jw5a.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #11

addItem({
    'tipo': 'playera',
    'name': 'Tentáculos',
    //'description': 'Animación 12',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975549/neverdiesco/hombres/Playera13_p0puvf.png',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '380',
    'genero': 'M'
}); // item #12

addItem({
    'tipo': 'playera',
    'name': 'MODELO 12',
    //'description': 'Animación 12',
    'imagen': 'https://res.cloudinary.com/dehvodgm2/image/upload/v1638975547/neverdiesco/hombres/Playera21_jo4wgr.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '350',
    'genero': 'M'
}); // item #12
//*
addItem({
    'tipo': 'playera',
    'name': 'Inspiración',
    //'description': 'Animación 12',
    'imagen': './../src/img/Hombres/Playera14.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '220',
    'genero': 'M'
}); // item #12

addItem({
    'tipo': 'playera',
    'name': 'Doble Serpiente',
    //'description': 'Animación 12',
    'imagen': './../src/img/Hombres/Playera15.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '320',
    'genero': 'M'
}); // item #12