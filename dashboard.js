document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard loaded');
    
    // Add interactivity to menu items
    const menuItems = document.querySelectorAll('.sidebar-menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
});