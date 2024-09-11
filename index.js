// document.getElementById("resumeOutput")?.addEventListener("submit", function (event) {
//     event.preventDefault();
var _a;
//     // Type assertion for inputs
//     const nameElement = document.getElementById("name") as HTMLInputElement | null;  
//     const emailElement = document.getElementById("email") as HTMLInputElement | null;  
//     const phoneElement = document.getElementById("phone") as HTMLInputElement | null;  
//     const educationElement = document.getElementById("education") as HTMLInputElement | null;  
//     const experienceElement = document.getElementById("experience") as HTMLInputElement | null;  
//     const skillsElement = document.getElementById("skills") as HTMLInputElement | null; 
//     // Ensure all elements are present
//     if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
//       const name = nameElement.value;
//       const email = emailElement.value;
//       const phone = phoneElement.value;
//       const education = educationElement.value;
//       const experience = experienceElement.value;
//       const skills = skillsElement.value;
//       // Output generation
//       const resumeOutput = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Education:</strong> ${education}</p>
//         <p><strong>Experience:</strong> ${experience}</p>
//         <p><strong>Skills:</strong> ${skills}</p>
//       `;
//       // Assuming there is an element with ID 'resumeContainer' to display the output
//       const outputElement = document.getElementById("resumeContainer");
//       if (outputElement) {
//         outputElement.innerHTML = resumeOutput;
//       }
//     }
//   });
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertion for input and textarea elements
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // Ensure all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Output generation
        var resumeOutput = "\n      <h2>Resume</h2>\n      <p><strong>Name:</strong> ".concat(name_1, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Education:</strong> ").concat(education, "</p>\n      <p><strong>Experience:</strong> ").concat(experience, "</p>\n      <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
        // Assuming there is an element with ID 'resumeOutput' to display the output
        var outputElement = document.getElementById("resumeOutput");
        if (outputElement) {
            outputElement.innerHTML = resumeOutput;
        }
    }
});
