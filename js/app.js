document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const cricketForm = document.querySelector('form');
   cricketForm.addEventListener('submit', handleInputNewCricketer);

   const deleteAll = document.querySelector('#delete-all');
   deleteAll.addEventListener('click', handleDeleteInput)

   const deleteOne = document.querySelector('#delete-one');
   deleteOne.addEventListener('click', handleDeleteOneInput)


})

//averages function
const averages = function (matchesOrWickets, runs) {
  if (matchesOrWickets === '0' || runs === '0'){
    return '~'
  }
  const avr = (runs / matchesOrWickets)
  return avr.toFixed(2);
};


const handleInputNewCricketer = function (event) {
  event.preventDefault();

  const newCricketer = createNewCricketer(event.target);
  const cricketList = document.querySelector('#list-of-things');
  cricketList.appendChild(newCricketer);

  event.target.reset();
};



const createNewCricketer = function (form) {

  const name = form.name.value;
  const position = form.position.value;
  const runs = form.runs.value;
  const matches = form.matches.value;
  const conceded = form.conceded.value;
  const wickets = form.wickets.value;

  const battingAverage = averages(matches, runs);
  const bowlingAverage = averages(wickets, conceded);

  const newListItem = document.createElement('li');
  newListItem.classList.add('cricketer');

  const newName = document.createElement('h4');
  newName.textContent = `${name}`
  newListItem.appendChild(newName);

  // const newPosition = document.createElement('h6');
  // newPosition.textContent = `${position}`;
  // newListItem.appendChild(newPosition);

  const cricketPicture = document.createElement('img')
  cricketPicture.src = `css/images/${position}.jpg`
  newListItem.appendChild(cricketPicture);

  const newRuns = document.createElement('p');
  newRuns.textContent = `Runs: \n ${runs}`;
  newListItem.appendChild(newRuns);

  const newBatAverage = document.createElement('p');
  newBatAverage.textContent = `Batting average: \n ${battingAverage}`;
  newListItem.appendChild(newBatAverage);

  const newWickets = document.createElement('p');
  newWickets.textContent = `Wickets: \n ${wickets}`;
  newListItem.appendChild(newWickets);

  const newBowlAverage = document.createElement('p');
  newBowlAverage.textContent = `Bowling average: \n ${bowlingAverage}`;
  newListItem.appendChild(newBowlAverage);

  return newListItem;

  console.log(`${name}, ${position}, ${runs}, ${matches}`);

};

const handleDeleteInput = function (event) {
  const cricketList = document.querySelector('#list-of-things');
    cricketList.innerHTML = '';
}

const handleDeleteOneInput = function (event) {
  const cricketList = document.querySelector('#list-of-things');
    let lc = (cricketList.children.length - 1)
    cricketList.children[lc].remove();
}
