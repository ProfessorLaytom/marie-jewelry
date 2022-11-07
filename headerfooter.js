const makeHeaderFooter = (path) => {
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    header.innerHTML = ''
    footer.innerHTML = ''

    function js_thml_desktop(path){
        let code = "";
        code += '<ul>\n';
        code += `\t\t\t<li class="dropdown-menu"><a href="${path}pages/lignes.html" class="link">Lignes</a>\n`;
        code += '\t\t\t\t<div class="dropdown">\n';
        code += `\t\t\t\t\t<a href="${path}pages/lignes.html">Toutes nos lignes</a>\n`;
        code += `\t\t\t\t\t<a href="${path}pages/list-ligne-adama.html">Ligne Adama</a>\n`;
        code += `\t\t\t\t\t<a href="${path}pages/list-ligne-altair.html">Ligne Altaïr</a>\n`;
        code += `\t\t\t\t\t<a href="${path}pages/list-ligne-antares.html">Ligne Antares</a>\n`;
        code += `\t\t\t\t\t<a href="${path}pages/list-ligne-bellatrix.html">Ligne Bellatrix</a>\n`;
        code += '\t\t\t\t</div>\n';
        code += '\t\t\t</li>\n';
        code += `\t\t\t<li class="dropdown-menu"><a href="${path}pages/bijoux.html" class="link">Bijoux</a>\n`;
        code += '\t\t\t\t<div class="dropdown">\n';
        code += `\t\t\t\t\t<a href="${path}pages/bijoux.html">Tous nos bijoux</a>\n`;
        code += `\t\t\t\t\t<a href="${path}pages/list_bagues.html">Bagues</a>\n`;
        code += `\t\t\t\t\t<a href="${path}pages/list_colliers.html">Colliers</a>\n`;
        code += `\t\t\t\t\t<a href="${path}pages/list_manchettes.html">Manchettes</a>\n`;
        code += '\t\t\t\t</div></li>\n';
        // code += `\t\t\t<li><a href="${path}pages/gallery.html" class="link">Gallerie</a></li>\n`
        code += '\t\t</ul>\n';
        code += `\t\t<a href="${path}index.html"><img src="${path}img/logo.png" alt="Logo"></a>  <!--Logo-->\n`;
        code += '\t\t<ul>\n';
        // code += `\t\t\t<li class="dropdown-menu"><a class='link' href="" style="cursor:pointer;"><img src= "${path}img/icons/language.svg"></a>\n`;
        // code += '\t\t\t\t<div class="dropdown">\n';
        // code += `\t\t\t\t\t<a href="${path}index.html">Français</a>\n`;
        // code += `\t\t\t\t\t<a href="${path}en/index.html">English</a></div></li>\n`;
        code += `\t\t\t<li><a href="${path}pages/about.html" class="link">A propos</a></li>\n`;
        code += `\t\t\t<li><a href="${path}pages/contact.html" class="link">Contact</a></li>\n`;
        code += '\t\t</ul>\n';
        return code;
    }
    function js_thml2_desktop(path){
        let code = "";
        code += '<div class="footer-container">\n';
        code += `\t\t\t<a href="${path}index.html"><img src="${path}img/logo.png" alt="Logo"></a> <!--Logo-->\n`;
        code += '\t\t\t<ul>\n';
        code += '\t\t\t\t<li>Menu</li>\n';
        code += `\t\t\t\t<li><a href="${path}pages/lignes.html" class="link">Lignes</a></li>\n`;
        code += `\t\t\t\t<li><a href="${path}pages/bijoux.html" class="link">Bijoux</a></li>\n`;
        // code += `\t\t\t\t<li><a href="${path}#" class="link">Experimental</a></li>\n`;
        code += `\t\t\t\t<li><a href="${path}pages/about.html" class="link">A propos</a></li>\n`;
        code += `\t\t\t\t<li><a href="${path}pages/contact.html" class="link">Contact</a></li>\n`;
        code += '\t\t\t</ul>\n';
        code += '\t\t\t<div class="find-us">\n';
        code += '\t\t\t\t<div class="insta">\n';
        code += `\t\t\t\t\t<a href="https://www.instagram.com/mariealexandrineyvernault"><img src="${path}img/icons/instagram.svg"\n`;
        code += '\t\t\t\t\talt="instagram logo"> mariealexandrineyvernault</a>\n';
        code += '\t\t\t\t</div>\n';
        code += '\t\t\t</div>\n';
        code += '\t\t</div>\n';
        code += '\t\t<p>© MARIE-ALEXANDRINE YVERNAULT 2022</p>\n';
        code += '\t\t<p>Made with 🤍 by <a href="https://github.com/ProfessorLaytom">Tom Dangleterre</a> & Celia Bidaud</p>\n';
        return code;
    }
    
    function js_thml_phone(path){
        var variable = '' + 
            '<nav>' + 
            '      <div class="navbar">' + 
            '        <div class="container nav-container">' + 
            '            <input class="checkbox" type="checkbox" name="" id="" />' + 
            '            <div class="hamburger-lines">' + 
            '              <span class="line line1"></span>' + 
            '              <span class="line line2"></span>' + 
            '              <span class="line line3"></span>' + 
            '            </div>  ' + 
            '          <div class="logo">' + 
            `            <a href="${path}index.html"><img src="${path}img/logo.png" alt="Logo"></a>` + 
            '          </div>' + 
            '          <div class="menu-items">' + 
            `            <li><a href="${path}index.html">Accueil</a></li>` + 
            `            <li><a href="${path}pages/lignes.html">Nos lignes</a></li>` + 
            `            <li><a href="${path}pages/bijoux.html">Bijoux</a></li>` + 
            // `            <li><a href="${path}pages/gallery.html">Galerie</a></li>` + 
            `            <li><a href="${path}pages/about.html">A propos</a></li>` + 
            `            <li><a href="${path}pages/contact.html" class="link">Contact</a></li>` +
            `            <li><a href="${path}en/pages/lignes.html">English</a></li>` +  
            '          </div>' + 
            '        </div>' + 
            '      </div>' + 
            '    </nav>' + 
            '';
        return variable
    }
    function js_thml2_phone(path){
        let code = "";
        code += '<div class="footer-container">\n';
        code += '\t\t\t<div class="find-us">\n';
        code += '\t\t\t\t<div class="insta">\n';
        code += `\t\t\t\t\t<a href="https://www.instagram.com/mariealexandrineyvernault"><img src="${path}img/icons/instagram.svg"\n`;
        code += '\t\t\t\t\talt="instagram logo"> mariealexandrineyvernault</a>\n';
        code += '\t\t\t\t</div>\n';
        code += '\t\t\t</div>\n';
        code += '\t\t</div>\n';
        code += '\t\t<p>© MARIE-ALEXANDRINE YVERNAULT 2022</p>\n';
        code += '\t\t<p>Made with 🤍 by <a href="https://github.com/ProfessorLaytom">Tom Dangleterre</a> & Celia Bidaud</p>\n';
        return code;
    }
    const h1 = document.querySelector('h1');
    let x = window.matchMedia("(max-width: 700px)")
    if (x.matches){
        header.innerHTML = js_thml_phone(path)
        footer.innerHTML = js_thml2_phone(path)
        h1.innerHTML = 'MARIE-ALEXANDRINE <br> YVERNAULT'
    } else {
        header.innerHTML = js_thml_desktop(path)
        footer.innerHTML = js_thml2_desktop(path)   
    }  
}

export default makeHeaderFooter