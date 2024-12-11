// Functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initially hide the comments section
commentWrapper.style.display = 'none';

// Add ARIA label to the button for accessibility
showHideBtn.setAttribute('aria-label', 'Show comments');

// Add ARIA role to the comment wrapper
commentWrapper.setAttribute('role', 'region');
commentWrapper.setAttribute('aria-live', 'polite');

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  
  if (showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
    showHideBtn.setAttribute('aria-label', 'Hide comments');
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    showHideBtn.setAttribute('aria-label', 'Show comments');
  }
};

// Functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// Prevent default form submission and call submitComment function
form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();
  
  // Ensure both fields are filled before adding the comment
  if (nameValue === '' || commentValue === '') {
    alert('Please enter both your name and a comment.');
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  // Set text content for name and comment
  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  // Append the name and comment to the list item
  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  // Clear the form fields
  nameField.value = '';
  commentField.value = '';
  
  // Ensure the form is focused back after submitting
  nameField.focus();
}
