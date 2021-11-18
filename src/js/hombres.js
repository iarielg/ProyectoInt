function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.img + ' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title">' + item.name + '</h5>\n' +
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

addItem({
    'tipo': 'playera',
    'name': 'MODELO 1',
    //'description': 'Anfg',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #1

addItem({
    'tipo': 'playera',
    'name': 'MODELO 2',
    //'description': 'Animación 2',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'playera',
    'name': 'MODELO 3',
    //'description': 'Animación 3',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'playera',
    'name': 'MODELO 4',
    //'description': 'Animación 4',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #4

addItem({
    'tipo': 'playera',
    'name': 'MODELO 5',
    //'description': 'Animación 5',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #5

addItem({
    'tipo': 'playera',
    'name': 'MODELO 6',
    //'description': 'Animación 6',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #6

addItem({
    'tipo': 'playera',
    'name': 'MODELO 7',
    //'description': 'Animación 7',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'playera',
    'name': 'MODELO 8',
    //'description': 'Animación 8',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #8

addItem({
    'tipo': 'playera',
    'name': 'MODELO 9',
    //'description': 'Animación 9',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #9

addItem({
    'tipo': 'playera',
    'name': 'MODELO 10',
    //'description': 'Animación 10',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #10

addItem({
    'tipo': 'playera',
    'name': 'MODELO 11',
    //'description': 'Animación 11',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #11

addItem({
    'tipo': 'playera',
    'name': 'MODELO 12',
    //'description': 'Animación 12',
    'img': './../src/img/hombres.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': '5',
    'genero': 'M'
}); // item #12