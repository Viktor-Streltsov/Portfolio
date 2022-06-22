document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

/**
 * contact data
 * IMG github -- <img src="images/github.png">
 */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<span><a href="mailto:${data.email}"><img src="images/protonmail.png"></a></span>`
document.querySelector('.contacts-block').innerHTML += `<span><a href="${data.GIThub}">GitHub</a></span>`
document.querySelector('.contacts-block').innerHTML += `<span><a href="https://t.me/${data.linkedin}"><img src="images/telegram.png"></a></span>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/**
 * Achievements
 */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item},</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;
