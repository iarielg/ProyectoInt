let navbar_root = document.getElementById('navbar_root');

export function nav(div) {

    div.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
    <div class="container-fluid">
        <a class="navbar-brand" href="./../index.html"><img src="./../src/img/logonev.png" alt="logoNeverDiesCo"
            width="60" height="60" class="d-inline-block align-text-top"><!-- Navbar --></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        TIENDA
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-black" href="./../pages/hombres.html">HOMBRE</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-black" href="./../pages/mujeres.html">MUJER</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-black" href="./../pages/accesorios.html">ACCESORIOS</a></li>
                    </ul>
                </li>
                
                
               
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./../pages/galeria.html">GALERÍA</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./../pages/comunidad.html">COMUNIDAD</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./../pages/servicios.html">SERVICIOS</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="./../pages/sucursales.html">SUCURSALES</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="./../pages/contacto.html">CONTACTO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./../pages/nosotros.html">NOSOTROS</a>
                </li>

                <li class="nav-item"><!-- Icono Carrito Compras -->
                    <a class="nav-link" href="./../pages/carritoCompras.html"><i class="bi bi-cart2"></i></a>
                </li>
            
            </ul>
            <form class="d-flex">
            <a class="nav-link" href="./../pages/login.html";">INICIAR SESIÓN</a>
            </form>
        </div>
    </div>
</nav>`
}
nav(navbar_root)