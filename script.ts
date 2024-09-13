
// Grabbing the form and output elements
 document.getElementById("resume-form")?. addEventListener("submit", (event: Event) => {
  event.preventDefault();


  const profilePictureInput =document.getElementById("profilePicture") as HTMLInputElement;
  // Getting the values of each field
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  const educationElement =document.getElementById("education") as HTMLTextAreaElement;
  const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
  const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

  // Simple validation check
  if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

    const name=nameElement.value
    const email=emailElement.value
const phone=phoneElement.value
const education=educationElement.value
const experience=educationElement.value
const skills=skillsElement.value
  
const profilePictureFile =profilePictureInput.files?.[0]
const profilePictureURL =profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


  // Creating the resume content dynamically
  const resumeOutput = `
  <h2>Resume</h2>
  ${profilePictureURL ?`<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">` : ''}
    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span></p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
    <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
   
    <h3>Education</h3>
    <p id="edit-education" class="editable"> ${education}</p>

    <h3>Experience</h3>
    <p id="edit-experience" class="editable"> ${experience}</p>

    <h3>Skills</h3>
    <p id="edit-skills" class="editable"> ${skills}</p>
  `;
  





  // Setting the generated content into the resume output div
  const resumeOutputElement =document.getElementById("resumeOutput");
if(resumeOutputElement){
  resumeOutputElement.innerHTML=resumeOutput;
  makeEditable();
}
}else{
  console.error("one or more output elements are missing");
  

  }
});

function makeEditable(){
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach(element =>{
    element.addEventListener("click",function(){
      const currentElement =element as HTMLElement;
      const currentValue =currentElement.textContent || "" ;

      if(currentElement.tagName==="p" || currentElement.tagName==="span"){
        const input =document.createElement("input")
        input.type ="text"
        input.value =currentValue
        input.classList.add("editing-input")

        currentElement.style.display ="none"
        currentElement.parentNode?.insertBefore(input,currentElement)
        input.focus()
      }
    })
  })
}