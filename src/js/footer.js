class theFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<footer id="footer" class="bg-dark text-white">
                <div class="container-fluid">
                    <div class="row">

                        <!--Never Dies logo-->
                        <div class="col-1">
                            <a class=""><img src="../src/img/logonev.png" alt="Never Dies Logo" class="" width="120" height="120"></a>
                        </div>
                            
                        <!--contacts-->
                        <div class="col-8">
                            <ul class="">
                                <li class="list-unstyled p-2">
                                    <span class="rounded footer-icons">
                                        <i class="bi bi-instagram p-2 bg-white"></i>
                                    </span>
                                    <a href="">/neverdiesco</a>
                                </li>
                                <li class="list-unstyled p-2">
                                    <span>
                                        <i class="bi bi-facebook p-2"></i>
                                    </span>
                                    <a href="">/NeverDiesCo</a>
                                </li>
                                <li class="list-unstyled p-2">
                                    <span>
                                        <i class="bi bi-whatsapp p-2"></i>
                                    </span>
                                    +52 1 56 1264 9334
                                </li>
                                <li class="list-unstyled p-2">
                                    <span>
                                        <i class="bi bi-envelope p-2"></i>
                                    </span>
                                    <a href="mailto:contacto@neverdiesco.com">contacto@neverdiesco.com</a>
                                </li>
                            </ul>
                        </div>

                        <!--In Code logo-->
                        <div class="col-3">
                            <p class"">Sitio creado por:</p>
                            <a href="./../pages/nosotros.html"><img class="d-inline-block align-text-right" src="../src/img/logoInCodeWeb.png" alt="In Code logo" width="180" height="80"></a>
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