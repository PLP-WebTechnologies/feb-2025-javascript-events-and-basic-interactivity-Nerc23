

// ------Event Handling -------------

// Button click 
const myButton = document.getElementById('myButton');
if (myButton) {
  myButton.addEventListener('click', () => {
    console.log('Button clicked!');
    
  });
}

// Hover effects 
const hoverElement = document.getElementById('hoverElement');
if (hoverElement) {
  hoverElement.addEventListener('mouseover', () => {
    hoverElement.style.backgroundColor = 'lightblue';
  });
  hoverElement.addEventListener('mouseout', () => {
    hoverElement.style.backgroundColor = ''; // Revert to original
  });
}

// Keypress detection 
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
  }
});

// Bonus
const doubleClickElement = document.getElementById('doubleClickElement');
if (doubleClickElement) {
  doubleClickElement.addEventListener('dblclick', () => {
    alert('Secret double-click action!');
  });
}

// For long press 
const longPressButton = document.getElementById('longPressButton');
if (longPressButton) {
  let timer;
  const longPressDelay = 1500; 

  longPressButton.addEventListener('mousedown', () => {
    timer = setTimeout(() => {
      alert('Secret long press action!');
    }, longPressDelay);
  });

  longPressButton.addEventListener('mouseup', () => {
    clearTimeout(timer);
  });

  longPressButton.addEventListener('mouseleave', () => {
    clearTimeout(timer);
  });
}

// -------Interactive Elements 

const changeButton = document.getElementById('changeButton');
if (changeButton) {
  changeButton.addEventListener('click', () => {
    if (changeButton.textContent === 'Click Me') {
      changeButton.textContent = 'Clicked!';
      changeButton.style.backgroundColor = 'lightgreen';
    } else {
      changeButton.textContent = 'Click Me';
      changeButton.style.backgroundColor = '';
    }
  });
}

// An image gallery
const galleryImages = document.querySelectorAll('.gallery-image');
let currentIndex = 0;

function showImage(index) {
  galleryImages.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
}

// Initialize gallery if images exist
if (galleryImages.length > 0) {
  showImage(currentIndex); // Show the first image initially

  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    nextButton.addEventListener('click', nextImage);
  }

  const prevButton = document.getElementById('prevButton');
  if (prevButton) {
    prevButton.addEventListener('click', prevImage);
  }
}

// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function showTab(tabId) {
  tabContents.forEach(content => {
    content.style.display = 'none';
  });
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });

  const selectedTab = document.getElementById(tabId);
  const selectedButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);

  if (selectedTab) {
    selectedTab.style.display = 'block';
  }
  if (selectedButton) {
    selectedButton.classList.add('active');
  }
}

// Initialize tabs if they exist
if (tabButtons.length > 0 && tabContents.length > 0) {
  // Show the first tab by default
  if (tabButtons[0]) {
    showTab(tabButtons[0].getAttribute('data-tab'));
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      showTab(tabId);
    });
  });
}

// Bonus
const animatedElement = document.getElementById('animatedElement');
if (animatedElement) {
  animatedElement.addEventListener('mouseover', () => {
    animatedElement.classList.add('animate-fade'); // Assuming you have CSS rule for .animate-fade
  });
  animatedElement.addEventListener('mouseout', () => {
    animatedElement.classList.remove('animate-fade');
  });
}

// --Form Validation --

const form = document.getElementById('myForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    validateForm();
  });

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  function validateForm() {
    let isValid = true;

    // Required field checks
    if (!nameInput.value.trim()) {
      displayError(nameError, 'Name is required');
      isValid = false;
    } else {
      clearError(nameError);
    }

    if (!emailInput.value.trim()) {
      displayError(emailError, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      displayError(emailError, 'Invalid email format');
      isValid = false;
    } else {
      clearError(emailError);
    }

    // Password rules
    if (!passwordInput.value) {
      displayError(passwordError, 'Password is required');
      isValid = false;
    } else if (passwordInput.value.length < 8) {
      displayError(passwordError, 'Password must be at least 8 characters long');
      isValid = false;
    } else {
      clearError(passwordError);
    }

    if (isValid) {
      alert('Form submitted successfully!'); 
    }
  }

  function isValidEmail(email) {
    // Basic email format validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function displayError(element, message) {
    element.textContent = message;
    element.style.color = 'red';
  }

  function clearError(element) {
    element.textContent = '';
  }

  // Bonus
  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
      displayError(emailError, 'Invalid email format');
    } else {
      clearError(emailError);
    }
  });

  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
      displayError(passwordError, 'Password must be at least 8 characters long');
    } else {
      clearError(passwordError);
    }
  });
}
