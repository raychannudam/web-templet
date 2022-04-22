const toggleSidebar = () => {
    const toggled = document.querySelector('.sidenav-toggled');
    const sidebar = document.getElementById('sidenav');
    const main = document.getElementById('main');
    const viewport = document.querySelector('.viewport');

    if (toggled) {
        viewport.classList.remove('sidenav-toggled');
    } else {
        viewport.classList.add('sidenav-toggled');
    }
}