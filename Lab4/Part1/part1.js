const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Storing the big long string in a variable
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Storing the first set of three strings in an array
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

// Storing the second set of three strings in an array
const insertY = ["the soup kitchen", "Disneyland", "the White House"];

// Storing the third set of three strings in an array
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

  
  function result() {
    // Create a new variable for the story
    let newStory = storyText;
  
    // Generate random values for placeholders
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
  
    // Replace placeholders in newStory with random values
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem); // Replace second occurrence of :insertx:
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
  
    // Replace 'Bob' with the custom name if entered
    if (customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Bob', name);
    }
  
    // Convert to UK units if the UK radio button is selected
    if (document.getElementById("uk").checked) {
      const weight = Math.round(300 / 14) + ' stone'; // Convert pounds to stones
      const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade'; // Convert Fahrenheit to Celsius
  
      // Replace original weight and temperature in the story
      newStory = newStory.replace('94 fahrenheit', temperature);
      newStory = newStory.replace('300 pounds', weight);
    }
  
    // Update the story text in the DOM and make it visible
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }