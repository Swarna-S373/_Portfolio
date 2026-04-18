const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

const onScrollSections = () => {
    const sectionsWithBackground = document.querySelectorAll('.section');
    sectionsWithBackground.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            section.classList.add('visible');
        }
    });
};

const onScrollProjects = () => {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            project.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', onScrollSections);
window.addEventListener('scroll', onScrollProjects);
onScrollSections(); // Trigger immediately when the page loads
onScrollProjects(); // Trigger immediately when the page loads

const sectionsWithBackground = document.querySelectorAll('.section');

    const onScrollBackground = () => {
        sectionsWithBackground.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScrollBackground);
    onScrollBackground();