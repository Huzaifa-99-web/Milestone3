//listing 
document.getElementById('resumeForm')?.addEventListener('submit',function(event) {
    event.preventDefault();

const nameElement =document.getElementById('name') as HTMLInputElement;
const emailElement =document.getElementById('email') as HTMLInputElement;
const phoneElement =document.getElementById('phone') as HTMLInputElement;
const educationElement =document.getElementById('education') as HTMLInputElement;
const experienceElement =document.getElementById('experience') as HTMLInputElement;
const skillsElement =document.getElementById('skills') as HTMLInputElement;
   


if(nameElement  && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement. value;
    const skills = skillsElement.value;





const resumeoutput = `
<h2> Resume </h2> 
<p><strong>Name:</strong> ${name} </p>
<p><strong>Email:</strong> ${email} </p>
<p><strong>Phone no:</strong> ${phone} </p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>`;


const resumeoutputElement = document.getElementById('resumeoutput')
if(resumeoutputElement){
    resumeoutputElement .innerHTML = resumeoutput
}
else{
    console.error('the resume output element are missing')
}
} else{
    console.error('one or more  output element are missing')
}
});