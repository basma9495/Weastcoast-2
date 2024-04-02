document.addEventListener('DOMContentLoaded', async function () {
    const addCourseForm = document.getElementById('nyCourseForm');

    // Ladda kursdata från localStorage //
    let courses = JSON.parse(localStorage.getItem('courses')) || [];

    //  uppdatera localStorage med kursdata //
    const updateLocalStorage = () => {
        localStorage.setItem('courses', JSON.stringify(courses));
    };

    addCourseForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const title = document.getElementById('courseTitle').value;
        const number = document.getElementById('courseNumber').value;
        const duration = parseInt(document.getElementById('courseDuration').value);
        const type = document.getElementById('courseType').value;
        const date = document.getElementById('courseDate').value;
        const bookingOption = document.getElementById('bookingOption').value;

        const newCourse = { title, number, duration, type, date, bookingOption };

        try {
            // Skicka nya kursen till servern
            const response = await fetch('http://localhost:3000/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCourse),
            });

            if (!response.ok) {
                throw new Error('Failed to add new course.');
            }

            // Lägg till den nya kursen i den lokala datan//
            courses.push(newCourse);

            // Uppdatera localStorage//
            updateLocalStorage();

            alert('Course added successfully!');
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Hämta befintlig data från servern vid sidans inläsning//
    try {
        const response = await fetch('http://localhost:3000/courses');
        if (response.ok) {
            const data = await response.json();
    
            courses = data;
            updateLocalStorage();
        }
    } catch (error) {
        console.error('Error fetching courses from server:', error);
    }
});

document.getElementById('kundlista').addEventListener('click', function() {
    window.location.href = 'kundlista.html';
});
