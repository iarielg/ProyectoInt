class theFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<footer id="footer" class="bg-dark text-white footer">
                <div class="container">
                    <div class="row">
                        <div class="col d-flex">
                            <div class="footer-left">
                                <a class="navbar-right"><img src="../src/img/logonev.png" alt="Never Dies Logo" class="" width="120" height="120"></a>
                            </div>
                            <div class="col d-flex">
                                <ul class="">
                                    <div>
                                        <li class="">
                                            <span class="rounded footer-icons">
                                                <i class="bi bi-instagram"></i>
                                            </span>
                                            <a href="">/neverdiesco</a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <span>
                                                <i class="bi bi-facebook"></i>
                                            </span>
                                            <a href="">/NeverDiesCo</a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <span>
                                                <i class="bi bi-whatsapp"></i>
                                            </span>
                                            +52 1 56 1264 9334
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <span>
                                                <i class="bi bi-envelope"></i>
                                            </span>
                                            <a href="mailto:contacto@neverdiesco.com">contacto@neverdiesco.com</a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div class="col d-flex justify-content-left">
                                <img class="justify-content-left" src="../src/img/logoInCodeWeb.png" alt="In Code logo" width="180" height="80">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <p class="d-flex justify-content-center">Copyright &copy; NeverDiesCo. 2021</p>
                    </div>
                </div>
            </footer>`
    }
}

customElements.define('my-footer', theFooter)