class person{
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
        div.innerHTML += `<div class="card mb-3" style="max-width: 100%;">
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
let divP = document.getElementById("divP");
let ariel = new person ("J. Ariel Gonzalez", "./../src/ariel.jpg" ,"Desarrollador Back End", "arielgonzalezdelacruz@gmail.com", "24", "Enamorado de la programacion", "https://www.linkedin.com/in/jarielgc/", "https://github.com/iarielg");
ariel.printInfo(divP);

let mau = new person ("Mauricio Suarez", "./../src/mau.jpg", "Java FullStack Developer", "mauricio_sq@comunidad.unam.mx", "24", "I'm a Java Full Stack developer and mathematician. Send me a message", "https://www.linkedin.com/in/mauriciosuarezq", "https://github.com/MauricioSQ");
mau.printInfo(divP);

let Ahmad = new person ("Ahmad", "./../src/Ahmad.jpg", "Java FullStack Developer", "ahdehfew@gmail.com", "24", "I am inevitable", "https://www.linkedin.com/in/mauriciosuarezq", "https://github.com/MauricioSQ");
Ahmad.printInfo(divP);