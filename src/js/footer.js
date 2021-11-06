class theFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<footer id="footer" class="bg-dark text-white">
                <div class="container-fluid">
                    <div class="row">

                        <!--Never Dies logo-->
                        <div class="col-2 align-self-center text-center">
                            <a class=""><img src="../src/img/logonev.png" alt="Never Dies Logo" class="" width="120" height="120"></a>
                        </div>
                            
                        <!--contacts-->
                        <div class="col-7 align-self-center">
                            <ul class="">
                                <li class="list-unstyled m-4">
                                    <span class="rounded footer-icons">
                                        <i class="bi bi-instagram"></i>
                                    </span>
                                    <a href="">/neverdiesco</a>
                                </li>
                                <li class="list-unstyled m-4">
                                    <span class="">
                                        <i class="bi bi-facebook"></i>
                                    </span>
                                    <a href="">/NeverDiesCo</a>
                                </li>
                                <li class="list-unstyled m-4">
                                    <span>
                                        <i class="bi bi-whatsapp"></i>
                                    </span>
                                    +52 1 56 1264 9334
                                </li>
                                <li class="list-unstyled m-4">
                                    <span>
                                        <i class="bi bi-envelope"></i>
                                    </span>
                                    <a href="mailto:contacto@neverdiesco.com">contacto@neverdiesco.com</a>
                                </li>
                            </ul>
                        </div>

                        <!--In Code logo-->
                        <div class="col-3 align-self-center text-center">
                            <p class"text-center">Sitio creado por:</p>
                            <a href="./../pages/nosotros.html"><img class="" src="../src/img/logoInCodeWeb.png" alt="In Code logo" width="180" height="80"></a>
                        </div>

                    </div>
                </div>

                    <!--copyright-->
                    <div class="row">
                        <p class="d-flex justify-content-center">Copyright &copy; NeverDiesCo. 2021</p>
                    </div>
                </div>
            </footer>`
    }
}

customElements.define('my-footer', theFooter)