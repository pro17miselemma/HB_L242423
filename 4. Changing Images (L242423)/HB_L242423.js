function checkScreenSize () {
    if(window.matchMedia('(max-width: 768px)').matches) {
        document.body.classList.add('mobile')
    } else {
        docuemnt.body.classList.remove('mobile')
    }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);