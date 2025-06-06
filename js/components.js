document.addEventListener("DOMContentLoaded", ()=>{
    const header = `
    
    <header class="header">
        <a href="../index.html">
            <img class="logo-header" src="../img/logo.png" alt="Logo Web Consolas">
        </a>
        <nav class="navegacion">
            <ul class="nav__links">
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="#">Categorías</a></li>
                <li><a href="#">Información</a></li>
                <li><a href="#">Sugerencias</a></li>
            </ul>
        </nav>
    </header>

    `;

    const footer = `
    
    <footer class="footer">
        <img class="logo-footer" src="../img/logo.png" alt="Logo Web Consolas">
        <p>Web Consolas 2025</p>
    </footer>

    `;

    document.getElementById("site-header").innerHTML = header;
    document.getElementById("site-footer").innerHTML = footer;

});