class theFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
           `<footer id="footer" class="text-white bg-dark">
                <div class="container-fluid pt-5 pb-5">
                    <div class="row">
                        <!--Never Dies logo-->
                        <div class="col-md-2 align-items-center text-center">
                            <img src="../src/img/logonev.png" alt="" width="120" height="120">
                        </div>

                        <!--contacts-->
                        <div class="col-md-8 align-items-center text-center">
                            <ul class="list-unstyled p-10">
                                <li class="">
                                    <i class="bi bi-instagram text-white"></i>
                                    <a href="https://www.instagram.com/neverdiesoficial">/neverdiesco</a>
                                </li>
                                <li class="">
                                    <i class="bi bi-facebook text-white"></i>
                                    <a href="https://www.facebook.com/NeverDiesCo/">NeverDiesCo</a>
                                </li>
                                <li class="">
                                    <i class="bi bi-whatsapp text-white"></i>
                                    <a href="https://wa.me/+5215612649334">+52 1 56 1264 9334</a>
                                </li>
                                <li class="">
                                    <i class="bi bi-envelope text-white"></i>
                                    <a href="mailto:contacto@neverdiesco.com">contacto@neverdiesco.com</a>
                                </li>
                            </ul>
                        </div>

                        <!--In Code logo-->
                        <div class="col-md-2 align-items-center text-center">
                            <p class="align-items-center text-center">Sitio creado por:</p>
                            <a href="" class="navbar-brand"><img src="../src/img/logoInCodeWeb.png" alt="" width="180" height="70"></a>
                        </div>
                    </div>
                </div>
                <div class="container">
                <!--copyright-->
                <div class="row mr-0">
                    <p class="text-center">Copyright &copy; NeverDiesCo. 2021</p>
                </div>
                </div>
            </footer>`
    }
}

customElements.define('my-footer', theFooter)