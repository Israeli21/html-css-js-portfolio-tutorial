let bodyHTML = ``;

projects.forEach((project) => {
    let skillsUsed = ``;

    project.skills.forEach((skill) => {
        skillsUsed += `
        <img src="${skill}" alt="Experience icon" class="icon"/>`;
    });

    bodyHTML += `
        <div class = "details-container project-container">
            <div class = "article-container">
                <img src="${project.thumbnail}" alt="Project 3" class = "project-img">
            </div>
            <h2 class = "experience-sub-title project-title">${project.name}</h2>
            <div class = "btn-container">
                ${skillsUsed}
                <button class = "btn btn-color-2 project-btn" onclick="window.open('${project.link}', '_blank')">
                Gitbub
                </button>
                <!-- <button class = "btn btn-color-2 project-btn" onclick="window.open('https://github.com', '_blank')">
                Live Demo
                </button> -->
            </div>
        </div>
    `;
});

document.querySelector('.projects-scroll-container').innerHTML = bodyHTML;