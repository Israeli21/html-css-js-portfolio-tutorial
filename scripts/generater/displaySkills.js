let skillsHTML = ``;

mySkills.forEach((skill) => {
    skillsHTML += `
    <article>
        <img
            src="${skill.image}"
            alt="Experience icon"
            class="icon"
        />
        <div>
            <p>${skill.name}<p>
        </div>
    </article>
    `;
});

document.querySelector('.software-skills').innerHTML = skillsHTML;