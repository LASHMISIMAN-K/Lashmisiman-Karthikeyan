const sideMenu = document.getElementById('sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav > ul');

// ensure side menu starts closed (off-screen to the right)
if (sideMenu) {
    sideMenu.style.right = '-16rem';
}

function openMenu(){
    if (!sideMenu) return;
    sideMenu.style.right = '0';
}

function closeMenu(){
    if (!sideMenu) return;
    sideMenu.style.right = '-16rem';
}

window.addEventListener('scroll', ()=>{
    const sc = window.scrollY || window.pageYOffset;
    if (!navBar) return;
    if (sc > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50','backdrop-blur-lg','shadow-sm')
        if (navLinks) navLinks.classList.add('bg-white', 'bg-opacity-50','shadow-sm')
    }
    else{
        navBar.classList.remove('bg-white', 'bg-opacity-50','backdrop-blur-lg','shadow-sm')
        if (navLinks) navLinks.classList.remove('bg-white', 'bg-opacity-50','shadow-sm')
    }
})

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark');
}
else{
    document.documentElement.classList.remove('dark');
}

function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}