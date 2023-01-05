const mainmenu = document.querySelector('.mainMain')
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('openmenu');

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show() {
    mainmenu.style.display = 'flex';
    mainmenu.style.top = 0;
}

function close() {
    mainmenu.style.top = '-100%'; 
}