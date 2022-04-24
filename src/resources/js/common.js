/* document.addEventListener('load', () => {
    const failureText = document.getElementById('failure-to-load-due-to-too-small-width')
    const innerWrap = document.getElementsByClassName('viewport-inner-wrap')[0];
    if (window.innerWidth < 530) {
        failureText.style.display = 'block';
        innerWrap.style.display = 'none';
    };
}) */

window.addEventListener('resize', () => {
    const failureText = document.getElementById('failure-to-load-due-to-too-small-width')
    const innerWrap = document.getElementsByClassName('viewport-inner-wrap')[0];
    if (window.innerWidth < 530) {
        failureText.style.display = 'block';
        innerWrap.style.display = 'none';
    } else {
        failureText.style.display = 'none';
        innerWrap.style.display = 'block'
    };
})

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

const closeNav = () => {
    const toggled = document.querySelector('.sidenav-toggled');
    const sidebar = document.getElementById('sidenav');
    const main = document.getElementById('main');
    const viewport = document.querySelector('.viewport');

    if (toggled) {
        viewport.classList.remove('sidenav-toggled');
    }
}