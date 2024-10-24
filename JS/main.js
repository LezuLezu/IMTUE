console.log('The script has started running.');


document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.href;
    const menuItems = document.querySelectorAll('nav li a');

    menuItems.forEach(item => {
        if (item.href === currentUrl) {
            item.parentElement.classList.add('active');
        }
    });
});