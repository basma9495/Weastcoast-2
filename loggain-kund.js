

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Hämta användarlistan från localStorage //
        const nykonto = JSON.parse(localStorage.getItem('nykonto')) || [];

        // Kolla användarnamn och lösenord i nykontolista//
        const user = nykonto.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Inloggning lyckades!');
           
            window.location.href = 'courses.html';
        } else {
            alert('Fel användarnamn eller lösenord. Försök igen.');
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        
    });

    
});



// Login-funktion
async function login(email, password) {
    try {
        // Skicka användardata till servern med Fetch API
        const response = await fetch('http://localhost:3000/nykonto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to log in.');
        }

        const data = await response.json();

        if (data.success) {
            alert('Login successful!');
            
            console.log(data.user);
            
            
        } else {
            alert('Invalid email or password.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}






