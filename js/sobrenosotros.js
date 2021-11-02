class person{
    // numId = "";
    name = "";
    img = "";
    work = "";
    email = "";
    age = 18;
    resume = "";
    linkedin = "";
    github = "";

    // static total = 0;
    constructor (name, img, work, email, age, resume, linkedin, github){
        // this.numId = numId;
        this.name = name.toUpperCase();
        this.img = `${img}`;
        this.work = `${work}`
        this.email = email.toLowerCase();
        this.age = (age<18)?18:age;
        this.resume = `"${resume}"`;
        this.linkedin = `${linkedin}`;
        this.github = `${github}`;
        person.total++;
        this.id = person.total;
    }//constructor
    printInfo(div){
        div.innerHTML +=    `<div class="card mb-3" style="max-width: 100%;">
        <div class="row no-gutters">
          <div class="col-md-4"><!-- Tamaño por columnas de la imagen -->
            <img class="img-fluid" src="${this.img}" alt="photo developer">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">${this.resume}</p>
              <p class="card-text"><small class="text-muted">${this.work}</small></p>
              <ul class="list-ico">
                <li><a title="Linkedin" href="${this.linkedin}" target="_blank"><img src="./../src/linkedin.svg" alt="linkedin"></a></li>
                <li><a title="Github" href="${this.github}" target="_blank"><img src="./../src/github.svg" alt="github"></a></li>
                <li><a title="Email" href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=${this.email}&amp;tf=1" target="_blank"><img src="./../src/email.svg" alt="github"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>`
    }//printInfo
}//class persons

let divP0 = document.getElementById("divP0");
let divP1 = document.getElementById("divP1");
let divP2 = document.getElementById("divP2");
let divP3 = document.getElementById("divP3");
let divP4 = document.getElementById("divP4");
let divP5 = document.getElementById("divP5");
let divP6 = document.getElementById("divP6");
// Se declaran los divs donde se coloca cada Card


let ariel = new person ("J. Ariel Gonzalez", "./../src/ariel.jpg" ,"Desarrollador Back End", "arielgonzalezdelacruz@gmail.com", "24", "Enamorado de la programacion", "https://www.linkedin.com/in/jarielgc/", "https://github.com/iarielg");
let mau = new person ("Mauricio Suarez", "./../src/mau.jpg", "Java FullStack Developer", "mauricio_sq@comunidad.unam.mx", "24", "I'm a Java Full Stack developer and mathematician.", "https://www.linkedin.com/in/mauriciosuarezq", "https://github.com/MauricioSQ");
let Ahmad = new person ("Ahmad", "./../src/Ahmad.jpg", "Java FullStack Developer", "ahdehfew@gmail.com", "24", "I am inevitable", "https://www.linkedin.com/in/mauriciosuarezq", "https://github.com/MauricioSQ");
let david = new person ("David", "./../src/david.jpg", "Java FullStack Developer", "david.danielhdz@gmail.com", "24", "Me gusta la tecnología y la automatización.", "https://www.linkedin.com/in/dhdavid", "https://github.com/david-danie");
let rafa = new person ("Rafael", "./../src/ariel.jpg" ,"Desarrollador Back End", "arielgonzalezdelacruz@gmail.com", "24", "Enamorado de la programacion", "https://www.linkedin.com/in/jarielgc/", "https://github.com/iarielg");
let yaqui = new person ("Yaqui", "./../src/ariel.jpg" ,"Desarrollador Back End", "arielgonzalezdelacruz@gmail.com", "24", "Enamorado de la programacion", "https://www.linkedin.com/in/jarielgc/", "https://github.com/iarielg");
let arely = new person ("Arely", "./../src/ariel.jpg" ,"Desarrollador Back End", "arielgonzalezdelacruz@gmail.com", "24", "Enamorado de la programacion", "https://www.linkedin.com/in/jarielgc/", "https://github.com/iarielg");
// Se crean los nuevos objetos persona

mau.printInfo(divP0);
ariel.printInfo(divP1);
Ahmad.printInfo(divP2);
david.printInfo(divP3);
rafa.printInfo(divP4);
yaqui.printInfo(divP5);
arely.printInfo(divP6);
// Se imprime la info