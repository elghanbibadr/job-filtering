const skills=document.querySelectorAll('.skill-name');
const filteredSkills=document.querySelector('.filtered-skills');
const clearBtn=document.getElementById('clear')

skills.forEach(skill=>skill.addEventListener('click',(e)=>addSkill(e.target)));

clearBtn.addEventListener('click',clear)

function addSkill(element){
    let newListItem=document.createElement('li')
     newListItem.innerHTML=`${element.innerHTML}`;
     newListItem.classList.add('skill-name');
     filteredSkills.appendChild(newListItem);

//  console.log(filteredSkills)
}


function clear(){
filteredSkills.innerHTML='';
}