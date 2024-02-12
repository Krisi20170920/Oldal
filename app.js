kep = document.querySelector('img')

function gomb(){
    kep.style.visibility = 'hiddin';
}


function refreshImage() {
    var img = document.querySelector('img');
    img.src = img.src + '?' + new Date().getTime();
}

function toggleLogo() {
    var logo = document.querySelector('.logo');
    logo.classList.toggle('hidden');
}
