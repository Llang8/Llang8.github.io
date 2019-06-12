function toggleNav() {
    if(document.getElementById('nav').classList.contains('nav-active')) {
        document.getElementById('nav').classList.remove('nav-active');
    } else {
        document.getElementById('nav').classList.add('nav-active');
    }
}