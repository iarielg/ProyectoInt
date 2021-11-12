class theFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
           `<footer id="footer" class="text-white bg-dark">
                <div class="container-fluid pt-3 pb-3">
                    <div class="row">
                        <!--Never Dies logo-->
                        <div class="col-md-4 col-xl-3 col-lg-4 col-md-6 text-center align-items-center my-auto">
                            <img src="../src/img/logonev.png" alt="Never Dies logo" width="120" height="120">
                        </div>

                        <!--contacts-->
                        <div class="col-md-4 col-xl-3 col-lg-4 col-md-6 align-items-left">
                            <ul class="list-unstyled p-10">
                                <li class="d-inline">
                                    <i class="bi bi-instagram text-white icon-size"></i>
                                    <a href="https://www.instagram.com/neverdiesoficial/" target="_blank">/neverdiesco</a>
                                </li>
                                <li class="">
                                    <i class="bi bi-facebook text-white icon-size"></i>
                                    <a href="https://www.facebook.com/NeverDiesCo/" target="_blank">NeverDiesCo</a>
                                </li>
                                <li class="">
                                    <i class="bi bi-whatsapp text-white icon-size"></i>
                                    <a href="https://wa.me/+5215612649334" target="_blank">+52 1 56 1264 9334</a>
                                </li>
                                <li class="">
                                    <i class="bi bi-envelope text-white icon-size"></i>
                                    <a href="mailto:contacto@neverdiesco.com">contacto@neverdiesco.com</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4 col-xl-3 col-lg-4 col-md-6 text-center align-items-center my-auto">
                            <ul class="list-unstyled p-10">
                                <li class="">
                                    <a href="./../pages/quienesSomos.html">¿QUIEN SOMOS?</a>
                                </li>
                                <li class="">
                                    <a href="#">DESCARGAR CATÁLOGO</a>
                                </li>
                            </ul>
                        </div>

                        <!--In Code logo-->
                        <div class="col-md-4 col-xl-3 col-lg-4 col-md-6 text-center align-items-center my-auto">
                            <div class="text-center">
                                <p class="align-items-center">Sitio creado por:</p>
                            </div>
                            <div class="text-center align-items-center">
                                <a href=".././pages/nosotros.html" class=""><img src="../src/img/logoInCodeWeb.png" class="" alt="In Code logo" width="180" height="70"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                <!--copyright-->
                <div class="row">
                    <p class="text-center">Copyright &copy; NeverDiesCo. 2021</p>
                </div>
                </div>
            </footer>`
    }
}

customElements.define('my-footer', theFooter)