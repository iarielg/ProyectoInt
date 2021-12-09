let item;
function addItem(item,id) {
    const itemHTML = '<div class="card" style="width: 18rem;  border: none;">\n' +
        '<img src="' + item.imagen + ' "class="card-img-top" alt="image" style= "height: 300px; width: 250px;" >\n' +
        '<div class="card-body";>\n' +
        '<h5 class="card-title" id="title-card">' + item.nombre + '</h5>\n' +
        //'<h6 class="card-title">' + 'Descripción: ' + item.description + '</h6>\n' +
        '<p class="card-precio">' + 'Precio: $' + item.precio + '</p>'
        +'<p>' + 'id: ' +'<label class="card-i">'+ id +'</label>' + '</p>' +
        //'<a href="#" class="btn btn-dark data-bs-toggle="modal" data-bs-target="#winModal"" ><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</a>\n' +
        '<button type="button" class="content-fluid btn btn-dark" id="clickButon"><i class="bi bi-cart2"></i> AGREGAR AL CARRITO</button>' +
        '</div>\n' +
        '<br/>';

        //  data-bs-toggle="modal" data-bs-target="#ventanaModal" modal

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;


} // Objeto para Item


let productoJSON= localStorage.getItem('product');

let myJSON= JSON.parse(productoJSON);

for(let i=0;i<myJSON.length;i++){
  
    if(myJSON[i].categoria=="MUJER"){
     addItem(myJSON[i],myJSON[i].id);
    
    }
}


const clickButton = document.querySelectorAll('#clickButon');
// let tbody = document.querySelector('.carrito');

clickButton.forEach(btn => {
    btn.addEventListener('click',addIdProducto)
})

function addIdProducto(e) {
    const button = e.target;
    const item = button.closest('.card')
    const id= item.querySelector('.card-i').textContent
    const nuevoProducto = myJSON.find(producto=> { 
        //si son iguales retorna el objeto nuevo
        if (producto.id == id ){
            return producto;
        }
    });
    addToCarrito(nuevoProducto,id);
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
  
    const alert = document.querySelector('.alert')

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
/*

/*

addItem({
    'tipo': 'playera',
    'nombre': 'Gran Navidad',
    //'description': 'Anfg',
    'imagen': './../src/img/Mujeres/MPlayera100.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 360,
    'genero': 'M'
}); // item #1

addItem({
    'tipo': 'playera',
    'nombre': 'Estilo Never',
    //'description': 'Animación 2',
    'imagen': './../src/img/Mujeres/MPlayera109.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 340,
    'genero': 'M'
}); // item #2

addItem({
    'tipo': 'playera',
    'nombre': 'Lobo',
    //'description': 'Animación 3',
    'imagen': './../src/img/Mujeres/MPlayera102.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 320,
    'genero': 'M'
}); // item #3

addItem({
    'tipo': 'playera',
    'nombre': 'Lobo Anillado',
    //'description': 'Animación 4',
    'imagen': './../src/img/Mujeres/MPlayera103.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 320,
    'genero': 'M'
}); // item #4

addItem({
    'tipo': 'playera',
    'nombre': 'Mishi Negro',
    //'description': 'Animación 5',
    'imagen': './../src/img/Mujeres/MPlayera104.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 420,
    'genero': 'M'
}); // item #5

addItem({
    'tipo': 'playera',
    'nombre': 'Cráneos Blancos',
    //'description': 'Animación 6',
    'imagen': './../src/img/Mujeres/MPlayera105.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 290,
    'genero': 'M'
}); // item #6

addItem({
    'tipo': 'playera',
    'nombre': 'Vestido Inverso',
    //'description': 'Animación 7',
    'imagen': './../src/img/Mujeres/MPlayera106.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 480,
    'genero': 'M'
}); // item #7

addItem({
    'tipo': 'playera',
    'nombre': 'Bastardo Rosa',
    //'description': 'Animación 8',
    'imagen': './../src/img/Mujeres/MPlayera107.jpg',
    //'color': 'Negro',
    'talla': 'M',
    'precio': 360,
    'genero': 'M'
}); // item #8

*/