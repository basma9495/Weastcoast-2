document.addEventListener('DOMContentLoaded', async function () {
    
    const urlParams = new URLSearchParams(window.location.search);
    const userEmail = urlParams.get('email');

    try {
        
        const userCourses = await fetchUserCourses(userEmail);

        
        const userCoursesListContainer = document.getElementById('userCoursesList');
        userCourses.forEach((course) => {
            const courseElement = document.createElement('div');
            courseElement.innerHTML = `
            <span style="color: white;">${course.fornamn}</span>
            <span style="color: white;">${course.efternamn} -</span>
            <span style="color: white;">${course.userEmail} -</span>
            <span style="color: white;">${course.selectedCourse}</span>
        `;

            



            userCoursesListContainer.appendChild(courseElement);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

async function fetchUserCourses(email) {
    try {
        const response = await fetch(`http://localhost:3000/userCourses`);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            console.log(response.status);
        }
    } catch (error) {
        console.log(error);
    }
}
