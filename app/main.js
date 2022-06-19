const skills=document.querySelectorAll('.skill-name');
const filteredSkills=document.querySelector('.filtered-skills');
const clearBtn=document.getElementById('clear');
const jobPost=document.querySelectorAll('.job');
let storageOfSelectedSkills=[];

// event listener
skills.forEach(skill=>skill.addEventListener('click',(e)=>addSkill(e.target)));

clearBtn.addEventListener('click',clear)

filteredSkills.addEventListener('click',(e)=>removeSkillFromFilterBar(e.target))

// add new selected skill to te skill filtering bar

function addSkill(element){
    if (!storageOfSelectedSkills.includes(element.textContent)){
        let newListItem=document.createElement('li')
         newListItem.innerHTML=`${element.innerHTML}`;
         newListItem.classList.add('skill-name');
         filteredSkills.appendChild(newListItem);
         storageOfSelectedSkills.push(newListItem.textContent);
        updateJobs();
    }
}

  


  function removeSkillFromFilterBar(element){
      filteredSkills.removeChild(element);
     storageOfSelectedSkills.pop(element.textContent);
      updateJobs();
      
}


// clear the filtered skill bar and also update the jobs by showing them all
  function clear(){
  filteredSkills.innerHTML='';
  jobPost.forEach(job=>job.classList.remove('hidden'));
  storageOfSelectedSkills=[];
  }


  // check whether the job contains the selected skills
  function updateJobs(){
   jobPost.forEach(job=>{ 
     job.classList.remove('hidden')
   storageOfSelectedSkills.forEach(value =>{ 
    if (!job.getAttribute('data-skills').includes(value.toLowerCase()) ){
        job.classList.add('hidden'); 
   } 
   })
  })
}








