
// Elements
const customname = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Story elements defults
const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then turned into a slug and crawled away. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

// random value creator
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Main result function
function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);

    if (customname.value !== '') {
        const name = customname.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById('uk').checked) {
        const weight = Math.round(300 * 0.0714286) + ' stone';
        const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
// to get the answer
randomize.addEventListener('click', result);
