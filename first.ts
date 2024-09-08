// I Have Mentioned Each Thing Why It Is Used Because It Is For Explanation /

// Ensure the document elements are properly accessed and type-casted
const generateResumeBtn = document.getElementById('generateResume') as HTMLButtonElement;
const downloadPdfBtn = document.getElementById('downloadPdf') as HTMLButtonElement;

generateResumeBtn.addEventListener('click', () => {
  // Get form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n');
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n');
  const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value.split('\n');

  // Update resume content
  const displayName = document.getElementById('display-name') as HTMLElement;
  const displayContact = document.getElementById('display-contact') as HTMLElement;
  const displayEducation = document.getElementById('display-education') as HTMLElement;
  const displaySkills = document.getElementById('display-skills') as HTMLElement;
  const displayWorkExperience = document.getElementById('display-work-experience') as HTMLElement;

  if (displayName && displayContact && displayEducation && displaySkills && displayWorkExperience) {
    displayName.textContent = name;
    displayContact.textContent = `Email: ${email} | Phone: ${phone}`;
    displayEducation.innerHTML = education.map(item => `<li>${item}</li>`).join('');
    displaySkills.innerHTML = skills.map(item => `<li>${item}</li>`).join('');
    displayWorkExperience.innerHTML = workExperience.map(item => `<li>${item}</li>`).join('');

    // Show resume container
    const resumeContainer = document.getElementById('resume') as HTMLElement;
    if (resumeContainer) {
      resumeContainer.style.display = 'block';
    }
  }
});

// Handle PDF download


import html2pdf from 'html2pdf.js';

downloadPdfBtn.addEventListener('click', () => {
  const resumeContainer = document.getElementById('resume') as HTMLElement;
  
  if (resumeContainer) {
    const opt = {
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().from(resumeContainer).set(opt).save();
  }
});
