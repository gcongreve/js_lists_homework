document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const form = document.querySelector('form');
   form.addEventListener('submit', handleInput);

   const deleteAll = document.querySelector('#delete-all');
   deleteAll.addEventListener('click', handleDeleteInput)
})


const averages = function (matchesOrWickets, runs) {
  if (matchesOrWickets === '0' && runs === '0' ){
    return '0'
  }
  const avr = (runs / matchesOrWickets)
  return avr.toFixed(2);
};

const handleInput = function (event) {

  event.preventDefault();

  const name = event.target.name.value;
  const position = event.target.position.value;
  const runs = event.target.runs.value;
  const matches = event.target.matches.value;
  const conceded = event.target.conceded.value;
  const wickets = event.target.wickets.value;



  const battingAverage = averages(matches, runs);
  const bowlingAverage = averages(wickets, conceded);

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

  const newBatAverage = document.createElement('p');
  newBatAverage.textContent = `Batting average: \n ${battingAverage}`;
  newListItem.appendChild(newBatAverage);

  const newBowlAverage = document.createElement('p');
  newBowlAverage.textContent = `Bowling average: \n ${bowlingAverage}`;
  newListItem.appendChild(newBowlAverage);


  const formInput = document.querySelector('#form-outer');
  formInput.reset();

  console.log(`${name}, ${position}, ${runs}, ${matches}`);

};

const handleDeleteInput = function (event) {
  const cricketList = document.querySelector('#list-of-things');
    cricketList.innerHTML = '';
}
