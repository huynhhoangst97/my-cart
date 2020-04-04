document.getElementById('menu-button').addEventListener('click', openSidebar);
document.querySelector('.close-sidebar').addEventListener('click', closeSidebar);
document.getElementById('cart-button').addEventListener('click', openSidebarCart);
document.querySelector('.close-sidebar-cart').addEventListener('click', closeSidebarCart);


function openSidebar() {
    document.getElementById('menu-button').style.visibility = "hidden";
    document.querySelector('.sidebar').style.visibility = "visible";
    document.querySelector('.sidebar').style.opacity = '0.6';
}

function closeSidebar() {
    document.getElementById('menu-button').style.visibility = "visible";
    document.querySelector('.sidebar').style.visibility = "hidden"
    document.querySelector('.sidebar').style.opacity = '0';
}


function openSidebarCart() {
    document.getElementById('cart-button').style.visibility = "hidden";
    document.querySelector('.sidebar-cart').style.visibility = "visible";
    document.querySelector('.sidebar-cart').style.opacity = '1';
    document.querySelector('.cover').style.visibility = "visible";
    document.querySelector('.cover').style.opacity = '0.5';
}

function closeSidebarCart() {
    document.getElementById('cart-button').style.visibility = "visible";
    document.querySelector('.sidebar-cart').style.visibility = "hidden"
    document.querySelector('.sidebar-cart').style.opacity = '0';
    document.querySelector('.cover').style.visibility = "hidden";
    document.querySelector('.cover').style.opacity = '0';
}

