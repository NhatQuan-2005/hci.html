// lesson.js
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');

    const lessons = {
        django: {
            title: 'All about Django Python',
            pdf: 'path_to_django_python.pdf',
            topics: ['Introduction', 'Setting Up the Development Environment', 'Django Basic', 'Django Advanced Concepts', 'Pythonanywhere', 'Syllabus']
        },
        fee: {
            title: 'FEE',
            pdf: 'path_to_fee.pdf',
            topics: ['Introduction', 'Overview', 'Concepts', 'Final Exam Preparation']
        },
        hibernate: {
            title: 'Hibernate',
            pdf: 'path_to_hibernate.pdf',
            topics: ['Introduction to Hibernate', 'Mapping', 'Advanced Features']
        },
        mock: {
            title: 'Java Mock Project',
            pdf: 'path_to_java_mock_project.pdf',
            topics: ['Overview', 'Project Setup', 'Implementation']
        },
        java: {
            title: 'Java Programming Language',
            pdf: 'path_to_java_programming.pdf',
            topics: ['Introduction', 'Basic Syntax', 'Object-Oriented Programming']
        },
        spring: {
            title: 'Java Spring Framework',
            pdf: 'path_to_spring_framework.pdf',
            topics: ['Introduction', 'Dependency Injection', 'Spring Boot', 'Spring Security']
        }
    };

    if (lessonParam && lessons[lessonParam]) {
        const lesson = lessons[lessonParam];
        document.getElementById('lesson-title').textContent = lesson.title;
        document.getElementById('lesson-pdf').src = lesson.pdf;

        const lessonList = document.getElementById('lesson-list');
        lesson.topics.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            lessonList.appendChild(li);
        });
    } else {
        document.getElementById('lesson-title').textContent = 'Lesson Not Found';
        document.getElementById('lesson-pdf').src = '';
    }
});
