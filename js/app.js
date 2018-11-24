document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const form = document.querySelector('form');
   form.addEventListener('submit', handleInput);

   const deleteAll = document.querySelector('#delete-all');
   deleteAll.addEventListener('click', handleDeleteInput)
})


const averages = function (matches, runs) {
  return (runs / matches)
};

const handleInput = function (event) {

  event.preventDefault();

  const name = event.target.name.value;
  const position = event.target.position.value;
  const runs = event.target.runs.value;
  const matches = event.target.matches.value;

  const average = averages(matches, runs);

  const newListItem = document.createElement('div');
  newListItem.classList.add('cricketer');

  const cricketList = document.querySelector('#list-of-things');
  cricketList.appendChild(newListItem);

  const newName = document.createElement('h4');
  newName.textContent = `Name: ${name}`
  newListItem.appendChild(newName);

  const newPosition = document.createElement('h6');
  newPosition.textContent = `Position: ${position}`;
  newListItem.appendChild(newPosition);

  const newAverage = document.createElement('p');
  newAverage.textContent = `Batting average: \n ${average}`;
  newListItem.appendChild(newAverage);

  const formInput = document.querySelector('#form-outer');
  formInput.reset();

  console.log(`${name}, ${position}, ${runs}, ${matches}`);

};

const handleDeleteInput = function (event) {
  const cricketList = document.querySelector('#list-of-things');
    cricketList.innerHTML = '';
}
