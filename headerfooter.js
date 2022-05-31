const makeHeaderFooter = (path) => {
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    header.innerHTML = ''
    footer.innerHTML = ''

    function js_thml(path){
        let code = "";
        code += '<ul>\n';
        code += `\t\t\t<li class="dropdown-menu"><a href="${path}pages/lignes.html" class="link">Lignes</a>\n`;
        code += '\t\t\t\t<div class="dropdown">\n';
        code += `\t\t\t\t\t<a href="${path}pages/lignes.html">Toutes nos lignes</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Ligne pyrite</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Ligne bleu</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Ligne or</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Ligne claire</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Ligne verte</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Ligne noire</a>\n`;
        code += '\t\t\t\t</div>\n';
        code += '\t\t\t</li>\n';
        code += `\t\t\t<li class="dropdown-menu"><a href="${path}pages/bijoux.html" class="link">Bijoux</a>\n`;
        code += '\t\t\t\t<div class="dropdown">\n';
        code += `\t\t\t\t\t<a href="${path}pages/bijoux.html">Tous nos bijoux</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Bagues</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Colliers</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Manchettes</a>\n`;
        code += `\t\t\t\t\t<a href="${path}#">Boucles de ceinture</a>\n`;
        code += '\t\t\t\t</div></li>\n';
        code += '\t\t\t<li><a href="#" class="link">Experimental</a></li>\n';
        code += '\t\t</ul>\n';
        code += `\t\t<a href="${path}index.html"><img src="${path}img/logo.png" alt="Logo"></a>  <!--Logo-->\n`;
        code += '\t\t<ul>\n';
        code += `\t\t\t<li><a href="${path}pages/about.html" class="link">A propos</a></li>\n`;
        code += `\t\t\t<li><a href="${path}pages/contact.html" class="link">Contact</a></li>\n`;
        code += '\t\t</ul>\n';
        return code;
    }
    function js_thml2(path){
        let code = "";
        code += '<div class="footer-container">\n';
        code += `\t\t\t<a href="#"><img src="${path}img/logo.png" alt="Logo"></a> <!--Logo-->\n`;
        code += '\t\t\t<ul>\n';
        code += '\t\t\t\t<li>Menu</li>\n';
        code += `\t\t\t\t<li><a href="${path}pages/lignes.html" class="link">Lignes</a></li>\n`;
        code += `\t\t\t\t<li><a href="${path}pages/bijoux.html#" class="link">Bijoux</a></li>\n`;
        code += `\t\t\t\t<li><a href="${path}#" class="link">Experimental</a></li>\n`;
        code += `\t\t\t\t<li><a href="${path}pages/about.html" class="link">A propos</a></li>\n`;
        code += `\t\t\t\t<li><a href="${path}pages/contact.html" class="link">Contact</a></li>\n`;
        code += '\t\t\t</ul>\n';
        code += '\t\t\t<div class="find-us">\n';
        code += '\t\t\t\t<div class="insta">\n';
        code += `\t\t\t\t\t<a href="https://www.instagram.com/marie_alexandrine_yvernault"><img src="${path}img/icons/instagram.svg"\n`;
        code += '\t\t\t\t\talt="instagram logo"> marie_alexandrine_yvernault</a>\n';
        code += '\t\t\t\t</div>\n';
        code += '\t\t\t\t<div class="fb">\n';
        code += `\t\t\t\t\t<a href="${path}#"><img src="${path}img/icons/facebook.svg"\n`;
        code += '\t\t\t\t\talt="facebook logo"> marie_alexandrine_yvernault</a>\n';
        code += '\t\t\t\t</div>\n';
        code += '\t\t\t</div>\n';
        code += '\t\t</div>\n';
        code += '\t\t<p>© MARIE-ALEXANDRINE YVERNAULT 2022</p>\n';
        code += '\t\t<p>Made with ❤️ by <a href="https://github.com/ProfessorLaytom">Tom Dangleterre</a></p>\n';
        return code;
    }
    header.innerHTML = js_thml(path)
    footer.innerHTML = js_thml2(path)    
}

export default makeHeaderFooter