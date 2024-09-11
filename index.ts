document.getElementById("resumeOutput")?.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Type assertion for inputs
    const nameElement = document.getElementById("name") as HTMLInputElement | null;  
    const emailElement = document.getElementById("email") as HTMLInputElement | null;  
    const phoneElement = document.getElementById("phone") as HTMLInputElement | null;  
    const educationElement = document.getElementById("education") as HTMLInputElement | null;  
    const experienceElement = document.getElementById("experience") as HTMLInputElement | null;  
    const skillsElement = document.getElementById("skills") as HTMLInputElement | null; 
  
    // Ensure all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      
      // Output generation
      const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
      `;
      
      // Assuming there is an element with ID 'resumeContainer' to display the output
      const outputElement = document.getElementById("resumeContainer");
      if (outputElement) {
        outputElement.innerHTML = resumeOutput;
      }
    }
  });
  