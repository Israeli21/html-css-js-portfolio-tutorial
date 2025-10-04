let dataHTML = ``;

dataSkills.forEach((skill) => {
    dataHTML += `
    <article>
        <img
            src="${skill.image}"
            alt="Experience icon"
            class="icon"
        />
        <div>
            <h3>${skill.name}</h3>
        </div>
    </article>
    `;
});

document.querySelector('.data-skills').innerHTML = dataHTML;