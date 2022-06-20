const skills=document.querySelectorAll('.skill-name');
const filteredSkills=document.querySelector('.filtered-skills');
const clearBtn=document.getElementById('clear');
const jobPost=document.querySelectorAll('.job');

class JobFiltering{ 
  constructor(){
    this.storageOfSelectedSkills=[];
  }
  _addSkill(element){
    if (!this.storageOfSelectedSkills.includes(element.textContent)){
      let newListItem=document.createElement('li')
       newListItem.innerHTML=`${element.innerHTML}`;
       newListItem.classList.add('skill-name');
       filteredSkills.appendChild(newListItem);
       this.storageOfSelectedSkills.push(newListItem.textContent);
      this._updateJobs();
  }
  }

  _updateJobs(){
    jobPost.forEach(job=>{ 
      job.classList.remove('hidden')
    this.storageOfSelectedSkills.forEach(value =>{ 
     if (!job.getAttribute('data-skills').includes(value.toLowerCase()) ){
         job.classList.add('hidden'); 
    } 
    })
   })
  }

  _clear(){
    filteredSkills.innerHTML='';
    jobPost.forEach(job=>job.classList.remove('hidden'));
    this.storageOfSelectedSkills=[];
  }
  
  _removeSkillFromFilterBar(element){
    filteredSkills.removeChild(element);
    this.storageOfSelectedSkills.pop(element.textContent);
     this._updateJobs();
  }
}

let filterJobApp=new JobFiltering();

// console.log(filterJobApp._addSkill);

// event listener
skills.forEach(skill=>skill.addEventListener('click',(e)=>filterJobApp._addSkill(e.target)));

clearBtn.addEventListener('click',filterJobApp._clear)

filteredSkills.addEventListener('click',(e)=> filterJobApp._removeSkillFromFilterBar(e.target))









































// add new selected skill to te skill filtering bar

// function addSkill(element){
//     if (!storageOfSelectedSkills.includes(element.textContent)){
//         let newListItem=document.createElement('li')
//          newListItem.innerHTML=`${element.innerHTML}`;
//          newListItem.classList.add('skill-name');
//          filteredSkills.appendChild(newListItem);
//          storageOfSelectedSkills.push(newListItem.textContent);
//         updateJobs();
//     }
// }

  


//   function removeSkillFromFilterBar(element){
//       filteredSkills.removeChild(element);
//      storageOfSelectedSkills.pop(element.textContent);
//       updateJobs();
//       console.log(storageOfSelectedSkills,element)
      
// }


// // clear the filtered skill bar and also update the jobs by showing them all
//   function clear(){
//   filteredSkills.innerHTML='';
//   jobPost.forEach(job=>job.classList.remove('hidden'));
//   storageOfSelectedSkills=[];
//   }


//   // check whether the job contains the selected skills
//   function updateJobs(){
//    jobPost.forEach(job=>{ 
//      job.classList.remove('hidden')
//    storageOfSelectedSkills.forEach(value =>{ 
//     if (!job.getAttribute('data-skills').includes(value.toLowerCase()) ){
//         job.classList.add('hidden'); 
//    } 
//    })
//   })
// }







