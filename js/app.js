document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  //EventListener 'listens' for the form being submitted then tells the handleInput function to carry out its actions.
  const form = document.querySelector('form');
   form.addEventListener('submit', handleInput);

   //button to delete eveything
   const deleteAll = document.querySelector('#delete-all');
   deleteAll.addEventListener('click', handleDeleteInput)
})

//handle input will run when ever the form is sumbitted
const handleInput = function (event) {
  // prevents the default action of a form being submitted, which is to change page.
  event.preventDefault();
  // creating new variables for the name / position and average fields, gets information from the form fields.  event.target.name.value = name
  const name = event.target.name.value;
  const position = event.target.position.value;
  const average = event.target.average.value;


  //creates a new unordered list item with the css class of 'cricketer'
  //puts it into the div class of #list of things
  const newListItem = document.createElement('div');
  newListItem.classList.add('cricketer');

  const cricketList = document.querySelector('#list-of-things');
  cricketList.appendChild(newListItem);

  const newName = document.createElement('h2');
  newName.textContent = `Name: ${name}`
  newListItem.appendChild(newName);

  const newPosition = document.createElement('h4');
  newPosition.textContent = `Position: ${position}`;
  newListItem.appendChild(newPosition);

  const newAverage = document.createElement('h6');
  newAverage.textContent = `Average: \n ${average}`;
  newListItem.appendChild(newAverage);

  //removes the old entries from the form
  const formInput = document.querySelector('#form-outer');
  formInput.reset();

  console.log(`${name}, ${position}, ${average}`);

};

const handleDeleteInput = function (event) {
  const cricketList = document.querySelector('#list-of-things');
    cricketList.innerHTML = '';
}
//end of handleInput
