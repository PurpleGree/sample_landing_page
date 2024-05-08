const navMenu = document.getElementById("nav-menu-btn");

navMenu.onclick= function changeMenuIcon(){
    
    let menuImg= document.getElementById("nav-menu");
    let header = document.getElementById("header");
    let oldMenuSrc ="./Assets/Hamburger Menu.svg";
    let newMenuSrc ="./Assets/nav_close.svg";
    let header_attrib;

    if(menuImg.getAttribute("src") === newMenuSrc){
        menuImg.setAttribute("src", oldMenuSrc);
        header_attrib = "black-bg page-header" 
    }

    else{
        menuImg.setAttribute("src", newMenuSrc);
        header_attrib = header.getAttribute("class") + " menu-btn-onclick";
        
    }
    header.setAttribute("class",header_attrib);
}



