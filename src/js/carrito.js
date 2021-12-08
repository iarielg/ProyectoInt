const clickButton = document.querySelectorAll('#clickButon');
let tbody = document.querySelector('.carrito');

let carrito = [];

clickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e) {
    const button = e.target;
    const item = button.closest('.card')
    const itemTittle = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.card-precio').textContent;
    const itemImage = item.querySelector('.card-img-top').src;

    const newItem = {
        title: itemTittle,
        precio: itemPrecio,
        image: itemImage,
        cantidad: 1
    }

    addItemCarrito(newItem);
}

function addItemCarrito(newItem) {

    console.log(newItem)
    carrito.push(newItem);
    renderCarrito()
}

function renderCarrito() {
    console.log(carrito);
   tbody.innerHTML = "hola"
       carrito.map(item =>{
            const tr = document.createElement('tr');
       tr.classList.add('itemCarrito')

            const Content = ` <th scope="col"><img src=${item.image} alt=""></th>
            <td class=" fw-bold pt-5">${item.title}</td>
            <td>
                <div class="cantidad-producto ">
                    <p class="cantidad fw-bold">${item.cantidad}</p>
                  <p class="incremento fw-bold">+</p>
                </div>
            </td>
            <td><i class="fas fa-trash-alt icon"></i></td>
        </tr>
         <tr>
            <td></td>
            <td></td>
         <td colspan="2">Total ${item.precio}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
         <td colspan="1"><button class="btn btn-dark">Pagar</button></td>`
             tr.innerHTML = Content
            tbody.appendChild(tr)
        })

}

 let agregar_carrito = document.getElementById('agregar-carrito');

 agregar_carrito.addEventListener('click', function(e){
     e.preventDefault();


     if( select.options[select.selectedIndex].text == 'Selecciona el color'){
         document.querySelector('.alert').textContent = 'Ingrese el color deseado'
     }else{
     let select = document.getElementById('select')
     let selected = select.options[select.selectedIndex].text;
     console.log(selected);
     document.querySelector('.alert').remove('.alert');


    if( select.options[select.selectedIndex].text == 'Selecciona el color'){
        document.querySelector('.alert').textContent = 'Ingrese el color deseado'
    }else{
    let select = document.getElementById('select')
    let selected = select.options[select.selectedIndex].text;
    console.log(selected);

    document.querySelector('.alert').remove('.alert');


    let tallaCh = document.getElementById('inlineRadio1');
    let tallaM = document.getElementById('inlineRadio2');
    let tallaGd = document.getElementById('inlineRadio3');
    let tallaEg = document.getElementById('inlineRadio4');
     let tallaCh = document.getElementById('inlineRadio1');
     let tallaM = document.getElementById('inlineRadio2');
     let tallaGd = document.getElementById('inlineRadio3');
     let tallaEg = document.getElementById('inlineRadio4');

     let talla = '';
     if(tallaCh.checked){
         console.log(talla = tallaCh.value);
     }else if(tallaM.checked){
         console.log(talla = tallaM.value);


     }else if(tallaGd.checked){
         console.log(talla = tallaGd.value);

     }else{
         console.log(talla = tallaEg.value);
     }}


 };

 function addCarrito(e){
     let button = e.target
     const item = button.closest('.card')
     console.log(item);
    }
 });