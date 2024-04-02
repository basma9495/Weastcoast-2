
document.addEventListener('DOMContentLoaded', function () {
   
    const navbarContainer = document.getElementById('navbar');

   
    if (!navbarContainer) {
        console.error('Element with id "navbar" not found.');
        return;
    }

  
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            
            navbarContainer.innerHTML = this.responseText;
        }
    };

 
    xhr.open('GET', 'navbar.html', true);
    xhr.send();
});
