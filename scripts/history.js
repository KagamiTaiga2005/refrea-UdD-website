//DROPDOWN
const aboutDropdown = document.querySelector('.js-about-us-dropdown');

document.querySelector('.js-about-us')
  .addEventListener('click', () => {
    if (!aboutDropdown.classList.contains('about-dropdown-visible')) {
      aboutDropdown.classList.add('about-dropdown-visible');
    } else {
      aboutDropdown.classList.remove('about-dropdown-visible');
    }
  });

const scrollUp = document.querySelector('.js-scroll-up-button');

scrollUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 270) {
    scrollUp.classList.add('scroll-up-button-visible');
  } else {
    scrollUp.classList.remove('scroll-up-button-visible');
  }
});

// document.querySelector('.js-pvmo-scroll')
//   .addEventListener('click', () => {
//     window.scrollTo(0, 2100);
//   });

//DROPDOWN

//CHATBOT
const chatbotToggler = document.querySelector('.js-chatbot-toggler');
const chatbotContainer = document.querySelector('.js-chatbot-container');

chatbotToggler.addEventListener('click', () => {
  if (!chatbotToggler.classList.contains('chatbot-toggler-rotate')) {
    chatbotToggler.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    chatbotToggler.classList.add('chatbot-toggler-rotate');
    chatbotContainer.classList.add('chatbot-visible');

  } else {
    chatbotToggler.innerHTML = '<i class="fa-solid fa-robot"></i>';
    chatbotToggler.classList.remove('chatbot-toggler-rotate');
    chatbotContainer.classList.remove('chatbot-visible');
  }
  
});


let sentAvailability = true;
let enrollButton = true;
let programsButton = true;
let scholarshipButton = true;
let yesButton = true;
let noButton = true;

const convoContainer = document.querySelector('.js-chatbox-convo-container');
const userInputElement = document.querySelector('.js-user-input');
const sendButton = document.querySelector('.js-send-button');

function sendFunction() {
  convoContainer.innerHTML = '';
  const userInput = userInputElement.value;
  convoContainer.innerHTML += `<div class="user-convo-grid">
                  <div class="user-chat">
                    <p>${userInput}</p>
                  </div>
                </div>`;
  convoContainer.scrollTo(0, convoContainer.scrollHeight);
  userInputElement.value = '';
  yesFunc();
}

function yesFunc() {
  if (yesButton && noButton) {
    yesButton = false;
    noButton = false;
    enrollButton = true;
    programsButton = true;
    scholarshipButton = true;
    setTimeout(() => {
      convoContainer.innerHTML += `<div class="bot-convo-grid">
                      <div class="droid-container">
                        <div class="droid-profile">
                          <i class="fa-solid fa-robot droid"></i>
                      </div>
                    </div>
                      <div class="droid-chat">
                        <p>Welcome to UdDroid! Just pick an option below, and let's get started on helping you out!</p>
                      </div>
                    </div>`;
    convoContainer.scrollTo(0, convoContainer.scrollHeight);
    }, 1000);

    setTimeout(() => {
      convoContainer.innerHTML += `
        <div class="choices js-choices">
          <button class="js-choices-1 choices-button" onclick="enrollmentFunc()">Enrollment Requirements</button>
          <button class="js-choices-2 choices-button" onclick="programsOfferedFunc()">Programs Offered</button>
          <button class="js-choices-3 choices-button" onclick="presScholarshipFunc()">Presidential Scholarship</button>
        </div>
      `;
      convoContainer.scrollTo(0, convoContainer.scrollHeight);
      
    }, 2000); 
  }
}

function presScholarshipFunc() {
  if (scholarshipButton) {
    scholarshipButton = false;
    programsButton = false;
    enrollButton = false;
    setTimeout(() => {
      convoContainer.innerHTML += `
      <div class="bot-convo-grid">
        <div class="droid-container">
          <div class="droid-profile">
            <i class="fa-solid fa-robot droid"></i>
          </div>
        </div>
        <div class="droid-chat">
          <p style="font-weight: 600; font-style: italic;">PRES. SCHOLARSHIP PRIVILEGES</p>
          <p>- Full Tuition Waiver</p>
          <p>- Exemption from Miscellaneous Fees</p>
          <p>- Free Textbooks and School Supplies</p>
          <p>- Complimentary Seals on School Days</p>
          <p>- Transportation or Lodging Allowance</p>
          <p>- Free School Uniforms</p>
        </div>
      </div>
    `;
    convoContainer.scrollTo(0, convoContainer.scrollHeight);
    }, 1000);

    yesNoFunc();
  }
}

function programsOfferedFunc() {
    if (programsButton) {
      scholarshipButton = false;
      enrollButton = false;
      programsButton = false;
      setTimeout(() => {
        convoContainer.innerHTML += `
        <div class="bot-convo-grid">
          <div class="droid-container">
            <div class="droid-profile">
              <i class="fa-solid fa-robot droid"></i>
            </div>
        </div>
          <div class="droid-chat">
            <p>To view the programs offered in UdD<a href="">click here</a></p>
          </div>
        </div>
      `;
      convoContainer.scrollTo(0, convoContainer.scrollHeight);
      }, 1000);

      yesNoFunc();
    }
  }

function yesNoFunc() {
  yesButton = true;
  noButton = true;
  setTimeout(() => {
    convoContainer.innerHTML += `
    <div class="bot-convo-grid">
      <div class="droid-container">
        <div class="droid-profile">
          <i class="fa-solid fa-robot droid"></i>
        </div>
    </div>
      <div class="droid-chat">
        <p>any more concerns?</p>
        <button onclick="yesFunc()" class="concerns-yes">yes</button>
        <button onclick="noFunc()" class="concerns-no">no</button>
      </div>
    </div>
  `;
  convoContainer.scrollTo(0, convoContainer.scrollHeight);
  }, 1000);
}
  

function enrollmentFunc() {
  if (enrollButton) {
    scholarshipButton = false;
    programsButton = false;
    enrollButton = false;
    setTimeout(() => {
      convoContainer.innerHTML += `
      <div class="bot-convo-grid">
        <div class="droid-container">
          <div class="droid-profile">
            <i class="fa-solid fa-robot droid"></i>
          </div>
      </div>
        <div class="droid-chat">
          <p>- Grade 12 Report Card</p>
          <p>- Good Moral Certificate</p>
          <p>- Certificate of Award (to avail merit discount)</p>
          <p>- Transfer Credentials (for transferees only)</p>
        </div>
      </div>
    `;
    convoContainer.scrollTo(0, convoContainer.scrollHeight);
    }, 1000);

    yesNoFunc();
  }
}

function noFunc() {
  if (noButton) {
    sentAvailability = true;
    sendButton.style.color = 'rgb(39, 107, 242)';
    userInputElement.disabled = false;
    convoContainer.innerHTML = `
    <div class="droid-online-container">
      <i class="fa-solid fa-robot"></i>
      <p>Say Hi to UdDroid!</p>
    </div>
    `;
  }
}

sendButton.addEventListener('click', () => {
  if (sentAvailability) {
    convoContainer.innerHTML = '';
    sendFunction();
    sendButton.style.color = 'lightgray';
    userInputElement.disabled = true;
    sentAvailability = false;
  }
  
});

userInputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (sentAvailability) {
      if (userInputElement.value.trim() === '') {
        return;
      }
      sendFunction();
      sendButton.style.color = 'lightgray';
      sentAvailability = false;
      userInputElement.disabled = true;
    }
  }

});

//CHATBOT