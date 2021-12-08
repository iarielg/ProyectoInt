class sucursales{
    name = "";
    img = "";
    map = ``;
    direccion = "";
    telefono = "";
    horario = "";

    constructor(name, img, map, direccion, telefono, horario){
        this.name = name;
        this.img = img;
        this.map = map;
        this.direccion = direccion;
        this.telefono = telefono;
        this.horario = horario;
    }//constructor

    printInfo(div){
        div.innerHTML += `<div class="col-md-12 text-white bg-dark">
                <div class="row g-0 align-items-center">
                    <div class="col-md-4">
                        <img src="${this.img}" class="img-fluid rounded-start" id="img" alt="..." loading="lazy">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-center">${this.name}</h5>
                            <iframe src="${this.map}"  width="85%" height="85%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            <p class="card-text text-center">${this.direccion}</p>
                            <p class="card-text text-center">${this.telefono}</p>
                            <p class="card-text text-center">${this.horario}</p>
                        </div>
                    </div>  
            </div>
        </div>
        <br>`;
    }//printInfo
}//end class sucursales
let divP0 = document.getElementById("div1");
let divP1 = document.getElementById("div2");
let divP2 = document.getElementById("div3");
let divP3 = document.getElementById("div4");
let divP4 = document.getElementById("div5");
let divP5 = document.getElementById("div6");
let divP6 = document.getElementById("div7");
let divP7 = document.getElementById("div8");

let sucursal1 = new sucursales("Sucursal 1", "./../src/img/Local1.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30109.904823022414!2d-99.17905123002211!3d19.38048956247797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffa4134e58db%3A0xb31cef65890a450a!2sBenito%20Juarez%2C%20Mexico%20City%2C%20CDMX!5e0!3m2!1sen!2smx!4v1638936915639!5m2!1sen!2smx", "Calle Eliseo Domínguez, Benito Juárez, CDMX, México", "Tel: 55 0439 8340", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal2 = new sucursales("Sucursal 2", "./../src/img/Local2.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.29027581835!2d-99.30031728520353!3d19.356579886927573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2073ef7c99ccd%3A0x9eaf0e96694b30da!2sAv.%20Ju%C3%A1rez%2C%20Cuajimalpa%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1638937094741!5m2!1sen!2smx", "Calle Juárez, Cuajimalpa, CDMX, México", "Tel: 55 0395 8340", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal3 = new sucursales("Sucursal 3", "./../src/img/tienda3.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.945381118742!2d-99.23945118520477!3d19.284741286968497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfefe4e7d5ce7%3A0x4b60ca5fb5938648!2sAv%20Man%C3%AD%2C%2014100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1638937281948!5m2!1sen!2smx", "Calle Maní, Tlalpan, CDMX, México", "Tel: 55 4936 4589", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal4 = new sucursales("Sucursal 4", "./../src/img/tienda4.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120297.44961852151!2d-99.1077454105726!3d19.571845487671403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f21c72f777a1%3A0x4cd4540a42b26680!2sAgricultura%204-A%2C%20Ecatepec%20de%20Morelos%2C%20M%C3%A9x.!5e0!3m2!1sen!2smx!4v1638939246715!5m2!1sen!2smx", "Calle Mesoneros, Ecatepec, Estado de México, México", "Tel: 55 9587 4746", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal5 = new sucursales("Sucursal 5", "./../src/img/tienda5.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.2841049518347!2d-102.30144248516065!3d21.8465744855611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429edb55f607db7%3A0x7d205742e8b07a02!2sCanario%2C%20Aguascalientes%2C%20Ags.!5e0!3m2!1sen!2smx!4v1638939409124!5m2!1sen!2smx", "Calle Canario, Léon, AGS, México", "Tel: 55 3856 4849", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal6 = new sucursales("Sucursal 6", "./../src/img/tienda6.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120485.63540528958!2d-99.3180716149534!3d19.31816303520284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2008a471412b3%3A0x38fb8ad19cad555b!2zw4FsdmFybyBPYnJlZ8OzbiwgQ0RNWA!5e0!3m2!1sen!2smx!4v1638939543856!5m2!1sen!2smx", "Calle 14, Álvaro Obregón, CDMX, México", "Tel: 55 3904 5837", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal7 = new sucursales("Sucursal 7", "./../src/img/tienda7.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.218674249319!2d-100.4020396850853!3d25.664044883681267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bd7c5a0f8edd%3A0x126d1fd2becd9a1c!2sC.%20Libertad%2C%20Zona%20Los%20Callejones%2C%2066230%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.!5e0!3m2!1sen!2smx!4v1638939659326!5m2!1sen!2smx", "Calle Libertad, Monterrey, Nuevo León, México", "Tel: 55 2085 3967", "Lunes a Viernes: 8:00 am - 6:00 pm");
let sucursal8 = new sucursales("Sucursal 8", "./../src/img/tienda8.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.2631103678073!2d-96.73404188523875!3d17.059778088275728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7226b38c59f7b%3A0xe23fbfd284e48545!2sPriv.%20de%20las%20Casas%2C%20Zona%20Lunes%20Feb%2009%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.!5e0!3m2!1sen!2smx!4v1638939739734!5m2!1sen!2smx", "Calle Las Casas, Oaxaca, Oaxaca, México", "Tel: 55 3059 6790", "Lunes a Viernes: 8:00 am - 6:00 pm");

sucursal1.printInfo(divP0);
sucursal2.printInfo(divP1);
sucursal3.printInfo(divP2);
sucursal4.printInfo(divP3);
sucursal5.printInfo(divP4);
sucursal6.printInfo(divP5);
sucursal7.printInfo(divP6);
sucursal8.printInfo(divP7);

