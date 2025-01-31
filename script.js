document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.parentElement.classList.toggle('open');
    });

    dropdownMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            dropdownToggle.textContent = event.target.textContent;
            dropdownMenu.parentElement.classList.remove('open');
        }
    });

    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.parentElement.classList.remove('open');
        }
    });
});