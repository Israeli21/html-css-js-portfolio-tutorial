let softwareHTML = ``;

softwareSkills.forEach((skill) => {
    softwareHTML += `
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

document.querySelector('.software-skills').innerHTML = softwareHTML;