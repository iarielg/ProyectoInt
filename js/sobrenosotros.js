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
        div.innerHTML +=    `<div class="card vw-100 vh-100">
        <div class="row no-gutters">
          <div class="col-md-4"><!-- Tamaño por columnas de la imagen -->
            <img class="img-fluid" src="${this.img}" alt="photo developer">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">${this.resume}</p>
              <p class="card-text"><small class="text">${this.work}</small></p>
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

/*Resumen de Rafa, era mucho texto y lo definí en dos variables*/
let resumeRafa1 = "Desarrollador de software con experiencia en equipos de trabajo con metodología ágiles, encargados del desarrollo de aplicaciones web escalables,";
let resumeRafa2 = "robustas y seguras implementado las tecnologías con Java-EE, Maven y Spring Boot del lado del back-end y HTML5, CSS, JavaScript y Bootstrap en el apartdado front-end.";


let ariel = new person ("J. Ariel Gonzalez", "./../src/ariel.jpg" ,"Desarrollador Back End", "arielgonzalezdelacruz@gmail.com", "24", "Enamorado de la programacion", "https://www.linkedin.com/in/jarielgc/", "https://github.com/iarielg");
let mau = new person ("Mauricio Suárez Quintero", "./../src/Mauricio.jpg", "Java FullStack Developer", "mauricio_sq@comunidad.unam.mx", "24", "I'm a Java Full Stack developer and mathematician.", "https://www.linkedin.com/in/mauriciosuarezq", "https://github.com/MauricioSQ");
let Ahmad = new person ("Ahmad Dowidar", "./../src/Ahmad.jpg", "Full Stack Web Developer", "a7mad.dowidar@gmail.com", "24", "If you try to fail, and succeed, which have you done?", "https://www.linkedin.com/in/ahmad-dowidar/", "https://github.com/theDowidar");
let david = new person ("David", "./../src/David.jpg", "Java FullStack Developer", "david.danielhdz@gmail.com", "24", "Me gusta la tecnología y la automatización.", "https://www.linkedin.com/in/dhdavid", "https://github.com/david-danie");
let rafa = new person ("Rafael Osnaya de Lucio", "./../src/Rafael.png" ,"Desarrollador Java Full Stack", "osnayadeluciorafael@hotmail.com", "24", resumeRafa1 + resumeRafa2, "https://www.linkedin.com/in/rafael-osnaya-de-lucio-17b01720b/", "https://github.com/RafaOsnaya");
let yaqui = new person ("Yaqui", "./../src/Yaki.jfif" ,"Desarrollador Back End", "zeltzin.rom96@gmail.com", "24", "Disfruto mucho crear productos a través del código", "https://www.linkedin.com/in/yaki-zeltzin-romero-trejo-7a7471182/", "https://github.com/Yaki-Zeltzin");
let arely = new person ("Arely", "./../src/ariel.jpg" ,"Desarrollador", "arielgonzalezdelacruz@gmail.com", "24", "Lorem ipsum", "https://www.linkedin.com/in/jarielgc/", "https://github.com/iarielg");
// Se crean los nuevos objetos persona

mau.printInfo(divP0);
ariel.printInfo(divP1);
Ahmad.printInfo(divP2);
david.printInfo(divP3);
rafa.printInfo(divP4);
yaqui.printInfo(divP5);
arely.printInfo(divP6);
// Se imprime la info