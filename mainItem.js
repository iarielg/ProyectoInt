function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="'+item.img +' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body">\n' + 
        '<h5 class="card-title">'+item.name+'</h5>\n' +
        '<h5 class="card-title">'+'Descripcion: '+item.description+'</h5>\n' +
        '<p>'+ 'Precio: '+item.precio+'</p>'+
        '<p>'+'Color: '+item.color+'</p>'+
        '<a href="#" class="btn btn-primary">Add</a>\n' +
        '</div>'; 

        const itemsContainer = document.getElementById("list-items");
        itemsContainer.innerHTML += itemHTML;     
    } // Objeto para Item

addItem({'tipo': 'playera',
    'name':'MODELO 1',
    'description':'Animación 1',
    'img':'./src/Playeras img/m3.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #1

addItem({'tipo': 'playera',
    'name':'MODELO 2',
    'description':'Animación 2',
    'img':'./src/Playeras img/m2.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #2

addItem({'tipo': 'playera',
    'name':'MODELO 3',
    'description':'Animación 3',
    'img':'./src/Playeras img/m1.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #3

addItem({'tipo': 'playera',
    'name':'MODELO 4',
    'description':'Animación 4',
    'img':'./src/Playeras img/m4.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #4

addItem({'tipo': 'playera',
    'name':'MODELO 5',
    'description':'Animación 5',
    'img':'./src/Playeras img/m1.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #5

addItem({'tipo': 'playera',
    'name':'MODELO 6',
    'description':'Animación 6',
    'img':'./src/Playeras img/m1.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #6

addItem({'tipo': 'playera',
    'name':'MODELO 7',
    'description':'Animación 7',
    'img':'./src/Playeras img/m1.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #7

addItem({'tipo': 'playera',
    'name':'MODELO 8',
    'description':'Animación 8',
    'img':'./src/Playeras img/m1.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #8

addItem({'tipo': 'playera',
    'name':'MODELO 9',
    'description':'Animación 9',
    'img':'./src/Playeras img/m1.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #9

addItem({'tipo': 'playera',
    'name':'MODELO 10',
    'description':'Animación 10',
    'img':'./src/Playeras img/m1.jpg',   
    'color':'Negro',
    'talla':'M',
    'precio':'5',
    'genero':'M'}); // item #10